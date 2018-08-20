import * as React from 'react'
import { actionButtonClass, actionHostClass, actionInputClass } from './styles'

export function Withdraw({ withdrawAmount, onInput, onSubmit }: WithdrawProps) {
  return (
    <article className={actionHostClass}>
      <h2 style={{ color: 'rgb(172, 172, 172)' }}>Transfer to Wallet</h2>

      <input
        type="number"
        onInput={ev => onInput(parseFloat(ev.currentTarget.value))}
        value={!Number.isNaN(withdrawAmount) ? withdrawAmount : ''}
        className={actionInputClass}
      />

      <button
        disabled={withdrawAmount <= 0 || Number.isNaN(withdrawAmount)}
        onClick={onSubmit}
        className={actionButtonClass}
      >
        Withdraw
      </button>
    </article>
  )
}

export type WithdrawProps = {
  withdrawAmount: number
  onInput: (amount: number) => void
  onSubmit: () => void
}
