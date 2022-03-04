import { useState } from "react";
import ethers from "ethers";
import MarketplaceStyled from '../../Styled-components/MarketplaceStyled'
import image1 from '../../img/unsplashed4.png';
import image2 from '../../img/unsplashed3.png';
import image3 from '../../img/unsplashed2.png';
import Card from '../../Components/Card'
import Dashboard from '../../pages/Userdashboardpages/Dashboard'
import image4 from '../../img/unsplash.png'
import unsplash from '../../img/unsplashed5.png'
import unsplashed from '../../img/unsplashedround.png'
import ClickedButt from "../../Components/clickedButton/ClickedButt";
import DashCard from "../../Components/dashCard";
import axios from "axios"

import { nftAddress, marketAddress } from "../../config";
import Nft from "../../artifacts/contracts/GiftSeaNFT.sol/NFT.json";
import Market from "../../artifacts/contracts/Market.sol/NFTMarket.json";

function MarketPlace(props) {
  const [toggleState, setToggleState] = useState(1);
  const [marketitems, setMarketItems] = useState([]);
  const [LoadingState, setLoadingState] = useState("Not-Loaded")
  const [userAccount, setUserAccount] = useState("")

  const toggleTab = (index) => {
    setToggleState(index);
  };

  async function loadNFTs() {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const NFT = new ethers.Contract(nftAddress, Nft.abi, signer);
      const MARKET = new ethers.Contract(marketAddress, Market.abi, signer);
      setUserAccount(props.user);

      let marketItems = await MARKET.fetchMarketItems();

      marketItems = await Promise.all(marketitems.map(async i => {
        const tokenUri = await NFT.tokenUri(i.tokenId);
        const meta = await axios.get(tokenUri)
        let price = ethers.utils.formatUnits(i.price.toString(), 'ether')

        let item = {
          price,
          itemId: i.itemId.toNumber(),
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.Name,
          description: meta.data.Description,
          percentIncrease: meta.data.PercentIncrease,
          total: meta.data.TotalQuantity,
          available: meta.data.AmountLeft
        }

        return item
      }));
      setMarketItems(marketItems);
      setLoadingState("loaded");
    }
  }

  let availableItems = marketitems.map(item => (
    <DashCard
      url={item.image}
      name={item.name}
      price={item.price}   
      itemId= {item.itemId}
      owner ={item.owner}
      description ={item.description}
      total = {item.total}
      increase = {item.percentIncrease}
      available = {item.available}
    />
  ))


  return (
    <div>
      <MarketplaceStyled>
        <h4 style={{ marginLeft: '20px', fontWeight: '600' }}>Our Marketplace</h4>
        <div className="container">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}>
              All NFTs
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}>
              Trending
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}>
              New Listing
            </button>
          </div>
          <div className="content-tabs">
            <div id="content-tab"
              className={toggleState === 1 ? "content  active-content" : "content"}>
              {/* {
                LoadingState == "Not-Loaded" ? <h1>Empty MArket</h1> : {availableItems}
            } */}

              <DashCard />
              <DashCard />
              <DashCard />
              <DashCard />
              <DashCard />
              <DashCard />
              <DashCard />
              <DashCard />
              <DashCard />
              <DashCard />
              <DashCard />
              {/* <div className='dashCards'>
              <ClickedButt/>
            <img src={unsplash}alt=""/>
            <Card/>
            </div>
            <div className='dashCards'>
            <ClickedButt/>
            <img src={image2}alt=""/>
            <Card/>
            </div>
            <div className='dashCards'>
            <ClickedButt/>
            <img src={image1}alt=""/>
            <Card/>
            </div>
            <div className='dashCards'>
            <ClickedButt/>
            <img src={image4}alt=""/>
            <Card/>
            </div>
            <div className='dashCards'>
            <ClickedButt/>
            <img src={unsplash}alt=""/>
            <Card/>
            </div>
            <div className='dashCards'>
            <ClickedButt/>
            <img src={unsplash}alt=""/>
            <Card/>
            </div>
            <div className='dashCards'>
            <ClickedButt/>
            <img src={image1}alt=""/>
            <Card/>
            </div>
            <div className='dashCards'>
            <ClickedButt/>
            <img src={unsplashed}alt=""/>
            <Card/>
            </div> */}
            </div>
            <div id="content-tab"
              className={toggleState === 2 ? "content  active-content" : "content"}>
              <div className='dashCards'>
                <ClickedButt />
                <img src={unsplash} alt="" />
                <Card />
              </div>
              <div className='dashCards'>
                <ClickedButt />
                <img src={image1} alt="" />
                <Card />
              </div>
              <div className='dashCards'>
                <ClickedButt />
                <img src={image3} alt="" />
                <Card />
              </div>
              <div className='dashCards'>
                <ClickedButt />
                <img src={image2} alt="" />
                <Card />
              </div>
            </div>

            <div id="content-tab"
              className={toggleState === 3 ? "content  active-content" : "content"}>
              <div className='dashCards'>
                <ClickedButt />
                <img src={image2} alt="" />
                <Card />
              </div>
              <div className='dashCards'>
                <ClickedButt />
                <img src={image4} alt="" />
                <Card />
              </div>
              <div className='dashCards'>
                <ClickedButt />
                <img src={image3} alt="" />
                <Card />
              </div>
              <div className='dashCards'>
                <ClickedButt />
                <img src={image1} alt="" />
                <Card />
              </div>
            </div>
          </div>
        </div>
      </MarketplaceStyled>

    </div>
  );
}


export default MarketPlace;