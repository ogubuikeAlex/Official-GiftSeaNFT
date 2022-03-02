import {useLayoutEffect, useState, use} from 'react'
import Homepage from './Components/Homepage/Homepage'
import { Navigate } from 'react-router-dom'
import Userdashboard from './screen/Userdashboard'
 import Admindashboard from './screen/Admindashboard'
import './App.css';

const App = () => {

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
  }  


//   useLayoutEffect(() => {
// if()

//   }, [])

  return (
    <div className='App'>

      {
        userHasMetaMask && userHasConnectedccount ? <Userdashboard user={userAccount}/> : <Homepage handleClick={connectWallet} />
        //userHasMetaMask && userHasConnectedccount ? <Userdashboard /> : <Homepage handleClick={connectWallet} />
      }
      {/* <Admindashboard/> */}

     </div>    
  )
}
export default App;