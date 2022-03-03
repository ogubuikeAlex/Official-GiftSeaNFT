import React, { useState, useEffect} from 'react';
import { useNavigate} from 'react-router-dom';

import Header from '../Header'
import HeroSection from '../HeroSection'
import CounterSection from '../CounterSection'
import Features from '../Features'
import TabToggle from '../TabToggle'
import Trending from '../Trending'
import Toggler from '../Toggler'
import Newsletter from '../Newletter'
import Footer from '../Footer'

const Homepage = (props) => {

  const { ethereum } = window;
  const [userHasMetaMask, setUserHasMetaMask] = useState(false);
  const [userHasConnectedccount, setUserHasConnectedAccount] = useState(false);
  const [userAccount, setUserAccount] = useState();

  const checkForMetaMask = async () => {
    if (!ethereum) {
      console.log("You need to install metamask");
      return false;
    }
        
    setUserHasMetaMask(true);
    await checkForAuthenticatedEthereumWallet();
    return true;
  }

  const checkForAuthenticatedEthereumWallet = async () => {
    var accounts = await ethereum.request({ method: 'eth_accounts' })

    if (accounts.length !== 0) {
      console.log(`Authorized Account found: ${accounts[0]}`);
      return true;
    }
    console.log("no account found ");
    return false;
  }

  const connectWallet = async () => {
    let userHasMetaMask = checkForMetaMask();

    if (!userHasMetaMask) {
      console.log("You do not have metamask!");
      return;
      //Show up a modal for user to connect metamask
    }
    console.log("You have metamask!");
    let userHasAuthenticatedWallet = checkForAuthenticatedEthereumWallet();

    if (!userHasAuthenticatedWallet) {
      console.log("You do not hve an have an authenticatdmetamask!");
      //Show page  that ask user to authenticate metamask!
    }

    console.log("You have  an authenticated metamask wallet!");

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    setUserAccount(accounts[0]);
    setUserHasConnectedAccount(true);
    navigate("/userdashboard")
  }  

  useEffect(() => {
    console.log("Yee")
    console.log(userHasConnectedccount && userHasMetaMask )
    if(userHasConnectedccount && userHasMetaMask)
    return navigate("/userdashboard")
      }, [])


let navigate = useNavigate(); 

  return (

    <div>
      <Header handleClick={connectWallet}/>
      <HeroSection/> 
      <CounterSection/>  
      <Features/>
      <TabToggle/>
      <Trending/>
      <Toggler/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Homepage