import React, { useEffect, useState } from 'react';
import '../assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import '../scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeroSection from '../pages/Userdashboardpages/HeroSection'
import MarketPlace from '../pages/Userdashboardpages/MarketPlace'
import Favourites from '../pages/Userdashboardpages/Favourites'
import Collections from '../pages/Userdashboardpages/Collections'
import Contact from '../pages/Userdashboardpages/Contact'
import About from '../pages/Userdashboardpages/About'
import MainLayout from '../layout/MainLayout'
import { ethers } from "ethers";
import axios from "axios"

import { nftAddress, marketAddress } from "../../config";
import Nft from "../artifacts/contracts/GiftSeaNFT.sol/NFT.json";
import Market from "../artifacts/contracts/Market.sol/NFTMarket.json";

function Userdashboard(props) {
    const [marketItems, setMarketItems] = useState([]);
    const [myMarketItems, setMyMarketItems] = useState([]);
    const [userAccount, setUserAccount] = useState("")
    const [loadingState, setLoadingState] = useState("not-loaded");

    useEffect(() => {
        loadNFTs()
    }, [])
    async function loadNFTs() {
        const { ethereum } = window;

        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const NFT = new ethers.Contract(nftAddress, Nft.abi, signer);
            const MARKET = new ethers.Contract(marketAddress, Market.abi, signer);
            setUserAccount(props.user);

            let marketitems = await MARKET.fetchMarketItems();
            let mymarketitems = await MARKET.fetchMyNFTs(userAccount);

            marketitems = await Promise.all(marketitems.map(async i => {
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

            mymarketitems = await Promise.all(myMarketItems.map(async i => {
                const tokenUri = await NFT.tokenUri(i.tokenId);
                const meta = await axios.get(tokenUri)
                let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
                let item = {
                    price,
                    itemId: i.itemId.toNumber(),
                    owner: i.owner,
                    image: meta.data.image,
                    name: meta.data.name,
                    description: meta.data.description,
                }
                return item
            }));

            setMarketItems(marketitems);
            setMyMarketItems(mymarketitems);
            setLoadingState("loaded");
        }

    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/userdashboard" element={<MainLayout />}>
                    <Route index element={<HeroSection/>} />
                    <Route path="marketplace" element={<MarketPlace/>} />
                    <Route path="favourites" element={<Favourites/>} />
                    <Route path="collections" element={<Collections/>} />
                    <Route path="contact" element={<Contact/>} />
                    <Route path="about" element={<About/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Userdashboard;