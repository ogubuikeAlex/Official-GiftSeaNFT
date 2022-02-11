import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo.png';

const Header = () => {
  return (
    <HeaderStyled>
        <div className='imgCon'><img className='logo' src={logo} alt=''/>
        <div className='connect'>Connect 
        <i class="fas fa-lock"></i>
        </div>
        </div>
      </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
  padding:.6rem;
  
  div{
    background: #fff;
    justify-content: center;
    display: flex;
    flex-direction: row;
    padding: .6rem;
    justify-content: space-between;
    align-items: center;
    width:100;
    .connect{
      background: linear-gradient(#02AAB0, #00CBAC);
      color: white;
      padding: 0.6em 40px;
      display: flex;
      border-radius: 10px;
      cursor: pointer;
    }
    .connect i{
      margin-left: 10px;
    }
  }
`;


export default Header
