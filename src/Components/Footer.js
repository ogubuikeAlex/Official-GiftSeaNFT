import React from 'react'
import styled from 'styled-components'
import logo from '../img/Group 77.png'

const Footer = () => {
  return (
      <FooterStyled>
    <div className=''>
        <div className='imgCon'>
        <img src={logo} alt=''/>
        </div>
        <div className='listItems'>
            <ul className='lists'>
                <li>Home</li>
                <li>How it works</li>
                <li>Trending NFT</li>
                <li>Blog</li>
                <li>Help</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <hr/>
        <div className='copyright'>
            <div> 
                <small>Copyright GiftNFT. All rights reserved</small>
                </div>
                <div className='icons-container'>
                    <ul className='iconsbottom'>
                    <li><i class="fab fa-instagram"></i></li>
                    <li><i class="fab fa-linkedin"></i></li>
                    <li><i class="fab fa-twitter"></i></li>
                    <li><i class="fab fa-youtube"></i></li>
                    </ul>
                </div>
        </div>
    </div>
    </FooterStyled>
  )
}

const FooterStyled = styled.div`
background: #1A1036;
color: #fff;
position: relative;
top: 200px;
padding: 3em;
.imgCon{
    justify-content: center;
    text-align: center;
}
.listItems{
    justify-content: center;
    text-align: center;
    }
.lists{
    display: flex;
    flex-direction: row;
    list-style: none;
    width: 100%;
    justify-content: center;
    text-align: center;
    @media(max-width:540px){
        flex-direction: column;
        text-align: center;
        justify-content: center;
    }
}
.lists li{
    margin-right: 20px;
    margin-top: 20px;
    cursor: pointer;
    :hover{
        color: rgba(158, 158, 158, 0.8);
        transition: all ease-in-out .4s;
    }
}
    li{
        margin: right: 20px;
    }
    
    .copyright{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 15px;
        @media(max-width:540px){
            text-align: center;
            flex-direction: column-reverse;
            justify-content: center;
        }
    }
    .iconsbottom{
        display: flex;
        flex-direction: space-around;
        width: 100%;
        li{
            list-style: none;
            margin-right: 20px;
            font-size: 25px;
            :hover{
                color: rgba(158, 158, 158, 0.8);
                transition: all ease-in-out .4s;
                transform: translateY(-3px);
                cursor: pointer;
            }
        }
        @media(max-width:540px){
            margin-top: 20px;
            text-align: center;
            justify-content: center;
        }
    }

`;

export default Footer;