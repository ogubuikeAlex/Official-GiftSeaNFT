import React from 'react'
import nohistory from '../../img/nodata.png'
import styled from 'styled-components'

const Nodata = () => {
  return (
      <NodataStyled>
        <div className='nodata'>
        <p>You haven't added any NFT to your favourites.</p><br/>
        <img src={nohistory} alt='No_history'/>
        </div>
      </NodataStyled>
  )
}

const NodataStyled = styled.div`
text-align: left;
justify-content: center;
transform: translateX(13%);
@media(max-width: 1150px){
    transform: translateX(10%);
}
@media(max-width: 1045px){
    transform: translateX(-3%);
}
@media(max-width: 900px){
    transform: translateX(-10%);
}
@media(max-width: 768px){
    
    transform: translateX(30%);
}
@media(max-width: 600px){
    transform: translateX(5%);
}
@media(max-width: 425px){
    transform: translateX(-5%);
}
@media(max-width: 400px){
  transform: translateX(-2%);
}
.nodata{
    align-items: center;
    justify-content: center;
    font-size: 13px;
    @media(max-width: 600px){
        transform: translateX(20%);
    }
    @media(max-width: 400px){
        transform: translateX(10%);
    }

    img{
        width: 30%;
        object-fit: cover;
        transform: translateX(10%);
        @media(max-width:600px){
            width: 150px;
            height: 150px;
            transform: translateX(20%);
        }
    }
}
`;

export default Nodata