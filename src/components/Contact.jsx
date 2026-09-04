import { useTranslation } from 'react-i18next'
import Section from './Section'
import { socials } from '../data/socials'

export default function Contact() {
  const { t } = useTranslation()
  return (
    <Section id="contact" title={t('contact.title')}>
      <p className="max-w-[60ch] text-lg text-ink-2">{t('contact.intro')}</p>
      <p className="text-ink-2">{t('contact.location')}</p>

      <p className="mt-8 mb-0">
        <a href={socials.emailHref} className="text-title font-medium break-all">
          {socials.email}
        </a>
      </p>

      <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
        <a href={socials.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={socials.cv} download>
          {t('contact.downloadCV')}
        </a>
      </p>
    </Section>
  )
}
