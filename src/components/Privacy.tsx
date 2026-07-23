import { Container } from './ui/Container'
import { Icon } from './ui/Icon'
import './Privacy.css'

const nevers = [
  'Never reads or stores your messages or contacts',
  'Never syncs or serves content',
  'Never sends bodies, subjects, or contacts to a push provider',
  'Opens your mailbox read-only — never writes, moves, or deletes',
  'Scoped OAuth over passwords, encrypted at rest',
]

export function Privacy() {
  return (
    <section className="section privacy on-dark">
      <Container>
        <div className="privacy__inner">
          <div className="privacy__copy">
            <span className="eyebrow eyebrow--dark">The principle</span>
            <h2 className="privacy__title">Signal, never sync.</h2>
            <p className="privacy__lead">
              Carillon tells you that <em>something changed</em> — and stops there.
              The rich “Email from Alice — Q3 budget” notification is built on your
              own device, which already has the keys. The push provider only ever
              sees a chime.
            </p>
            <p className="privacy__aside">
              That single line is what keeps Carillon thin, cheap, low-liability,
              and easy to trust — unlike the sync-everything products it sits beside.
            </p>
          </div>

          <ul className="privacy__list">
            {nevers.map((item) => (
              <li key={item} className="privacy__item">
                <span className="privacy__check" aria-hidden="true">
                  <Icon name="check" size={16} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
