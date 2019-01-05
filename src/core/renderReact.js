import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/home'
import createStore from '../store'
import rootReducer from '../store/rootReducer'

const { Provider, useStore } = createStore(rootReducer)

const Node = (
  <Provider>
    <Home />
  </Provider>
)

export const renderReact = () => {
  ReactDOM.render(
    Node,
    document.getElementById('root')
  );
}

export { useStore } 