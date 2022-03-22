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
  p{
    font-size: 13px;
  }
  img{
    width:100px;
    height: 100px;
    object-fit: cover;
    justify-content: center;
    margin-top: -40px;
    transform: translateX(100%);
    align-items: center;
  }
}
`;

export default Nohistory