import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Styles
import GlobalStyles from './Assets/Styles/global';
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
