import React, { useState } from 'react'
import { ethers } from 'ethers';
import styled from 'styled-components';
import CardStyled from '../Styled-components/CardStyled'
import roundedImgs1 from '../img/Ellipse 96.png';
import roundedImgs2 from '../img/Ellipse 97.png';
import roundedImgs3 from '../img/Ellipse 98.png';
import roundedImgs4 from '../img/Ellipse 95.png';
import { Link, useNavigate } from 'react-router-dom';

import { nftAddress, marketAddress } from "../config";
import Nft from "../artifacts/contracts/GiftSeaNFT.sol/NFT.json";
import Market from "../artifacts/contracts/Market.sol/NFTMarket.json";
const MyCollectionCard = ({ name, available, total, price, url, itemId, description }) => {
    let navigate = useNavigate();
    console.log("MycollectionCard", description)   

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

            <button onClick={() => navigate("metadata", {
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
                }
            })} className='buyButton'>View</button>

        </CardStyled >
    )
}

export default MyCollectionCard