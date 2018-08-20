import { Contract } from 'web3/types'
import { web3 } from './web3'

export function getContract(contractAddress: string, account: string): Promise<Contract> {
  const URL = `https://api-kovan.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}`

  return fetch(URL)
    .then(r => r.json())
    .then(x => new web3.eth.Contract(JSON.parse(x.result), contractAddress, { from: account }))
}
