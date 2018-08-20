import * as React from 'react'
import { RecentEvent } from '../state'
import { DownArrow, UpArrow } from './Arrows'
import { dateClass, eventHostClass } from './styles'

export function Event({ event }: EventProps) {
  const isDeposit = event.type === 'Deposit'

  return (
    <li className={eventHostClass}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '0.5rem' }}>
          <p className={dateClass}>{event.timestamp.format('ddd')}</p>
          <p
            className={dateClass}
            style={{
              fontSize: '1.5rem',
            }}
          >
            {event.timestamp.format('DD')}
          </p>
        </div>

        {isDeposit ? <UpArrow /> : <DownArrow />}
      </div>

      <p
        style={{
          margin: 0,
          color: isDeposit ? 'rgb(58, 135, 88)' : 'rgb(190, 48, 48)',
          fontSize: '1.5rem',
        }}
      >
        {isDeposit ? '+' : '-'} {event.value}
      </p>
    </li>
  )
}

export type EventProps = {
  event: RecentEvent
}
