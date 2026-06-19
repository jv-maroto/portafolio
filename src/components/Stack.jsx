import { useTranslation } from 'react-i18next'
import Section from './Section'
import { stackCategories } from '../data/stack'
import { cn } from '../lib/cn'

export default function Stack() {
  const { t } = useTranslation()

  return (
    <Section
      id="stack"
      kicker={t('stack.kicker')}
      title={t('stack.title')}
      subtitle={t('stack.subtitle')}
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stackCategories.map((cat, idx) => (
          <div
            key={cat.id}
            style={{ animationDelay: `${idx * 60}ms` }}
            className="glass lift reveal group relative overflow-hidden rounded-[22px] p-5"
          >
            <div className="flex items-center justify-between">
              <p className="text-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--fg-dim)]">
                {cat.glyph} / {String(idx + 1).padStart(2, '0')}
              </p>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[color:var(--accent)]" />
            </div>
            <h3 className="text-display mt-4 text-lg text-[color:var(--fg-bright)]">
              {t(`stack.categories.${cat.id}`)}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className={cn(
                    'text-mono rounded-full border border-[color:var(--border-glass)] bg-[color:var(--bg-2)]/40 px-2.5 py-0.5 text-[10.5px] uppercase tracking-wider text-[color:var(--fg-mid)]',
                    'transition-colors group-hover:border-[color:var(--accent)]/30',
                  )}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
