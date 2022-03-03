import { useState } from "react";
import MarketplaceStyled from '../../Styled-components/MarketplaceStyled'
import image1 from '../../img/unsplashed4.png';
import image2 from '../../img/unsplashed3.png';
import image3 from '../../img/unsplashed2.png';
import Card from '../../Components/Card'
import Dashboard from '../../pages/Userdashboardpages/Dashboard'
import image4 from '../../img/unsplash.png'
import unsplash from '../../img/unsplashed5.png'
import unsplashed from '../../img/unsplashedround.png'
import ClickedButt from "../../Components/clickedButton/ClickedButt";

function MarketPlace() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
      <div>
    <MarketplaceStyled>
    <h4 style={{marginLeft: '20px', fontWeight: '600'}}>Our Marketplace</h4>
    <div className="container">
      <div className="bloc-tabs">
        <button 
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}>
          All NFTs
        </button>
        <button 
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}>
          Trending
        </button>
        <button 
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}>
          New Listing
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
            <div className='dashCards'>
            <ClickedButt/>
            <img src={image1}alt=""/>
            <Card/>
            </div>
            <div className='dashCards'>
            <ClickedButt/>
            <img src={image4}alt=""/>
            <Card/>
            </div>
            <div className='dashCards'>
            <ClickedButt/>
            <img src={unsplash}alt=""/>
            <Card/>
            </div>
            <div className='dashCards'>
            <ClickedButt/>
            <img src={unsplash}alt=""/>
            <Card/>
            </div>
            <div className='dashCards'>
            <ClickedButt/>
            <img src={image1}alt=""/>
            <Card/>
            </div>
            <div className='dashCards'>
            <ClickedButt/>
            <img src={unsplashed}alt=""/>
            <Card/>
            </div>
        </div>
        <div id="content-tab"
          className={toggleState === 2 ? "content  active-content" : "content"}>
              <div className='dashCards'>
              <ClickedButt/>
            <img src={unsplash}alt=""/>
            <Card/>
            </div>
              <div className='dashCards'>
              <ClickedButt/>
            <img src={image1}alt=""/>
            <Card/>
            </div>
            <div className='dashCards'>
            <ClickedButt/>
            <img src={image3}alt=""/>
            <Card/>
            </div>
            <div className='dashCards'>
            <ClickedButt/>
            <img src={image2}alt=""/>
            <Card/>
            </div>
        </div>
        
        <div id="content-tab"
          className={toggleState === 3 ? "content  active-content" : "content"}>
              <div className='dashCards'>
              <ClickedButt/>
            <img src={image2}alt=""/>
            <Card/>
            </div>
            <div className='dashCards'>
            <ClickedButt/>
            <img src={image4}alt=""/>
            <Card/>
            </div>
            <div className='dashCards'>
            <ClickedButt/>
            <img src={image3}alt=""/>
            <Card/>
            </div>
            <div className='dashCards'>
            <ClickedButt/>
            <img src={image1}alt=""/>
            <Card/>
            </div>
        </div>
        </div>
        </div>
    </MarketplaceStyled>
   
    </div>
  );
}
 

export default MarketPlace;