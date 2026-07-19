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
    protocol: 'IDLE',
    description:
      'The hard one, and the differentiator. One held connection per mailbox, so your phone holds none.',
    status: 'available',
  },
  {
    name: 'JMAP',
    protocol: 'PushSubscription',
    description:
      'Native push. We register a subscription pointing at Carillon and re-emit StateChange. Nearly free.',
    status: 'next',
  },
  {
    name: 'Gmail & Graph',
    protocol: 'Webhooks',
    description:
      'Webhook-native providers. We register their watches, handle renewal, and re-emit in one uniform shape.',
    status: 'next',
  },
  {
    name: 'CalDAV & CardDAV',
    protocol: 'sync-token / WebDAV-Push',
    description:
      'Contacts and calendars. A cheap sync-token poll, or WebDAV-Push where the server supports it.',
    status: 'planned',
  },
]
