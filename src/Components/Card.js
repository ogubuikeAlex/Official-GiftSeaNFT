import React from 'react'
import styled from 'styled-components';
import roundedImgs from '../img/unsplashed5.png';

const Card = () => {
  return (
        <CardStyled>
        <div className='grid-container'>
        <h5>Africana Ape NFT</h5>
        <div className='right-flex'>
          <img className='roundImg' src={roundedImgs} alt='pics'/>
          <img className='roundImg' src={roundedImgs} alt='pics'/>
          <img className='roundImg' src={roundedImgs} alt='pics'/>
          <img className='roundImg' src={roundedImgs} alt='pics'/>
        </div>
        </div>
        <div className='second-grid-container'>
        <span><i class="fa-brands fa-ethereum"></i>&nbsp; 0.25 ETH</span>
        <div className='right-flex'>
          5 of 321 in Stock
        </div>
        </div>
        <button className='buyButton'>Buy</button>
        </CardStyled>
  )
}

const CardStyled = styled.div`
.grid-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: .5em;
  }
  .right-img{
    border-radius: 20px;
    object-fit: cover;
    height: 250px;
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
.right-flex{
    display: flex;
    flex-direction: row;
    font-weight: bolder;

  }
  .roundImg{
    width:  40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    display: flex;
    flex-direction: row;
  }
  .buyButton{
    width: 98%;
    background: #fff;
    justify-content: center;
    align-items: center;
    padding: 1em;
    border: solid 1px #02AAB0;
    border-radius: 8px;
    margin: .3rem;
    :hover{
      transition: ease-in-out .3s all;
      background: #02AAB0;
      color: #fff;
      cursor: pointer;
      transform: translateY(-6px);

    }
  }
`;

export default Card