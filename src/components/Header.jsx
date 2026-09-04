import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../hooks/useTheme'

const SECTIONS = ['projects', 'homelab', 'experience', 'contact']

const linkClass = 'text-sm text-ink-2 hover:text-ink no-underline hover:underline'
const buttonClass =
  'cursor-pointer bg-transparent border-0 p-0 text-sm text-ink-2 hover:text-ink underline decoration-accent underline-offset-[3px]'

export default function Header() {
  const { t, i18n } = useTranslation()
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleLang = () => i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')

  return (
    <header
      className={[
        'sticky top-0 z-50 bg-paper',
        scrolled ? 'border-b border-rule' : 'border-b border-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-[1040px] flex-wrap items-center gap-x-6 gap-y-2 px-6 py-4">
        <a href="#top" className="mr-auto text-[15px] font-medium no-underline">
          Javier Maroto
        </a>

        <nav aria-label={t('nav.main')} className="flex flex-wrap items-center gap-x-5 gap-y-1">
          {SECTIONS.map((id) => (
            <a key={id} href={`#${id}`} className={linkClass}>
              {t(`nav.${id}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-x-5">
          <button type="button" onClick={toggleLang} className={buttonClass} lang={i18n.language === 'es' ? 'en' : 'es'}>
            {i18n.language === 'es' ? 'English' : 'Español'}
          </button>
          <button type="button" onClick={toggle} className={buttonClass}>
            {theme === 'dark' ? t('nav.themeLight') : t('nav.themeDark')}
          </button>
        </div>
      </div>
    </header>
  )
}
