import { useTranslation } from 'react-i18next'
import { socials } from '../data/socials'
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-[color:var(--border-glass)] pt-12 pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--border-glass-strong)] bg-[color:var(--bg-2)] text-[color:var(--accent)]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 4v12a4 4 0 0 1-4 4" transform="translate(4 0)" />
                  <path d="M11 20V4l4 7 4-7v16" />
                </svg>
              </span>
              <p className="text-display text-base text-[color:var(--fg-bright)]">Javier Maroto</p>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[color:var(--fg-mid)]">
              {t('footer.built')}
            </p>
            <p className="mt-3 text-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--fg-dim)]">
              © {year} · {t('footer.rights')}
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:items-end">
            <a
              href={socials.portfolio}
              className="text-mono break-all text-[12px] uppercase tracking-[0.18em] text-[color:var(--fg-dim)] hover:text-[color:var(--accent)]"
            >
              jv-maroto.github.io/portafolio
            </a>
            <div className="flex items-center gap-1.5">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--border-glass)] text-[color:var(--fg-mid)] transition-colors hover:border-[color:var(--accent)]/40 hover:text-[color:var(--fg-bright)]"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--border-glass)] text-[color:var(--fg-mid)] transition-colors hover:border-[color:var(--accent)]/40 hover:text-[color:var(--fg-bright)]"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={socials.emailHref}
                aria-label="Email"
                className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--border-glass)] text-[color:var(--fg-mid)] transition-colors hover:border-[color:var(--accent)]/40 hover:text-[color:var(--fg-bright)]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7l9 6 9-6M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" />
                  <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
                </svg>
              </a>
              <a
                href="https://github.com/jv-maroto/portafolio"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border-glass)] px-3 py-1.5 text-mono text-[11px] uppercase tracking-widest text-[color:var(--fg-dim)] hover:border-[color:var(--accent)]/40 hover:text-[color:var(--fg-bright)]"
              >
                <GithubIcon size={12} />
                {t('footer.viewSource')}
              </a>
              <a
                href="#top"
                aria-label={t('footer.scrollTop')}
                className="ml-1 grid h-9 w-9 place-items-center rounded-full border border-[color:var(--border-glass)] text-[color:var(--fg-mid)] transition-colors hover:border-[color:var(--accent)]/40 hover:text-[color:var(--fg-bright)]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
