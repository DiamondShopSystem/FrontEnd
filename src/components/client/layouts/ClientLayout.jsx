import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
const ClientLayout = () => {
    return (
        <main>
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}

export default ClientLayout;