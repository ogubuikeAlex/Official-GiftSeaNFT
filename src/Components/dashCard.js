import React from 'react'
//import styled from 'styled-components';
import unsplash from '../img/unsplashed5.png'
import Card from '../Components/Card'

export default function DashCard (props) {
 return (
    <div className='dashCards'>
    <img src={unsplash}alt=""/>
    {/* <img src={props.url}alt=""/> */}
    <Card 
        name = {props.name}
        price = {props.price}
        total = {props.total}
        available = {props.available}
    />
    </div>
 )
}

// const TabToggleStyled = styled.div`
// .dashCards{
//     box-shadow: 2px 4px 8px 10px rgba(0, 0, 0, 0.1);
//     border-radius: 20px;
//     width: 100%;
//     object-fit: cover;
//     transform: translateX(-10px);
//     margin: 2rem;
//     background: #fff;
//     padding: .3rem;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     @media only screen and (max-width: 1140px){
//       font-size: 14px;
//   }
//   @media only screen and (max-width: 1180px){
//       margin-left: 15px;
//       font-size: 12px;
//   }
//    @media only screen and (max-width: 1080px){
//       margin-left: 20px;
//     }
//     @media only screen and (max-width: 1060px){
//       font-size: 11px;
//       font-weight: 600;
//     }
//     @media only screen and (max-width: 1045px){
//       font-size: 14px;
//       width: 65%;
//       margin-left: 90px;
//     }
//     @media only screen and (max-width: 1020px){
//       margin-left: 80px;
//       width: 65%;
//     }
//     @media only screen and (max-width: 900px){
//       width: 50%;
//       font-size: 14px;
//       font-weight: 600;
//       margin-left: 50px;
//     }
//     @media only screen and (max-width: 849px){
//       width: 95%;
//       font-size: 10px;
//       transform: translateX(-40px);
//       margin-bottom: -20px;
//     }
//     @media only screen and (max-width: 768px){
//       width: 85%;
//       font-size: 14px;
//       transform: translateX(-10px);
//     }
//     @media only screen and (max-width: 600px){
//       font-size: 14px;
//       width: 95%;
//       transform: translateX(-25px);
//     }
//     @media only screen and (max-width: 540px){
//       width: 70%;
//     }
//     @media only screen and (max-width: 400px){
//       width: 100%;
//       transform: translateX(-85px);
//     }
//   }
//  `;  