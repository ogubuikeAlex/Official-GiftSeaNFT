import React from 'react'
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import history from '../../constants/data';
import DashboardWrapper, { DashboardWrapperRight } from '../../Components/dashboard-wrapper/DashboardWrapper'
import Nohistory from '../EmptyState/Nohistory';

const Dashboard = (props) => {
    return (
        <DashboardRightStyled>
            <DashboardWrapper>
                <DashboardWrapperRight>
                    <div className="metamask-top">
                        <div><i className='far fa-bell'></i></div>
                        <div className='drop'>
                            <div className='metaBroken'>
                                <p>Metamask</p>
                                {/* <p> {props.currentUser.currentUser.slice(0, 6)}...{props.currentUser.currentUser.slice(-3)}</p> */}
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" style={{ background: '#fff', color: 'black', border: 'none', fontSize: '16px', marginLeft: '20px' }}>
                                </Dropdown.Toggle>
                                <Dropdown.Menu style={{ padding: '1em', boxShadow: '2px 1px 2px 2px #bbb', marginTop: '20px', marginRight: '-50px' }}>
                                    <Dropdown.Item href="">0x30bf5022C23461mtwe</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div><br></br><br></br>
                    <div className='myBalance'>Your Balance</div>
                    <div className="balanceContainer">
                        <div><p className='portBal'>Portfolio Balance</p></div>
                        <div><p className='ethBal'>$23,300.00</p></div>
                        <div className='ethcontainer'>
                            <div>
                                <div className='brands'>
                                    <i className='fa-brands fa-ethereum'></i>
                                </div>
                            </div>
                            <div className='myEth'>
                                <p>4.48ETH</p>
                            </div>
                        </div>
                    </div>
                    <HistoryStyled>
                        <p className='history-title'>History</p>
                        <div className='history'>
                            {/* {
                                history.map((details) => {
                                    return <div className='details' key={details.id}>
                                        <div className='img'>
                                            <img className='imgUrl' src={details.imgUrl} alt='' />
                                            <div className='user'>
                                                <p className='title'>{details.title}</p>
                                                <p className='subtitle'>{details.subtitle}</p>
                                            </div>
                                        </div>
                                        <div className='myDuration'>
                                            <p className='duration'>{details.duration}</p>
                                        </div>
                                    </div>
                                })
                                <button className='seeall_btn'>See all</button>
                            } */}
                            <Nohistory/>
                        </div>
                    </HistoryStyled>
                </DashboardWrapperRight>
            </DashboardWrapper>
        </DashboardRightStyled>
    )
}

const DashboardRightStyled = styled.div`
overflow-y:auto;
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
    font-size: 16px;
    font-weight: 500;
    line-height: 29px;
    text-align: left;
    color: #110617;
    @media(max-width: 768px){
        text-align: center;
    }
}
.ethBal{
    height: 39px;
    font-family: Inter;
    font-size: 16px;
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
    @media only screen and (max-width: 768px){
        width: 50%;
        transform: translateX(50%);
    }
    @media only screen and (max-width: 400px){
        width: 60%;
        transform: translateX(35%);
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
const HistoryStyled = styled.div`
margin-top: 50px;
.history-title{
        height: 24px;
        width: 70px;
        font-family: Inter;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 20px;
        text-align: left;
        color: #110617;
        @media(max-width: 768px){
            width: 100%;
            text-align: center;
        }
    }
    .img{
        display: flex;
        flex-direction:row;
        margin-right: 10px;
    }
    .details{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 13px;
        @media(max-width: 900px){
            font-size: 13px;
        }
        .imgUrl{
            height: 30px;
            width: 30px;
            border-radius: 22px;
        }
        .user{
            display: block;
            margin-left: 10px;
            font-size: 11px;
            @media(max-width: 900px){
                margin-left: 5px;
            }
            .title{
                height: 17px;
                width: 140px;
                font-family: Inter;
                font-size: 11px;
                font-weight: 500;
                line-height: 17px;
                text-align: left;
                @media(max-width: 900px){
                    font-size: 12px;
                }
            }
            .subtitle{
                height: 12px;
                width: 80px;
                font-family: Inter;
                font-size: 10px;
                font-weight: 400;
                transform: translateY(-10px);
                text-align: left;
                color: #645D66;
            }
        }
        .duration{
            height: 12px;
            transform: translateX(-22px);
            color: #351347;
            font-family: Inter;
            font-size: 10px;
            font-weight: 600;
            line-height: 12px;
            text-align: left;
            @media only screen and (max-width: 1045px){
                width: 60px;
                margin-left:-10px;
            }
            @media only screen and (max-width: 900px){
                width: 60px;
            }
        }
    }
    .seeall_btn{
        height: 40px;
        width: 128px;
        border-radius: 6px;
        padding: 10px, 20px, 10px, 20px;
        color: #1A1036;
        background: #FFF;
        border: solid 1px #1A1036;
        outline: none;
        justify-content: center;
        transform: translateX(65%);
        :hover{
            color: #FFF;
            background: #02AAB0;
            transition: .4s ease-in-out all;
            outline: none;
        }
        @media(max-width: 1220px){
            justify-content: center;
            margin-left: -20px;
        }
        @media only screen and (max-width: 768px){
            transform: translateX(280px);
        }
        @media only screen and (max-width: 682px){
            transform: translateX(250px);
        }
        @media (max-width: 540px) and (min-width: 400px){
            justify-content: center;
            transform: translateX(170px);
        }
        @media(max-width: 400px){
            transform: translateX(90px);
        }

    }
`;

export default Dashboard
