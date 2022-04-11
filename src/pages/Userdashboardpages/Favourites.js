import React from 'react'
import styled from 'styled-components'
import Dashboard from '../Userdashboardpages/Dashboard'
import FavouriteStyled from '../../Styled-components/MarketplaceStyled';
import Card from '../../Components/Card'
import image1 from '../../img/unsplashed4.png';
import image2 from '../../img/unsplashed3.png';
import ClickedButt from '../../Components/clickedButton/ClickedButt'
import Nodata from '../EmptyState/Nodata';

const Favourites = () => {
    return (
        <div>
            <FavouritesAdjusted>
            <FavouriteStyled>
            <h4 style={{marginLeft: '40px', fontWeight: '600'}}>My Favourites</h4>
            {/* <div className="active-content">
            <div className='dashCards'>
            <ClickedButt/>
            <img src={image1}alt=""/>
            <Card/>
            </div>
            <div className='dashCards'>
            <ClickedButt/>
            <img src={image2}alt=""/>
            <Card/>
            </div>
    </div> */}
            <Nodata/>
            </FavouriteStyled>
            </FavouritesAdjusted>            
            {/* <Dashboard/> */}
        </div>

    )
}

const FavouritesAdjusted = styled.div`
    margin-left: 10px;
`;

export default Favourites
