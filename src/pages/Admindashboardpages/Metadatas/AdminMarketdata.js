import React from 'react'
import Dashboard from '../../Userdashboardpages/Dashboard'
import { Link, useLocation } from 'react-router-dom';
import MarketMetaStyled from '../../../Styled-components/MetadataStyled'

const AdminMarketMetadata = () => {
    const location = useLocation();
    
    const {
        name,
        price,
        url,
        description,
        itemId,
        dailyValue,
        apy,
        weeklyValue,
        total,
        available,
        buyNft
    } = location.state;

   // const priice = ethers.utils.parseUnits(price.toString(), "ether");

    return (
        <div>            
            <MarketMetaStyled>
            <div style={{display: 'flex'}}>
            <Link to='/admindashboard/marketplace'><i className='fas fa-arrow-left' style={{marginLeft: '10px', cursor: 'pointer', fontWeight: '600', width: '21px', marginTop:'10px'}}></i>&nbsp; &nbsp; </Link>
            <p style={{fontFamily: 'Inter', fontSize: '24px', fontWeight: '500' }}>Marketplace / NFT Metadata</p>
            </div>
            <div className='metadata_container'>
            <div style={{display: 'block'}}>
                <img src={url} alt='woman'/>
                <div className='nftContainer'>
                <div className='text-container' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <p className='listedNFT'>{"African NFT" && name} &nbsp; <span style={{fontSize: '14px', fontWeight: '600'}}>{"##" && `#${itemId}`}</span></p>
                    <button onClick={() => buyNft(itemId,price)} className='Buy'>Buy</button>
                </div>
                <div className='gridContainer'>
                    <div style={{display: 'block'}}>
                        <p className='title'>Floor Price</p>
                        <p className='details'>0.530ETH</p>
                    </div>
                    <div style={{display: 'block'}}>
                        <p className='title'>Daily Value</p>
                        <p className='details'>0.530ETH</p>
                    </div>
                    <div style={{display: 'block'}}>
                        <p className='title'>Weekly Value</p>
                        <p className='details'>0.530ETH</p>
                    </div>
                    <div style={{display: 'block'}}>
                        <p className='title'>Holders</p>
                        <p className='details'>2 out of 12</p>
                    </div>
                </div>
                <div className='contents'>
                    <p className='description'>Description</p>
                    <p>
                        {
                            description
                        }
                    </p>
                </div>
            </div> 
            </div>
            </div>
            </MarketMetaStyled>
            {/* <Dashboard/> */}
        </div>

    )
}

export default AdminMarketMetadata;
