import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { TrustBar } from './components/TrustBar'
import { HowItWorks } from './components/HowItWorks'
import { Privacy } from './components/Privacy'
import { Features } from './components/Features'
import { Sources } from './components/Sources'
import { Pricing } from './components/Pricing'
import { Faq } from './components/Faq'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

/* Single vertical-scroll landing page; each section owns its co-located CSS. */
export default function App() {
  useScrollReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Privacy />
        <Features />
        <Sources />
        <Pricing />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
