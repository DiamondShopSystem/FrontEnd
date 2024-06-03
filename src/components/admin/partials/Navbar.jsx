import React from 'react';
import { Layout, Menu } from 'antd';
// import Layout from 'antd';
import Logo from '../partials/Logo';
const { Header, Content, Sider } = Layout;

const Navbar = () => {
    return (
        <>
            <Header style={{ display: 'flex', alignItems: 'center' }} >
                <Logo />
                <Menu
                    theme="dark"
                    mode="horizontal"
                />
            </Header>
        </>

    );
}

export default Navbar;