import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/bootstrap.min.css'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ListContextProvider from './AppContext/ListContext'


ReactDOM.hydrate(
  <React.StrictMode>
    <ListContextProvider>
      <App />
    </ListContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
