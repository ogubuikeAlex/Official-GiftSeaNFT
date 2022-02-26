import React, {useState} from 'react'
import styled from 'styled-components'
import Heart from 'react-animated-heart';


const ClickedButt = () => {
  const [isClick, setClick] = useState(false);
  return (
      <ClickedStyled>
          <span className='heart'>
          <span className='spanned'></span>
          <span><Heart isClick={isClick} onClick={() => setClick(!isClick)}/></span>
          </span>
        </ClickedStyled>
  )
}

const ClickedStyled = styled.div`
position: absolute;
right: 20px;
top: 10px;
.spanned{
    width: 60px;
    height: 60px;
    background: black;
    border-radius: 50%;
}
.heart{
    display: flex;
    position: relative;
    width: 45px;
    height: 45px;
    position: absolute;
    top: 30px;
    z-index: 100 !important;
    border-radius: 50%;
    right: 20px;
}
.heart{
    transform: translateY(-40px)
}
`;

export default ClickedButt;