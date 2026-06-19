import { motion } from 'framer-motion'

export default function Section({ id, kicker, title, children, className = '' }) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {kicker && (
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-500 dark:text-brand-400">
              {kicker}
            </p>
          )}
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  )
}
