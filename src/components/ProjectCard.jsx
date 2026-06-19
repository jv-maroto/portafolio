import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { GithubIcon } from './icons/BrandIcons'
import { useTilt } from '../hooks/useTilt'
import { cn } from '../lib/cn'

const SPAN_CLASSES = {
  big:    'sm:col-span-2 lg:col-span-8 lg:row-span-2',
  tall:   'lg:col-span-4 lg:row-span-2',
  wide:   'sm:col-span-2 lg:col-span-8',
  normal: 'lg:col-span-4',
}

export default function ProjectCard({ project, index, layoutHint }) {
  const { t } = useTranslation()
  const [imgFailed, setImgFailed] = useState(false)
  const tilt = useTilt({ max: 6, scale: 1.0 })

  const span = SPAN_CLASSES[layoutHint || project.span] || SPAN_CLASSES.normal
  const isBig = (layoutHint || project.span) === 'big'

  const src = imgFailed ? project.fallback : project.image

  return (
    <article
      ref={tilt.ref}
      onMouseMove={tilt.onMove}
      onMouseLeave={tilt.onLeave}
      style={{ animationDelay: `${Math.min(index, 6) * 60}ms` }}
      className={cn(
        'glass glass-edge lift tilt group relative isolate overflow-hidden rounded-[28px] reveal',
        span,
      )}
    >
      <a
        href={project.live || project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t(`work.list.${project.id}.title`)}
        className="block h-full focus:outline-none"
      >
        {/* Media */}
        <div
          className={cn(
            'relative overflow-hidden border-b border-[color:var(--border-glass)]',
            isBig ? 'aspect-[16/10]' : 'aspect-[16/9]',
          )}
        >
          <div className="absolute inset-0 bg-[color:var(--bg-2)]" />
          {src && (
            <img
              src={src}
              alt={t(`work.list.${project.id}.title`)}
              loading="lazy"
              decoding="async"
              onError={() => setImgFailed(true)}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          )}
          {/* dark vignette so the badges/text always read */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/10" />

          {/* Tag chip */}
          <span className="absolute left-4 top-4 text-mono inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-widest text-white/85 backdrop-blur">
            <span aria-hidden="true" className="text-[color:var(--color-accent-300)]">{project.glyph}</span>
            {project.tag}
          </span>

          {/* Open arrow */}
          <span className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/85 backdrop-blur transition-transform group-hover:rotate-[-12deg]">
            <ArrowUpRight />
          </span>
        </div>

        {/* Body */}
        <div className={cn('flex flex-col gap-4 p-5 sm:p-6', isBig && 'sm:p-7')}>
          <div>
            <h3 className={cn('text-display text-[color:var(--fg-bright)]', isBig ? 'text-3xl' : 'text-xl')}>
              {t(`work.list.${project.id}.title`)}
            </h3>
            <p className={cn('mt-2 text-[color:var(--fg-mid)]', isBig ? 'text-base leading-relaxed' : 'text-sm leading-relaxed line-clamp-2')}>
              {t(`work.list.${project.id}.description`)}
            </p>
          </div>

          <ul className="mt-auto flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="text-mono rounded-full border border-[color:var(--border-glass)] bg-[color:var(--bg-2)]/50 px-2.5 py-0.5 text-[10.5px] uppercase tracking-wider text-[color:var(--fg-mid)]"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-3 border-t border-[color:var(--border-glass)] pt-4">
            <span
              role="button"
              tabIndex={-1}
              className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--bg-2)] px-3 py-1.5 text-mono text-[11px] uppercase tracking-widest text-[color:var(--fg-mid)] transition-colors group-hover:text-[color:var(--fg-bright)]"
            >
              <GithubIcon size={12} />
              {t('work.viewCode')}
            </span>
            {project.live && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--accent)]/15 px-3 py-1.5 text-mono text-[11px] uppercase tracking-widest text-[color:var(--accent)]">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                {t('work.liveDemo')}
              </span>
            )}
          </div>
        </div>
      </a>
    </article>
  )
}

function ArrowUpRight() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  )
}
