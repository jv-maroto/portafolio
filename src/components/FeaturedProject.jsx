import { useTranslation } from 'react-i18next'

const CASE_KEYS = ['problem', 'decision', 'result']

export default function FeaturedProject({ project }) {
  const { t } = useTranslation()
  const base = `projects.list.${project.id}`
  const title = t(`${base}.title`)
  const caseStudy = CASE_KEYS.map(key => [key, t(`${base}.case.${key}`, { defaultValue: '' })]).filter(([, text]) => text)
  return (
    <article className={`project-card ${project.image ? '' : 'project-card-text'}`}>
      {project.image && <img src={project.image} alt={title} width={project.width} height={project.height} loading="lazy" decoding="async" className="project-image" />}
      <div className="project-copy">
        <div className="project-heading"><h3>{title}</h3>{project.wip && <span className="project-status">{t('projects.wip')}</span>}</div>
        <p className="text-ink-2">{t(`${base}.description`)}</p>
        <ul className="project-tags">{project.stack.map(item => <li key={item}>{item}</li>)}</ul>
        {caseStudy.length > 0 && <details className="case-study"><summary>{t('spring.caseStudy')}</summary>
          {caseStudy.map(([key, text]) => <p key={key}><strong>{t(`projects.case.${key}`)}. </strong>{text}</p>)}
        </details>}
        <div className="project-links">
          {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">{t('projects.viewCode')} ↗</a>}
          {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">{t('projects.liveDemo')} ↗</a>}
        </div>
      </div>
    </article>
  )
}
