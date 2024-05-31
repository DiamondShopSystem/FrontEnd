import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Accounts from './pages/Account.jsx';
import Category from './pages/Category.jsx';
import Products from './pages/Product.jsx';
import Header from './ui/Header.jsx'

function adminDashboard() {
  return (
    <div className='grid-container'>
      <Header />
      <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="admin/dashboard" element={<Dashboard />} />
        <Route path="admin/accounts" element={<Accounts />} />
        <Route path="admin/category" element={<Category />} />
        <Route path="admin/products" element={<Products />} />
      </Routes>
    </Sidebar>
    </div>
  );
};

export default adminDashboard;
