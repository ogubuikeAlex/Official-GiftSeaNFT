import React from 'react'
import './main-layout.scss'
import { Outlet } from 'react-router-dom'
import Adminsidebar from '../Components/adminsidebar/Adminsidebar'
import TopNav from '../Components/topnav/TopNav'

const AdminLayout = () => {
    return (
        <>
            <Adminsidebar />
            <div className="main">
                <div className="main__content">
                    <TopNav />
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default AdminLayout
