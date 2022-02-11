import React from 'react'
import styled from 'styled-components'
import Slider from './Slider';

const HeroSection = () => {

  return (
    <HeroSectionStyled>
    <div className='heroSection'>
      <div className='left-hero'>
        <h3>Buy, Gift and sell</h3>
        <h1>Lorem Ipsum dolor sit amet, consecteur adispiscing elit.</h1>
        <p>Access a pool of Non-fungible Tokens which can either be gifted
          or held for profit overtime.
        </p>
        <button className='collections'>See Collections</button>
        
      </div>
      <div className='right-hero'>
        <Slider/>
      </div>
      </div>
    
    </HeroSectionStyled>
  )
}

const HeroSectionStyled = styled.div`
.heroSection{
  background: #E5E5E5;
  display: grid;
  justify-content: center;
  padding: 40px;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  width: 100% !important;
  padding-top: 30px;
  padding-bottom: 30px;
  @media(max-width:540px) and (min-width: 365px){
    grid-template-columns: repeat(1, 1fr);
      padding-top: 50px;
      align-items: center;
      justify-content: center !important;
      width: 100%;
  }
}
.collections{
  background: linear-gradient(#02AAB0, #00CBAC);
  color: white;
  border: none;
  padding: 0.8em 80px;
  font-size: 19px;
  display: flex;
  border-radius: 10px;
  cursor: pointer;
}
.left-hero{
  line-height: 30px;
  width: 100%;
  justify-content: center;
}
.right-hero{
  box-shadow: 2px 4px 8px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 80%;
  object-fit: cover;
  margin: 2rem;
  background: #fff;
  padding: .3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media(max-width: 540px){
    transform: translateX(-8%);
    width: 100%;
  }
  .grid-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: .5em;

  }
.buyButton{
  object-fit: cover;
  width: 99%;
  padding: 0.7em !important;
}
  .right-img{
    border-radius: 20px;
    object-fit: cover;
    height: 150px;
    :hover{
      transform: ease-in-out all;
      cursor: pointer;
    }
  }
}
.second-grid-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 1em;
  font-weight: bolder;
  i{
    color: #00AC4F;
  }
  span{
    color: #00AC4F;
  }

}

  
`;

export default HeroSection
