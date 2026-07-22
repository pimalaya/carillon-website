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
 * Pricing follows the current billing model (carillon-server
 * docs/BILLING_MODEL.md, live in carillon-admin):
 *   - The on-device client and self-hosting are always free and unmetered.
 *   - You pay for the WATCH — the standing server resource — via prepaid,
 *     consumable credits: 1 credit = one watch, one month. Sold in packs of 4.
 *   - Ephemeral connection testing is free forever; your first watch on a
 *     provider auto-runs free for a 7-day trial as a funnel.
 *   - It is pay-as-you-go, not a subscription: credits never expire, nothing
 *     recurs unless you opt into auto-renew (which only ever spends credits you
 *     already own — no card on file).
 *
 * The €2.50/credit price (packs of 4 = €10) matches the live dashboard; it is
 * indicative for the private beta and set on value, not infra cost.
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
      '7-day free trial on your first watch',
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
    price: '€2.50',
    cadence: 'per watch / month',
    tagline: 'For your whole digital life — buy credits, spend them as you go.',
    features: [
      'Unlimited watches',
      '1 credit = one watch, one month',
      'Prepaid credits in packs of 4',
      'No expiry, no subscription',
      'Opt-in auto-renew from your balance',
      'Low-balance & pre-expiry alerts',
      'Every source protocol as it ships',
      'Delivery logs, retries & secret rotation',
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
      'Unlimited, unmetered watches',
      'You keep the credentials',
      'MIT / Apache-2.0 licensed',
      'One small VPS → thousands of watches',
      'Built on the Pimalaya protocol cores',
    ],
    cta: { label: 'View on GitHub', href: site.links.github },
  },
]

/* Shown as a footnote under the pricing grid. */
export const pricingNote =
  'Prices are indicative during the private beta. Credits never expire and there is no subscription — you top up when you want more watches. Building on top of Carillon? Metered Stripe plans are available on request.'
