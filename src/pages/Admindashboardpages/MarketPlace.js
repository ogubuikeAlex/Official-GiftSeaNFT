import { useEffect, useState } from "react";
import { ethers } from "ethers";
import MarketplaceStyled from '../../Styled-components/MarketplaceStyled'
import image1 from '../../img/unsplashed4.png';
import image2 from '../../img/unsplashed3.png';
import image3 from '../../img/unsplashed2.png';
import Card from '../../Components/Card'
import Dashboard from '../../pages/Userdashboardpages/Dashboard'
import image4 from '../../img/unsplash.png'
import unsplash from '../../img/unsplashed5.png'
import ClickedButt from "../../Components/clickedButton/ClickedButt";
import DashCard from "../../Components/dashCard";
import axios from "axios"
import Nodata from "../EmptyState/Nodata";
import { nftAddress, marketAddress } from "../../config";
import Nft from "../../artifacts/contracts/erc1155nft.sol/ERC1155NFT.json";
import Market from "../../artifacts/contracts/Erc115market.sol/NFTMarket1155.json";
import { splitArray } from "../Userdashboardpages/Collection/metadataMethods";

function AdminMarketPlace({props, currentUser}) {
  const [toggleState, setToggleState] = useState(1);
  const [marketitems, setMarketItems] = useState([]);
  const [LoadingState, setLoadingState] = useState("Not-Loaded")
  const [userAccount, setUserAccount] = useState("")

  const toggleTab = (index) => {
    setToggleState(index);
  };

  async function loadNFTs() {
    console.log("Am here")
    const { ethereum } = window;

    if (!ethereum) {
      return;
    }

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const NFT = new ethers.Contract(nftAddress, Nft.abi, signer);
    const MARKET = new ethers.Contract(marketAddress, Market.abi, signer);
    setUserAccount(currentUser);

    let marketItems = await MARKET.fetchMarketItems();
    
    let items = await Promise.all(marketItems.map(async i => {

     
      const tokenUri = await NFT.uri(i.tokenId.toNumber());

      console.log("tokenUri :", tokenUri, "and tokenId:", i.tokenId.toNumber())
      if (tokenUri) {
        const meta = await axios.get(tokenUri);

        let price = ethers.utils.formatUnits(i.price.toString(), 'ether');

        let totalAmountOfCurrent = i.length - 1;

        let totalMinted = await MARKET.GetTotalSupply(i.tokenId.toNumber());

        let item = {
          price,
          itemId: i.itemId.toNumber(),
          tokenId: i.tokenId.toNumber(),
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.Name,
          description: meta.data.Description,
          percentIncrease: meta.data.PercentIncrease,
          total: totalMinted.toNumber(),
          available: totalAmountOfCurrent
        }

        return item
      }

    }));
    //SplitArray
    let finalArr = items.filter(x => typeof (x) != "undefined")
    let allItems = await splitArray(finalArr);

    setMarketItems(allItems);
    setLoadingState("loaded");

    console.log(allItems, "bhds")

  }

  let availableItems = marketitems.map(item =>
    <DashCard
    tokenId={item.tokenId}
      url={item[0].image}
      name={item[0].name}
      price={item[0].price}
      itemId={item[0].itemId}
      owner={item[0].owner}
      description={item[0].description}
      total={item[0].total}
      increase={item[0].percentIncrease}
      available={item[0].available}
    />
  )

  useEffect(() => loadNFTs(), []);

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
              {
                LoadingState === "Not-Loaded" ? <div style={{ width: '800px', transform: 'translateX(60px)', marginTop: '50px', objectFit: 'cover', height: '800px' }}><Nodata /></div> : availableItems
              }

              {/* <DashCard />
              <DashCard />
              <DashCard />
              <DashCard />
              <DashCard />
              <DashCard />
              <DashCard />
              <DashCard />
              <DashCard />
              <DashCard />
              <DashCard />  */}
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
      <Dashboard currentUser={currentUser} />
    </div>
  );
}


export default AdminMarketPlace;