import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import Section from './Section'

const ITEMS = [
  { id: 'sagrera', icon: Briefcase, status: 'current' },
  { id: 'daw', icon: GraduationCap, status: 'current' },
  { id: 'asir', icon: GraduationCap, status: 'completed' },
]

export default function Experience() {
  const { t } = useTranslation()
  return (
    <Section id="experience" kicker={t('experience.kicker')} title={t('experience.title')}>
      <ol className="relative border-l border-neutral-200 pl-6 dark:border-white/10 sm:pl-8">
        {ITEMS.map(({ id, icon: Icon, status }, idx) => (
          <motion.li
            key={id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="relative mb-10 last:mb-0"
          >
            <span className="absolute -left-[37px] grid h-8 w-8 place-items-center rounded-full border border-neutral-200 bg-white text-brand-600 shadow-sm dark:border-white/10 dark:bg-neutral-900 dark:text-brand-400 sm:-left-[45px]">
              <Icon size={14} />
            </span>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                {t(`experience.items.${id}.role`)}
              </h3>
              <span
                className={[
                  'rounded-md px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide',
                  status === 'current'
                    ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
                    : 'bg-neutral-200/60 text-neutral-700 dark:bg-white/5 dark:text-neutral-300',
                ].join(' ')}
              >
                {t(`experience.${status}`)}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-brand-600 dark:text-brand-400">
              {t(`experience.items.${id}.company`)}
              <span className="mx-2 text-neutral-400">·</span>
              <span className="text-neutral-500 dark:text-neutral-400">
                {t(`experience.items.${id}.period`)}
              </span>
            </p>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              {t(`experience.items.${id}.description`)}
            </p>
          </motion.li>
        ))}
      </ol>
    </Section>
  )
}
