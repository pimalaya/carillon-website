import { sources, statusLabels } from '../data/sources'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import './Sources.css'

export function Sources() {
  return (
    <section className="section sources" id="sources">
      <Container>
        <SectionHeading
          eyebrow="Sources"
          title="One webhook format, every protocol"
          lead="Carillon absorbs each protocol’s quirks and emits a single, uniform event — whatever it’s watching. The list grows; the payload never does."
        />

        <ul className="sources__grid">
          {sources.map((source) => (
            <li key={source.name} className={`sources__card sources__card--${source.status}`}>
              <div className="sources__head">
                <h3 className="sources__name">{source.name}</h3>
                <span className={`sources__badge sources__badge--${source.status}`}>
                  {statusLabels[source.status]}
                </span>
              </div>
              <p className="sources__protocol">{source.protocol}</p>
              <p className="sources__desc">{source.description}</p>
            </li>
          ))}
        </ul>

        <p className="sources__foot">
          POP3, Exchange Web Services, and ActiveSync are deliberately out of scope —
          legacy, poll-only, or proprietary.
        </p>
      </Container>
    </section>
  )
}
