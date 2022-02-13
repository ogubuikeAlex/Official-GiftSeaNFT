import React from 'react'
import styled from 'styled-components'
import illustration from '../img/Illustration.png'
import attach from '../img/Vector 1.png'
import attached from '../img/Vector 2.png'


const Newletter = () => {
  return (
      <NewsletterStyled>
    <div className='container'>
        <img className='attach' src={attach} alt=''/>
        <img className='attach' src={attached} alt=''/>
        <div className='left-container'>
            <img src={illustration} alt=''/>
        </div>
        <div className='right-container'>
            <h1>Get notified on our latest NFT release</h1><br></br>
            <div className='subscribe'>
            <input type='email' placeholder='Your email address'/>
            <button className='submit'>Submit</button>
            </div>
        </div>
    </div>
    </NewsletterStyled>
  )
}

const NewsletterStyled = styled.div`
background: #00CBAC;
position: relative;
top: 15rem;
border-radius: 20px;
width:100%;
@media(max-width:540px){
    transform: translateY(-100px);
}
.attach{
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
}
.container{
    display: flex;
    margin: 0 !important;
    flex-direction: row;
    justify-content: center;
    allign-items: center;
    padding: 5em;
    @media(max-width: 540px){
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }
}
.left-container{
    text-align: center;
    justify-content: center;
    width:100%;
}
.right-container{
    display: flex;
    flex-direction: column;
    width:100%;
    @media(max-width:540px){
        text-align: center;
        justify-content: center;
        width: 100%;
    }
    h1{
        font-weight: bold;
        color: #fff;
    }
    .subscribe{
        display: flex;
        flex-direction: row;
        position: relative;
        @media(max-width:540px){
            text-align: center;
            justify-content: center
        }
        input{
            padding: 1em !important;
            border: none;
            width:100%;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            outline: none;
            :hover{
                outline: none;
            }
            @media(max-width: 540px){
                width: 200px;
            }
        }
        button{
            padding: 1em 60px !important;
            border: none;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            color: #fff;
            width: 100%;
            background: black;
            text-align: center;
            :hover{
                outline: none;
                background: rgba(0, 0, 0, 0.1);
                transition: ease-in-out all .4s;
            }
            @media(max-width: 540px){
                width: 200px;
            }
        }
    }
}

`;

export default Newletter