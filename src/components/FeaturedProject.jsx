import { useTranslation } from 'react-i18next'

const CASE_KEYS = ['problem', 'decision', 'result']

export default function FeaturedProject({ project }) {
  const { t } = useTranslation()
  const base = `projects.list.${project.id}`
  const title = t(`${base}.title`)
  const image = project.image
  const caseStudy = CASE_KEYS.map((k) => [k, t(`${base}.case.${k}`, { defaultValue: '' })]).filter(
    ([, text]) => text
  )

  return (
    <article className="grid gap-8 border-t border-rule py-12 first:border-t-0 first:pt-0 md:grid-cols-2 md:gap-12">
      <a href={project.live || project.github} target="_blank" rel="noopener noreferrer" className="block no-underline">
        <img
          src={image}
          alt={t(`${base}.alt`, { defaultValue: title })}
          width={project.width}
          height={project.height}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full border border-rule"
        />
      </a>

      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-ink-2">{t(`${base}.description`)}</p>

        {caseStudy.map(([key, text]) => (
          <p key={key} className="mt-4 text-ink-2">
            <span className="font-medium text-ink">{t(`projects.case.${key}`)}. </span>
            {text}
          </p>
        ))}

        <p className="mt-4 text-sm text-ink-3">{project.stack.join(', ')}</p>

        <p className="mt-4 flex flex-wrap gap-x-5 text-sm">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            {t('projects.viewCode')}
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              {t('projects.liveDemo')}
            </a>
          )}
        </p>
      </div>
    </article>
  )
}
