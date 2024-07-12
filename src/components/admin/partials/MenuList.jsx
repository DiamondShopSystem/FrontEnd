import { Menu } from "antd";
import { DashboardOutlined, BarsOutlined, UserOutlined, ShoppingCartOutlined, KeyOutlined } from '@ant-design/icons';
import { IoDiamond } from "react-icons/io5";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const MenuList = () => {
    const [current, setCurrent] = useState('');
    const [openKeys, setOpenKeys] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname.replace('/admin/', '');
        setCurrent(path);
        if (path.startsWith('category')) {
            setCurrent('category');
        }
        if (path.startsWith('product')) {
            setCurrent('product');
        }
        if (path.startsWith('account/staff')) {
            setCurrent('account/staff');
        }
        if (path.startsWith('account/customer')) {
            setCurrent('account/customer');
        }

        // Mở submenu nếu đường dẫn hiện tại liên quan đến "account"
        if (path.startsWith('account')) {
            setOpenKeys(['account']);
        } else {
            setOpenKeys([]);
        }
    }, [location.pathname]);

    const handleClick = (e) => {
        setCurrent(e.key);
        navigate(`/admin/${e.key}`);
    };

    const handleOpenChange = (keys) => {
        setOpenKeys(keys);
    };
    return (
        <Menu theme="light"
            mode="inline"
            onClick={handleClick}
            selectedKeys={[current]}
            openKeys={openKeys}
            onOpenChange={handleOpenChange}
        >
            <Menu.Item key="dashboard" icon={< DashboardOutlined />}>
                {/* <Link to={"/admin/dashboard"} >Trang tổng quan</Link> */}
                Trang tổng quan
            </Menu.Item>
            <Menu.Item key="product" icon={<IoDiamond />}>
                {/* <Link to={"/admin/dashboard"} >Trang tổng quan</Link> */}
                Trang sản phẩm
            </Menu.Item>
            <Menu.Item key="category" icon={<BarsOutlined />}>
                Trang danh mục

                {/* <Link to={"/admin/category"} >Trang Danh mục</Link> */}
            </Menu.Item>

            < Menu.SubMenu key="account" icon={<UserOutlined />} title="Quản lí tài khoản"  >
                <Menu.Item key="account/staff" icon >
                    Nhân Viên
                </Menu.Item>
                <Menu.Item key="account/customer" icon >
                    Khách hàng
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="order" icon={<ShoppingCartOutlined />}>
                Quản Lý Đơn Hàng

                {/* <Link to={"/admin/category"} >Trang Danh mục</Link> */}
            </Menu.Item>
            <Menu.Item key="role" icon={<KeyOutlined />}>
                Trang phân quyền

                {/* <Link to={"/admin/category"} >Trang Danh mục</Link> */}
            </Menu.Item>

        </ Menu>
    )
}

export default MenuList;