import React from 'react'
import styled, {keyframes} from 'styled-components';
import {slideInUp} from 'react-animations'

const Slides = styled.div`
animation: 2s ${keyframes`${slideInUp}`}`;

const CounterSection = () => {
  return (
      <Slides>
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
    </Slides>
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
    @media(max-width: 540px){
        display: grid;
        grid-template-columns: repeat(1, 1fr);        
    }
    .willCount h1{
        font-size: 38px;
        font-weight: bolder;
        text-align: center;
        @media(max-width:540px){
            font-size: 30px;
        }
    }
        p{
        font-size: 18px;
        font-weight: bolder;
        color: #bbb;
        padding: .2rem;
        text-align: center;
        opacity: 0.8;
    }
}
`;

export default CounterSection