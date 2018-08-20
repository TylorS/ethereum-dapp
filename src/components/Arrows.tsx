import * as React from 'react'

export function UpArrow() {
  return (
    <svg
      style={{
        height: '1rem',
        fill: 'rgb(58, 135, 88)',
        border: '1px solid rgb(58, 135, 88)',
        borderRadius: '100%',
        padding: '0.5rem',
      }}
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 100 100"
    >
      <g>
        <path d="M95.7,70.8l-8.5,8.5c-2.4,2.4-6.3,2.4-8.7,0L50,50.8L21.5,79.3c-2.4,2.4-6.3,2.4-8.7,0l-8.5-8.5c-2.4-2.4-2.4-6.3,0-8.7    l41.4-41.4c2.4-2.4,6.3-2.4,8.7,0l41.4,41.4C98.1,64.5,98.1,68.4,95.7,70.8z" />
      </g>
    </svg>
  )
}

export function DownArrow() {
  return (
    <svg
      style={{
        height: '1rem',
        fill: 'rgb(190, 48, 48)',
        border: '1px solid rgb(190, 48, 48)',
        borderRadius: '100%',
        padding: '0.5rem',
      }}
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 100 100"
    >
      <g>
        <path d="M4.3,29.2l8.5-8.5c2.4-2.4,6.3-2.4,8.7,0L50,49.2l28.5-28.5c2.4-2.4,6.3-2.4,8.7,0l8.5,8.5c2.4,2.4,2.4,6.3,0,8.7    L54.3,79.3c-2.4,2.4-6.3,2.4-8.7,0L4.3,37.9C1.9,35.5,1.9,31.6,4.3,29.2z" />
      </g>
    </svg>
  )
}
