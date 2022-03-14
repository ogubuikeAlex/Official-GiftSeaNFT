import React from 'react'
import { ethers  } from 'ethers';
import styled from 'styled-components';
import CardStyled from '../Styled-components/CardStyled'
import roundedImgs1 from '../img/Ellipse 96.png';
import roundedImgs2 from '../img/Ellipse 97.png';
import roundedImgs3 from '../img/Ellipse 98.png';
import roundedImgs4 from '../img/Ellipse 95.png';

  const PreviewCard = ({name, description, price})=>{
    return (
      <CardStyled>
        <div className='carousel-info'>
          <div className='carousel-info_top'>
            <p>{name}</p>
            <div className='carousel-info_top-images'>
              <img className='roundImg1' src={roundedImgs1} alt='pics' />
              <img className='roundImg2' src={roundedImgs2} alt='pics' />
              <img className='roundImg3' src={roundedImgs3} alt='pics' />
              <img className='roundImg4' src={roundedImgs4} alt='pics' />
            </div>
          </div>
          <div className='carousel-info_bottom'>
            <span className='carousel-info_bottom-text'><i class="fa-brands fa-ethereum"></i>&nbsp; <p>{price} ETH</p></span>
            <div className='carousel-info_bottom-text' id="stock">
              <p className='bottom_stock'>5 of 321 in Stock</p>
            </div>
          </div>

      </div>
      <div>{description}</div>
    </CardStyled>
  )
}

  export default PreviewCard
