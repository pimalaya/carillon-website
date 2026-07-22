export type SourceStatus = 'available' | 'next' | 'planned'

export interface Source {
  name: string
  protocol: string
  description: string
  status: SourceStatus
}

export const statusLabels: Record<SourceStatus, string> = {
  available: 'Available',
  next: 'Coming next',
  planned: 'Planned',
}

/*
 * Axis 2 of the plan: breadth of source protocols. Carillon absorbs each
 * protocol's quirks and emits one uniform event. Grow this list, never the payload.
 */
export const sources: Source[] = [
  {
    name: 'IMAP',
    protocol: 'IDLE / QRESYNC',
    description:
      'The hard one, and the differentiator. One held IDLE connection per mailbox, so your phone holds none. QRESYNC servers get full deltas; the rest get new-message pings.',
    status: 'available',
  },
  {
    name: 'CardDAV',
    protocol: 'sync-collection',
    description:
      'Contacts. WebDAV has no push, so Carillon runs a light sync-token poll every few minutes and emits the very same event — near-real-time, one webhook shape.',
    status: 'available',
  },
  {
    name: 'JMAP',
    protocol: 'PushSubscription',
    description:
      'Native push. Carillon registers a subscription pointing at itself and re-emits each StateChange. Nearly free to run.',
    status: 'next',
  },
  {
    name: 'Gmail',
    protocol: 'Pub/Sub watch',
    description:
      'Webhook-native. Carillon registers the mailbox watch, handles renewal, and re-emits history changes in the one uniform shape.',
    status: 'planned',
  },
  {
    name: 'Microsoft Graph',
    protocol: 'Change notifications',
    description:
      'Webhook-native. A Graph subscription per mailbox, renewed automatically, re-emitted as the same content-free signal.',
    status: 'planned',
  },
  {
    name: 'CalDAV',
    protocol: 'sync-token',
    description:
      'Calendars, alongside contacts — the same cheap sync-token poll that already powers CardDAV.',
    status: 'planned',
  },
]
