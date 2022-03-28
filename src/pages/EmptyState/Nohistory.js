import React from 'react'
import nodata from '../../img/nohistory.png'
import styled from 'styled-components'

const Nohistory = () => {
  return (
    <NohistoryStyled>
    <div className='empty_history'>
        <p>All your transactions would be shown here</p><br/><br/>
        <img src={nodata} alt='No_history'/>
    </div>
    </NohistoryStyled>
  )
}

const NohistoryStyled = styled.div`
justify-content: center;
align-items: center;
.empty_history{
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px){
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  p{
    font-size: 13px;
    @media only screen and (max-width: 768px){
      text-align: center;
    }

  }
  img{
    width:100px;
    height: 100px;
    object-fit: cover;
    justify-content: center;
    margin-top: -40px;
    transform: translateX(100%);
    align-items: center;
    @media only screen and (max-width: 1045px){
      transform: translateX(50%);
    }
    @media only screen and (max-width: 768px){
      transform: translateX(300%);
    }
    @media only screen and (max-width: 600px){
      transform: translateX(200%);
    }
    @media only screen and (max-width: 540px){
      transform: translateX(150%);
    }
    @media only screen and (max-width: 425px){
      transform: translateX(100%);
    }
    @media only screen and (max-width: 375px){
      transform: translateX(75%);
    }
  }
}
`;

export default Nohistory