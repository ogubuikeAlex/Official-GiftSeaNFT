import React from 'react'
import styled from 'styled-components'
import Dashboard from '../../Userdashboardpages/Dashboard'
import {Link} from 'react-router-dom'
import woman from '../../../img/woman.png';

const Metadata = () => {
    return (
        <div>
            <TreasuryAdjusted>
            <div style={{display: 'flex'}}>
            <Link to='../treasury'><i className='fas fa-arrow-left' style={{marginLeft: '10px', cursor: 'pointer', fontWeight: '600', width: '21px', marginTop:'10px'}}></i>&nbsp; &nbsp; </Link>
            <p style={{fontFamily: 'Inter', fontSize: '24px', fontWeight: '500' }}>Treasury / NFT Metadata</p>
            </div>
            <div className='metadata_container'>
            <div style={{display: 'block'}}>
                <img src={woman} alt='woman'/>
                <div className='nftContainer'>
                <div className='text-container' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <p className='listedNFT'>Africana NFTs  &nbsp; <span style={{fontSize: '14px', fontWeight: '600'}}>#128</span></p>
                    <Link to=''><button className='Buy'>Edit</button></Link>
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
            </TreasuryAdjusted>
            <Dashboard/>
        </div>

    )
}

const TreasuryAdjusted = styled.div`
width: 718.99px;
@media only screen and (max-width: 1316px){
    width: 70%;
    height: fit-content;
    margin-left:-35px;
    padding: 1em;
}
@media only screen and (max-width: 1165px){
    margin-left: -45px;
}
@media only screen and (max-width: 1120px){
    margin-left: -55px;
}
@media(max-width: 1080px){
    margin-left: -65px;
}
@media only screen and (max-width: 1000px){
    margin-left: -80px;
}
@media only screen and (max-width: 1000px){
    margin-left: -80px;
}
@media(max-width: 918px){
    margin-left: -85px;
}
@media(max-width: 900px){
    margin-left: -95px;
}
@media(max-width: 849px){
    width: 100%;
    transform: translateX(40px);
}
@media only screen and (max-width: 768px){
    transform: translateX(90px);       
}
@media(max-width: 540px){
    width: 100%;
}
.metadata_container{
    width: 100%;
    background: #fff;
    padding: 0.8em;
    margin-top: 15px;
    object-fit: cover;
    img{
        height: 316px;
        width: 100%;
        object-fit: cover;
    }
}
.nftContainer{
    margin-top: 8px;
    margin-bottom: 8px;
    .listedNFT{
        font-family: Inter;
        font-size: 24px;
        font-weight: 500;
        line-height: 29px;
        text-align: left;
    }
    .Buy{
        border: none;
        color: #fff;
        padding: 0.8em;
        background: #02AAB0;
        border-radius: 3px;
        width: 154px;
    }
}
.gridContainer{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    position: relative;
    div{
        border: 1px solid rgba(26, 16, 54, 0.4);
        padding: 0.5em;
        justify-content: center;
        text-align: left;
        line-height: 10px;
        margin-top: 10px;
        .title{
            font-family: Inter;
            font-size: 12px;
            font-weight: 500;
            line-height: 15px;
            text-align: center;
            color: #645D66;
        }
        .details{
            font-family: Inter;
            font-size: 18px;
            font-weight: 700;
            line-height: 30px;
            text-align: center;
        }
    }
}
        .contents{
        .description{
            font-family: Inter;
            margin-top: 10px;
            font-size: 18px;
            font-weight: 500;
            line-height: 22px;
            text-align: left;
    
        }
    }

`;

export default Metadata;
