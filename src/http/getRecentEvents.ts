// tslint:disable-next-line:no-var-requires
const moment: typeof import('moment') = require('moment').default

import { descend } from '@typed/list'
import { Contract, EventLog } from 'web3/types'
import { RecentEvent } from '../state'
import { web3 } from './web3'

export async function getRecentEvents(contract: Contract): Promise<RecentEvent[]> {
  const [withdrawals, deposits] = await Promise.all([
    getEvents('Withdraw', contract),
    getEvents('Deposit', contract),
  ])
  const events = withdrawals.concat(deposits).filter(x => x !== null) as RecentEvent[]

  return events.sort(sortRecentEvents)
}

async function getEvents(eventType: 'Withdraw' | 'Deposit', contract: Contract) {
  const events = await contract.getPastEvents(eventType, { fromBlock: 0 })

  return Promise.all(events.map(convertEvent(eventType)))
}

function sortRecentEvents(a: RecentEvent, b: RecentEvent): number {
  return descend(
    x =>
      moment(x.timestamp)
        .toDate()
        .getTime(),
    a,
    b,
  )
}

export function convertEvent(type: 'Withdraw' | 'Deposit') {
  return async (event: EventLog): Promise<RecentEvent | null> => {
    const block = await web3.eth.getBlock(event.blockNumber, true)

    if (!block) {
      return null
    }

    const initiator = event.returnValues.user
    const value = parseFloat(web3.utils.fromWei(event.returnValues.amount, 'ether') as string)
    const timestamp = moment(block.timestamp * 1000)

    return {
      type,
      timestamp,
      value,
      initiator,
      address: event.address,
    }
  }
}
