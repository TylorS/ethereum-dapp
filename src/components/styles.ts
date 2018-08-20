import { style } from 'typestyle'

// App
export const hostClass = style({ display: 'flex', minHeight: '100vh' })
export const mainClass = style({ flexGrow: 1, padding: '0.5rem 2rem' })
export const headerClass = style({ fontSize: '2.5rem', margin: 0, color: '#fff' })
export const contentClass = style({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
})
export const flexWrapClass = style({
  display: 'flex',
  flexWrap: 'wrap',
})

// AccountBalance/VaultBalance
export const balanceClass = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  flexGrow: 1,
  margin: '1rem',
})
export const balanceLabelClass = style({
  fontSize: '1.5rem',
  fontWeight: 700,
  color: 'rgb(172, 172, 172)',
})
export const balanceValueClass = style({ fontSize: '2rem', margin: 0, color: '#59BADF' })

// Deposit/Withdraw
export const actionHostClass = style({
  display: 'flex',
  flexDirection: 'column',
  width: '40vw',
  maxWidth: '400px',
  padding: '1rem',
  margin: '1rem',
  border: '1px solid rgb(40, 40, 40)',
})
export const actionInputClass = style({
  padding: '1rem',
  border: '1px solid rgb(40, 40 40)',
  margin: '1rem',
  outline: 'none',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  color: 'white',
  fontSize: '1.2rem',
})
export const actionButtonClass = style({
  maxWidth: '10rem',
  marginLeft: '1rem',
  fontSize: '1.2rem',
  padding: '0.25rem',
  color: 'rgb(40, 40, 40)',
})

// Event
export const eventHostClass = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderTop: '1px solid black',
  padding: '1rem',
})

export const dateClass = style({ margin: 0, textAlign: 'center', color: 'rgb(170, 170, 170)' })
