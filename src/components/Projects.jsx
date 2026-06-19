import { useTranslation } from 'react-i18next'
import Section from './Section'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  const { t } = useTranslation()
  return (
    <Section id="projects" kicker={t('projects.kicker')} title={t('projects.title')}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <ProjectCard key={p.id} project={p} index={idx} />
        ))}
      </div>
    </Section>
  )
}
