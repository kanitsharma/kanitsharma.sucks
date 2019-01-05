import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/home'

export const renderReact = () => {
  ReactDOM.render(<Home />, document.getElementById('root'));
}