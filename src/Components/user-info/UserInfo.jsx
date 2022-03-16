import React from 'react'
import './user-info.scss'

const UserInfo = () => {
    return (
        <div className='search'>
            <div className='searchAlign'>
                <i className='fas fa-search'/>
            <input type='search' placeholder='Search Something'/>
            </div>
            <button type='button'>Search</button>
        </div>
    )
}

export default UserInfo
