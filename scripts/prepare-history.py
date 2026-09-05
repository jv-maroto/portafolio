"""Prepare a separate local history branch. Never contacts or updates a remote."""
import json
import re
import shutil
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
GIT = shutil.which('git')
TARGET = 'redesign/spring-personal-history'
if not GIT:
    raise SystemExit('Git must be available on PATH.')


def git(*args, data=None):
    return subprocess.run([GIT, '-C', str(ROOT), *args], input=data, stdout=subprocess.PIPE,
                          stderr=subprocess.PIPE, check=True).stdout


if git('status', '--porcelain').strip():
    raise SystemExit('Commit the reviewed source before preparing history.')
if git('branch', '--show-current').strip() != b'redesign/spring-portfolio':
    raise SystemExit('Unexpected source branch.')
backup = ROOT / '.git' / 'before-personal-history.bundle'
report_path = ROOT / '.git' / 'personal-history-report.json'
if backup.exists() or report_path.exists():
    raise SystemExit('An earlier preparation exists; inspect it instead of overwriting.')
if subprocess.run([GIT, '-C', str(ROOT), 'show-ref', '--verify', '--quiet', f'refs/heads/{TARGET}']).returncode == 0:
    raise SystemExit('Target branch already exists.')

old_head = git('rev-parse', 'HEAD').decode().strip()
remote_head = git('rev-parse', 'origin/main').decode().strip()
commits = git('rev-list', '--reverse', '--topo-order', 'HEAD').decode().splitlines()
allowed_emails = {b'javidominguez060@gmail.com', b'jv-maroto@users.noreply.github.com'}
for commit in commits:
    if git('show', '-s', '--format=%ae', commit).strip() not in allowed_emails:
        raise SystemExit(f'Unexpected primary author in {commit}; no attribution reassignment permitted.')

git('bundle', 'create', str(backup), '--all')
git('bundle', 'verify', str(backup))
mapping = {}
removed = 0
rewritten = 0
for commit in commits:
    raw = git('cat-file', 'commit', commit)
    header, message = raw.split(b'\n\n', 1)
    new_message, n = re.subn(rb'(?im)^Co-Authored-By:[^\n]*(?:\n|$)', b'', message)
    removed += n
    if n:
        new_message = new_message.rstrip() + b'\n'
    groups = []
    for line in header.split(b'\n'):
        if line.startswith(b' '):
            groups[-1] += b'\n' + line
        else:
            groups.append(line)
    new_groups = []
    changed_parent = False
    for group in groups:
        if group.startswith(b'parent '):
            parent = group[7:].decode()
            replacement = mapping[parent]
            changed_parent |= replacement != parent
            group = b'parent ' + replacement.encode()
        new_groups.append(group)
    if n or changed_parent:
        # Signatures cover original object bytes, which remain in the backup.
        new_groups = [g for g in new_groups if not g.startswith((b'gpgsig ', b'gpgsig-sha256 ', b'mergetag '))]
    new_raw = b'\n'.join(new_groups) + b'\n\n' + new_message
    new_commit = commit if new_raw == raw else git('hash-object', '-t', 'commit', '-w', '--stdin', data=new_raw).decode().strip()
    assert git('show', '-s', '--format=%T', new_commit) == git('show', '-s', '--format=%T', commit)
    mapping[commit] = new_commit
    rewritten += new_commit != commit

new_head = mapping[old_head]
assert git('rev-list', '--count', old_head) == git('rev-list', '--count', new_head)
assert not re.search(rb'(?im)^Co-Authored-By:', git('log', new_head, '--format=%B'))
git('update-ref', f'refs/heads/{TARGET}', new_head, '0' * 40)
git('switch', TARGET)
report = {
    'original_remote_main': remote_head,
    'source_branch': 'redesign/spring-portfolio',
    'original_local_head': old_head,
    'prepared_branch': TARGET,
    'prepared_head': new_head,
    'commits': len(commits),
    'rewritten_commits': rewritten,
    'removed_coauthor_trailers': removed,
    'all_commit_trees_preserved': True,
    'backup_bundle': str(backup),
    'remote_modified': False,
}
report_path.write_text(json.dumps(report, indent=2) + '\n', encoding='utf-8')
print(json.dumps(report, indent=2))
