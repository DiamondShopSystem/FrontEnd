import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import GetResultProvider from './components/client/GetResultContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GetResultProvider>
        <App />
      </GetResultProvider>
    </Router>
  </React.StrictMode>
);

