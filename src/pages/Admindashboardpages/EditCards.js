import React from 'react'
import CardStyled from '../../Styled-components/CardStyled'
import roundedImgs1 from '../../img/Ellipse 96.png';
import roundedImgs2 from '../../img/Ellipse 97.png';
import roundedImgs3 from '../../img/Ellipse 98.png';
import roundedImgs4 from '../../img/Ellipse 95.png';
import {useNavigate} from 'react-router-dom'

const Card = () => {

    let navigate = useNavigate();
    const routeChange = () => {
      let path = `../upload`;
      navigate(path);
    }

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
        <span className='carousel-info_bottom-text'><i class="fa-brands fa-ethereum"></i>&nbsp; <p>0.25ETH</p></span>
        <div className='carousel-info_bottom-text' id="stock">
          <p>5 of 321 in Stock</p>
        </div>
      </div>

      </div>
      <button className='buyButton' onClick={routeChange}>View</button>
      <button className='buyButton'>Edit</button>
    </CardStyled>
  )
}

export default Card