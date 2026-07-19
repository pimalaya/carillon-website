import { site } from '../config'

export interface Plan {
  id: string
  name: string
  /* Headline price, already formatted for display. */
  price: string
  /* Small text under the price, e.g. "per watch / month". Optional for free tiers. */
  cadence?: string
  tagline: string
  features: string[]
  cta: { label: string; href: string }
  /* Visually highlights the recommended plan. */
  featured?: boolean
}

/*
 * Pricing follows CARILLON_PLAN §9 (monetization):
 *   - The on-device client and self-hosting are always free.
 *   - You pay for the WATCH — the standing server resource — via prepaid,
 *     consumable "notifier-month" credits, not permanent slots.
 *   - The first watch is free as a funnel.
 *
 * Numbers are indicative for the private beta; the real price lands in the
 * €3–5 band and is set on value, not on infra cost.
 */
export const plans: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    price: '€0',
    cadence: 'forever',
    tagline: 'For a single mailbox you want to keep an ear on.',
    features: [
      '1 active watch',
      'Webhook + ntfy phone push',
      'Content-free, HMAC-signed signals',
      'IMAP IDLE, real-time',
      'Community support',
    ],
    cta: { label: 'Start free', href: site.links.getStarted },
  },
  {
    id: 'payg',
    name: 'Pay as you go',
    price: '€3',
    cadence: 'per watch / month',
    tagline: 'For your whole digital life — buy credits, use them as you go.',
    features: [
      'Unlimited watches',
      'Prepaid “notifier-month” credits',
      'Auto-refill with low-balance alerts',
      'Every source protocol as it ships',
      'Delivery logs & retries',
      'Email support',
    ],
    cta: { label: 'Get early access', href: site.links.getStarted },
    featured: true,
  },
  {
    id: 'self-hosted',
    name: 'Self-hosted',
    price: 'Free',
    cadence: 'open source',
    tagline: 'Run it on your own box and hold your own credentials.',
    features: [
      'Unlimited everything',
      'You keep the credentials',
      'MIT / Apache-2.0 licensed',
      'One small VPS → thousands of watches',
      'Built on the Pimalaya io-imap core',
    ],
    cta: { label: 'View on GitHub', href: site.links.github },
  },
]

/* Shown as a footnote under the pricing grid. */
export const pricingNote =
  'Prices are indicative during the private beta. Need metered billing for a team or a product you’re building? Metered Stripe plans are available on request.'
