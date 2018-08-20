import * as React from 'react'
import { RecentEvent } from '../state'
import { Event } from './Event'

export function RecentEvents({ events }: RecentEventsProps) {
  return (
    <section
      style={{
        minWidth: '250px',
        backgroundColor: 'rgb(31, 41, 56)',
        maxHeight: '100vh',
        overflowY: 'auto',
      }}
    >
      <h2 style={{ color: 'rgb(172, 172, 172)', padding: '0.2rem 1rem' }}>Vault Events</h2>
      <ul style={{ padding: 0 }}>
        {events.slice(0, 20).map((event, i) => (
          <Event event={event} key={i} />
        ))}
      </ul>
    </section>
  )
}

export type RecentEventsProps = {
  events: RecentEvent[]
}
