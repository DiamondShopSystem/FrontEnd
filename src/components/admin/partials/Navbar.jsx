import React from 'react';
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import { DashboardOutlined, BarsOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import Logo from '../partials/Logo';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
const { Header } = Layout;

const menu = (
    <Menu>
        <Menu.Item key="profile" icon={<UserOutlined />}>
            <Link to="/admin/profile">Thông tin tài khoản</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout" icon={<LogoutOutlined />}>
            <Link to="/admin/login">Đăng Xuất</Link>
        </Menu.Item>
    </Menu>
);

const Navbar = () => {
    return (
        <Header style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 20px',
        }}>
            <Logo />
            <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
                <div className="navbar-dropdown">
                    <Avatar src="https://m.yodycdn.com/blog/anh-dai-dien-hai-yodyvn3-b3a8cf32-e08a-47fc-a741-71626aadc4de.jpg" />
                    <span className="username">Admin</span>
                </div>
            </Dropdown>
        </Header>
    );
}

export default Navbar;
