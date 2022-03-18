import React from 'react'
import Dashboard from '../Userdashboardpages/Dashboard';
import Table from '../Admindashboardpages/Table'
import {Link} from 'react-router-dom';
import AdminHeroStyled from '../../Styled-components/AdminHeroStyled'
import Trending from '../Admindashboardpages/TrendingCards'

const AdminHero = () => {

  return (
      <AdminHeroStyled>
        <div className='Hero'>
          <div className='mintedNFT'>
            <p>Total Minted NFT</p>
            <p className='NFT'>223</p>
          </div>
          <div className='boughtNFT'>
            <p>Total Bought NFT</p>
            <p className='NFT'>124</p>
          </div>
          <div className='soldNFT'>
            <p>Total Sold NFT</p>
            <p className='NFT'>121</p>
          </div>
        </div>
        <div className='text-container' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '10px', transform: 'translateY(20px)'}}>
                <p className='listedNFT'>Recent Transactions</p>
                <Link to='../transactions'><p className='SeeAll' style={{cursor: 'pointer', background:'#fff', padding: '0.4em', borderRadius: '10px'}}>View All <i className='fas fa-caret-right'></i></p></Link>
            </div>
        <Table/>
        <Trending/>
        <Dashboard/>
        </AdminHeroStyled>
  )
}



export default AdminHero