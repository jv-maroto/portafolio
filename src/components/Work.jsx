import { useTranslation } from 'react-i18next'
import Section from './Section'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Work() {
  const { t } = useTranslation()

  return (
    <Section
      id="work"
      kicker={t('work.kicker')}
      title={t('work.title')}
      subtitle={t('work.subtitle')}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[minmax(180px,auto)]">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </Section>
  )
}
