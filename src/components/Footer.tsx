import { site } from '../config'
import { Container } from './ui/Container'
import { Icon } from './ui/Icon'
import { Logo } from './ui/Logo'
import './Footer.css'

interface FooterLink {
  label: string
  href: string
  external?: boolean
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

/* Grouped footer links; keep these in sync with config.ts. */
const columns: FooterColumn[] = [
  {
    title: 'Product',
    links: [
      { label: 'How it works', href: '#how' },
      { label: 'Sources', href: '#sources' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Open source',
    links: [
      { label: 'GitHub', href: site.links.github, external: true },
      { label: 'Self-host guide', href: site.links.selfHostGuide, external: true },
      { label: 'How Pimalaya works', href: site.links.architecture, external: true },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Mastodon', href: site.links.mastodon, external: true },
      { label: 'Matrix', href: site.links.matrix, external: true },
      { label: 'Contact', href: site.links.email },
    ],
  },
]

export function Footer() {
  return (
    <footer className="footer on-dark">
      <Container>
        <div className="footer__top">
          <div className="footer__brand">
            <Logo onDark />
            <p className="footer__tagline">{site.tagline}</p>
            <a
              className="footer__social"
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Carillon on GitHub"
            >
              <Icon name="github" size={20} />
            </a>
          </div>

          <nav className="footer__cols" aria-label="Footer">
            {columns.map((col) => (
              <div key={col.title} className="footer__col">
                <h3 className="footer__col-title">{col.title}</h3>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Carillon</p>
          <p>
            Part of{' '}
            <a href={site.links.pimalaya} target="_blank" rel="noopener noreferrer">
              Pimalaya
            </a>{' '}
            — open-source PIM tools in Rust.
          </p>
        </div>
      </Container>
    </footer>
  )
}
