import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/home'
import createStore from '../store'

const { Provider, useStore } = createStore({ counter: 1 })

export const renderReact = () => {
  ReactDOM.render(<Provider><Home /></Provider>, document.getElementById('root'));
}

export { useStore } 