import React from 'react'
import './main-layout.scss'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/sidebar/Sidebar'
import TopNav from '../Components/topnav/TopNav'
import Dashboard from '../pages/Userdashboardpages/Dashboard'
import { propTypes } from 'react-bootstrap/esm/Image'

const MainLayout = (props) => {
    console.log("@userLayout", props.currentUser)

    return (
        <>
            <Sidebar />
            <div className="main">
                <div className="main__content">
                    <TopNav />
                    <Outlet />
                    <Dashboard currentUser={props.currentUser}/>                    
                </div>
            </div>
        </>
    )
}

export default MainLayout