import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const BASE = import.meta.env.BASE_URL
const GITHUB_EVENTS = 'https://api.github.com/users/jv-maroto/events/public'

// El unico elemento de la pagina que se mueve y cambia: datos reales, en mono
// porque son datos de maquina. Lo que no se sabe se dice, no se inventa.

function relative(dateStr, lang) {
  if (!dateStr) return null
  const diff = (Date.now() - new Date(dateStr).getTime()) / 1000
  const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' })
  if (diff < 3600) return rtf.format(-Math.round(diff / 60), 'minute')
  if (diff < 86400) return rtf.format(-Math.round(diff / 3600), 'hour')
  return rtf.format(-Math.round(diff / 86400), 'day')
}

function useNowData() {
  const [now, setNow] = useState(null)
  const [push, setPush] = useState(null)

  useEffect(() => {
    fetch(`${BASE}now.json`)
      .then((r) => (r.ok ? r.json() : null))
      .then(setNow)
      .catch(() => setNow(null))

    fetch(GITHUB_EVENTS)
      .then((r) => (r.ok ? r.json() : []))
      .then((events) => {
        const last = Array.isArray(events) ? events.find((e) => e.type === 'PushEvent') : null
        if (last) setPush({ repo: last.repo.name.split('/')[1], at: last.created_at })
      })
      .catch(() => setPush(null))
  }, [])

  return { now, push }
}

export default function NowBoard() {
  const { t, i18n } = useTranslation()
  const { now, push } = useNowData()
  const lang = i18n.language
  const none = t('now.noData')

  const rows = [
    [t('now.server'), now?.server?.host ?? none],
    [t('now.uptime'), now?.server?.uptime ?? none],
    [t('now.containers'), now?.server?.containers ?? none],
    [
      t('now.lastPush'),
      push ? `${push.repo}, ${relative(push.at, lang)}` : none,
    ],
    [t('now.learning'), now?.learning?.[lang] ?? now?.learning?.es ?? none],
  ]

  return (
    <aside aria-labelledby="now-title" className="board-enter bg-ink p-6 font-mono text-sm text-paper">
      <h2 id="now-title" className="mb-5 text-sm font-medium">
        {t('now.title')}
      </h2>
      <dl className="grid grid-cols-[max-content_1fr] gap-x-5 gap-y-2">
        {rows.map(([label, value]) => (
          <div key={label} className="contents">
            <dt className="opacity-60">{label}</dt>
            <dd className="m-0 break-words">{value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-5 mb-0 text-xs opacity-60">
        {t('now.updated')}{' '}
        {now?.updated ? relative(now.updated, lang) : none}
      </p>
    </aside>
  )
}
