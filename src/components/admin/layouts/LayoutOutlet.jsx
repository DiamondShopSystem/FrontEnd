import React from 'react'
import { Outlet } from 'react-router-dom';

const LayoutOutlet = () => {
    return (
        <main>
            <Outlet />
        </main>

    )
}

export default LayoutOutlet;