import { Menu } from "antd";
import { DashboardOutlined, BarsOutlined, UserOutlined } from '@ant-design/icons';
import '../styles/MenuList.css';
import { Link } from "react-router-dom";
import Category from "../pages/category/Category";

const MenuList = () => {

    return (
        <Menu theme="dark" mode="inline" >
            <Menu.Item key="dashboard" icon={< DashboardOutlined />}>
                <Link to={"/admin/dashboard"} >Trang tổng quan</Link>
            </Menu.Item>

            <Menu.Item key="category" icon={<BarsOutlined />}>
                <Link to={"/admin/category"} >Trang Danh mục</Link>
            </Menu.Item>


            < Menu.SubMenu key="accounts" icon={<UserOutlined />} title="Quản lí tài khoản"  >
                <Menu.Item key="accounts1" icon >
                    <Link to={"/admin/adminaccount"} >Nhân viên</Link>
                </Menu.Item>
                <Menu.Item key="accounts2" icon >
                    <Link to={"/admin/useraccount"} >Khách viên</Link>
                </Menu.Item>
            </Menu.SubMenu>


            {/* <Menu.SubMenu key="accounts" icon={<UserOutlined />} title="Quản lí tài khoản" >
                <Menu.Item key="accounts1" icon={< UserOutlined />}>
                    Khách hàng
                </Menu.Item>
                <Menu.Item key="accounts2" icon={< UserOutlined />}>
                    Nhân viên
                </Menu.Item>
            </Menu.SubMenu> */}
        </ Menu>
    )
}

export default MenuList;