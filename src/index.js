import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import GetResultProvider from './components/helpers/GetResultContext';
import CartContextProvider from './components/helpers/CartContext';

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

