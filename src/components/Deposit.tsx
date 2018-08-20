import * as React from 'react'
import { actionButtonClass, actionHostClass, actionInputClass } from './styles'

export function Deposit({ depositAmount, onInput, onSubmit }: DepositProps) {
  return (
    <article className={actionHostClass}>
      <h2 style={{ color: 'rgb(172, 172, 172)' }}>Transfer to Vault</h2>

      <input
        type="number"
        onInput={ev => onInput(parseFloat(ev.currentTarget.value))}
        value={!Number.isNaN(depositAmount) ? depositAmount : ''}
        className={actionInputClass}
      />

      <button
        disabled={depositAmount <= 0 || Number.isNaN(depositAmount)}
        onClick={onSubmit}
        className={actionButtonClass}
      >
        Deposit
      </button>
    </article>
  )
}

export type DepositProps = {
  depositAmount: number
  onInput: (amount: number) => void
  onSubmit: () => void
}
