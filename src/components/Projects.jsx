import { useTranslation } from 'react-i18next'
import Section from './Section'
import FeaturedProject from './FeaturedProject'
import ProjectRow from './ProjectRow'
import { projects } from '../data/projects'

export default function Projects() {
  const { t } = useTranslation()
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <Section id="projects" title={t('projects.title')} wide>
      <div className="featured-grid">
        {featured.map((p) => (
          <FeaturedProject key={p.id} project={p} />
        ))}
      </div>

      {rest.length > 0 && (
        <div className="mt-10">
          <h3 className="mb-6 text-lg font-semibold">{t('projects.moreTitle')}</h3>
          <ul className="m-0 list-none p-0">
            {rest.map((p) => (
              <ProjectRow key={p.id} project={p} />
            ))}
          </ul>
        </div>
      )}
    </Section>
  )
}
