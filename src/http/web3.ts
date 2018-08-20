import Web3 from 'web3'

export const web3: Web3 = new Web3(Web3.givenProvider || new (Web3 as any).providers.HttpProvider())
