import React, {useState} from 'react'
import {Data} from './Data'
import styled from 'styled-components'
import {IconContext} from 'react-icons'
import {FiPlus, FiMinus} from 'react-icons/fi'

const TogglerStyled = styled.div`
    margin-top: 80px;
    background: #F5F5F5;
    display: flex;
    flex-direction: column;
    width: 100%;    
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
    border-radius: 20px;
    justify-content: center;
    box-shadow: 2px 10px 15px 12px rgba(153, 153, 153, 0.3);
    @media(max-width: 540px){
        width: 400px;
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
        font-size: 1.5rem;
        @media(max-width: 540px){
            font-size: 16px;
        }
    }

`;
const Dropdown = styled.div`
    background: #FDFDFD;
    padding: 1em;
    p{
        border-left:3px solid #00FFB9;
        padding: 1em 3em;
    }
`;

const FrequentQuestions = styled.div`
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    h4{
        text-align: center;
        font-weight: bold;
        margin-bottom: 20px;
    }
    span{
        color: #00FFB9;
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
                <Container>
                    {Data.map((item, index) => {
                        return (
                            <>
                            <Wrap onClick={() => toggle(index)} key={index}>
                            <h4>{item.question}</h4>
                            <span>{clicked === index ? <FiMinus/> : <FiPlus/>}</span>
                            </Wrap>
                            {clicked === index ? (
                            <Dropdown>
                            <p>{item.answer}</p>
                            </Dropdown>
                            ): null }
                            </>
                        )
                    })}
                </Container>
            </TogglerStyled>
        </IconContext.Provider>
    );
};



export default Toggler;