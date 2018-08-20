import * as React from 'react'
import { Contract } from 'web3/types'
import {
  getRecentEvents,
  getVaultBalance,
  getWalletBalance,
  makeDeposit,
  makeWithdrawal,
} from '../http'
import { defaultState, State } from '../state'
import { AccountBalance } from './AccountBalance'
import { Deposit } from './Deposit'
import { RecentEvents } from './RecentEvents'
import { contentClass, flexWrapClass, headerClass, hostClass, mainClass } from './styles'
import { VaultBalance } from './VaultBalance'
import { Withdraw } from './Withdraw'

export class App extends React.Component<AppProps, State> {
  public state: State = defaultState
  public id!: any

  public async componentDidMount() {
    await this.updateState()

    this.id = setInterval(this.updateState, 5000)
  }

  public componentWillUnmount() {
    clearInterval(this.id)
  }

  public render() {
    const { depositAmount, withdrawAmount, accountBalance, vaultBalance, recentEvents } = this.state

    return (
      <section className={hostClass}>
        <main className={mainClass}>
          <header>
            <h1 className={headerClass}>Vault Manager</h1>
          </header>

          <section className={contentClass}>
            <AccountBalance accountBalance={accountBalance} />
            <VaultBalance vaultBalance={vaultBalance} />

            <section className={flexWrapClass}>
              <Deposit
                depositAmount={depositAmount}
                // tslint:disable-next-line:no-shadowed-variable
                onInput={depositAmount => this.setState({ depositAmount })}
                onSubmit={this.makeDeposit}
              />
              <Withdraw
                withdrawAmount={withdrawAmount}
                // tslint:disable-next-line:no-shadowed-variable
                onInput={withdrawAmount => this.setState({ withdrawAmount })}
                onSubmit={this.makeWithdrawal}
              />
            </section>
          </section>
        </main>

        <RecentEvents events={recentEvents} />
      </section>
    )
  }

  private makeDeposit = async () => {
    const { contract } = this.props
    const { depositAmount } = this.state

    if (depositAmount <= 0) {
      return
    }

    await makeDeposit(depositAmount, contract)
  }

  private makeWithdrawal = async () => {
    const { account, contract } = this.props
    const { withdrawAmount } = this.state

    if (withdrawAmount <= 0) {
      return
    }

    await makeWithdrawal(withdrawAmount, account, contract)
  }

  private updateState = async () => {
    const { account, contract } = this.props
    const [accountBalance, vaultBalance, recentEvents] = await Promise.all([
      getWalletBalance(account),
      getVaultBalance(account, contract),
      getRecentEvents(contract),
    ])

    this.setState({ accountBalance, vaultBalance, recentEvents })
  }
}

export type AppProps = {
  contract: Contract
  account: string
}
