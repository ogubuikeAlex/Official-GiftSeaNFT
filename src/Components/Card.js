import React from 'react'
import styled from 'styled-components';
import roundedImgs1 from '../img/Ellipse 96.png';
import roundedImgs2 from '../img/Ellipse 97.png';
import roundedImgs3 from '../img/Ellipse 98.png';
import roundedImgs4 from '../img/Ellipse 95.png';

const Card = () => {
  return (
    <CardStyled>
      <div className='carousel-info'>
        <div className='carousel-info_top'>
          <p>Africana Ape NFT</p>
          <div className='carousel-info_top-images'>
            <img className='roundImg1' src={roundedImgs1} alt='pics' />
            <img className='roundImg2' src={roundedImgs2} alt='pics' />
            <img className='roundImg3' src={roundedImgs3} alt='pics' />
            <img className='roundImg4' src={roundedImgs4} alt='pics' />
          </div>
        </div>
         <div className='carousel-info_bottom'>
        <span className='carousel-info_bottom-text'><i class="fa-brands fa-ethereum"></i>&nbsp; 0.25 ETH</span>
        <div className='carousel-info_bottom-text' id="stock">
          5 of 321 in Stock
        </div>
      </div>

      </div>
     
      <button className='buyButton'>Buy</button>
    </CardStyled>
  )
}

const CardStyled = styled.div`
h5{
  font-size: 18px;
  @media(max-width: 540px){
    font-size: 16px;
  }
}
.carousel-info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;    
    padding: .5em;   
  }
.carousel-info_top{
  display: flex;
  justify-content: space-between;
  padding: .5em 0;
  @media(max-width: 540px){
    width: 100%;
    font-size: 14px;   
  }   
  
  }
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
.carousel-info_bottom{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  font-weight: bolder;
  i{
    color: #00AC4F;
  }
  .carousel-info_bottom-text{
    color: #00AC4F;
    font-size: 14px;
    @media(max-width: 900px){
      font-size: 10px;
    }
    @media(max-width: 540px){
      font-size: 12px;
    }    
  }
}
#stock {
  color: #838383;
}

.carousel-info_top-images{
    display: flex;
    flex-direction: row;
    @media(max-width: 540px){
      width: 50%;
      transform: translateX(45px);
    }

  }
  .roundImg3{
    transform: translateX(10px);
  }
  .roundImg2{
    transform: translateX(19px);
    z-index: 50;
  }
  .roundImg1{
    transform: translateX(29px);
    z-index: 100;
  }
  .roundImg1,
  .roundImg2,
  .roundImg3,
  .roundImg4{
    width:  23.93px;
    height: 23.93px;
    border: 1px solid #fff;
    border-radius: 50%;
    display: flex;
    flex-direction: row;
    @media (max-width: 540px){
      width:20px;
      height: 20px;     
    }
  }
  .buyButton{
    width: 97%;
    background: #fff;    
    padding: 1em;   
    border: 1.17836px solid #02AAB0;
    border-radius: 11.7836px;   
    margin: .3rem;
    @media(max-width: 540px){
      width: 97%;
      font-size: 12px;
    }   
    :hover{
      transition: ease-in-out .9s all;
      background: #02AAB0;
      color: #fff;
      cursor: pointer;
    }
  }
`;

export default Card