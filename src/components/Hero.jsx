import { useTranslation } from 'react-i18next'
import NowBoard from './NowBoard'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="top" className="pt-14 pb-12 sm:pt-24 sm:pb-16">
      <div className="mx-auto grid max-w-[1040px] gap-12 px-6 md:grid-cols-[1.15fr_0.85fr] md:items-start">
        <div>
          <h1 className="text-display font-medium tracking-[-0.015em]">{t('hero.title')}</h1>
          <p className="mt-6 max-w-[58ch] text-lg text-ink-2">{t('hero.description')}</p>
          <p className="mt-4 text-ink-2">{t('hero.availability')}</p>
          <p className="mt-8">
            <a href="#projects" className="text-lg">
              {t('hero.ctaProjects')}
            </a>
          </p>
        </div>
        <NowBoard />
      </div>
    </section>
  )
}
