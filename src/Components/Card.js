import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import CardStyled from '../Styled-components/CardStyled'
import roundedImgs1 from '../img/Ellipse 96.png';
import roundedImgs2 from '../img/Ellipse 97.png';
import roundedImgs3 from '../img/Ellipse 98.png';
import roundedImgs4 from '../img/Ellipse 95.png';
import { buyNft } from '../pages/Userdashboardpages/Collection/metadataMethods';

import { nftAddress } from "../config";

const Card = ({ name, available, total, price, url, itemId, description, loadNfts, tokenId }) => {
  const navigate = useNavigate();

  return (
    <CardStyled>
      <div className='carousel-info'>
        <div className='carousel-info_top'>
          <button onClick={() => navigate("MarketMetadata", {
            state: {
              name,
              url,
              description,
              itemId,
              dailyValue: "dailyValue",
              apy: "stuff",
              weeklyValue: "weeklyValue",
              total,
              available,
              price,
              tokenId
            }
          })}
           className='metadatabtn'>
            {name ? name : "Africana"}
          </button>
          <div className='carousel-info_top-images'>
            <img className='roundImg1' src={roundedImgs1} alt='pics' />
            <img className='roundImg2' src={roundedImgs2} alt='pics' />
            <img className='roundImg3' src={roundedImgs3} alt='pics' />
            <img className='roundImg4' src={roundedImgs4} alt='pics' />
          </div>
        </div>
        <div className='carousel-info_bottom'>
          <span className='carousel-info_bottom-text'><i class="fa-brands fa-ethereum"></i>&nbsp; <p>{price ? price : 3} ETH</p></span>
          <div className='carousel-info_bottom-text' id="stock">
            <p className='bottom_stock'>{!available || available > total ? 1 : available} of {total ? total : 321} in Stock</p>
          </div>
        </div>

      </div>

      <button className='buyButton' onClick={() => buyNft(itemId, price, nftAddress, tokenId)}>Buy</button>

    </CardStyled>
  )
}

export default Card

