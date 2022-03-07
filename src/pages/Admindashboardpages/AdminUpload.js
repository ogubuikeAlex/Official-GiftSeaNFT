import React from 'react'
import {Dropdown} from 'react-bootstrap';
import styled from 'styled-components';
import DashStyled from '../../Styled-components/MarketplaceStyled';
import Card from '../../Components/Card'
import ClickedButt from '../../Components/clickedButton/ClickedButt'
import image1 from '../../img/latestNft.png';
import DashboardWrapper, {  DashboardWrapperRight } from '../../Components/dashboard-wrapper/DashboardWrapper'
import PreviewCard from '../../Components/PreveiwCard';

const Dashboard = ({name, src, price, description}) => {
    return (
        <DashboardRightStyled>
        <DashboardWrapper>
            <DashboardWrapperRight>
                <div className="metamask-top">
                    <div><i className='far fa-bell'></i></div>
                    <div className='drop'>
                        <div className='metaBroken'>
                        <p>Metamask</p>
                        <small>0x30bf5022C...</small>
                        </div>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" style={{background: '#fff', color: 'black', border:'none', fontSize: '16px', marginLeft: '20px'}}>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{padding: '1em', boxShadow:'2px 1px 2px 2px #bbb', marginTop:'20px', marginRight: '-50px'}}>
                          <Dropdown.Item href="#/action-1">0x30bf5022C23461mtwe</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>
                </div><br></br>
                <p>Preview</p>
                <DashStyled>
                <div id='dash' className='dashCards'>
                <ClickedButt/>
                {/* <img src={image1}alt=""/> */}
                <img src={src}alt=""/>
                <PreviewCard
                name = {name}
                price = {price}
                description = {description}
                />
                </div>
                </DashStyled>
            </DashboardWrapperRight>
        </DashboardWrapper>
        </DashboardRightStyled>
    )
}

const DashboardRightStyled = styled.div`
overflow-y:auto;
#dash{
    @media only screen and (max-width: 1316px){
        margin-left: 60px;
    }
}
@media(max-width: 1220px)and(min-width:900px){
    width: calc(100% + 15%);
    transform: translateX(30px);
}
@media only screen and (max-width: 849px){
    transform: translateX(-25px);
  }
  @media only screen and (max-width: 768px){
    transform: translateX(0);
  }
    .portBal{
    height: 15px;
    width: 99px;
    font-family: Inter;
    font-size: 12px;
    font-weight: 600;
    line-height: 15px;
    text-align: left;
    color: #02AAB0;
}
.myBalance{
    height: 29px;
    margin-bottom: 20px;
    font-family: Inter;
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    text-align: left;
    color: #110617;
}
.ethBal{
    height: 39px;
    width: 148px;
    font-family: Inter;
    font-size: 26px;
    font-weight: 500;
    line-height: 39px;
    text-align: left;
    color: #252F40;
}
.balanceContainer{
    height: 149px;
    width: 291px;
    padding:10px 20px;
    border-radius: 8px;
    background: #FFFFFF;
    border: 1px solid #02AAB066;
    box-shadow: 0px 20px 20px 0px #3333331A;
    @media(max-width: 1220px){
        width: 200px;
    }
    @media(max-width:540px){
        width: 100%;
        justify-content: center;
        align-items: center;
    }
}
.myEth{
    margin-top: 10px;
    margin-left:6px;
}
.metamask-top{
    display: flex;
    flex-direction: row;
    margin-left: -30px;
    justify-content: space-around;
    @media(max-width: 900px){
        justify-content: space-evenly;
    }
    @media(max-width:540px){
        width: 100%;
        transform: translateX(20px);
    }
    .drop p{
        display: flex;
        flex-direction: column;
        font-family: Inter;
        font-size: 16px;
        font-weight: 500;
        text-align: left;
    }
    .metaBroken{
        display: block;
    }
    i{
        font-size:23px;
        margin-top: 12px;
    }
}
.drop{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
.ethcontainer{
    display: flex;
    background: #F5F5F5;
    height: 40px;
    width: 110px;
    border-radius: 50px;
    p{
       color: #252F40;
       font-weight: 600;
       font-size: 12px;
       width: 52px;
       height: 18px;
    }
    .brands{
        padding: 1em;
        margin-top: 5px;
        transform: translateX(5px) translateY(-1px);
        background: #FFF;
        margin-right: 7px;
        width: 18px;
        height: 18px;
        border-radius: 50px;
    }
    i{
        margin-right: 10px;
        text-align: center;
        transform: translateX(-5px) translateY(-10px);
        width: 11px;
        height: 11px;
    }
}
`;

export default Dashboard
