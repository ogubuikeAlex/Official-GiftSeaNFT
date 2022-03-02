import React from 'react'
import styled from 'styled-components'
import Dashboard from '../Userdashboardpages/Dashboard'
import TreasuryStyled from '../../Styled-components/MarketplaceStyled';
import image1 from '../../img/unsplashed5.png';
import image2 from '../../img/unsplashed4.png';
import EditCards from  '../../pages/Admindashboardpages/EditCards'
import ClickedButt from '../../Components/clickedButton/ClickedButt';

const Treasury = () => {
    return (
        <div>
            <TreasuryAdjusted>
            <TreasuryStyled>
            <h4 style={{fontWeight: '600'}}>My Treasury</h4>
            <div className="active-content">
            <div className='dashCards'>
            <img src={image1}alt=""/>
            <ClickedButt/>
            <EditCards/>
            </div>
            <div className='dashCards'>
            <img src={image2}alt=""/>
            <ClickedButt/>
            <EditCards/>
            </div>
            <div className='dashCards'>
            <img src={image1}alt=""/>
            <ClickedButt/>
            <EditCards/>
            </div>
            <div className='dashCards'>
            <img src={image2}alt=""/>
            <ClickedButt/>
            <EditCards/>
            </div>
        </div>
            </TreasuryStyled>
            </TreasuryAdjusted>
            <Dashboard/>
        </div>

    )
}

const TreasuryAdjusted = styled.div`
    margin-left: 10px;
`;

export default Treasury
