import React, {useState} from 'react'
import {Data} from '../../Components/Data'
import styled, {keyframes} from 'styled-components'
import FrequentStyled from '../../Styled-components/MarketplaceStyled'
import {fadeInUp} from 'react-animations';
import {IconContext} from 'react-icons'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'

const Bounce = styled.div`
animation: 2s ${keyframes`${fadeInUp}`}`;

const TogglerStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:-20px;
    width: 100%; 
    transition: all ease-in-out .6s;   
    @media(max-width: 540px){
    height: 100%;
    position: relative;
    padding-bottom: 60px;
    }
`;
const Container = styled.div`
    background: #FFF;
    transition: all ease-in-out .4s;
    box-shadow: 10px 24px 54px 0px #0000000A;
    border-radius: 30px;
    justify-content: center;
    @media(max-width: 540px){
        width: 400px;
        margin: 0 !important;
    }
    @media(max-width: 540px){
        width: 350px;
        margin: 0 !important;
    }
`;

const Wrap = styled.div`
    background: #FFF;
    color: black;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
    justify-content: space-between;
    transition: all ease-in-out .4s;
    align-items: center;
    padding-right: 20px;
    text-align: center;
    cursor: pointer;
    @media(max-width: 540px){
        font-size: 16px;
        margin: 0 !important;
    }
    :first-child{
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
    :last-child{
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
    h6{
        padding: 1rem;
        font-size: .8rem;
        @media(max-width: 540px){
            font-size: .8rem;
            padding:1rem;
        }
    }

`;
const Dropdown = styled.div`
    background: #FDFDFD;
    padding: 2rem;
    p{
        border-left: 1.2px solid #02AAB0;
        padding-left: 1.2em;
        text-align: justify;
        transition: ease-in-out .6s all;
    }
`;

const FrequentQuestions = styled.div`
    justify-content: left;
    align-items: left;
    @media(max-width: 540px){
        margin-bottom: 50px;
    }
    h4{
        text-align: left;
        font-size: 20px;
        margin-bottom: 15px;
        font-weight: 700;
        justify-content: left;
        @media(max-width: 540px){
            font-size: 14px;
        }
        }
        h1{
            font-weight: bold;
            @media(max-width: 540px){
                font-size: 24px;
            }
            @media(max-width: 400px){
                font-size: 22px;
                padding:1rem;
             }
            }
    }
    span{
        color: #02AAB0;
        font-size: 13px;
    }
`;


const Toggler= () => {
    const [clicked, setClicked] = useState(false);
    const toggle = index => {
        if(clicked === index){
            //If clicked question is already active, then close
            return setClicked(null);
        } 

        setClicked(index)
    }
    
    return (
        <FrequentStyled>
        <IconContext.Provider value={{color: '#02AAB0', size: '18px'}}>
            <TogglerStyled>
            <FrequentQuestions>
                <h4>Frequently asked questions</h4>
            </FrequentQuestions>
                    <Bounce>
                    <Container>
                        <h4 style={{padding: '1em', transform:'translateY(15px)', fontSize:'14px', fontWeight:'bold'}}>Quick answers to your questions</h4>
                    {Data.map((item, index) => {
                        return (
                            <>
                            <Wrap onClick={() => toggle(index)} key={index}>
                            <h6>{item.question}</h6>
                            <span>{clicked === index ? <IoIosArrowUp/> : <IoIosArrowDown style={{transition: 'ease-in-out .6s'}}/>}</span>
                            </Wrap>
                            {clicked === index ? (
                            <Dropdown>
                            <Bounce>
                            <p>{item.answer}</p>
                            </Bounce>
                            </Dropdown>
                            ): null }
                            </>
                        )
                    })}
                </Container>
                </Bounce>
            </TogglerStyled>
        </IconContext.Provider>
        <button style={{color: '#FFF', padding:'0.4em 50px', borderRadius:'3px', border:'none', background:'#02AAB0', marginTop:'20px'}}>Send us a direct message</button>
        </FrequentStyled>
    );
};


export default Toggler;