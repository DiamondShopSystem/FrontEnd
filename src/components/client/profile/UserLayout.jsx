import React, { Children } from 'react'
import UserProfile from './UserProfile'
import { Header } from 'antd/es/layout/layout'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { Outlet } from 'react-router-dom'

const UserLayout = ({children}) => {
    return (
        <>
            <Layout style={{ height: '100vh' }}>
                <UserProfile />
                <Content>
                   {children}
                </Content>
            </Layout>
        </>

    )
}

export default UserLayout