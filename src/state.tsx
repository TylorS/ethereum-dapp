import { Moment } from 'moment'

export type State = {
  accountBalance: number
  vaultBalance: number
  depositAmount: number
  withdrawAmount: number
  recentEvents: RecentEvent[]
}

export const defaultState: State = {
  accountBalance: 0,
  vaultBalance: 0,
  depositAmount: 0,
  withdrawAmount: 0,
  recentEvents: [],
}

export type RecentEvent = {
  address: string
  initiator: string
  type: 'Withdraw' | 'Deposit'
  timestamp: Moment
  value: number
}
