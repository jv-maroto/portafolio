import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()
  return (
    <footer className="mx-auto flex max-w-[1040px] flex-wrap justify-between gap-4 px-6 py-10 text-sm text-ink-3">
      <p className="m-0">&copy; {year} Javier Maroto</p>
      <a href="#top">{t('footer.scrollTop')}</a>
    </footer>
  )
}
