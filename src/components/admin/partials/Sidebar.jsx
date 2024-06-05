import { Layout, Button, theme } from 'antd';
import '../styles/Sidebar.css';
import MenuList from './MenuList';
import { useState } from 'react';



const { Header, Sider } = Layout;

const Sidebar = () => {

    return (
        <Sider width={200} theme='dark' className=''>
            <MenuList  />
        </Sider>
    );
}

export default Sidebar;