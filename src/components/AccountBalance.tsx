import * as React from 'react'
import { balanceClass, balanceLabelClass, balanceValueClass } from './styles'

export function AccountBalance({ accountBalance }: AccountBalanceProps) {
  return (
    <article className={balanceClass}>
      <label className={balanceLabelClass}>Account Balance</label>
      <p className={balanceValueClass}>{accountBalance} Ether</p>
    </article>
  )
}

export type AccountBalanceProps = {
  accountBalance: number
}
