import './App.css';
import React, { useState, useEffect} from 'react';
import { useNavigate} from 'react-router-dom';
import Homescreen from './screen/HomeScreen'
import MainRoutes from './Routing/MainRoutes'
// import NoMetamask from './pages/Admindashboardpages/Modals/NoMetamask'

const App = () => {
  const { ethereum } = window;
  const [userHasMetaMask, setUserHasMetaMask] = useState(false);
  const [userHasConnectedccount, setUserHasConnectedAccount] = useState(false);
  const [userAccount, setUserAccount] = useState();
  let navigate = useNavigate(); 

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
      // <NoMetamask/>
    }
    console.log("You have metamask!");
    let userHasAuthenticatedWallet = checkForAuthenticatedEthereumWallet();

    if (!userHasAuthenticatedWallet) {
      console.log("You do not hve an have an authenticatdmetamask!");
      //Show modal  that ask user to authenticate metamask!
    }

    console.log("You have  an authenticated metamask wallet!");

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    setUserAccount(accounts[0]);
    setUserHasConnectedAccount(true);
    navigate("/userdashboard")
  }  

  useEffect(() => {
    const authenticated = localStorage.getItem("isAuthenticated");
    if (authenticated && JSON.parse(authenticated)){
      // setUserHasConnectedAccount(true);
      // setUserHasMetaMask(true);
      connectWallet();
    } 
      }, [])

  useEffect(() => {
    localStorage.setItem("isAuthenticated", userHasConnectedccount && userHasMetaMask)    
  }, [userHasConnectedccount && userHasMetaMask])

  return (
    <div className='App'>
      <MainRoutes
        isAuthenticated = {userHasConnectedccount && userHasMetaMask}
        connect = {connectWallet}
        currentUser = {userAccount}
      />
    </div>
  )
}
export default App;