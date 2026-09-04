#!/usr/bin/env bash
# Actualiza public/now.json con datos reales del servidor y lo publica.
# Pensado para un cron en la Raspberry Pi. Requiere docker y git configurados.
set -euo pipefail

REPO="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$REPO/public/now.json"
HOST="$(hostname)"
UPTIME="$(uptime -p | sed 's/^up //')"
CONTAINERS="$(docker ps -q 2>/dev/null | wc -l | tr -d ' ')"
NOW="$(date -u +%Y-%m-%dT%H:%M:%SZ)"

# Lo que se esta aprendiendo se edita a mano aqui; el resto lo mide el script.
LEARNING_ES="Scroll-driven animations y View Transitions"
LEARNING_EN="Scroll-driven animations and View Transitions"

cat > "$OUT" <<JSON
{
  "updated": "$NOW",
  "server": {
    "host": "$HOST",
    "uptime": "$UPTIME",
    "containers": $CONTAINERS
  },
  "learning": {
    "es": "$LEARNING_ES",
    "en": "$LEARNING_EN"
  }
}
JSON

cd "$REPO"
git add public/now.json
git diff --cached --quiet && exit 0
git commit -q -m "chore: actualiza now.json ($NOW)"
git push -q
