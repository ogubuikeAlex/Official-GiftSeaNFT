import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import CardStyled from '../Styled-components/CardStyled'
import roundedImgs1 from '../img/Ellipse 96.png';
import roundedImgs2 from '../img/Ellipse 97.png';
import roundedImgs3 from '../img/Ellipse 98.png';
import roundedImgs4 from '../img/Ellipse 95.png';
import { buyNft } from '../pages/Userdashboardpages/Collection/metadataMethods';

import { nftAddress, marketAddress } from "../config";
import Market from "../artifacts/contracts/Market2.sol/NFTMarketTwo.json";

const Card = ({ name, available, total, price, url, itemId, description, loadNfts, tokenId }) => {
  console.log(name, available, total, price, url, itemId, description, tokenId)
  console.log("tokenId", tokenId)
  const navigate = useNavigate();

  // async function buyNft(itemId, priice) {
  //   console.log("tryna buy");
  //   const { ethereum } = window;
  //   //if (!etehreum throw a modal error to connect to metamask)
  //   if (ethereum) {
  //     const provider = new ethers.providers.Web3Provider(ethereum);
  //     const signer = provider.getSigner();

  //     const MARKET = new ethers.Contract(marketAddress, Market.abi, signer);
  //     console.log("tryna buy2");
  //     const price = ethers.utils.parseUnits(priice.toString(), "ether");
  //     console.log("tryna buy3");
  //     const transaction = await MARKET.buyNft(nftAddress, itemId, { value: price });
  //     console.log("tryna buy4");

  //     await transaction.wait();
  //     loadNfts()
  //   }
  // }

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
              total: "12",
              available: "2",
              price,
              tokenId
            }
          })} className='metadatabtn'>
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
            <p className='bottom_stock'>{available ? available : 5} of {total ? total : 321} in Stock</p>
          </div>
        </div>

      </div>
      {/* <button className='buyButton' onClick={() => buyNft(itemId, price,)}>Buy</button> */}
      <button className='buyButton' onClick={() => buyNft(itemId, price, nftAddress, tokenId)}>Buy</button>
      
      {/* buyNft(itemId, priice, address, tokenId) */}
      
    </CardStyled>
  )
}

export default Card

