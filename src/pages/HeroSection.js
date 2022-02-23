import React from 'react'
import styled, {keyframes} from 'styled-components'
import {fadeInRight} from 'react-animations';
import attach from '../img/Vector 1.png'
import attached from '../img/Vector 2.png'
import Dashboard from './Dashboard';
import Card from '../Components/Card'
import image1 from '../img/unsplashed4.png';
import image2 from '../img/unsplashed3.png';
import image3 from '../img/unsplashed2.png';
import image4 from '../img/unsplash.png';
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Row} from 'react-bootstrap'
import woman from '../img/woman.png';

const Bounce = styled.div`
animation: 1s ${keyframes`${fadeInRight}`}`;

const HeroSection = () => {
  return (
      <HeroSectionStyled>
        <Bounce>
      <NewsletterStyled>
    <div className='container'>
        <img className='attach' src={attach} alt=''/>
        <img className='attach' src={attached} alt=''/>
        <div className='center-container'>
            <p>Own an NFT with just four steps</p>
            <button className='explore'>Explore Marketplace</button>
        </div>
        </div>
        </NewsletterStyled>
        <NFTcontainerStyled>
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
        </NFTcontainerStyled>
        </Bounce>
        <Dashboard/>
        </HeroSectionStyled>
  )
}
const HeroSectionStyled = styled.div`
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
`;
const NewsletterStyled = styled.div`
background: #02AAB0;
border-radius: 10px;
width: 100%;
height: 181px;
margin-bottom: 15px;
@media only screen and (max-width: 1316px){
    width: 100%;
}
.attach{
    position: absolute;
    width: 710.19px;
    height: 181px;
    @media only screen and (max-width: 1316px){
        width: 46.7%;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    @media(max-width: 1220px){
        width: 44.8%;
    }
    @media only screen and (max-width: 849px){
        width: 91%;
    }
    @media only screen and (max-width: 768px){
        width: 94%;
    }
    @media only screen and (max-width: 400px){
        width: 88%;
      }
}
.center-container{
    justify-content: left;
    transform: translateY(30px) translateX(20px);
    @media(max-width: 540px){
        width: 100%;
    }
}
.center-container p{
    width: 368px;
    height: 29px;
    color: #FFF;
    font-family: 'Inter';
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    @media (max-width: 1000px){
        transform: translateX(-10px);
        font-size: 18px;
    }
    @media(max-width: 540px){
        width: 100%;
        font-size:16px;
    }

}
 .explore{
    border: none;
    background: #FFF;
    color: #02AAB0;
    width: 186px;
    height: 41px;
    transform: translateY(20px);
    @media(max-width: 540px){
        width: 70%;
        font-size: 16px;
    }
    }
}

`;
const NFTcontainerStyled = styled.div`
.contentContainer{
    height: 370px;
    width: 716px;
    border-radius: 10px;
    background: #FFF;
    padding: 0.8em;
    transform: translateX(10px);
    @media only screen and (max-width: 1316px){
        width: 100%;
        height: fit-content;
    }
    @media(max-width: 1220px){
        width: 100%;
    }
    @media only screen and (max-width: 1165px){
        width: 100%;
        height: fit-content;
        display: grid;
        grid-template-columns: repeat(1, 1fr);

    }
    @media only screen and (max-width: 768px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media only screen and (max-width: 540px){
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        height:fit-content;
        :hover{
            box-shadow: 0px 20px 20px 0px #3333331A;
        }
    }
}

.NFTCardContainer{
    display: grid;
    width: 710.19px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    @media only screen and (max-width: 1316px){
        width: 100%;
    }
    @media(max-width: 1220px){
        width: 100%;
    }
    @media(max-width: 1045px)and(min-width: 900px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: calc(100% + 17%);
    }
    @media (max-width: 1080px){
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
    @media only screen and (max-width: 849px){
        grid-template-columns: repeat(2, 1fr);
        margin-left: -30px;
    }
    @media only screen and (max-width: 825px){
        grid-template-columns: repeat(1, 1fr);
        width: 80%;
        transform: translateX(45px);
    }
    @media only screen and (max-width: 768px){
        display: grid;
        width: 90%;
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 682px){
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
    @media only screen and (max-width: 540px){
        grid-template-columns: repeat(1, 1fr);
        width: 80%;
        transform: translateX(80px);
        justify-content: center;
    }
    @media(max-width:400px){
        width: 100%;
        transform: translateX(30px);
    }
    .dashCards{
        padding:0.6em;
        background:#FFF;
        border-radius: 20px;
        margin: 10px;
        box-shadow: 0px 10px 30px 0px #0000001A;
        @media(max-width: 1220px){
            width: 100%;
            font-size: 14px;
        }
        @media(max-width: 1138px){
            width: 100%;
            font-size: 12px;
            font-weight: 500;
        }
        @media(max-width: 1080px){
            width: 65%;
            transform: translateX(55px);
            font-size: 16px;
            font-weight: 600;
        }
        @media(max-width: 950px){
            font-size: 13px;
            width: 70%;
            margin-left: -10px;
        }
        @media(max-width: 932px){
            font-size: 10px;
        }
        @media(max-width: 918px){
            width: 85%;
            margin-left: -35px;
        }
        @media(max-width: 849px){
            width: 100%;
        }
        @media(max-width: 540px){
            width: 100%;
            transform: translateX(20px);
        }
        @media(max-width: 400px){
            width: 100%;
            transform: translateX(40px);
        }
        button{
            @media only screen and (max-width: 1080px){
                padding:0.8em;
            }
            @media only screen and (max-width: 1200px){
                padding:0.4em;
            }
            @media only screen and (max-width: 1165px){
                padding:0.4em;
            }
            @media(max-width: 932px){
                padding: 0.7em;
            }
        }
        }
}
.text-container{
    @media only screen and (max-width: 1316px){
        width: 100%;
    }
    @media(max-width: 1220px){
        width: 100%;
    }
    @media only screen and (max-width: 540px){
        width: 100%;
    }
}
.woman{
    height: 316px;
    width: 320px;
    border-radius: 3px;
    @media only screen and (max-width: 1316px){
        width: 100%;
    }
    @media(max-width: 1220px){
        width: 100%;
    }
    @media(max-width: 540px){
        width: 100%;
    }
}
.listedNFT{
    width: 175px;
    font-size: 24px;
    font-weight: 500;
    font-family: 'inter';
    line-height: 29px;
}
.ether{
    @media(max-width: 540px){
        margin-top:40px;
    }
}
.SeeAll{
    width: 52px;
    line-height: 19px;
    color: #645D66;
    font-weight: 400;
    font-size: 16px;
}
.africana{
    height: 29px;
    width: 162px;
    font-family: 'Inter';
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    text-align: left;
    @media(max-width: 540px){
        margin-top: 10px;
        margin-left: 10px;
    }
}
.africanaContent{
    height: 100px;
    width: 291px;
    font-family: 'Inter';
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: #888888;
    @media only screen and (max-width: 1165px){
        width: 100%;
        height: fit-content;
    }
    @media(max-width: 540px){
        width: 100%;
    }
}
.ethereumprice{
    font-family: 'Inter';
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
    color:#645D66;
    @media(max-width: 540px){
        margin-top: -20px;
        width: 100%;
    }
}
.holding{
    height: 30px;
    width: 120px;
    font-family: 'inter';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    text-align: left;
}
.view,
.buy{
    height: 41px;
    width: 100%;
    background: #FFF;
    font-size:14px;
    border-radius: 3px;
    border: solid 1px #888888;
    margin-top: 35px;
    outline: none;
    :hover{
        background: #02AAB0;
        transition: ease-in-out all .4s;
        cursor: pointer;
        outline: none;
        color: #FFF;
    }
}

`;
export default HeroSection