import React from 'react';
import { Layout, Menu, theme } from 'antd';
import Navbar from '../partials/Navbar';
import Sidebar from '../partials/Sidebar';
const { Header, Content, Sider } = Layout;

const AdminLayout = ({ children }) => {
    return (
        <>
            <Layout>
                <Navbar />
                <Layout style={{height:"100vh"}} >
                    <Sidebar />
                    <Layout>
                        <Content>
                            <div style={{ marginLeft: 200 }}  className="adminlayout__content">{children}</div>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </>
    )
}

export default AdminLayout;