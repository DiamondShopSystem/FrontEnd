import React from 'react';
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import { DashboardOutlined, BarsOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { IoDiamond } from "react-icons/io5";
import Logo from '../partials/Logo';
import '../styles/Navbar.css';

const { Header } = Layout;

const menu = (
    <Menu>
        <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
            <a href="/admin/dashboard">Trang tổng quan</a>
        </Menu.Item>
        <Menu.Item key="product" icon={<IoDiamond />}>
            <a href="/admin/product">Trang sản phẩm</a>
        </Menu.Item>
        <Menu.Item key="category" icon={<BarsOutlined />}>
            <a href="/admin/category">Trang danh mục</a>
        </Menu.Item>
        <Menu.SubMenu key="account" title="Quản lí tài khoản" icon={<UserOutlined />}>
            <Menu.Item key="account/staff">
                <a href="/admin/account/staff">Nhân Viên</a>
            </Menu.Item>
            <Menu.Item key="account/user">
                <a href="/admin/account/user">Khách hàng</a>
            </Menu.Item>
        </Menu.SubMenu>
        <Menu.Divider />
        <Menu.Item key="logout" icon={<LogoutOutlined />}>
            <a href="/admin/login">Đăng Xuất</a>
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
                    <Avatar icon={<UserOutlined />} />
                    <span className="username">Admin</span>
                </div>
            </Dropdown>
        </Header>
    );
}

export default Navbar;
