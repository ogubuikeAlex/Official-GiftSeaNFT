import React, {useState} from 'react'
import styled from 'styled-components'
import logo from '../img/logo.png';


const Header = () => {

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

  return (
    <HeaderStyled>
      <div className='imgCon'><img className='logo' src={logo} alt='' />
        <div className='connect' onClick={connectWallet}>Connect Wallet
          <i class="fas fa-lock"></i>
        </div>
      </div>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
  .imgCon img{
    margin-left: 30px;
    @media(max-width: 540px){
      margin-left: 30px;
    }
  }
  .imgCon{
    background: #fff;
    justify-content: center;
    display: flex;
    flex-direction: row;
    padding: .8rem;
    justify-content: space-between;
    align-items: center;
    
    .connect{
      background: linear-gradient(to right, #02AAB0, #00CBAC);
      color: white;
      padding: .4rem 40px;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      cursor: pointer;
      @media(max-width: 540px){
        margin-left: -20px;
      }
    }
    i{
      margin-left: 10px;
      text-align: center;
      justify-content: center;

    }
  }
`;


export default Header
