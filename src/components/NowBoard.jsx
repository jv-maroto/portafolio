import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const BASE = import.meta.env.BASE_URL
const GITHUB_EVENTS = 'https://api.github.com/users/jv-maroto/events/public'

// Estilo neofetch: logo ASCII a la izquierda, clave/valor a la derecha.
// Datos reales de now.json y de la API publica de GitHub. Lo que no se
// sabe se dice, no se inventa.

const LOGO = String.raw`
     ██╗███╗   ███╗
     ██║████╗ ████║
     ██║██╔████╔██║
██   ██║██║╚██╔╝██║
╚█████╔╝██║ ╚═╝ ██║
 ╚════╝ ╚═╝     ╚═╝`.trim()

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
  const pick = (field) => now?.[field]?.[lang] ?? now?.[field]?.es ?? now?.[field] ?? none

  const rows = [
    [t('now.host'), now?.server?.host ?? none],
    [t('now.os'), now?.server?.os ?? none],
    [t('now.uptime'), now?.server?.uptime ?? none],
    [t('now.containers'), now?.server?.containers ?? none],
    [t('now.lastPush'), push ? `${push.repo}, ${relative(push.at, lang)}` : none],
    [t('now.learning'), pick('learning')],
    [t('now.playing'), pick('playing')],
  ]

  return (
    <aside aria-labelledby="now-title" className="board-enter bg-board p-6 font-mono text-[13px] leading-relaxed text-board-ink">
      <h2 id="now-title" className="m-0 mb-4 text-[13px] font-medium">
        <span className="opacity-75">javier@pi5</span> ~ $ neofetch
      </h2>
      <div className="flex flex-wrap gap-x-7 gap-y-4">
        <pre aria-hidden="true" className="m-0 text-[11px] leading-[1.15]">{LOGO}</pre>
        <dl className="m-0 grid min-w-[260px] flex-1 grid-cols-[max-content_1fr] gap-x-4 gap-y-1">
          {rows.map(([label, value]) => (
            <div key={label} className="contents">
              <dt className="opacity-75">{label}</dt>
              <dd className="m-0 min-w-0 break-words">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <p className="mt-4 mb-0 text-xs opacity-75">
        {t('now.updated')} {now?.updated ? relative(now.updated, lang) : none}
      </p>
    </aside>
  )
}
