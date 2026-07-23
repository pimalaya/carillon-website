import { site } from '../config'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { Icon } from './ui/Icon'
import './CtaBanner.css'

/* Closing call to action on a warm accent panel. */
export function CtaBanner() {
  return (
    <section className="section cta on-dark">
      <Container>
        <div className="cta__panel">
          <h2 className="cta__title">
            Stop holding a connection you were never meant to keep.
          </h2>
          <p className="cta__lead">
            Let Carillon hold it instead — and chime the moment it matters.
          </p>
          <div className="cta__actions">
            <Button href={site.links.getStarted} size="lg">
              Start free
              <Icon name="arrowRight" size={18} />
            </Button>
            <Button href={site.links.github} size="lg" variant="secondary" external>
              <Icon name="github" size={18} />
              Read the source
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
