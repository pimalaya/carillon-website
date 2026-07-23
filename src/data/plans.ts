import { site } from '../config'

export interface Plan {
  id: string
  name: string
  /* Formatted for display. */
  price: string
  /* Sub-price line, e.g. "per watch / month". */
  cadence?: string
  tagline: string
  features: string[]
  cta: { label: string; href: string }
  /* Visually highlights the recommended plan. */
  featured?: boolean
}

/*
 * Pricing mirrors the live billing model (carillon-backend docs/BILLING_MODEL.md):
 * client and self-hosting are free and unmetered; you pay per standing watch via
 * prepaid credits, one credit for one watch for one month, sold in packs of five.
 * Connection testing is free forever; the first watch on a provider runs free for
 * a 7-day trial. Pay-as-you-go, not a subscription: credits never expire and
 * nothing recurs unless you opt into auto-renew, which only spends credits you own.
 * The price is indicative for the private beta and set on value, not infra cost.
 */
export const plans: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    price: '€0',
    cadence: 'to get started',
    tagline: 'Test any account for free, and watch your first one free for a week.',
    features: [
      'Connection testing, free forever',
      '7 days free on your first watch',
      'Webhook + ntfy phone push',
      'Content-free, HMAC-signed signals',
      'Real-time push',
      'Community support',
    ],
    cta: { label: 'Start free', href: site.links.getStarted },
  },
  {
    id: 'payg',
    name: 'Pay as you go',
    price: '€2',
    cadence: 'per watch / month',
    tagline: 'For your whole digital life — buy credits, spend them as you go.',
    features: [
      'Add as many watches as you fund',
      '1 credit = one watch, one month',
      'Prepaid credits, €10 packs of 5',
      'No expiry, no subscription',
      'Opt-in auto-renew from your balance',
      'Low-balance & pre-expiry alerts',
      'Every source protocol as it ships',
      'Delivery logs, retries & secret rotation',
    ],
    cta: { label: 'Start watching', href: site.links.getStarted },
    featured: true,
  },
  {
    id: 'self-hosted',
    name: 'Self-hosted',
    price: 'Free',
    cadence: 'open source',
    tagline: 'Run it on your own box and hold your own credentials.',
    features: [
      'Unlimited, unmetered watches',
      'You keep the credentials',
      'MIT / Apache-2.0 licensed',
      'One small VPS → thousands of watches',
      'Built on the Pimalaya protocol cores',
    ],
    cta: { label: 'View on GitHub', href: site.links.github },
  },
]

/* Footnote under the pricing grid. */
export const pricingNote =
  'Prices are indicative during the private beta. Credits never expire and there is no subscription — you top up when you want more watches. Building on top of Carillon? Metered Stripe plans are available on request.'
