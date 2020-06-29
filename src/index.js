import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import Connected from './connected';
import App from './App';
import Title from './title';
import ActivePage from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* <Connected /> */}
    <Title/>
    <ActivePage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
