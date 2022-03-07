import { useState } from "react";
import styled, {keyframes} from 'styled-components';
import TabPagination from './TabPagination';
import { fadeInDown } from "react-animations";

const Slides = styled.div`
animation: 2s ${keyframes`${fadeInDown}`}
`;

function TabToggle() {
  const [toggleState, setToggleState] = useState(1,2,3,4,5);

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
        <TabPagination/>
        </div>
        <div id="content-tab"
          className={toggleState === 2 ? "content  active-content" : "content"}>
        <TabPagination/>
        </div>
        <div id="content-tab"
          className={toggleState === 3 ? "content  active-content" : "content"}>
        <TabPagination/>
        </div>
        <div id="content-tab"
          className={toggleState === 4 ? "content  active-content" : "content"}>
        <TabPagination/>
        </div>
        <div id="content-tab"
          className={toggleState === 5 ? "content  active-content" : "content"}>
        <TabPagination/>
        </div>
      </div>
    </div>
    </TabToggleStyled>
  );
}
 
const TabToggleStyled = styled.div`
  width: 100%;
  padding: 20px;
  background: #FCFCFC;
  margin-bottom: 50px;
  justify-content: center;
  align-items: center;
  h1{
    font-weight: bold;
    text-align: center;
    @media(max-width: 540px){
      font-size: 22px;
  }
  }
}
 .bloc-tabs {
  display: flex;
  justify-content: center;
  transform: translateY(30px);
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
  background: #FCFCFC;
  color: #00CBAC;
}
.content-tabs{
  padding: 2rem;
  justify-content: center;
  #content-tab{
    margin-bottom: 30px;
  }
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
  display: none;
}
.active-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
`;

export default TabToggle;