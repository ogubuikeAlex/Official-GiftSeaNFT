import React from 'react'
import Dashboard from './Dashboard'
import styled from 'styled-components'
import Card from '../Components/Card'
import image1 from '../img/unsplashed4.png';
import image2 from '../img/unsplashed3.png';

const Favourites = () => {
    return (
        <div>
            <CollectionStyled>
            <h4 style={{marginLeft: '20px', fontWeight: '600'}}>My Favourites</h4>
            <div className="active-content">
            <div className='dashCards'>
            <img src={image1}alt=""/>
            <Card/>
            </div>
            <div className='dashCards'>
            <img src={image2}alt=""/>
            <Card/>
            </div>
        </div>
            </CollectionStyled>
            <Dashboard/>
        </div>

    )
}

const CollectionStyled = styled.div`
  width: 100%;
  margin-bottom: 50px;
  margin-left: -25px;
  @media only screen and (max-width: 1316px){
    margin-left: -40px;
}

@media only screen and (max-width: 1140px){
    margin-left: -60px;
}
@media only screen and (max-width: 1000px){
    margin-left: -70px;
  }
  @media only screen and (max-width: 849px){
    margin-left: -50px;
  }
  @media only screen and (max-width: 768px){
    margin-left: 0px;
  }
  @media only screen and (max-width: 400px){
    margin-left: -10px;
  }

  
.dashCards{
  box-shadow: 2px 4px 8px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 100%;
  object-fit: cover;
  transform: translateX(-10px);
  margin: 2rem;
  background: #fff;
  padding: .3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 1140px){
    font-size: 14px;
    }
    
@media only screen and (max-width: 1180px){
    margin-left: 15px;
    font-size: 12px;
}
 @media only screen and (max-width: 1080px){
    margin-left: 20px;
  }
  @media only screen and (max-width: 1060px){
    font-size: 11px;
    font-weight: 600;
  }
  @media only screen and (max-width: 1045px){
    font-size: 14px;
    width: 65%;
    margin-left: 90px;
  }
  @media only screen and (max-width: 1020px){
    margin-left: 80px;
    width: 65%;
  }
  @media only screen and (max-width: 900px){
    width: 50%;
    font-size: 14px;
    font-weight: 600;
    margin-left: 50px;
  }
  @media only screen and (max-width: 849px){
    width: 95%;
    font-size: 10px;
    transform: translateX(-40px);
    margin-bottom: -20px;
  }
  @media only screen and (max-width: 768px){
    width: 85%;
    font-size: 14px;
    transform: translateX(-10px);
  }
  @media only screen and (max-width: 600px){
    font-size: 14px;
    width: 95%;
    transform: translateX(-25px);
  }
  @media only screen and (max-width: 540px){
    width: 70%;
  }
  @media only screen and (max-width: 400px){
    width: 100%;
    transform: translateX(-85px);
  }
}
  

.active-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    width: 70%;
    margin-left: -20px;
  @media(max-width: 900px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0 !important;
    width: 100%;
    font-size: 10px;
    align-items: center;
  }
  @media only screen and (max-width: 1045px){
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (max-width: 1020px){
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (max-width: 849px){
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
  @media(max-width: 540px){
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(1, 1fr);
    width: 90%;
    transform: translateX(60px);
    margin: 0 !important;
  }
}
`;

export default Favourites
