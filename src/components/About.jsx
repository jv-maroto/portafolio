import { useTranslation } from 'react-i18next'
import Section from './Section'

const TIMELINE = [
  { id: 'sagrera', status: 'current', icon: '◆' },
  { id: 'daw',     status: 'completed', icon: '◇' },
  { id: 'ciso',    status: 'completed', icon: '✦' },
  { id: 'asir',    status: 'completed', icon: '▲' },
]

export default function About() {
  const { t } = useTranslation()

  return (
    <Section
      id="about"
      kicker={t('about.kicker')}
      title={t('about.title')}
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* Left: portrait + paragraph */}
        <div className="glass rounded-[28px] p-6 sm:p-8 lg:col-span-5 reveal">
          <Avatar />
          <p className="mt-6 text-base leading-relaxed text-[color:var(--fg-mid)]">
            {t('about.paragraph')}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 text-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--fg-dim)]">
            <div>
              <p className="text-[color:var(--fg-dim)]">{t('about.languages')}</p>
              <p className="mt-1 text-sm normal-case tracking-normal text-[color:var(--fg-bright)]">
                {t('about.spanish')}
              </p>
              <p className="text-sm normal-case tracking-normal text-[color:var(--fg-bright)]">
                {t('about.english')}
              </p>
            </div>
            <div>
              <p>Location</p>
              <p className="mt-1 text-sm normal-case tracking-normal text-[color:var(--fg-bright)]">
                Tenerife, ES
              </p>
              <p className="text-sm normal-case tracking-normal text-[color:var(--fg-mid)]">
                28.4636° N
              </p>
            </div>
          </div>
        </div>

        {/* Right: timeline */}
        <div className="lg:col-span-7">
          <ol className="space-y-3">
            {TIMELINE.map((item, idx) => (
              <li
                key={item.id}
                style={{ animationDelay: `${idx * 80}ms` }}
                className="glass lift reveal flex items-start gap-4 rounded-[22px] p-5 sm:p-6"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[color:var(--border-glass-strong)] bg-[color:var(--bg-2)] text-[color:var(--accent)]">
                  <span aria-hidden="true" className="text-lg">{item.icon}</span>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-display text-lg text-[color:var(--fg-bright)]">
                      {t(`experience.items.${item.id}.role`)}
                    </h3>
                    <StatusPill status={item.status} label={t(`experience.${item.status}`)} />
                  </div>
                  <p className="mt-1 text-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--fg-dim)]">
                    {t(`experience.items.${item.id}.company`)}
                    <span className="mx-2 text-[color:var(--fg-muted)]">·</span>
                    {t(`experience.items.${item.id}.period`)}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--fg-mid)]">
                    {t(`experience.items.${item.id}.description`)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}

function StatusPill({ status, label }) {
  return (
    <span
      className={`text-mono inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10.5px] uppercase tracking-widest ${
        status === 'current'
          ? 'bg-[color:var(--color-success)]/15 text-[color:var(--color-success)]'
          : 'bg-[color:var(--bg-2)] text-[color:var(--fg-dim)]'
      }`}
    >
      {status === 'current' && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-success)]" />}
      {label}
    </span>
  )
}

function Avatar() {
  // Abstract glyph "JM" + radial pattern. No selfie required.
  return (
    <div className="relative grid h-32 w-32 place-items-center rounded-3xl border border-[color:var(--border-glass-strong)] bg-[color:var(--bg-2)]">
      <svg viewBox="0 0 120 120" className="h-32 w-32" aria-hidden="true">
        <defs>
          <radialGradient id="avatarRadial" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
          <pattern id="avatarGrid" width="6" height="6" patternUnits="userSpaceOnUse">
            <path d="M 6 0 L 0 0 0 6" fill="none" stroke="currentColor" strokeOpacity="0.06" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="120" height="120" fill="url(#avatarGrid)" className="text-[color:var(--fg-bright)]" />
        <circle cx="60" cy="60" r="52" fill="url(#avatarRadial)" />
        <g stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-[color:var(--fg-bright)]">
          <path d="M40 38 V70 a8 8 0 0 1 -8 8" />
          <path d="M58 78 V40 l10 18 10 -18 v38" />
        </g>
        <circle cx="60" cy="60" r="58" fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="0.6" className="text-[color:var(--accent)]" />
      </svg>
    </div>
  )
}
