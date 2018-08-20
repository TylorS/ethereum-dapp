import { Tx } from 'web3/eth/types'
import { Contract } from 'web3/types'
import { web3 } from './web3'

export async function makeWithdrawal(amount: number, account: string, contract: Contract) {
  const value = web3.utils.toWei(String(amount), 'ether') as string
  const transaction = contract.methods.withdraw(value)
  const options: Tx = { to: contract.options.address, from: account }
  const response = await transaction.send(options)

  return response
}
