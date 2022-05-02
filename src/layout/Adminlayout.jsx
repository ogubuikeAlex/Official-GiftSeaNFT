import React from 'react'
import './main-layout.scss'
import { Outlet } from 'react-router-dom'
import Adminsidebar from '../Components/adminsidebar/Adminsidebar'
import TopNav from '../Components/topnav/TopNav'
import Dashboard from '../pages/Userdashboardpages/Dashboard';

const AdminLayout = ({currentUser}) => {
    console.log(currentUser)
    return (
        <>
            <Adminsidebar />
            <div className="main">
                <div className="main__content">
                    <TopNav />
                    <Outlet />
                    <Dashboard currentUser = {currentUser}/>
                </div>
            </div>
        </>
    )
}

export default AdminLayout
