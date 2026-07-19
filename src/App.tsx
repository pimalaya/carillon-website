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

/*
 * The whole landing page is a single vertical scroll. Section order:
 *   hero → trust cues → how it works → the privacy principle →
 *   features → sources → pricing → FAQ → closing CTA → footer.
 *
 * Each section is a self-contained component with its own co-located CSS.
 */
export default function App() {
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
