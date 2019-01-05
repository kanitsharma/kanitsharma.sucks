import React from 'react'
import { useStore } from '../core/renderReact'

const initState = {
  counter: 0
}

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'Update': return { ...state, counter: action.payload }
    default: return state
  }
}


export default props => {
  const [state, dispatch] = useStore('home')

  return (
    <div onClick={_ => dispatch({ type: 'Update', payload: state.counter + 1 })} >{state.counter}</div>
  )
}