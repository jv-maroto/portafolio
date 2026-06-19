import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Moon, Sun, Languages, Menu, X } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const SECTIONS = ['about', 'projects', 'stack', 'experience', 'contact']

export default function Header() {
  const { t, i18n } = useTranslation()
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // Lock scroll while mobile menu is open
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const toggleLang = () => {
    const next = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(next)
  }

  const close = () => setMobileOpen(false)

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'backdrop-blur-xl bg-white/70 dark:bg-neutral-950/70 border-b border-neutral-200/60 dark:border-white/10'
          : 'bg-transparent border-b border-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2 font-bold tracking-tight"
          aria-label="Javier Maroto - Home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-bold text-white shadow-lg shadow-brand-500/20 transition-transform group-hover:scale-105">
            JM
          </span>
          <span className="hidden text-sm font-semibold text-neutral-900 dark:text-neutral-100 sm:inline">
            Javier Maroto
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:text-brand-600 dark:text-neutral-300 dark:hover:text-brand-400"
            >
              {t(`nav.${id}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleLang}
            className="flex items-center gap-1.5 rounded-md border border-neutral-200/70 px-2.5 py-1.5 text-xs font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-white/10 dark:text-neutral-200 dark:hover:bg-white/5"
            aria-label={t('nav.toggleLang')}
            title={t('nav.toggleLang')}
          >
            <Languages size={14} />
            <span className="uppercase">{i18n.language}</span>
          </button>

          <button
            type="button"
            onClick={toggle}
            className="rounded-md border border-neutral-200/70 p-2 text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-white/10 dark:text-neutral-200 dark:hover:bg-white/5"
            aria-label={t('nav.toggleTheme')}
            title={t('nav.toggleTheme')}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="ml-1 rounded-md border border-neutral-200/70 p-2 text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-white/10 dark:text-neutral-200 dark:hover:bg-white/5 md:hidden"
            aria-label={t('nav.menu')}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-neutral-200/60 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/90 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {SECTIONS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={close}
                className="rounded-md px-3 py-2 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-white/5"
              >
                {t(`nav.${id}`)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
