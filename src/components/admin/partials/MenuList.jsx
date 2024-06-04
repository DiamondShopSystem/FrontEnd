import { Menu } from "antd";
import { DashboardOutlined, BarsOutlined, UserOutlined  } from '@ant-design/icons';
import '../styles/MenuList.css';


const MenuList = () => {

    return (
        <Menu theme="dark" mode="inline" >
            <Menu.Item key="dashboard" icon={< DashboardOutlined />}>
                Trang tổng quan
            </Menu.Item>
            <Menu.SubMenu key="accounts" icon={<UserOutlined />} title="Quản lí tài khoản" >
                <Menu.Item key="accounts1" icon={< UserOutlined />}>
                    Khách hàng
                </Menu.Item>
                <Menu.Item key="accounts2" icon={< UserOutlined />}>
                    Nhân viên
                </Menu.Item>
            </Menu.SubMenu>
        </ Menu>
    )
}

export default MenuList;