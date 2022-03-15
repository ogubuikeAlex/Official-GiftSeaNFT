import React from 'react'
import CollectionStyled from '../../Styled-components/MarketplaceStyled';
import image1 from '../../img/unsplashed4.png';
import image2 from '../../img/unsplashed3.png';
import unsplash from '../../img/unsplashed5.png'
import ClickedButt from '../../Components/clickedButton/ClickedButt'
import { useEffect, useState } from "react";
import ethers from "ethers";
import MarketplaceStyled from '../../Styled-components/MarketplaceStyled'
import image3 from '../../img/unsplashed2.png';
import Card from '../../Components/Card';

import DashCard from "../../Components/dashCard"; import axios from "axios"

import { nftAddress, marketAddress } from "../../config";
import Nft from "../../artifacts/contracts/GiftSeaNFT.sol/NFT.json";
import Market from "../../artifacts/contracts/Market.sol/NFTMarket.json";
import MyCollectionCard from '../../Components/collectionDashCard';
import CollectionDashCard from '../../Components/collectionDashCard';
import { Outlet } from 'react-router-dom';

const Collections = (props) => {

  return ( <Outlet />)
  // const [toggleState, setToggleState] = useState(1);
  // const [marketitems, setMarketItems] = useState([]);
  // const [LoadingState, setLoadingState] = useState("Not-Loaded");
  // const [userAccount, setUserAccount] = useState("")

  // async function loadNFTs() {
  //   console.log(1)
  //   const { ethereum } = window;

  //   if (ethereum) {
  //     console.log(2)
  //     const provider = new ethers.providers.Web3Provider(ethereum);
  //     console.log(3)
  //     const signer = provider.getSigner();
  //     console.log(4)
  //     const NFT = new ethers.Contract(nftAddress, Nft.abi, signer);
  //     console.log(4)
  //     const MARKET = new ethers.Contract(marketAddress, Market.abi, signer);
  //     console.log(5)
  //     setUserAccount(props.currentUser);
  //     console.log(6)
  //     console.log("uhmm", props.currentUser)
  //     console.log(7)
  //     let marketItems = await MARKET.fetchMyNFTs(props.currentUser);
  //     console.log(8)
  //     let items = await Promise.all(marketItems.map(async i => {

  //       const tokenUri = await NFT.tokenURI(i.tokenId);
  //       const meta = await axios.get(tokenUri)
  //       console.log("from marketPlace", meta.data)
  //       console.log("from marketPlace", tokenUri)
  //       let price = ethers.utils.formatUnits(i.price.toString(), 'ether')

  //       let item = {
  //         price,
  //         itemId: i.itemId.toNumber(),
  //         owner: i.owner,
  //         image: meta.data.image,
  //         name: meta.data.name,
  //         description: meta.data.description,
  //         percentIncrease: meta.data.PercentIncrease,
  //         total: meta.data.TotalQuantity,
  //         available: meta.data.AmountLeft
  //       }

  //       return item
  //     }));

  //     setMarketItems(items);
  //     setLoadingState("loaded");
  //   }
  // }

  // let availableItems = marketitems.map(item =>
  //   <CollectionDashCard
  //     url={item.image}
  //     name={item.name}
  //     price={item.price}
  //     itemId={item.itemId}
  //     owner={item.owner}
  //     description={item.description}
  //     total={item.total}
  //     increase={item.percentIncrease}
  //     available={item.available}
  //     loadNFTs={loadNFTs}
  //   />
  // )

  // console.log(availableItems)
  // useEffect(() => loadNFTs(), []);

  // const toggleTab = (index) => {
  //   setToggleState(index);
  // };
  // return (
  //   <div>
  //     <CollectionStyled>
  //       <h4 style={{ marginLeft: '20px', fontWeight: '600' }}>Your Collection</h4>
  //       <div className="container">
  //         <div className="bloc-tabs">
  //           <button
  //             className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
  //             onClick={() => toggleTab(1)}>
  //             Unmatured NFTs
  //           </button>
  //           <button
  //             className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
  //             onClick={() => toggleTab(2)}>
  //             Mature NFTs
  //           </button>
  //         </div>
  //         <div className="content-tabs">
  //           <div id="content-tab"
  //             className={toggleState === 1 ? "content  active-content" : "content"}>
  //             {/* <div className='dashCards'>
  //               <ClickedButt />
  //               <img src={unsplash} alt="" />
  //               <Card />
  //             </div>
  //             <div className='dashCards'>
  //               <ClickedButt />
  //               <img src={image2} alt="" />
  //               <Card />
  //             </div> */}

  //             {
  //               LoadingState === "Not-Loaded" ? <h1>Empty MArket</h1> : availableItems
  //             }
  //           </div>
  //           <div id="content-tab"
  //             className={toggleState === 2 ? "content  active-content" : "content"}>
  //             {/* <div className='dashCards'>
  //               <ClickedButt />
  //               <img src={image1} alt="" />
  //               <Card />
  //             </div>
  //             <div className='dashCards'>
  //               <ClickedButt />
  //               <img src={unsplash} alt="" />
  //               <Card />
  //             </div> */}

  //           </div>
  //         </div>
  //       </div>
  //     </CollectionStyled>

  //   </div>
  // )
}

export default Collections