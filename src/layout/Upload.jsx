import React from 'react'
import './main-layout.scss'
import { Outlet } from 'react-router-dom'
import Adminsidebar from '../Components/UploadSidebar/UploadSidebar'
import TopNav from '../Components/topnav/TopNav'

const UploadMe = () => {
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

export default UploadMe
