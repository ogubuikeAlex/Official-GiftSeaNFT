import React from 'react';
import styled, {keyframes} from 'styled-components';
import {fadeInUpBig} from 'react-animations';
import attach from '../../img/Vector 1.png';
import attached from '../../img/Vector 2.png';
import NFTContainerStyled from '../../Styled-components/NFTContainer';
import NewsletterStyled from '../../Styled-components/NewsletterStyled';
import Card from '../../Components/Card';
import image1 from '../../img/unsplashed4.png';
import image2 from '../../img/unsplashed3.png';
import image3 from '../../img/unsplashed2.png';
import image4 from '../../img/unsplash.png';
import woman from '../../img/woman.png';
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Row} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

const Bounce = styled.div`
animation: 1s ${keyframes`${fadeInUpBig}`}`;

const HeroSection = () => {

    let navigate = useNavigate();
    const routeChange = () => {
      let path = `marketplace`;
      navigate(path);
    }

  return (
      <HeroSectionStyled>
        <Bounce>
      <NewsletterStyled>
    <div className='container'>
        <img className='attach' src={attach} alt=''/>
        <img className='attach' src={attached} alt=''/>
        <div className='center-container'>
            <p>Own an NFT with just four steps</p>
            <button className='explore' onClick={routeChange}>Explore Marketplace</button>
        </div>
        </div>
        </NewsletterStyled>
        <NFTContainerStyled>
        <div className='nftContainer'>
            <div className='text-container' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <p className='listedNFT'>New listed NFT</p>
                <p className='SeeAll'>See All</p>
            </div>
            <Row className='contentContainer'>
                <Col style={{margin: '0', padding: '0'}}>
                    <img className='woman' src={woman} alt=''/>
                </Col>
                <Col style={{display: 'block'}}>
                    <p className='africana'>Africana NFT</p>
                    <p className='africanaContent'>
                    This beautiful artwork represents the heritage of us made with 
                    earnest and soulful this art means a lot to him This beautiful 
                    artwork represents the heritage of us made with earnest and soulful 
                    this art means a lot to him.
                    </p>
                    <Row className='ether'>
                        <Col>
                        <p className='ethereumprice'>Floor Price</p>
                        <p className='holding'>0.530 ETH</p>
                        </Col>
                        <Col>
                        <p className='ethereumprice'>Holders</p>
                        <p className='holding'>2 out of 12</p>
                        </Col>
                    </Row>
                        <Row className='transactionButton'>
                            <Col>
                            <button className='view'>View NFT</button>
                            </Col>
                            <Col>
                            <button className='buy'>Buy</button>
                            </Col>
                        </Row>
                </Col>
            </Row>
            <div className='text-container' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '30px'}}>
                <p className='listedNFT'>Trending NFTs</p>
                <p className='SeeAll'>See All</p>
                </div>
            <div className='NFTCardContainer'>
            <div className='dashCards'>
            <img src={image1}alt=""/>
            <Card/>
            </div>
            <div className='dashCards'>
            <img src={image2}alt=""/>
            <Card/>
            </div>
            <div className='dashCards'>
            <img src={image3}alt=""/>
            <Card/>
            </div>
            <div className='dashCards'>
            <img src={image4}alt=""/>
            <Card/>
            </div>
            </div>
            </div>
        </NFTContainerStyled>
        </Bounce>        
        </HeroSectionStyled>
  )
}
const HeroSectionStyled = styled.div`
width: 718.99px;
@media only screen and (max-width: 1440px){
    width: 700px;
}
@media only screen and (max-width: 1366px){
    transform: translateX(-25px);
    width: 690px;
}
@media only screen and (max-width: 1316px){
    width: 70%;
    height: fit-content;
    margin-left:-10px;
    padding: 1em;
}
@media only screen and (max-width: 1280px){
    margin-left: -15px;
}
@media only screen and (max-width: 1255px){
    margin-left:-18px;
  }
@media only screen and (max-width: 1165px){
    margin-left: -45px;
}
@media only screen and (max-width: 1120px){
    margin-left: -55px;
}
@media only screen and (max-width: 1100px){
    margin-left: -28px;
  }
@media(max-width: 1080px){
    margin-left: -35px;
}
@media only screen and (max-width: 1045px){
    margin-left: -110px;
    width: 87%;
}
@media only screen and (max-width: 1000px){
    margin-left: -110px;
}
@media(max-width: 918px){
    margin-left: -118px;
}
@media(max-width: 900px){
    margin-left: -125px;
    width: 86%;
}
@media(max-width: 849px){
    width: 100%;
    transform: translateX(40px);
}
@media only screen and (max-width: 768px){
    margin-left: -40px;
}
@media(max-width: 540px){
    width: 100%;
}
`;

export default HeroSection