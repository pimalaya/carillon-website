import { site } from '../config'
import { faqs } from '../data/faqs'

/*
 * schema.org JSON-LD, built from the same data the page renders so it never
 * drifts. Emitted into the pre-rendered <head> by entry-server (see prerender.js).
 */
const BASE = `https://${site.domain}`

export function buildStructuredData(): Record<string, unknown>[] {
  const publisher = {
    '@type': 'Organization',
    '@id': 'https://pimalaya.org/#org',
    name: 'Pimalaya',
    url: 'https://pimalaya.org',
    sameAs: [site.links.github, site.links.mastodon],
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE}/#website`,
    name: site.name,
    url: `${BASE}/`,
    inLanguage: 'en',
    publisher: { '@id': 'https://pimalaya.org/#org' },
  }

  const application = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: site.name,
    alternateName: 'Account-change notifier',
    url: `${BASE}/`,
    applicationCategory: 'CommunicationApplication',
    operatingSystem: 'Web',
    description: site.tagline,
    image: `${BASE}/og-image.png`,
    publisher: { '@id': 'https://pimalaya.org/#org' },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      description:
        'Free to start: your first watch runs free for 7 days. Then €2 per watch per month via prepaid credits, no subscription. Self-hosting is free and open source.',
    },
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return [{ '@context': 'https://schema.org', ...publisher }, website, application, faqPage]
}
