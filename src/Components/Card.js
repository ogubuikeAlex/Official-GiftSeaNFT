import React, {useState} from 'react'
import { ethers } from 'ethers';
import styled from 'styled-components';
import CardStyled from '../Styled-components/CardStyled'
import roundedImgs1 from '../img/Ellipse 96.png';
import roundedImgs2 from '../img/Ellipse 97.png';
import roundedImgs3 from '../img/Ellipse 98.png';
import roundedImgs4 from '../img/Ellipse 95.png';

import { nftAddress, marketAddress } from "../config";
import Nft from "../artifacts/contracts/GiftSeaNFT.sol/NFT.json";
import Market from "../artifacts/contracts/Market.sol/NFTMarket.json";

const Card = ({ name, available, total, price, loadNfts, itemId}) => {

  async function buyNft(itemId, priice) {
    console.log("tryna buy");
    const { ethereum } = window;
//if (!etehreum throw a modal error to connect to metamask)
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const NFT = new ethers.Contract(nftAddress, Nft.abi, signer);
      const MARKET = new ethers.Contract(marketAddress, Market.abi, signer);
      console.log("tryna buy2");
      const price = ethers.utils.parseUnits(priice.toString(), "ether");
      console.log("tryna buy3");
      const transaction = await MARKET.buyNft(nftAddress, itemId, { value: price });
      console.log("tryna buy4");
      
      await transaction.wait();
      loadNfts()
    }
  }

  return (
    <CardStyled>
      <div className='carousel-info'>
        <div className='carousel-info_top'>
          <p>{name ? name : "Africana"}</p>
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
      <button className='buyButton' onClick={()=>buyNft(itemId, price)}>Buy</button>
      {/* <button className='buyButton'>Buy</button> */}
    </CardStyled>
  )
}

export default Card