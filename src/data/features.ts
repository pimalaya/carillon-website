export interface Feature {
  title: string
  body: string
  /* Name of the icon to render — see components/ui/Icon.tsx */
  icon: string
}

export const features: Feature[] = [
  {
    icon: 'shield',
    title: 'Content-free by design',
    body: 'Payloads carry an event type and an id — never a subject, body, or contact. Your push provider learns nothing.',
  },
  {
    icon: 'signature',
    title: 'Signed & verifiable',
    body: 'Every delivery is HMAC-SHA256 signed, Stripe-style, so your endpoint can trust it came from Carillon — and you can rotate the signing secret with no dropped events.',
  },
  {
    icon: 'bolt',
    title: 'Real-time, not polling',
    body: 'IMAP IDLE means you hear about a change the instant it happens — no five-minute refresh, no missed mail.',
  },
  {
    icon: 'phone',
    title: 'Webhook or phone push',
    body: 'Deliver to your own endpoint, or point the notify URL at an ntfy topic and get battery-free push on your phone.',
  },
  {
    icon: 'list',
    title: 'Retries & delivery logs',
    body: 'Failed deliveries retry with backoff, every attempt is logged, and a live event stream lets your dashboard watch deliveries fire in real time.',
  },
  {
    icon: 'server',
    title: 'Self-hostable',
    body: 'One small VPS runs thousands of watches. Prefer to hold your own credentials? Run the whole thing yourself.',
  },
]
