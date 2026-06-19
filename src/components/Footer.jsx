import { useTranslation } from 'react-i18next'
import { Mail, ArrowDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons'
import { socials } from '../data/socials'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50/50 py-10 dark:border-white/10 dark:bg-white/[0.02]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:px-6 sm:flex-row lg:px-8">
        <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-brand-500 to-accent-500 text-xs font-bold text-white">
            JM
          </span>
          <div>
            <p className="font-medium text-neutral-800 dark:text-neutral-200">
              &copy; {year} Javier Maroto. {t('footer.rights')}
            </p>
            <p className="mt-0.5 text-xs">{t('footer.built')}</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-200/60 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-white/5 dark:hover:text-white"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-200/60 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-white/5 dark:hover:text-white"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={socials.emailHref}
            aria-label="Email"
            className="rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-200/60 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-white/5 dark:hover:text-white"
          >
            <Mail size={18} />
          </a>
          <a
            href="#top"
            aria-label={t('footer.scrollTop')}
            className="ml-2 rounded-lg border border-neutral-200 p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:border-white/10 dark:text-neutral-400 dark:hover:bg-white/5 dark:hover:text-white"
          >
            <ArrowDown size={16} className="rotate-180" />
          </a>
        </div>
      </div>
    </footer>
  )
}
