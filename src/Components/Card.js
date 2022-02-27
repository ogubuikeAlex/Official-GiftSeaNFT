import React from 'react'
import { ethers  } from 'ethers';
import styled from 'styled-components';
import CardStyled from '../Styled-components/CardStyled'
import roundedImgs1 from '../img/Ellipse 96.png';
import roundedImgs2 from '../img/Ellipse 97.png';
import roundedImgs3 from '../img/Ellipse 98.png';
import roundedImgs4 from '../img/Ellipse 95.png';

import { nftAddress, marketAddress } from "../../config";
import Nft from "../artifacts/contracts/GiftSeaNFT.sol/NFT.json";
import Market from "../artifacts/contracts/Market.sol/NFTMarket.json";
import { propTypes } from 'react-bootstrap/esm/Image';

//add buy function
const Card = ({ name, price, total, available, buy }) => {
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

        <button onClick={buy} className='buyButton'>Buy</button>
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
    padding-top:10px;
  }
  .carousel-info_bottom-text{
    color: #00AC4F;
    font-size: 14px;
    display: flex;
  p{
    transform: translateY(7px);
    @media(max-width: 1220px){
      width: 100%;
      font-size: 12px;
  }
  @media(max-width: 1138px){
    width: 100%;
    font-size: 12px;
    font-weight:400;
}
    @media(max-width: 1220px){
      width: 100%;
      font-size: 14px;
  }
  }
    @media(max-width: 1045px){
      width: 100%;
      font-size: 12px;
  }
  @media only screen and (max-width: 960px){
    width: 100%;
    font-size: 10px;
  }
    @media only screen and (max-width: 1040px){
      font-size: 12px;
    }
    @media(max-width: 918px){
      font-size: 14px;
  }
    @media only screen and (max-width: 849px){
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
