import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../hooks/useTheme'
import { cn } from '../lib/cn'

const SECTIONS = ['work', 'about', 'stack', 'contact']

export default function Header() {
  const { t, i18n } = useTranslation()
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('work')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const ids = SECTIONS.map((s) => document.getElementById(s)).filter(Boolean)
    if (!ids.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' },
    )
    ids.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const switchLang = () => {
    const next = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(next)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={cn(
            'flex h-14 items-center justify-between rounded-full px-3 transition-all duration-500 sm:px-5',
            scrolled
              ? 'glass'
              : 'border border-transparent bg-transparent',
          )}
          style={scrolled ? { borderRadius: 9999 } : undefined}
        >
          <a
            href="#top"
            className="group flex items-center gap-2.5"
            aria-label="Javier Maroto - Home"
          >
            <Sigil />
            <span className="hidden text-sm font-semibold tracking-tight text-[color:var(--fg-bright)] sm:inline">
              Javier Maroto
            </span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {SECTIONS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                data-active={active === id}
                className="nav-item text-mono text-[12px] uppercase tracking-[0.18em] text-[color:var(--fg-dim)] transition-colors hover:text-[color:var(--fg-bright)] data-[active=true]:text-[color:var(--fg-bright)]"
              >
                {t(`nav.${id}`)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={switchLang}
              className="text-mono inline-flex h-8 w-9 items-center justify-center rounded-full border border-[color:var(--border-glass)] bg-[color:var(--bg-2)]/60 text-[10px] font-semibold uppercase tracking-widest text-[color:var(--fg-mid)] transition-colors hover:border-[color:var(--accent)]/40 hover:text-[color:var(--fg-bright)]"
              aria-label={t('nav.toggleLang')}
              title={t('nav.toggleLang')}
            >
              {i18n.language}
            </button>

            <button
              type="button"
              onClick={toggle}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--border-glass)] bg-[color:var(--bg-2)]/60 text-[color:var(--fg-mid)] transition-colors hover:border-[color:var(--accent)]/40 hover:text-[color:var(--fg-bright)]"
              aria-label={t('nav.toggleTheme')}
              title={t('nav.toggleTheme')}
            >
              {theme === 'dark' ? <IconSun /> : <IconMoon />}
            </button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--border-glass)] bg-[color:var(--bg-2)]/60 text-[color:var(--fg-mid)] transition-colors hover:text-[color:var(--fg-bright)] md:hidden"
              aria-label={t('nav.menu')}
              aria-expanded={open}
            >
              {open ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-3 max-w-6xl px-4 sm:px-6 md:hidden">
          <div className="glass overflow-hidden rounded-3xl p-2">
            <nav className="flex flex-col">
              {SECTIONS.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-mono text-xs uppercase tracking-widest text-[color:var(--fg-mid)] transition-colors hover:bg-[color:var(--bg-2)] hover:text-[color:var(--fg-bright)]"
                >
                  {t(`nav.${id}`)}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

function Sigil() {
  // Custom "JM" sigil — built with SVG strokes, no gradient mess.
  return (
    <span
      className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--border-glass-strong)] bg-[color:var(--bg-2)] text-[color:var(--accent)] transition-transform group-hover:rotate-3"
      aria-hidden="true"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 4v12a4 4 0 0 1-4 4" transform="translate(4 0)" />
        <path d="M11 20V4l4 7 4-7v16" />
      </svg>
    </span>
  )
}

function IconSun() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.95-7L16.6 6.4M7.5 16.6 6 18m0-12 1.5 1.4M16.6 17.6l1.4 1.4" />
    </svg>
  )
}
function IconMoon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
    </svg>
  )
}
function IconMenu() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}
function IconClose() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}
