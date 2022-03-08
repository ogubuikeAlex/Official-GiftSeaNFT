import React, {useState} from 'react'
import {Data} from './Data'
import styled, {keyframes} from 'styled-components'
import {fadeInUp} from 'react-animations';
import {IconContext} from 'react-icons'
import {FiPlus, FiMinus} from 'react-icons/fi'

const Bounce = styled.div`
animation: 2s ${keyframes`${fadeInUp}`}`;

const TogglerStyled = styled.div`
    margin-top: 80px;
    background: linear-gradient(180deg, #FFFFFF -6.15%, #F5F6F8 90.72%);
    display: flex;
    flex-direction: column;
    width: 100%; 
    transition: all ease-in-out .6s;   
    align-items: center;
    @media(max-width: 540px){
        margin-top: 80px;
        height: 100%;
        position: relative;
        padding-bottom: 60px;
    }
`;
const Container = styled.div`
    width: 600px;
    margin: 4em;
    transition: all ease-in-out .4s;
    border-radius: 20px;
    justify-content: center;
    box-shadow: 2px 10px 15px 12px rgba(153, 153, 153, 0.3);
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
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
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
    h4{
        padding: 2rem;
        font-size: 1.2rem;
        @media(max-width: 540px){
            font-size: 14px;
            padding:1rem;
        }
    }

`;
const Dropdown = styled.div`
    background: #FDFDFD;
    padding: 2rem;
    p{
        border-left:3px solid #00FFB9;
        padding-left: 1.2em;
        text-align: justify;
        transition: ease-in-out .6s all;
    }
`;

const FrequentQuestions = styled.div`
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    @media(max-width: 540px){
        margin-bottom: 50px;
    }
    h4{
        text-align: center;
        font-weight: bold;
        margin-bottom: 20px;
        @media(max-width: 540px){
            font-size: 18px;
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
        <IconContext.Provider value={{color: '#00FFB9', size: '25px'}}>
            <TogglerStyled>
            <FrequentQuestions>
            <h4>Quick answers to your questions</h4>
            <h1>Frequently Asked <span>Questions</span></h1>
            </FrequentQuestions>
                    <Bounce>
                    <Container>
                    {Data.map((item, index) => {
                        return (
                            <>
                            <Wrap onClick={() => toggle(index)} key={index}>
                            <h4>{item.question}</h4>
                            <span>{clicked === index ? <FiMinus/> : <FiPlus style={{transition: 'ease-in-out .6s'}}/>}</span>
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
    );
};



export default Toggler;