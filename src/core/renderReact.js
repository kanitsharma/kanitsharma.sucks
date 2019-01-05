import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/home'
import createStore from '../store'
import rootReducer from '../store/rootReducer'

const { Provider, useStore } = createStore(rootReducer)

export const renderReact = () => {
  ReactDOM.render(<Provider><Home /></Provider>, document.getElementById('root'));
}

export { useStore } 