import HomeScreen from './screen/HomeScreen'
import Userdashboard from './screen/Userdashboard'
import React, {useState} from 'react'
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


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
    console.log("Yhup! You got metamask")
    setUserHasMetaMask(true);
    await checkForAuthenticatedEthereumWallet();
    return true;
  }

  const checkForAuthenticatedEthereumWallet = async () => {
    var accounts = await ethereum.request({ method: 'eth_accounts' })

    if (accounts.length !== 0) {
      console.log(`Authorized Account found: ${accounts[0]}`);     
      return;
    }
    console.log("no account found ");
  }

  const connectWallet = async () => {
    let hasMetaMask = await checkForMetaMask();

    if (hasMetaMask) {
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      setUserAccount(accounts[0]);
      setUserHasConnectedAccount(true);
    } else {
      console.log("You need to install metamask to proceed");
    }
  }


  return (
    <div className='App'>
    <BrowserRouter>
      <main>
        <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/userdashboard" element={<Userdashboard/>}/>
        </Routes>
        </main>
      </BrowserRouter>
          </div>    
  )
}

export default App;
