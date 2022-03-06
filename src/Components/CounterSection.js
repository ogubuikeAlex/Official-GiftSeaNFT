import React from 'react'
import styled, {keyframes} from 'styled-components';
import {slideInUp} from 'react-animations'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Slides = styled.div`
animation: 2s ${keyframes`${slideInUp}`}`;

const CounterSection = () => {
  return (
      <Slides>
      <CounterSectionStyled>
    <div className='counter'>
        {/* <h1><CountUp start={0} end={700}/>k</h1> */}
        <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
        {({ isVisible }) => (
          <div className='willCount'>
            <h1>{isVisible ? <CountUp end={700}/> : null}k</h1>
            <p>MInted NFTS</p>
          </div>
        )}
      </VisibilitySensor>
      <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
        {({ isVisible }) => (
          <div className='willCount'>
            <h1>{isVisible ? <CountUp start={1000000} end={2}/> : null}.4m</h1>
            <p>MInted NFTS</p>
          </div>
        )}
      </VisibilitySensor>
      <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
        {({ isVisible }) => (
          <div className='willCount'>
            <h1>{isVisible ? <CountUp end={100}/> : null}k</h1>
            <p>Holders</p>
          </div>
        )}
      </VisibilitySensor>
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