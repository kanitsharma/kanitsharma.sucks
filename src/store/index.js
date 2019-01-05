import React, { createContext, useState, useContext } from 'react'

export default function createStore(initState) {
  const Store = createContext(initState)

  const Provider = ({ children }) => {
    const store = useState(initState)
    return (
      <Store.Provider value={store} >
        {children}
      </Store.Provider>
    )
  }

  const useStore = () => {
    const store = useContext(Store)
    return store
  }

  return { Provider, useStore }
}
