import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import { HashRouter as Route } from 'react-router-dom';

ReactDOM.render(
  <Route>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Route>,
  document.getElementById('root')
);