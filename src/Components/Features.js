import React from 'react'
import styled from 'styled-components';
import group2 from '../img/Groupcombined.png'
import firstImg from '../img/01.png'
import group3 from '../img/Group3.png'
import group1 from '../img/Group1.png'

const Features = () => {
  return (
      <FeatureStyled>
        <h4>What we do</h4>
        <h1>Our Features</h1>
        <div className='grid-contain'>
            <div className='myImg'><img src={group2} alt=''/></div>
            <div className='featureProducts'>
                <div className='align'>
                    <div className='groupImg'><img src={firstImg} alt=''/></div>
                    <div className='rowContainer'>
                        <h4>Buy NFT</h4>
                        <p>You can buy NFT with us. 
                        </p>
                    </div>
                </div>
                <div className='align'>
                    <div className='groupImg'><img src={group3} alt=''/></div>
                    <div className='rowContainer'>
                        <h4>Gift NFT</h4>
                        <p>You can Gift NFT with us. 
                        </p>
                    </div>
                </div>
                <div className='align'>
                    <div className='groupImg'><img src={group1} alt=''/></div>
                    <div className='rowContainer'>
                        <h4>Sell NFT</h4>
                        <p>You can sell NFT with us. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </FeatureStyled>
  )
}
const FeatureStyled = styled.div`
    padding-top: 60px;

    h4, h1{
        text-align: center;
        font-weight: bold;
    }
    h4{
        @media(max-width: 540px){
            font-size: 22px;
        }
    }
    h1{
        @media(max-width: 540px){
            font-size: 22px;
        }
    }
    .grid-contain{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        text-align: center;
        padding: 30px 50px;
        @media(max-width: 540px){
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 50px;
            width: 100%;
            align-items: center;
            justify-content: center;
            padding: 50px 20px;
        }
    }
    .myImg{
        width:100%;
        justify-content: center;
        img{
            width: 70%;
            @media(max-width: 900){
                width: 60%;
                justify-content: center;
                align-items: center;
            }
            @media(max-width: 540px){
                width: 50%;
                justify-content: center;
                align-items: center;
            }
        }
    }
    .featureProducts{
        display:flex;
        flex-direction: column;
        width:100%;
    }
    .align{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 20px;
        .rowContainer{
            display: flex;
            flex-direction: column;
            line-height: 20px;
           h4, p{
                text-align: left;
                align-items: left;
                justify-content: center;
                margin-left: 40px;
            }
            
        }
        .groupImg{
            background: #EAF6F6;
            border-radius: 50%;
            height: 50px !important;
            width: 50px !important;
            padding: 0.5em;
            justify-content: center;
            align-items: center;
            img{
                padding-top:10px;
                height: 25px;
                width:25px;
            }
        }
    }
`;
export default Features;