import { useTranslation } from 'react-i18next'
import Section from './Section'

const ITEMS = [
  { id: 'sagrera', status: 'current' },
  { id: 'daw', status: 'completed' },
  { id: 'asir', status: 'completed' },
]

export default function Experience() {
  const { t } = useTranslation()
  return (
    <Section id="experience" title={t('experience.title')}>
      <ol className="m-0 list-none p-0">
        {ITEMS.map(({ id, status }) => (
          <li key={id} className="grid gap-1 py-6 first:pt-0 sm:grid-cols-[180px_1fr] sm:gap-6">
            <p className="m-0 text-sm text-ink-3">
              {t(`experience.items.${id}.period`)}
              {status === 'current' && `, ${t('experience.current')}`}
            </p>
            <div>
              <h3 className="m-0 text-base font-semibold">{t(`experience.items.${id}.role`)}</h3>
              <p className="m-0 text-ink-2">{t(`experience.items.${id}.company`)}</p>
              <p className="mt-2 mb-0 text-ink-2">{t(`experience.items.${id}.description`)}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
