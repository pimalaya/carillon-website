import { site } from '../config'
import { Button } from './ui/Button'
import { Icon } from './ui/Icon'
import { SignalFlow } from './SignalFlow'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow">Content-free push for your PIM</span>

          <h1 className="hero__title">
            Real-time push for your inbox.
            <br />
            <span className="hero__title-accent">Content-free by design.</span>
          </h1>

          <p className="hero__lead">
            Carillon holds the connection your phone can’t — IMAP IDLE — and the
            instant something changes it sends a small, signed, content-free ping to
            any URL you choose. It watches. It never syncs, stores, or reads your mail.
          </p>

          <div className="hero__actions">
            <Button href={site.links.getStarted} size="lg">
              Start free
              <Icon name="arrowRight" size={18} />
            </Button>
            <Button href={site.links.github} size="lg" variant="secondary" external>
              <Icon name="github" size={18} />
              Self-host it
            </Button>
          </div>

          <p className="hero__note">
            Free 7-day trial · No credit card · Open source
          </p>
        </div>

        <div className="hero__visual">
          <SignalFlow />
        </div>
      </div>
    </section>
  )
}
