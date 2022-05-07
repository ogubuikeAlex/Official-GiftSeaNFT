import React from 'react'
import './main-layout.scss'
import { Outlet } from 'react-router-dom'
import Adminsidebar from '../Components/adminsidebar/Adminsidebar'
import TopNav from '../Components/topnav/TopNav'
import DashbAdmin from '../pages/Userdashboardpages/DashbAdmin';

const AdminLayout = ({currentUser}) => {
    console.log(currentUser)
    return (
        <>
            <Adminsidebar />
            <div className="main">
                <div className="main__content">
                    <TopNav />
                    <Outlet />
                    {/* <DashbAdmin currentUser = {currentUser}/> */}
                </div>
            </div>
        </>
    )
}

export default AdminLayout
