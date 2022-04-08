import { ethers } from "ethers";
import { marketAddress } from '../../../config'
import Market from '../../../artifacts/contracts/Erc115market.sol/NFTMarket1155.json'

async function getBalance() {
    console.log("Am here")
    const { ethereum } = window;

    if (!ethereum) {
        //return a modal and redirect person to landingPage
    }

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    let contract = new ethers.Contract(marketAddress, Market.abi, signer);

    let balanceTx = await contract.getBalance();
    return balanceTx.toString();
}

async function withdrawBalance() {
    console.log("Am here")
    const { ethereum } = window;

    if (!ethereum) {
        //return a modal and redirect person to landingPage
        console.log("You need to install metamask")
        return;
    }

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    let contract = new ethers.Contract(marketAddress, Market.abi, signer)

    let tx = contract.withdrawMoney();
    await tx.wait();
}

async function getCurrentAdmins() {
    const { ethereum } = window;

    if (!ethereum) {
        //return a modal and redirect person to landingPage
        console.log("you need meatmask")
        return
    }

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    let contract = new ethers.Contract(marketAddress, Market.abi, signer);
    let admin = await contract.getCurrentAdmin();
    let owner = await contract.owner();
    
    return {
        admin, owner
    };
}

async function withdrawMoneyTo(addr) {
    console.log("Am here")
    const { ethereum } = window;

    if (!ethereum) {
        //return a modal and redirect person to landingPage
        return;
    }

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    let contract = new ethers.Contract(marketAddress, Market.abi, signer);
    let tx = await contract.withdrawMoneyTo(addr);
    await tx.wait();
}

async function setAdmin(newAdmin) {
    console.log("Am here")
    const { ethereum } = window;

    if (!ethereum) {
        //return a modal and redirect person to landingPage
    }

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    let contract = new ethers.Contract(marketAddress, Market.abi, signer)

    let tx = await contract.setAdmin(newAdmin);
    await tx.wait();
}

export { setAdmin, getCurrentAdmins, getBalance, withdrawBalance, withdrawMoneyTo }