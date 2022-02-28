import React from 'react'
import { useState } from "react";
import CollectionStyled from '../../Styled-components/MarketplaceStyled';
import image1 from '../../img/unsplashed4.png';
import image2 from '../../img/unsplashed3.png';
import Card from '../../Components/Card'
import Dashboard from '../../pages/Userdashboardpages/Dashboard'
import unsplash from '../../img/unsplashed5.png'
import ClickedButt from '../../Components/clickedButton/ClickedButt'



const Collections = () => {
    const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
    return (
        <div>
        <CollectionStyled>
            <h4 style={{marginLeft: '20px', fontWeight: '600'}}>Our Marketplace</h4>
    <div className="container">
      <div className="bloc-tabs">
        <button 
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}>
          Unmatured NFTs
        </button>
        <button 
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}>
          Mature NFTs
        </button>
        </div>
      <div className="content-tabs">
        <div id="content-tab"
          className={toggleState === 1 ? "content  active-content" : "content"}>
            <div className='dashCards'>
            <ClickedButt/>
            <img src={unsplash}alt=""/>
            <Card/>
            </div>
            <div className='dashCards'>
            <ClickedButt/>
            <img src={image2}alt=""/>
            <Card/>
            </div>
        </div>
        <div id="content-tab"
          className={toggleState === 2 ? "content  active-content" : "content"}>
              <div className='dashCards'>
              <ClickedButt/>
            <img src={image1}alt=""/>
            <Card/>
            </div>
              <div className='dashCards'>
              <ClickedButt/>
            <img src={unsplash}alt=""/>
            <Card/>
            </div>
        </div>
        </div>
        </div>
            </CollectionStyled>
            <Dashboard/>
        </div>
    )
}

export default Collections
