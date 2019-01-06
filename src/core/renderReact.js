import React from 'react';
import ReactDOM from 'react-dom';
import Root from './index'

export const renderReact = () => {
  ReactDOM.render(
    <Root />,
    document.getElementById('root')
  );
}

if (module.hot) {
  module.hot.accept("../pages/home", () => {
    import('./index').then(module => {
      const Root = module.default
      ReactDOM.render(
        <Root />,
        document.getElementById('root')
      );
    })
  });
}