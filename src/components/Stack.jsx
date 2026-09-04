import { useTranslation } from 'react-i18next'
import Section from './Section'
import { stackCategories } from '../data/stack'

export default function Stack() {
  const { t } = useTranslation()
  return (
    <Section id="stack" title={t('stack.title')} band>
      <dl className="m-0 grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {stackCategories.map((cat) => (
          <div key={cat.id}>
            <dt className="font-medium">{t(`stack.categories.${cat.id}`)}</dt>
            <dd className="m-0 mt-1 text-ink-2">{cat.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
