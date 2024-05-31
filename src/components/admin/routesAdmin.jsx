import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import Dashboard from './Dashboard.jsx';
import Accounts from './Account.jsx';
import Category from './Category.jsx';
import Products from './Product.jsx';
import Header from './ui/Header.jsx'

function adminDashboard() {
  return (
    <div className='grid-container'>
      <Header />
      <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/category" element={<Category />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Sidebar>
    </div>
  );
};

export default adminDashboard;
