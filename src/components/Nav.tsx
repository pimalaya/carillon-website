import { site } from '../config'
import { Button } from './ui/Button'
import { Icon } from './ui/Icon'
import { Logo } from './ui/Logo'
import './Nav.css'

/* Sticky top navigation. Section links collapse away on small screens. */
export function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" aria-label="Carillon home">
          <Logo />
        </a>

        <nav className="nav__links" aria-label="Primary">
          <a href="#how">How it works</a>
          <a href="#sources">Sources</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="nav__actions">
          <a
            className="nav__icon-link"
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Carillon on GitHub"
          >
            <Icon name="github" size={20} />
          </a>
          <Button href={site.links.getStarted} size="md">
            Start free
          </Button>
        </div>
      </div>
    </header>
  )
}
