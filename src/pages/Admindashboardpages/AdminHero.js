import React from 'react'
import Dashboard from '../Userdashboardpages/Dashboard';
import Table from '../Admindashboardpages/Table'
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
        <Table/>
        <Trending/>
        <Dashboard/>
        </AdminHeroStyled>
  )
}



export default AdminHero