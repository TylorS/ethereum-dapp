import { Contract } from 'web3/types'
import { web3 } from './web3'

export async function getVaultBalance(account: string, contract: Contract): Promise<number> {
  const wei = await contract.methods.balanceOf(account).call()

  return parseFloat(web3.utils.fromWei(wei, 'ether') as string)
}
