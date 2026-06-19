import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { GithubIcon } from './icons/BrandIcons'
import { useTheme } from '../hooks/useTheme'

export default function ProjectCard({ project, index }) {
  const { t } = useTranslation()
  const { isDark } = useTheme()

  const image = isDark && project.imageDark ? project.imageDark : project.image

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: Math.min(index, 5) * 0.05 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/50 hover:shadow-xl hover:shadow-brand-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-400/60 dark:hover:shadow-brand-500/5"
    >
      <a
        href={project.live || project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t(`projects.list.${project.id}.title`)}
        className="relative block aspect-[16/9] overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60 transition-opacity group-hover:opacity-80`}
        />
        <img
          src={image}
          alt={t(`projects.list.${project.id}.title`)}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-neutral-900 opacity-0 backdrop-blur transition-all group-hover:opacity-100 dark:bg-neutral-900/80 dark:text-white">
          <ArrowUpRight size={16} />
        </span>
      </a>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
          {t(`projects.list.${project.id}.title`)}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">
          {t(`projects.list.${project.id}.description`)}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-neutral-200 bg-neutral-50 px-2 py-0.5 font-mono text-[11px] font-medium text-neutral-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-2 border-t border-neutral-200 pt-4 dark:border-white/10">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-white/5"
          >
            <GithubIcon size={14} />
            {t('projects.viewCode')}
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-brand-500/10 px-2.5 py-1.5 text-xs font-semibold text-brand-700 transition-colors hover:bg-brand-500/20 dark:text-brand-300"
            >
              <ExternalLink size={14} />
              {t('projects.liveDemo')}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
