import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Download, ExternalLink } from 'lucide-react'
import Section from './Section'
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons'
import { socials } from '../data/socials'

const cardClass =
  'flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 transition-colors hover:border-brand-400/50 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-400/60'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <Section id="contact" kicker={t('contact.kicker')} title={t('contact.title')}>
      <div className="grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            {t('contact.intro')}
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
            <MapPin size={16} className="text-brand-500" />
            {t('contact.location')}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={socials.cv}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-500 to-accent-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download size={16} />
              {t('contact.downloadCV')}
            </a>
            <a
              href={socials.emailHref}
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              <Mail size={16} />
              {t('contact.sendEmail')}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid gap-3 sm:grid-cols-2 lg:col-span-3"
        >
          <a href={socials.emailHref} className={cardClass}>
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400">
              <Mail size={18} />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                {t('contact.email')}
              </p>
              <p className="truncate text-sm font-semibold text-neutral-900 dark:text-white">
                {socials.email}
              </p>
            </div>
          </a>

          <a href={socials.phoneHref} className={cardClass}>
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent-500/10 text-accent-500">
              <Phone size={18} />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                {t('contact.phone')}
              </p>
              <p className="truncate text-sm font-semibold text-neutral-900 dark:text-white">
                {socials.phone}
              </p>
            </div>
          </a>

          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={cardClass}
          >
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#0a66c2]/15 text-[#0a66c2] dark:text-[#4ea2ec]">
              <LinkedinIcon size={18} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                {t('contact.linkedin')}
              </p>
              <p className="truncate text-sm font-semibold text-neutral-900 dark:text-white">
                javier-maroto-domínguez
              </p>
            </div>
            <ExternalLink size={14} className="text-neutral-400" />
          </a>

          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cardClass}
          >
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-neutral-900/10 text-neutral-900 dark:bg-white/10 dark:text-white">
              <GithubIcon size={18} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                {t('contact.github')}
              </p>
              <p className="truncate text-sm font-semibold text-neutral-900 dark:text-white">
                jv-maroto
              </p>
            </div>
            <ExternalLink size={14} className="text-neutral-400" />
          </a>
        </motion.div>
      </div>
    </Section>
  )
}
