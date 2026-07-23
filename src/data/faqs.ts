export interface Faq {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: 'Does Carillon read my email?',
    answer:
      'No. Carillon watches for the fact that something changed and sends a signal that says only that. It never reads, stores, syncs, or forwards your messages, contacts, or calendar entries. The notification payload carries an event type and an identifier — never a subject, body, or contact.',
  },
  {
    question: 'What exactly is a “watch”?',
    answer:
      'A watch is one folder or one address book that Carillon keeps an eye on — for example, the INBOX of your work mailbox. Each watch is one standing connection we hold for you. You pay per watch by the month in prepaid credits, and your first watch on a provider runs free for a 7-day trial.',
  },
  {
    question: 'How do I get notifications on my phone?',
    answer:
      'Point your notify URL at an ntfy topic. ntfy (and UnifiedPush) deliver the push over the platform’s shared socket, so your phone gets an instant buzz without holding a background connection or draining the battery. Carillon just POSTs its signed webhook there — no app of ours required.',
  },
  {
    question: 'What are credits?',
    answer:
      'Prepaid, consumable credits — one credit runs one watch for one month, and one credit is €2. You buy them in packs of five (€10) and spend them as you go, so you top up when you need more watches and let the balance run down when you need fewer. Credits never expire and there is no subscription; opt-in auto-renew simply pulls the next credit from your balance when a watch is about to lapse — no card is ever charged automatically.',
  },
  {
    question: 'What does a webhook actually look like?',
    answer:
      'A small, signed JSON POST — for a new message it is roughly { "id": "9f2c1e…", "ts": 1784501124, "account": "fastmail", "event": "new", "uid": 111 }. The id is stable across retries so you can dedupe, and every request carries an X-Carillon-Signature header (HMAC-SHA256 over the timestamp and raw body) so you can verify it and reject replays. There is deliberately no sender, subject, or body — you fetch those yourself with your own credentials.',
  },
  {
    question: 'Which providers work?',
    answer:
      'Any IMAP server that supports IDLE works today — most do — and CardDAV address books (your contacts) are supported too. JMAP is next, with Gmail, Microsoft Graph, and CalDAV on the roadmap. Whatever the source, the webhook you receive looks the same.',
  },
  {
    question: 'Do you store my password?',
    answer:
      'To hold a watch, Carillon has to sign in to your account, so it does hold a credential — encrypted at rest. It uses scoped, read-only OAuth wherever the provider supports it (so writing is provider-impossible) and falls back to app passwords elsewhere. Either way the connection is read-only by design: Carillon opens your mailbox in read-only mode and can never write, move, or delete anything. Prefer to hold your own keys? Self-host.',
  },
  {
    question: 'Can I run it myself?',
    answer:
      'Yes. Carillon is open source (MIT / Apache-2.0) and built to be self-hosted. One small VPS runs thousands of watches, self-hosting runs fully unmetered with no credits, and the credentials never leave your own machine.',
  },
  {
    question: 'How is this different from EmailEngine or Nylas?',
    answer:
      'Those sync and serve full message content — heavier, higher-liability products. Carillon deliberately stays on one side of a hard line: it signals that something changed and stops there. That is what keeps it thin, cheap, private, and easy to trust.',
  },
]
