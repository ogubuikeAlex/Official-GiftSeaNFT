import React from 'react'
import styled from 'styled-components'

const CounterSection = () => {
  return (
      <CounterSectionStyled>
    <div className='counter'>
        <div className='willCount'>
        <h1>700k</h1>
        <p>MInted NFTS</p>
        </div>
        <div className='willCount'>
        <h1>2.4m</h1>
        <p>MInted NFTS</p>
        </div>
        <div className='willCount'>
        <h1>100k</h1>
        <p>Holders</p>
        </div>
    </div>
    </CounterSectionStyled>
  )
}

const CounterSectionStyled = styled.div`
background: #FDFDFD;
.counter{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 30px 50px;
    line-height: 30px;
    .willCount h1{
        font-size: 38px;
        font-weight: bolder;
    }
        p{
        font-size: 18px;
        font-weight: bolder;
        color: #bbb;
        padding: .2rem;
        opacity: 0.8;
    }
}
`;

export default CounterSection