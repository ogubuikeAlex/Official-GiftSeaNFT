import { useState } from "react";
import styled from 'styled-components';
import Slider from './Slider';

function TabToggle() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <TabToggleStyled>
    <div className="container">
      <h1>Hot Deals</h1>
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Sport 
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Art
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Culture
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
        <div className='right-hero'>
        <Slider/>
      </div>
      <div className='right-hero'>
        <Slider/>
      </div>
      <div className='right-hero'>
        <Slider/>
      </div>
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
        <div className='right-hero'>
        <Slider/>
      </div>
      <div className='right-hero'>
        <Slider/>
      </div>
      <div className='right-hero'>
        <Slider/>
      </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
        <div className='right-hero'>
        <Slider/>
      </div>
      <div className='right-hero'>
        <Slider/>
      </div>
      <div className='right-hero'>
        <Slider/>
      </div>
        </div>
      </div>
    </div>
    </TabToggleStyled>
  );
}
 
const TabToggleStyled = styled.div`
  width: 100%;
  .container {
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 60px;
  justify-content: center;
  h1{
    font-weight: bold;
  }
}
.bloc-tabs {
  display: flex;
  @media(max-width:540px){
    display: grid;
    transform: translateX(25%);
    grid-template-columns: repeat(1, 1fr);
  }
}
.right-hero{
  box-shadow: 2px 4px 8px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 70%;
  object-fit: cover;
  transform: translateX(-10px);
  margin: 2rem;
  background: #fff;
  padding: .3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
  
.tabs {

  padding: 15px;
  text-align: center;
  width: 50%;
  background: #FDFDFD;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.274);
  position: relative;
  outline: none;
}

.active-tabs  {
  background: #FDFDFD;
  font-weight: bolder;
  color: #00CBAC;
  border-bottom: 1px solid #00CBAC;
}

.active-tabs::after {
  content: "";
  display: block;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% + 2px);
  height: 5px;
  background: #00CBAC;
}
button {
  border: none;
  
}
.content-tabs {
  flex-grow : 1;
}
.content {
  background: white;
  display: flex;
  flex-direction: row;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: none;
}
.active-content {
  display: flex;
  flex-direction: row;
  @media(max-width: 540px){
    display: grid;
    justify-content: center;
    transform: translateX(30px);
    grid-template-columns: repeat(1, 1fr);
    margin: 0 !important;
  }
  
}
`;

export default TabToggle;