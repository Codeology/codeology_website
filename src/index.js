import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeRouter from './pages/HomeRouter';
import * as serviceWorker from './serviceWorker';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      <HomeRouter />
    </ParallaxProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

if (window.location.href==="https://codeology.club") {
    window.location.href = "https://codeology.berkeley.edu"; 
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
