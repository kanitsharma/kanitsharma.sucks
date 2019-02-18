import React, { createContext, useReducer, useContext } from 'react'

export default function createStore(reducer) {
  const initState = reducer()
  const Store = createContext(initState)

  // const tools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__.connect()
  // tools && tools.init(initState)

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState)
    const devtoolsDispatch = action => {
      // tools && tools.send(action, state)
      dispatch(action)
    }

    return (
      <Store.Provider value={[state, devtoolsDispatch]} >
        {children}
      </Store.Provider>
    )
  }

  const useStore = (scope) => {
    const [store, dispatch] = useContext(Store)
    return [scope ? store[scope] : store, dispatch]
  }

  return { Provider, useStore }
}

export const combineReducers = reducers =>
  (state, action) =>
    state
      ? Object.keys(reducers)
        .reduce(
          (acc, x) => ({ ...acc, [x]: reducers[x](state[x], action) }),
          {}
        )
      : Object.keys(reducers)
        .reduce(
          (acc, x) => ({ ...acc, [x]: reducers[x](undefined, {}) }),
          {}
        )
