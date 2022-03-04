import React from 'react'
import styled from 'styled-components'
import Dashboard from '../Userdashboardpages/Dashboard'
import FavouriteStyled from '../../Styled-components/MarketplaceStyled';
// import Card from '../../Components/Card'
// import Clickedbutt from '../../Components/clickedButton/ClickedButt'
// import image1 from '../../img/unsplashed4.png';
// import image2 from '../../img/unsplashed3.png';

const Favourites = () => {
    return (
        <div>
            <FavouritesAdjusted>
            <FavouriteStyled>
            <h4 style={{marginLeft: '10px', fontWeight: '600'}}>I am the Metadata</h4>
            </FavouriteStyled>
            </FavouritesAdjusted>
            <Dashboard/>
        </div>

    )
}

const FavouritesAdjusted = styled.div`
    margin-left: 10px;
`;

export default Favourites
