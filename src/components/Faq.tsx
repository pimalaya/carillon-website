import { faqs } from '../data/faqs'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import './Faq.css'

/* Native details/summary accordion: accessible, no JavaScript state. */
export function Faq() {
  return (
    <section className="section faq" id="faq">
      <Container>
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />

        <div className="faq__list">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq__item">
              <summary className="faq__question">
                {faq.question}
                <span className="faq__marker" aria-hidden="true" />
              </summary>
              <p className="faq__answer">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}
