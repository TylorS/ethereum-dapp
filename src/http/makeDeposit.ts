import { Tx } from 'web3/eth/types'
import { Contract } from 'web3/types'
import { web3 } from './web3'

export async function makeDeposit(amount: number, contract: Contract) {
  const transaction = contract.methods.deposit()
  const options: Tx = {
    to: contract.options.address,
    value: web3.utils.toWei(String(amount), 'ether') as string,
  }
  const response = await transaction.send(options)

  return web3.eth.getTransactionReceipt(response.transactionHash)
}
