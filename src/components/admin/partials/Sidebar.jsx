import { Layout, Button, theme } from 'antd';
import '../styles/Sidebar.css';
import MenuList from './MenuList';
import { useState } from 'react';


const { Header, Sider } = Layout;

const Sidebar = () => {

    return (
        <Sider width={200} theme='dark' style={{position: 'fixed', height: 'calc(100vh)', zIndex: 999}}>
            <MenuList  style={{ marginLeft: 200 }}/>
        </Sider>
    );
}

export default Sidebar;