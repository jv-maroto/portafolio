import { useTranslation } from 'react-i18next'
import { useEffect, useRef, useState } from 'react'
import Section from './Section'
import { socials } from '../data/socials'
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons'
import { cn } from '../lib/cn'

export default function Contact() {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)
  const copyTimer = useRef(0)

  useEffect(() => () => clearTimeout(copyTimer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(socials.portfolio)
      setCopied(true)
      clearTimeout(copyTimer.current)
      copyTimer.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Javier Maroto — Portfolio',
          text: 'Full-Stack Python + AI Engineer',
          url: socials.portfolio,
        })
        return
      } catch {
        // fall through to copy
      }
    }
    copy()
  }

  return (
    <Section
      id="contact"
      kicker={t('contact.kicker')}
      title={t('contact.title')}
      subtitle={t('contact.intro')}
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* CTAs column */}
        <div className="space-y-3 lg:col-span-7">
          <a
            href={socials.emailHref}
            className="glass lift glass-edge reveal group flex items-center justify-between gap-4 rounded-[24px] p-5 sm:p-6"
          >
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[color:var(--border-glass-strong)] bg-[color:var(--bg-2)] text-[color:var(--accent)]">
                <IconMail />
              </span>
              <div>
                <p className="text-mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--fg-dim)]">
                  {t('contact.email')}
                </p>
                <p className="text-display mt-1 text-lg text-[color:var(--fg-bright)]">
                  {socials.email}
                </p>
              </div>
            </div>
            <ArrowUpRight />
          </a>

          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass lift reveal group flex items-center justify-between gap-4 rounded-[24px] p-5 sm:p-6"
          >
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[color:var(--border-glass-strong)] bg-[color:var(--bg-2)] text-[color:var(--fg-bright)]">
                <LinkedinIcon size={20} />
              </span>
              <div>
                <p className="text-mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--fg-dim)]">
                  {t('contact.linkedin')}
                </p>
                <p className="text-display mt-1 text-lg text-[color:var(--fg-bright)]">
                  /in/javier-maroto-domínguez
                </p>
              </div>
            </div>
            <ArrowUpRight />
          </a>

          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass lift reveal group flex items-center justify-between gap-4 rounded-[24px] p-5 sm:p-6"
          >
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[color:var(--border-glass-strong)] bg-[color:var(--bg-2)] text-[color:var(--fg-bright)]">
                <GithubIcon size={20} />
              </span>
              <div>
                <p className="text-mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--fg-dim)]">
                  {t('contact.github')}
                </p>
                <p className="text-display mt-1 text-lg text-[color:var(--fg-bright)]">
                  jv-maroto
                </p>
              </div>
            </div>
            <ArrowUpRight />
          </a>

          <a
            href={`${socials.emailHref}&subject=Schedule%20a%20call`}
            className="glass lift reveal group flex items-center justify-between gap-4 rounded-[24px] p-5 sm:p-6"
          >
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[color:var(--border-glass-strong)] bg-[color:var(--bg-2)] text-[color:var(--color-spark-400)]">
                <IconCalendar />
              </span>
              <div>
                <p className="text-mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--fg-dim)]">
                  {t('contact.scheduleNote')}
                </p>
                <p className="text-display mt-1 text-lg text-[color:var(--fg-bright)]">
                  {t('contact.schedule')}
                </p>
              </div>
            </div>
            <ArrowUpRight />
          </a>
        </div>

        {/* Share / QR */}
        <div className="lg:col-span-5">
          <div className="glass glass-edge reveal h-full rounded-[28px] p-6 sm:p-8">
            <p className="text-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--fg-dim)]">
              {t('contact.shareTitle')}
            </p>
            <p className="mt-3 text-base leading-relaxed text-[color:var(--fg-mid)]">
              {t('contact.shareSubtitle')}
            </p>

            <div className="mt-6 grid place-items-center rounded-2xl border border-[color:var(--border-glass)] bg-white p-4">
              <QRPortfolio url={socials.portfolio} size={200} />
            </div>

            <p className={cn('mt-4 truncate text-mono text-[11px] text-[color:var(--fg-dim)]')}>
              {socials.portfolio}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={copy}
                className={cn(
                  'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-mono text-[11px] uppercase tracking-[0.18em] transition-colors',
                  copied
                    ? 'border-[color:var(--accent)] text-[color:var(--accent)]'
                    : 'border-[color:var(--border-glass-strong)] text-[color:var(--fg-mid)] hover:border-[color:var(--accent)]/40 hover:text-[color:var(--fg-bright)]',
                )}
              >
                <IconLink />
                {copied ? t('contact.shareCopied') : t('contact.shareCopy')}
              </button>
              <button
                type="button"
                onClick={share}
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--fg-bright)] px-4 py-2 text-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--bg-1)] transition-transform hover:scale-[1.02]"
              >
                <IconShare />
                {t('contact.shareSystem')}
              </button>
              <a
                href={socials.cv}
                download
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-glass-strong)] px-4 py-2 text-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--fg-mid)] hover:border-[color:var(--accent)]/40 hover:text-[color:var(--fg-bright)]"
              >
                <IconDownload />
                {t('contact.downloadCV')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ── QR with lazy-loaded qrcode lib + manual fallback ───────────────── */
function QRPortfolio({ url, size = 200 }) {
  const [svg, setSvg] = useState(null)
  const [failed, setFailed] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    import('qrcode')
      .then((mod) => {
        const QR = mod.default || mod
        return QR.toString(url, {
          type: 'svg',
          margin: 1,
          color: { dark: '#0a0a0f', light: '#ffffff' },
          errorCorrectionLevel: 'M',
        })
      })
      .then((markup) => {
        if (!cancelled) setSvg(markup)
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })
    return () => {
      cancelled = true
    }
  }, [url])

  if (failed) {
    return (
      <div
        className="grid place-items-center"
        style={{ width: size, height: size }}
      >
        <p className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--color-ink-2)]">
          QR offline · use link
        </p>
      </div>
    )
  }

  if (!svg) {
    return (
      <div
        className="animate-pulse rounded bg-[color:var(--bg-2)]"
        style={{ width: size, height: size }}
      />
    )
  }

  return (
    <div
      ref={containerRef}
      style={{ width: size, height: size }}
      // The qrcode lib returns a complete <svg> string; safe-rendering since we built it.
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}

function ArrowUpRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-[color:var(--fg-dim)] transition-transform group-hover:translate-x-1 group-hover:translate-y-[-2px] group-hover:text-[color:var(--accent)]">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  )
}
function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7l9 6 9-6M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" />
      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
    </svg>
  )
}
function IconCalendar() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  )
}
function IconLink() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 1 0-7l3-3a5 5 0 0 1 7 7l-1.5 1.5M14 11a5 5 0 0 1 0 7l-3 3a5 5 0 0 1-7-7l1.5-1.5" />
    </svg>
  )
}
function IconShare() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7M16 6l-4-4-4 4M12 2v14" />
    </svg>
  )
}
function IconDownload() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4v12M5 11l7 7 7-7M5 20h14" />
    </svg>
  )
}
