import React, { useEffect, useState } from 'react'
import './admin.scss'
import logo from '../../img/logo.png';
import { Link, useLocation } from 'react-router-dom'
import Adminsidebar from '../../configs/Adminsidebar';


const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const location = useLocation()

    useEffect(() => {
        const curPath = window.location.pathname.split('/admin_dashboard')[1]
        const activeItem = Adminsidebar.findIndex(item => item.section === curPath)

        setActiveIndex(curPath.length === 0 ? 0 : activeItem)
    }, [location])

    const closeSidebar = () => {
        document.querySelector('.main__content').style.transform = 'scale(1) translateX(0)'
        setTimeout(() => {
            document.body.classList.remove('sidebar-open')
            document.querySelector('.main__content').style = ''
        }, 500);
    }

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={logo} alt=''/>
                <div className="sidebar-close" onClick={closeSidebar}>
                    <i className='bx bx-x'></i>
                </div>
            </div>
            <div className="sidebar__menu">
                {
                    Adminsidebar.map((admin, index) => (
                        <Link to={admin.link} key={`admin-${index}`} className={`sidebar__menu__item ${activeIndex === index && 'active'}`} onClick={closeSidebar}>
                            <div className="sidebar__menu__item__icon">
                                {admin.icon}
                            </div>
                            <div className="sidebar__menu__item__txt">
                                {admin.text}
                            </div>
                        </Link>
                    ))
                }
                <div className="sidebar__menu__item" style={{marginTop: '70px'}}>
                    <div className="sidebar__menu__item__icon">
                        <i style={{color: '#FF4646'}} className='bx bx-log-out'></i>
                    </div>
                    <div className="sidebar__menu__item__txt" style={{color: '#FF4646'}}>
                        Logout
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
