import React from 'react'
import { ethers  } from 'ethers';
import styled from 'styled-components';
import CardStyled from '../Styled-components/CardStyled'
import roundedImgs1 from '../img/Ellipse 96.png';
import roundedImgs2 from '../img/Ellipse 97.png';
import roundedImgs3 from '../img/Ellipse 98.png';
import roundedImgs4 from '../img/Ellipse 95.png';

import { nftAddress, marketAddress } from "../config";
// import Nft from "../artifacts/contracts/GiftSeaNFT.sol/NFT.json";
// import Market from "../artifacts/contracts/Market.sol/NFTMarket.json";
import { propTypes } from 'react-bootstrap/esm/Image';

//add buy function
// const Card = ({ name, price, total, available, buy }) => {
  //const [userAccount, setUserAccount] = useState("")

  // async function buyNft(nft) {
  //   const { ethereum } = window;

  //   if (ethereum) {
  //     const provider = new ethers.providers.Web3Provider(ethereum);
  //     const signer = provider.getSigner();
  //     const NFT = new ethers.Contract(nftAddress, Nft.abi, signer);
  //     const MARKET = new ethers.Contract(marketAddress, Market.abi, signer);
  //     setUserAccount(props.user);

  //     const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
  //     const transaction = await MARKET.buyNft(nftAddress, nft.itemId, {value: price});

  //     await transaction.wait();
  //    // loadNfts()
  //   }
  // }

  const Card = ()=>{
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
      <button className='buyButton'>Buy</button>
    </CardStyled>
  )
}


  export default Card
