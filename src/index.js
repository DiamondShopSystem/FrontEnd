import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route } from "react-router-dom";
import GetResultProvider from './context/GetResultProvider';
import axios from 'axios';
import { Routes } from 'react-router-dom';
import AuthProvider from "./context/AuthProvider";
// axios.defaults.baseURL = 'https://diamondshopsystem-api.onrender.com/api/v1';
axios.defaults.baseURL = 'http://127.0.0.1:8080/api/v1/'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider >
          <GetResultProvider>
            <Routes>
              <Route path='/*' element={<App />} />
            </Routes>
          </GetResultProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
  //rafce

);

