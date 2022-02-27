import React from 'react'
import styled from 'styled-components'
import Dashboard from '../Userdashboardpages/Dashboard';

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
        <Dashboard/>
        </AdminHeroStyled>
  )
}

const AdminHeroStyled = styled.div`
.Hero{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 10px;
  box-shadow: 0px 10px 20px 0px #0000001A;
  background: #FFF;
  padding: 0.4rem;
  margin-left:-5px;
  @media only screen and (max-width: 1440px){
    width: 68%;
  }
  @media only screen and (max-width: 1316px){
    width: 58%;
  }
  .boughtNFT{
    border-right: 1px solid #C4C4C4;
    height: 80px;
    padding: 0.5em 30px;
    border-left: 1px solid #C4C4C4;;
    justify-content: center;
    text-align: center;
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
    color: #02AAB0;
  }
  .mintedNFT,
  .soldNFT{
    padding: 0.5em 30px;
    justify-content: center;
    text-align: center;
    font-family: Inter;
    height: 80px;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
    color: #02AAB0;
  }
  
  .NFT{
    font-family: Inter;
    font-size: 26px;
    font-weight: 500;
    line-height: 39px;
    text-align: left;
    color: #252F40;

  }
}

`;

export default AdminHero