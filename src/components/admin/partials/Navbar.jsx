import React from 'react';
import { Layout, Menu } from 'antd';
// import Layout from 'antd';
import Logo from '../partials/Logo';
const { Header, Content, Sider } = Layout;

const Navbar = () => {
    return (
        <>
            <Header style={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
            }} >
                <Logo />
            </Header>
            <Menu
                theme="dark"
                mode="horizontal"
                style={{ flex: 1, minWidth: 0 }}
            />
        </>

    );
}

export default Navbar;