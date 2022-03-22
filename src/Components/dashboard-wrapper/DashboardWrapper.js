import React from 'react'
import './dashboard-wrapper.scss'

const DashboardWrapper = props => {
    return (
        <div className='dashboard-wrapper'>
            {props.children}
        </div>
    )
}

export default DashboardWrapper

export const DashboardWrapperRight = props => {
    return (
        <div className='dashboard-wrapper__right'>
            {props.children}
        </div>
    )
}