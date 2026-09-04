import { useTranslation } from 'react-i18next'
import Section from './Section'
import { homelab } from '../data/homelab'

// Lo que corre en casa. Es la parte mas "friki" del sitio y tambien la que
// mas dice de como opera: cada servicio es una decision de infraestructura.

export default function Homelab() {
  const { t } = useTranslation()
  return (
    <Section id="homelab" title={t('homelab.title')} wide>
      <p className="max-w-[68ch] text-lg text-ink-2">{t('homelab.intro')}</p>

      <dl className="m-0 mt-10 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {homelab.map((s) => (
          <div key={s.id} className="border-t border-rule pt-3">
            <dt className="font-mono text-sm">{s.name}</dt>
            <dd className="m-0 mt-1 text-ink-2">{t(`homelab.services.${s.id}`)}</dd>
          </div>
        ))}
      </dl>

    </Section>
  )
}
