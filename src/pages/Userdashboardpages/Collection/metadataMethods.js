import { ethers } from "ethers";
import {
    nftAddress, marketAddress
} from '../../../config'
import Market from '../../../artifacts/contracts/Market.sol/NFTMarket.json'
import SentSuccessful from '../Modals/SentSuccessful'
import SoldSuccessful from '../Modals/SoldSuccessful'



    async function giftNft(receiver, itemId) {
        console.log("Am here")
        const { ethereum } = window;

        if (!ethereum) {
            //return a modal and redirect person to landingPage
        }

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        /* next, create the item */
        let contract = new ethers.Contract(marketAddress, Market.abi, signer)
        let transaction = await contract.giftNft(nftAddress, receiver, itemId);
        await transaction.wait();
        //Navigate to gifted Successfully modal
        // <SentSuccessful/>
    }

    async function sellNft(itemId) {
        console.log("am here")
        const { ethereum } = window;

        if (!ethereum) {
            //return a modal and redirect person to landingPage

        }

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        /* next, create the item */
        let contract = new ethers.Contract(marketAddress, Market.abi, signer)
        let transaction = await contract.sellNft(itemId, nftAddress);
        await transaction.wait();
        //Navigate to sold Successfully modal
        // <SoldSuccessful/>
    }

    async function buyNft(itemId, priice) {
        const { ethereum } = window;
        //if (!ethereum throw a modal error to connect to metamask)
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
    
          const MARKET = new ethers.Contract(marketAddress, Market.abi, signer);
          const price = ethers.utils.parseUnits(priice.toString(), "ether");
    
          const transaction = await MARKET.buyNft(nftAddress, itemId, { value: price });
          let tx = await transaction.wait();
          console.log(tx);
         
          //loadNfts()
        }
      }      

    export {giftNft, sellNft, buyNft}