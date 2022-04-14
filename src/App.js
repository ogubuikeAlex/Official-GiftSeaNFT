import './App.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Homescreen from './screen/HomeScreen'
import Web3Modal from "web3modal";
import MainRoutes from './Routing/MainRoutes'
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

import {
  adminAddress 
} from './config'
// import NoMetamask from './pages/Admindashboardpages/Modals/NoMetamask'

const providerOptions = {
  walletconnect: {
      package: WalletConnectProvider, // required
      options: {
          infuraId: "t-srm7MtDdWCoJDtTH0i8QikmsD-yZKz" // required
      },
  },
  binancechainwallet: {
    package: true
  },
  coinbasewallet: {
    package: WalletConnectProvider, // Required
    options: {
      appName: "gift_nft_app", // Required
      infuraId: "t-srm7MtDdWCoJDtTH0i8QikmsD-yZKz", // Required
      rpc: "", // Optional if `infuraId` is provided; otherwise it's required
      chainId: 1, // Optional. It defaults to 1 if not provided
      darkMode: false // Optional. Use dark theme, defaults to false
    }
  }
};

const web3Modal = new Web3Modal({
  network: "mainnet",
  theme: "dark", // optional
  cacheProvider: true, // optional
  providerOptions // required
});

// var web3 = new Web3(provider);

const App = () => {
  const { ethereum } = window;
  const [userHasMetaMask, setUserHasMetaMask] = useState(false);
  const [userHasConnectedccount, setUserHasConnectedAccount] = useState(false);
  const [userAccount, setUserAccount] = useState();
  let navigate = useNavigate();

  

  const checkForMetaMask = async () => {
    // debugger
    if (!ethereum) {
      console.log("You need to install metamask");
      return false;
    }

    setUserHasMetaMask(true);
    await checkForAuthenticatedEthereumWallet();
    return true;
  }

  const checkForAuthenticatedEthereumWallet = async () => {
    // debugger
    var accounts = await web3Modal.connect();
    console("web3acct",accounts)
    
    await window.ethereum.send('eth_requestAccounts');
    // var accounts = await web3.eth.getAccounts();

    if (accounts.length !== 0) {
      console.log(`Authorized Account found: ${accounts[0]}`);
      setUserAccount(accounts[0])
      return true;
    }
    console.log("no account found ");
    return false;
  }

  const connectWallet = async () => {
    // debugger
    let userHasMetaMask = await checkForMetaMask();

    if (!userHasMetaMask) {
      console.log("You do not have metamask!");
      return;
      // <NoMetamask/>
    }
    console.log("You have metamask!");
    let userHasAuthenticatedWallet = await checkForAuthenticatedEthereumWallet();

    if (!userHasAuthenticatedWallet) {
      console.log("You do not hve an have an authenticatdmetamask!");
      //Show modal  that ask user to authenticate metamak! ==> No need for this    
    }

    console.log("You have  an authenticated metamask wallet!");

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    setUserAccount(accounts[0]);
    setUserHasConnectedAccount(true);
    console.log("This is accounto[", accounts[0].toString().toLowerCase(), "and adminadress:", adminAddress)    
    if (accounts[0].toString().toLowerCase() === adminAddress.toLowerCase()) {
      navigate("/admindashboard")
    }
    else {
      navigate("/userdashboard")
    }
  }

  useEffect(() => {
    // debugger
    const authenticated = localStorage.getItem("isAuthenticated");
    if (authenticated && JSON.parse(authenticated)) {
      setUserHasConnectedAccount(true);
      setUserHasMetaMask(true);
      // connectWallet();  commented out to see other wallet options on load of the Home page
    }
  }, [])

  useEffect(() => {
    // debugger
    localStorage.setItem("isAuthenticated", userHasConnectedccount && userHasMetaMask)

  }, [userHasConnectedccount && userHasMetaMask])

  return (
    <div className='App'>
      <MainRoutes
        isAuthenticated={userHasConnectedccount && userHasMetaMask}
        connect={connectWallet}
        currentUser={userAccount}
      />
    </div>
  )
}
export default App;