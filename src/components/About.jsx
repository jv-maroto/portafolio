import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import Section from './Section'

const STAT_KEYS = ['projects', 'stacks', 'sysadmin', 'ai']

export default function About() {
  const { t } = useTranslation()

  return (
    <Section id="about" kicker={t('about.kicker')} title={t('about.title')}>
      <div className="grid gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3"
        >
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {t('about.paragraph')}
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-300">
            <MapPin size={16} />
            {t('about.availability')}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 lg:col-span-2">
          {STAT_KEYS.map((key, idx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
              className="rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-brand-400/50 dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-400/60"
            >
              <p className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                {t(`about.stats.${key}.value`)}
              </p>
              <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400 sm:text-sm">
                {t(`about.stats.${key}.label`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
