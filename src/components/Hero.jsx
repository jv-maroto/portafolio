import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { socials } from '../data/socials'
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons'
import { useClock } from '../hooks/useClock'
import { useMagnetic } from '../hooks/useMagnetic'
import { cn } from '../lib/cn'

const STAT_KEYS = ['production', 'stacks', 'sysadmin', 'ai']

export default function Hero() {
  const { t } = useTranslation()
  const clock = useClock('Europe/Madrid')
  const magneticPrimary = useMagnetic({ strength: 0.25 })

  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Bento grid: 12 columns on lg, asymmetric */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-12 lg:grid-rows-[auto_auto]">

          {/* Big tile: name + role + tagline */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass glass-edge relative overflow-hidden rounded-[28px] p-6 sm:p-8 lg:col-span-8 lg:row-span-2 lg:p-10"
          >
            <div className="flex items-center gap-3 text-mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--fg-dim)]">
              <span className="pip" aria-hidden="true" />
              <span>{t('hero.status')}</span>
            </div>

            <h1 className="text-display mt-8 text-[clamp(2.5rem,7vw,5.5rem)] text-[color:var(--fg-bright)]">
              {t('hero.name')}
            </h1>
            <p className="text-display mt-1 text-[clamp(1.4rem,3.5vw,2.4rem)] font-medium tracking-tight text-[color:var(--accent)]">
              {t('hero.role')}
            </p>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-[color:var(--fg-mid)] sm:text-lg">
              {t('hero.tagline')}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[color:var(--fg-dim)]">
              {t('hero.summary')}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                ref={magneticPrimary.ref}
                onMouseMove={magneticPrimary.onMove}
                onMouseLeave={magneticPrimary.onLeave}
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--fg-bright)] px-5 py-2.5 text-sm font-semibold text-[color:var(--bg-1)] transition-transform"
              >
                {t('hero.cta.work')}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href={socials.cv}
                download
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-glass-strong)] bg-[color:var(--bg-2)]/40 px-5 py-2.5 text-sm font-semibold text-[color:var(--fg-bright)] backdrop-blur transition-colors hover:border-[color:var(--accent)]/40"
              >
                <ArrowDown />
                {t('hero.cta.cv')}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-[color:var(--fg-mid)] transition-colors hover:text-[color:var(--fg-bright)]"
              >
                {t('hero.cta.email')}
              </a>
            </div>
          </motion.div>

          {/* Availability / clock card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="glass overflow-hidden rounded-[24px] p-6 lg:col-span-4"
          >
            <div className="flex items-center justify-between text-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--fg-dim)]">
              <span>{t('hero.tz')}</span>
              <span className="text-[color:var(--fg-bright)]">{clock}</span>
            </div>
            <div className="mt-6">
              <Coordinates />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-[color:var(--fg-mid)]">
              {t('about.based')}
            </p>
          </motion.div>

          {/* Socials grid */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-3 lg:col-span-4"
          >
            <SocialTile
              href={socials.github}
              label={t('hero.social.github')}
              user="jv-maroto"
              icon={<GithubIcon size={18} />}
            />
            <SocialTile
              href={socials.linkedin}
              label={t('hero.social.linkedin')}
              user="/in/javier-maroto"
              icon={<LinkedinIcon size={18} />}
            />
            <SocialTile
              href={socials.emailHref}
              label={t('hero.social.email')}
              user="javidominguez060"
              icon={<IconMail />}
              external={false}
            />
            <SocialTile
              href="#contact"
              label={t('hero.social.schedule')}
              user="30 min"
              icon={<IconCalendar />}
              external={false}
            />
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 grid grid-cols-2 gap-3 sm:mt-4 sm:gap-4 lg:grid-cols-4"
        >
          {STAT_KEYS.map((k) => (
            <div
              key={k}
              className="glass overflow-hidden rounded-[20px] p-5"
            >
              <p className="text-display text-3xl text-[color:var(--fg-bright)] sm:text-4xl">
                {t(`hero.stats.${k}.value`)}
              </p>
              <p className="mt-1 text-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--fg-dim)]">
                {t(`hero.stats.${k}.label`)}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function SocialTile({ href, label, user, icon, external = true }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(
        'glass lift group flex flex-col justify-between rounded-[20px] p-4 transition-colors',
      )}
    >
      <div className="flex items-center justify-between">
        <span className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--border-glass)] bg-[color:var(--bg-2)]/40 text-[color:var(--fg-bright)]">
          {icon}
        </span>
        <span className="text-[color:var(--fg-dim)] transition-transform group-hover:translate-x-1 group-hover:text-[color:var(--accent)]">
          <ArrowUpRight />
        </span>
      </div>
      <div className="mt-6">
        <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--fg-dim)]">{label}</p>
        <p className="text-sm font-semibold text-[color:var(--fg-bright)]">{user}</p>
      </div>
    </a>
  )
}

function Coordinates() {
  return (
    <div className="text-mono text-[11px] leading-relaxed text-[color:var(--fg-mid)]">
      <p><span className="text-[color:var(--fg-dim)]">LAT</span>&nbsp;&nbsp;28.4636° N</p>
      <p><span className="text-[color:var(--fg-dim)]">LON</span>&nbsp;&nbsp;16.2518° W</p>
      <p><span className="text-[color:var(--fg-dim)]">CTY</span>&nbsp;&nbsp;Santa Cruz de Tenerife</p>
    </div>
  )
}

function ArrowDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4v16M5 13l7 7 7-7" />
    </svg>
  )
}
function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  )
}
function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7l9 6 9-6M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" />
      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
    </svg>
  )
}
function IconCalendar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  )
}
