import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import Stack from './components/Stack'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background from './components/Background'
import { useReveal } from './hooks/useReveal'

function App() {
  // Activate reveal-on-scroll across the page.
  useReveal()

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Work />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
