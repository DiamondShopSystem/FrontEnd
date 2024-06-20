import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import GetResultProvider from './components/helpers/GetResultContext';
import CartContextProvider from './components/helpers/CartContext';
import axios from 'axios';
import CartContextProvider from './components/helpers/CartContext';
// axios.defaults.baseURL = 'https://diamondshopsystem-api.onrender.com/api/v1';
axios.defaults.baseURL = 'http://127.0.0.1:8080/api/v1/'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CartContextProvider>
        <GetResultProvider>
          <App />
        </GetResultProvider>
      </CartContextProvider>
    </Router>
  </React.StrictMode>
  //rafce

);

