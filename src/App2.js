import './App.css';
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import React from 'react';
import { useNavigate } from 'react-router-dom';

import MainRoutes from './Routing/MainRoutes'

import {
    adminAddress
} from './config'
// import NoMetamask from './pages/Admindashboardpages/Modals/NoMetamask'

import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider, // required
        options: {
            infuraId: "t-srm7MtDdWCoJDtTH0i8QikmsD-yZKz" // required
        }
    }
};

const web3Modal = new Web3Modal({
    network: "mainnet",
    theme: "dark", // optional
    cacheProvider: true, // optional
    providerOptions // required
});

async function connectWallte() {
    const instance = await web3Modal.connect();

    const provider = new ethers.providers.Web3Provider(instance);
    const signer = provider.getSigner();

}


const App2 = () => {


    return (
        <div className='App'>
            <MainRoutes

            />
        </div>
    )
}
export default App2;