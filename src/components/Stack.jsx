import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Section from './Section'
import { stackCategories } from '../data/stack'

export default function Stack() {
  const { t } = useTranslation()
  return (
    <Section id="stack" kicker={t('stack.kicker')} title={t('stack.title')}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stackCategories.map((cat, idx) => {
          const Icon = cat.icon
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: (idx % 4) * 0.05 }}
              className="rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-brand-400/50 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-400/60"
            >
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-500/15 to-accent-500/15 text-brand-600 dark:text-brand-400">
                  <Icon size={16} />
                </span>
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                  {t(`stack.categories.${cat.id}`)}
                </h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-neutral-200/70 bg-neutral-50 px-2 py-0.5 font-mono text-[11px] text-neutral-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
