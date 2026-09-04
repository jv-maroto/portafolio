import { useTranslation } from 'react-i18next'

export default function ProjectRow({ project }) {
  const { t } = useTranslation()
  const base = `projects.list.${project.id}`

  return (
    <li className="grid gap-1 py-5 sm:grid-cols-[180px_1fr] sm:gap-6">
      <h4 className="m-0 text-base font-medium">
        {project.live || project.github ? (
          <a href={project.live || project.github} target="_blank" rel="noopener noreferrer">
            {t(`${base}.title`)}
          </a>
        ) : (
          t(`${base}.title`)
        )}
      </h4>
      <div>
        <p className="m-0 text-ink-2">{t(`${base}.description`)}</p>
        <p className="mt-1 mb-0 text-sm text-ink-3">
          {project.stack.join(', ')}
          {project.wip && ` · ${t('projects.wip')}`}
        </p>
      </div>
    </li>
  )
}
