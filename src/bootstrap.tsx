import * as React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { getContract } from './http'
import { web3 } from './http/web3'

const contractAddress = `0x3430D3FC79e35f33bb69c4a0B4b89bC9Ee107897`
const rootElementCssSelector = '#app-container'
const rootElement = document.querySelector(rootElementCssSelector)

if (!rootElement) {
  throw new Error(`Unable to find root element ${rootElementCssSelector}`)
}

async function main() {
  const [account] = await web3.eth.getAccounts()
  const contract = await getContract(contractAddress, account)

  render(<App contract={contract} account={account} />, rootElement)
}

main()
