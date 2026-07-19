import { steps } from '../data/steps'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import './HowItWorks.css'

export function HowItWorks() {
  return (
    <section className="section how" id="how">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Three steps from change to chime"
          lead="No app to install, no background connection on your device. You give Carillon a place to watch and a place to ping."
        />

        <ol className="how__grid">
          {steps.map((step) => (
            <li key={step.index} className="how__card">
              <span className="how__index">{step.index}</span>
              <h3 className="how__title">{step.title}</h3>
              <p className="how__body">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
