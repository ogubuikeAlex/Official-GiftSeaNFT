import React from 'react'
import CollectionStyled from '../../../Styled-components/MarketplaceStyled';
import { useEffect, useState } from "react";
import ethers from "ethers";
import { nftAddress, marketAddress } from "../../../config";
import Nft from "../../../artifacts/contracts/GiftSeaNFT.sol/NFT.json";
import Market from "../../../artifacts/contracts/Market2.sol/NFTMarket.json";
import CollectionDashCard from '../../../Components/collectionDashCard';
import axios from "axios"
import Nodata from '../../EmptyState/Nodata'

const UserCollection = (props) => {
  const [toggleState, setToggleState] = useState(1);
  const [marketitems, setMarketItems] = useState([]);
  const [LoadingState, setLoadingState] = useState("Not-Loaded");
  const [userAccount, setUserAccount] = useState("")

  async function loadNFTs() {
    console.log(1)
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      const NFT = new ethers.Contract(nftAddress, Nft.abi, signer);
      const MARKET = new ethers.Contract(marketAddress, Market.abi, signer);

      setUserAccount(props.currentUser);
      let marketItems = await MARKET.fetchMyNFTs(props.currentUser);
      let items = await Promise.all(marketItems.map(async i => {

        const tokenUri = await NFT.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri)
        console.log("from marketPlace", meta.data)
        console.log("from marketPlace", tokenUri)
        let price = ethers.utils.formatUnits(i.price.toString(), 'ether')

        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          itemId: i.itemId.toNumber(),
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
          percentIncrease: meta.data.PercentIncrease,
          total: meta.data.TotalQuantity,
          available: meta.data.AmountLeft
        }

        return item
      }));

      setMarketItems(items);
      setLoadingState("loaded");
    }
  }

  let availableItems = marketitems.map(item =>
    <CollectionDashCard
      tokenId={item.tokenId}
      url={item.image}
      name={item.name}
      price={item.price}
      itemId={item.itemId}
      owner={item.owner}
      description={item.description}
      total={item.total}
      increase={item.percentIncrease}
      available={item.available}
    />
  )

  console.log(availableItems)
  useEffect(() => loadNFTs(), []);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
      <CollectionStyled>
        <h4 style={{ marginLeft: '20px', fontWeight: '600' }}>Your Collection</h4>
        <div className="container">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}>
              Unmatured NFTs
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}>
              Mature NFTs
            </button>
          </div>
          <div className="content-tabs">
            <div id="content-tab"
              className={toggleState === 1 ? "content  active-content" : "content"}>

              {/* <div className='dashCards'>
                <ClickedButt />
                <img src={unsplash} alt="" />
                <Card />
              </div>
              <div className='dashCards'>
                <ClickedButt />
                <img src={image2} alt="" />
                <Card />
              </div> */}

              {
                LoadingState === "Not-Loaded" ? <div style={{ width: '800px', transform: 'translateX(60px)', marginTop: '50px', objectFit: 'cover', height: '800px' }}><Nodata /></div> : availableItems
              }
            </div>
            <div id="content-tab"
              className={toggleState === 2 ? "content  active-content" : "content"}>
              {/* <div className='dashCards'>
                <ClickedButt />
                <img src={image1} alt="" />
                <Card />
              </div>
              <div className='dashCards'>
                <ClickedButt />
                <img src={unsplash} alt="" />
                <Card />
              </div> */}

            </div>
          </div>
        </div>
      </CollectionStyled>

    </div>
  )
}

export default UserCollection