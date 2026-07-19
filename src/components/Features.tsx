import { features } from '../data/features'
import { Container } from './ui/Container'
import { Icon, type IconName } from './ui/Icon'
import { SectionHeading } from './ui/SectionHeading'
import './Features.css'

export function Features() {
  return (
    <section className="section features">
      <Container>
        <SectionHeading
          eyebrow="What you get"
          title="A watcher you can build on"
          lead="Everything here follows from one rule: grow the sources, never the payload."
        />

        <ul className="features__grid">
          {features.map((feature) => (
            <li key={feature.title} className="features__card">
              <span className="features__icon" aria-hidden="true">
                <Icon name={feature.icon as IconName} size={22} />
              </span>
              <h3 className="features__title">{feature.title}</h3>
              <p className="features__body">{feature.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
