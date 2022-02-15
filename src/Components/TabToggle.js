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
          onClick={() => toggleTab(1)}>
          All 
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}>
          Art
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}>
          Music
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}>
          Sport 
        </button>

        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}>
          Gaming 
        </button>
        </div>
      <div className="content-tabs">
        <div id="content-tab"
          className={toggleState === 1 ? "content  active-content" : "content"}>
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
        <div id="content-tab"
          className={toggleState === 2 ? "content  active-content" : "content"}>
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

        <div id="content-tab"
          className={toggleState === 3 ? "content  active-content" : "content"}>
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

        <div id="content-tab"
          className={toggleState === 4 ? "content  active-content" : "content"}>
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
        <div id="content-tab"
          className={toggleState === 5 ? "content  active-content" : "content"}>
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
  background: #FCFCFC;
  margin-bottom: 50px;
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
    @media(max-width: 540px){
      font-size: 22px;
  }
  }
}
.bloc-tabs {
  display: flex;
  justify-content: center;
  @media(max-width:540px){
    display: grid;
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
  @media(max-width: 540px){
    margin: 1.6rem; 
  }
}
  
.tabs {
  padding: 15px;
  text-align: center;
  background: #FCFCFC;
  font-size: 18px;
  font-family: 'Montserrat';
  font-weight: 500;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  outline: none;
}

.active-tabs  {
  line-height: 22px;
  background: #FCFCFC;
  letter-spacing: 0em;
  transition: ease-in-out .4s all;
  color: #00CBAC;
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
  @media(max-width: 540px){
    width:13%;
    height: 3px;
  }
}
button {
  border: none;  
  justify-content: center;
}
.content {
  background: #FCFCFC;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  display: none;
}
.active-content {
  display: flex;
  flex-direction: row;
  margin: 0 !important;
  padding: 0 !important;
  @media(max-width: 900px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0 !important;
    width: 100%;
    font-size: 10px;
    align-items: center;
  }
  @media(max-width: 540px){
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(1, 1fr);
    width: 80%;
    transform: translateX(90px);
    margin: 0 !important;
  }
}
`;

export default TabToggle;