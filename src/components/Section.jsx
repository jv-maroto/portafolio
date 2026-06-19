import { cn } from '../lib/cn'

export default function Section({ id, kicker, title, subtitle, children, className = '', headingClass = '' }) {
  return (
    <section id={id} className={cn('relative py-24 sm:py-28', className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 reveal max-w-3xl">
          {kicker && (
            <div className="flex items-center gap-3 text-mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--fg-dim)]">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-[color:var(--fg-dim)]/40" />
              {kicker}
            </div>
          )}
          {title && (
            <h2
              className={cn(
                'text-display mt-5 text-[clamp(2rem,4.4vw,3.4rem)] text-[color:var(--fg-bright)]',
                headingClass,
              )}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--fg-mid)]">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
