import * as React from 'react'
import { balanceClass, balanceLabelClass, balanceValueClass } from './styles'

export function VaultBalance({ vaultBalance }: VaultBalanceProps) {
  return (
    <article className={balanceClass}>
      <label className={balanceLabelClass}>Vault Balance</label>
      <p className={balanceValueClass}>{vaultBalance} Ether</p>
    </article>
  )
}

export type VaultBalanceProps = {
  vaultBalance: number
}
