import React from 'react'
import { useStore } from '../core/renderReact'

export default props => {
  const [state, dispatch] = useStore()

  return (
    <div>{state.counter}</div>
  )
}