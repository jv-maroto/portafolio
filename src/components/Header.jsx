import { useTranslation } from 'react-i18next'
import { useTheme } from '../hooks/useTheme'

export default function Header() {
  const { t, i18n } = useTranslation()
  const { theme, toggle } = useTheme()
  const english = i18n.language === 'en'
  return (
    <header className="site-header">
      <a href="#top" className="wordmark" aria-label={t('spring.home')}>
        <span className="wordmark-kicker">{t('spring.portfolio')}</span>
        <span className="wordmark-line" aria-hidden="true" />
        <span className="wordmark-year">{new Date().getFullYear()}</span>
      </a>
      <div className="header-actions">
        <button type="button" onClick={() => i18n.changeLanguage(english ? 'es' : 'en')} className="language-control" lang={english ? 'es' : 'en'} aria-label={english ? 'Cambiar a español' : 'Switch to English'}>
          <span className={!english ? 'selected-language' : ''}>ES</span><span aria-hidden="true"> / </span><span className={english ? 'selected-language' : ''}>EN</span>
        </button>
        <button type="button" className="theme-control" onClick={toggle} aria-label={theme === 'dark' ? t('nav.themeLight') : t('nav.themeDark')} title={theme === 'dark' ? t('nav.themeLight') : t('nav.themeDark')}>
          <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
        </button>
        <a className="header-contact" href="#contact">{t('spring.letsTalk')} <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  )
}
