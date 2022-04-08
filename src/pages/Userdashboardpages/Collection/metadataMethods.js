import { ethers } from "ethers";
import {
    nftAddress, marketAddress
} from '../../../config'
import Nft from "../../../artifacts/contracts/erc1155nft.sol/ERC1155NFT.json"
import Market from '../../../artifacts/contracts/Erc115market.sol/NFTMarket1155.json'
import { CalculateCashoutAmount } from "./Calculator";
import SentSuccessful from '../Modals/SentSuccessful'
import SoldSuccessful from '../Modals/SoldSuccessful'

async function giftNft(receiver, itemId, tokenId) {
    console.log("Am here")
    const { ethereum } = window;

    if (!ethereum) {
        //return a modal and redirect person to landingPage
    }


    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    /* next, create the item */
    const NFT = new ethers.Contract(nftAddress, Nft.abi, signer);
    let contract = new ethers.Contract(marketAddress, Market.abi, signer)
    const approvetx = await NFT.giveResaleApproval(tokenId)
    await approvetx.wait();
    let transaction = await contract.giftNft(nftAddress, receiver, itemId);
    await transaction.wait();
    // const approvetx2 = await NFT.giveResaleApproval(tokenId)
    // await approvetx2.wait();
    //Navigate to gifted Successfully modal
}

async function sellNft(itemId, priice, tokenId) {
    console.log("am here")
    const { ethereum } = window;

    console.log("its done")
    if (!ethereum) {
        //return a modal and redirect person to landingPage
    }

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    let contract = new ethers.Contract(marketAddress, Market.abi, signer)
    let NFT = new ethers.Contract(nftAddress, Nft.abi, signer);
console.log("before")
    let timeGotten = (await contract.GetTimeBought(itemId)).toNumber();
    console.log("time", timeGotten)
    let price = CalculateCashoutAmount(priice, timeGotten);
console.log("price", price)
    let cashOutPrice = ethers.utils.parseUnits(price.toString(), "ether");
    console.log(45)
    console.log(tokenId)
    const approvetx = await NFT.giveResaleApproval(tokenId)
    await approvetx.wait();
console.log(46)
    let transaction = await contract.sellNft(itemId, nftAddress, cashOutPrice);
    await transaction.wait();
    //Navigate to sold Successfully modal
}

async function buyNft(itemId, priice, address, tokenId) {
    console.log("tryna buy")
    const { ethereum } = window;
    //if (!ethereum throw a modal error to connect to metamask)
    if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const MARKET = new ethers.Contract(marketAddress, Market.abi, signer);
        console.log("tryna buy2")

        const price = ethers.utils.parseUnits(priice.toString(), "ether");

        const transaction = await MARKET.buyNft(nftAddress, itemId, { value: price });
        let tx = await transaction.wait();

        console.log(tx);

        //loadNfts()
    }
}

async function splitArray(marketItems) {
    let tokenIds = [];
    let arrOfMarItems = [];    

    marketItems.forEach(x => {
        if (!tokenIds.includes(x.tokenId)) {
            tokenIds.push(x.tokenId)
        }
    });

    tokenIds.forEach(x => {
        let group = [];
        marketItems.forEach(y => {
            if (y.tokenId === x){
                group.push(y)
            }
        })
    arrOfMarItems.push(group)  
    })

    return arrOfMarItems;
}

export { giftNft, sellNft, buyNft, splitArray }
