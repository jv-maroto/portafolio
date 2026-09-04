import { useTranslation } from 'react-i18next'
import Section from './Section'

export default function About() {
  const { t } = useTranslation()
  return (
    <Section id="about" title={t('about.title')}>
      <p className="max-w-[68ch] text-lg text-ink-2">{t('about.paragraph')}</p>
    </Section>
  )
}
