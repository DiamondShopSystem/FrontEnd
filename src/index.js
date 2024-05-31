import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import UserLogin from './components/client/UserLogin';
import UserLoginProvider from './components/client/UserLogin';
import GetResultProvider from './components/client/GetResultContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <GetResultProvider>
        <App />
      </GetResultProvider>
    </BrowserRouter>
  </React.StrictMode>

);

