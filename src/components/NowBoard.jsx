import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const BASE = import.meta.env.BASE_URL
// Todo sale de la API publica de GitHub (sin token, sin servidor propio)
// salvo "aprendiendo" y "jugando", que se editan en public/now.json.
// now.json se lee de la rama main en GitHub para que un cambio cuente
// sin republicar la web; el archivo local es el respaldo.
const GITHUB_REPOS = 'https://api.github.com/users/jv-maroto/repos?per_page=100'
const NOW_REMOTE = 'https://raw.githubusercontent.com/jv-maroto/portafolio/main/public/now.json'

function relative(dateStr, lang) {
  if (!dateStr) return null
  const diff = (Date.now() - new Date(dateStr).getTime()) / 1000
  const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' })
  if (diff < 3600) return rtf.format(-Math.round(diff / 60), 'minute')
  if (diff < 86400) return rtf.format(-Math.round(diff / 3600), 'hour')
  return rtf.format(-Math.round(diff / 86400), 'day')
}

function summarize(repos) {
  const own = repos.filter((r) => !r.fork)
  const langs = {}
  for (const r of own) if (r.language) langs[r.language] = (langs[r.language] || 0) + 1
  const top = Object.entries(langs).sort((a, b) => b[1] - a[1])[0]
  const last = [...own].sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))[0]
  return {
    repos: own.length,
    language: top ? `${top[0]} (${top[1]}/${own.length})` : null,
    push: last ? { repo: last.name, at: last.pushed_at } : null,
  }
}

function useNowData() {
  const [gh, setGh] = useState(null)
  const [now, setNow] = useState(null)

  useEffect(() => {
    fetch(GITHUB_REPOS)
      .then((r) => (r.ok ? r.json() : []))
      .then((repos) => setGh(Array.isArray(repos) && repos.length ? summarize(repos) : null))
      .catch(() => setGh(null))

    const local = () => fetch(`${BASE}now.json`).then((r) => (r.ok ? r.json() : null))
    fetch(NOW_REMOTE, { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : local()))
      .catch(local)
      .then(setNow)
      .catch(() => setNow(null))
  }, [])

  return { gh, now }
}

export default function NowBoard() {
  const { t, i18n } = useTranslation()
  const { gh, now } = useNowData()
  const lang = i18n.language
  const none = t('now.noData')
  const pick = (field) => now?.[field]?.[lang] ?? now?.[field]?.es ?? now?.[field] ?? none

  const rows = [
    [t('now.user'), 'jv-maroto'],
    [t('now.repos'), gh ? String(gh.repos) : none],
    [t('now.language'), gh?.language ?? none],
    [t('now.lastPush'), gh?.push ? `${gh.push.repo}, ${relative(gh.push.at, lang)}` : none],
    [t('now.learning'), pick('learning')],
  ]

  return (
    <aside aria-labelledby="now-title" className="now-board">
      <div className="now-heading"><span className="note-index">02 —</span><h2 id="now-title">{t('spring.activity')}</h2></div>
      <dl className="now-list">
          {rows.map(([label, value]) => (
            <div key={label} className="now-row">
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
      </dl>
      <p className="now-source">
        {t('now.source')}
        {now?.updated ? ` · ${t('now.updated')} ${relative(now.updated, lang)}` : ''}
      </p>
    </aside>
  )
}
