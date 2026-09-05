import { useTranslation } from 'react-i18next'
import { profile } from '../data/profile'
import { socials } from '../data/socials'

export default function Hero() {
  const { t, i18n } = useTranslation()
  return (
    <section className="intro" aria-labelledby="intro-title">
      <div className="intro-copy">
        <p className="eyebrow reveal">{t('spring.role')}</p>
        <h1 id="intro-title" className="reveal" style={{ '--delay': '90ms' }}>
          {t('spring.hello')}<br /><em>Javier.</em><span className="title-mark" aria-hidden="true">·</span>
        </h1>
        <p className="intro-description reveal" style={{ '--delay': '180ms' }}>{t('spring.description')}</p>
        <div className="intro-actions reveal" style={{ '--delay': '270ms' }}>
          <a className="primary-button" href="#projects">{t('hero.ctaProjects')}<span aria-hidden="true">↗</span></a>
          <a className="cv-link" href={socials.cv[i18n.language] || socials.cv.es} download>{t('contact.downloadCV')}<span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <aside className="intro-note reveal" style={{ '--delay': '330ms' }} aria-label={t('spring.atAGlance')}>
        <div className="note-heading"><span className="note-index">01 —</span><span>{t('spring.atAGlance')}</span></div>
        <p className="note-title">{t('spring.noteTitle')}</p>
        <p className="note-copy">{t('spring.noteCopy')}</p>
        <ul className="skill-tags" aria-label={t('stack.title')}>
          {profile.specialties.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
        <a className="github-signature" href={socials.github} target="_blank" rel="noopener noreferrer">
          <span className="github-dot" aria-hidden="true">●</span>@{profile.username}<span aria-hidden="true">↗</span>
        </a>
      </aside>
    </section>
  )
}
