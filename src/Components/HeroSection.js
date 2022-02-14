import React from 'react'
import styled, {keyframes} from 'styled-components'
import Slider from './Slider';
import decoration from '../img/Decoration.png'
import {slideInUp} from 'react-animations';

const Slides = styled.div`
animation: 2s ${keyframes`${slideInUp}`}
`;

const HeroSection = () => {
  return (
    <HeroSectionStyled>
    <div className='heroSection'>
    <img className='decoration' src={decoration} alt=""/>
      <Slides>
      <div className='left-hero'>
        <p className='left-hero_tagline'>Buy, Gift and sell</p>
        <h1 className="left-hero_h1">Lorem Ipsum dolor sit amet, consecteur adispiscing elit.</h1>
        <p className='left-hero_description'>Access a pool of Non-fungible Tokens which can either be gifted
          or held for profit overtime.
        </p>
        <button className='left-hero_button'>See Collections</button>
      </div>
      </Slides>
      <Slides>
      <div className='rigth-container'>
        <div className='right-hero'>
        <Slider/>
        </div>
      </div>
      </Slides>
      </div>
    
    </HeroSectionStyled>
  )
}

const HeroSectionStyled = styled.div`
.decoration{
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  width:100%;
  object-fit: cover;
  justify-content: center;
  @media(max-width: 540px){
    height: 700px;
    object-fit: contain;
  }
  }
.heroSection{
  background: #E5E5E5;
  display: grid;
  margin:0 !important;
  justify-content: center;
  padding: 40px;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  @media(max-width:540px) and (min-width: 365px){
    grid-template-columns: repeat(1, 1fr);
      padding-top: 50px;
      padding-bottom: 100px;
      align-items: center;
      justify-content: center !important;
      margin: 0 !important;
  }
}
.left-hero_tagline{
  color: #02AAB0;
  font-weight: bold; 
  font-size: 14px;
}
h1{
  font-weight: bolder;
}
.left-hero_button{
  background: linear-gradient(45deg, #02AAB0, #00CBAC);
  color: white;
  border: none;
  font-size: 16px;
  width: 218px;
  padding:.5rem;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;

}
.left-hero{
  line-height: 30px;
  margin: 0 !important;
  justify-content: center;
  @media(max-width: 540px){
    transform: translateX(10px);
    margin: 0 !important;
  }
}
.left-hero_description {
  font-size: 15px;
}
.right-hero{
  box-shadow: 2px 4px 8px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  object-fit: cover;
  z-index: 50 !important;
  margin: 0 !important;
  padding: 9px;
  width: 65%;
  transform: translateX(120px);
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media(max-width:900px){
    width:80%;
    transform: translateX(20px);
  }
  @media(max-width:540px){
    margin: 0 !important;
    width:70%;
    transform: translateX(70px) translateY(10px);
  }

.buyButton{
  padding: 0.5em !important;
}
  .right-img{
    border-radius: 20px;
    object-fit: cover;
    height: 46px;
    width: 403px;
    :hover{
      transform: ease-in-out all;
      cursor: pointer;
    }
  }
}
  i{
    color: #00AC4F;
  }
  span{
    color: #00AC4F;
  }

}

  
`;

export default HeroSection