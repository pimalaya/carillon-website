export interface Faq {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: 'Does Carillon read my email?',
    answer:
      'No. Carillon watches for the fact that something changed and sends a signal that says only that. It never reads, stores, syncs, or forwards your messages, contacts, or calendar entries. The notification payload carries an event type and an identifier — never a subject or body.',
  },
  {
    question: 'What exactly is a “watch”?',
    answer:
      'A watch is one account and folder that Carillon keeps an eye on — for example, the INBOX of your work mailbox. Each watch is one standing connection we hold for you. You pay per watch, and the first one is free.',
  },
  {
    question: 'How do I get notifications on my phone?',
    answer:
      'Point your notify URL at an ntfy topic. ntfy (and UnifiedPush) deliver the push over the platform’s shared socket, so your phone gets an instant buzz without holding a background connection or draining the battery. No app of ours required.',
  },
  {
    question: 'What are “notifier-month” credits?',
    answer:
      'Prepaid, consumable credits — one credit runs one watch for one month. They are pay-as-you-go rather than a permanent slot, so you top up when you need more watches and let the balance run down when you need fewer. Auto-refill is optional.',
  },
  {
    question: 'Which providers work?',
    answer:
      'Any IMAP server that supports IDLE works today — most do. JMAP, Gmail, and Microsoft Graph are next, and CalDAV / CardDAV for contacts and calendars are planned. Whatever the source, the webhook you receive looks the same.',
  },
  {
    question: 'Can I run it myself?',
    answer:
      'Yes. Carillon is open source (MIT / Apache-2.0) and built to be self-hosted. One small VPS runs thousands of watches, and self-hosting means the credentials never leave your own machine.',
  },
  {
    question: 'How is this different from EmailEngine or Nylas?',
    answer:
      'Those sync and serve full message content — heavier, higher-liability products. Carillon deliberately stays on one side of a hard line: it signals that something changed and stops there. That is what keeps it thin, cheap, private, and easy to trust.',
  },
]
