import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Homelab from './components/Homelab'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Contact from './components/Contact'
import NowBoard from './components/NowBoard'
import Footer from './components/Footer'

const CHAPTERS = ['top', 'projects', 'homelab', 'experience', 'contact']
const readChapter = () => {
  const hash = window.location.hash.slice(1)
  return CHAPTERS.includes(hash) ? hash : 'top'
}

export default function App() {
  const { t } = useTranslation()
  const [chapter, setChapter] = useState(readChapter)
  const [motionPaused, setMotionPaused] = useState(false)
  const mainRef = useRef(null)
  const previousChapter = useRef(chapter)
  const index = CHAPTERS.indexOf(chapter)

  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash !== '#main') setChapter(readChapter())
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (previousChapter.current === chapter) return
    previousChapter.current = chapter
    mainRef.current?.focus({ preventScroll: true })
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [chapter])

  return (
    <div className={`portfolio ${motionPaused ? 'motion-paused' : ''}`}>
      <div className="landscape" aria-hidden="true" />
      <div className="sky-drift" aria-hidden="true" />
      <div className="landscape-shade" aria-hidden="true" />
      <a href="#main" className="skip">{t('nav.skip')}</a>
      <Header />
      <div className="portfolio-stage">
        <div className="scene-caption">
          <span className="location-label"><span aria-hidden="true">◎</span> Tenerife, Islas Canarias</span>
          <span className="availability"><span className="status-dot" />{t('spring.available')}</span>
        </div>
        <div className="portfolio-card">
          <nav className="chapter-nav" aria-label={t('nav.main')}>
            {CHAPTERS.map((id, i) => (
              <a key={id} href={`#${id}`} aria-current={chapter === id ? 'page' : undefined}>
              <span className="chapter-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span>{t(`spring.chapters.${id}`)}</span>
              </a>
            ))}
          </nav>
          <main id="main" ref={mainRef} tabIndex={-1} aria-label={t(`spring.chapters.${chapter}`)}>
            <div key={chapter} className="chapter-content">
              {chapter === 'top' && <>
                <Hero />
                <details className="profile-details reveal" style={{ '--delay': '440ms' }}>
                  <summary>{t('spring.moreAbout')}<span aria-hidden="true">＋</span></summary>
                  <About />
                  <Stack />
                  <NowBoard />
                </details>
              </>}
              {chapter === 'projects' && <Projects />}
              {chapter === 'homelab' && <Homelab />}
              {chapter === 'experience' && <Experience />}
              {chapter === 'contact' && <Contact />}
            </div>
          </main>
          <div className="chapter-footer">
            <span className="chapter-progress" aria-label={`${t('spring.section')} ${index + 1} / 5`}>
              {CHAPTERS.map((id, i) => <span key={id} className={i === index ? 'active' : ''} />)}
              <span className="progress-label">0{index + 1} / 05</span>
            </span>
            <a className="next-chapter" href={`#${CHAPTERS[(index + 1) % CHAPTERS.length]}`}>
              {index === CHAPTERS.length - 1 ? t('spring.backHome') : t(`spring.chapters.${CHAPTERS[index + 1]}`)}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="scene-bottom">
          <Footer />
          <button type="button" className="motion-control" aria-pressed={motionPaused} onClick={() => setMotionPaused(!motionPaused)}>
            <span aria-hidden="true">{motionPaused ? '▷' : 'Ⅱ'}</span>
            {motionPaused ? t('spring.resumeMotion') : t('spring.pauseMotion')}
          </button>
        </div>
      </div>
    </div>
  )
}
