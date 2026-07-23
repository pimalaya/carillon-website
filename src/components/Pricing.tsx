import { plans, pricingNote } from '../data/plans'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { Icon } from './ui/Icon'
import { SectionHeading } from './ui/SectionHeading'
import './Pricing.css'

export function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Pay for the watch, nothing else"
          lead="The on-device client and self-hosting are always free. You only pay for the standing connection Carillon holds on your behalf: prepaid credits, never a locked-in subscription."
        />

        <div className="pricing__grid">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`pricing__card ${plan.featured ? 'pricing__card--featured' : ''}`.trim()}
            >
              {plan.featured && <span className="pricing__flag">Most popular</span>}

              <h3 className="pricing__name">{plan.name}</h3>
              <p className="pricing__tagline">{plan.tagline}</p>

              <div className="pricing__price">
                <span className="pricing__amount">{plan.price}</span>
                {plan.cadence && <span className="pricing__cadence">{plan.cadence}</span>}
              </div>

              <Button
                href={plan.cta.href}
                variant={plan.featured ? 'primary' : 'secondary'}
                size="lg"
                className="pricing__cta"
              >
                {plan.cta.label}
              </Button>

              <ul className="pricing__features">
                {plan.features.map((feature) => (
                  <li key={feature} className="pricing__feature">
                    <span className="pricing__check" aria-hidden="true">
                      <Icon name="check" size={15} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="pricing__note">{pricingNote}</p>
      </Container>
    </section>
  )
}
