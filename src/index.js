import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../src/assets/css/bootstrap.min.css"
import "../src/assets/css/owl.carousel.min.css"
import "../src/assets/css/flaticon.css"
import "../src/assets/css/slicknav.css"
import "../src/assets/css/animate.min.css"
import "../src/assets/css/magnific-popup.css"
import "../src/assets/css/fontawesome-all.min.css"
import "../src/assets/css/themify-icons.css"
import "../src/assets/css/slick.css"
import "../src/assets/css/nice-select.css"
import "../src/assets/css/style.css"
import store from './store';


ReactDOM.render(
  <Provider store={store}>

  <React.StrictMode>
    <App />
  </React.StrictMode>  
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
