import React from 'react'
import styled from 'styled-components'
import Dashboard from '../../Userdashboardpages/Dashboard'
import {Link} from 'react-router-dom'
import woman from '../../../img/woman.png';
import MarketMetaStyled from '../../../Styled-components/MetadataStyled'

const Metadata = () => {
    return (
        <div>
            <MarketMetaStyled>
            <div style={{display: 'flex'}}>
            <Link to='../marketplace'><i className='fas fa-arrow-left' style={{marginLeft: '10px', cursor: 'pointer', fontWeight: '600', width: '21px', marginTop:'10px'}}></i>&nbsp; &nbsp; </Link>
            <p style={{fontFamily: 'Inter', fontSize: '24px', fontWeight: '500' }}>Marketplace / NFT Metadata</p>
            </div>
            <div className='metadata_container'>
            <div style={{display: 'block'}}>
                <img src={woman} alt='woman'/>
                <div className='nftContainer'>
                <div className='text-container' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <p className='listedNFT'>Africana NFTs  &nbsp; <span style={{fontSize: '14px', fontWeight: '600'}}>#128</span></p>
                    <button className='Buy'>Buy</button>
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
                    This beautiful artwork represents the heritage of us made with earnest and soulful this art means a lot to him This beautiful artwork represents the heritage of us made with earnest and soulful this art means a lot to him This beautiful artwork represents the heritage of us made with earnest and soulful this art means a lot to him This beautiful artwork represents the heritage of us made with earnest and soulful this art means a lot to him<br></br><br></br>
                    This beautiful artwork represents the heritage of us made with earnest and soulful this art means a lot to him This beautiful artwork represents the heritage of us made with earnest and soulful this art means a lot to himThis beautiful artwork represents the heritage of us made with earnest and soulful this art means a lot to him This beautiful artwork represents the heritage of us made with earnest and soulful this art means a lot to him.
                    </p>
                </div>
            </div> 
            </div>
            </div>
            </MarketMetaStyled>
            <Dashboard/>
        </div>

    )
}

export default Metadata;
