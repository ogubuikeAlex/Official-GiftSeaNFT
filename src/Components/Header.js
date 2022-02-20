import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo.png';


const Header = () => {
  return (
    <HeaderStyled>
        <div className='imgCon'><img className='logo' src={logo} alt=''/>
        <div className='connect'>Connect Wallet
        <i class="fas fa-lock"></i>
        </div>
        </div>
      </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
  .imgCon img{
    margin-left: 30px;
    width: 140px;
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
