export interface Step {
  index: string
  title: string
  body: string
}

/* "How it works" — three beats, mirroring the CARILLON_PLAN setup flow. */
export const steps: Step[] = [
  {
    index: '01',
    title: 'Point a watch at your account',
    body: 'Give Carillon an account to watch — an IMAP mailbox or a CardDAV address book — and a notify URL: your own webhook, or an ntfy topic for instant phone push. For mail, the folder defaults to INBOX.',
  },
  {
    index: '02',
    title: 'We hold the connection',
    body: 'Carillon keeps a live IMAP IDLE connection open around the clock on our servers — the standing connection your phone can’t hold without draining the battery.',
  },
  {
    index: '03',
    title: 'You get the chime',
    body: 'The moment something changes, we POST a tiny, signed, content-free signal. Your app fetches the details itself, or your phone simply buzzes via ntfy.',
  },
]
