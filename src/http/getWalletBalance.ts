import { web3 } from './web3'

export async function getWalletBalance(account: string): Promise<number> {
  const wei = await web3.eth.getBalance(account)

  return parseFloat(web3.utils.fromWei(wei, 'ether') as string)
}
