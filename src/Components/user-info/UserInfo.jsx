import React from 'react'
import './user-info.scss'

const UserInfo = () => {
    return (
        <div className='search'>
            <span className='searchAlign'>
                <i className='fas fa-search'/>
            <input type='search' placeholder='Search Something'/>
            </span>
            <button type='button'>Search</button>
        </div>
    )
}

export default UserInfo
