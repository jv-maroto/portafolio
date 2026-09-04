import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Homelab from './components/Homelab'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen bg-paper text-ink">
      <a href="#main" className="skip">
        {t('nav.skip')}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Homelab />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
