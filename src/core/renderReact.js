import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/home'
import createStore from '../store'
import rootReducer from '../store/rootReducer'

const { Provider, useStore } = createStore(rootReducer)

const Node = ({ Root }) => (
  <Provider>
    <Root />
  </Provider>
)

export const renderReact = () => {
  ReactDOM.render(
    <Node Root={Home} />,
    document.getElementById('root')
  );
}

if (module.hot) {
  module.hot.accept("../pages/home", () => {
    import('../pages/home').then(module => {
      const App = module.default
      ReactDOM.render(
        <Node Root={App} />,
        document.getElementById('root')
      );
    })
  });
}

export { useStore } 