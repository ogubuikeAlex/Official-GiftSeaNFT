import styled from 'styled-components'

const ButtonStyled = styled.div`
display: flex;
flex-direction: column;
line-height: 10px;
color: #02AAB0 !important;
margin-right: 20px;
margin-left: 20px;

.button{
    border: 1px solid #02AAB0;
    background: #FFF;
    color: #02AAB0;
    &:last-child{
        color: #02AAB0;
        :hover{
            color: #FFF;
        }
    }
    :hover{
        background: #02AAB0;
        color: #FFF;
    }
    .link{
        padding: 1em;
        :hover{
            color: #FFF;
        }
    }
    
}

.buttondis{
    border: 1px solid #D1D1D1;
    background: #F5F7FB;
    color: #02AAB0;
    cursor: default;
    &:last-child{
        color: #02AAB0;
        :hover{
            color: #FFF;
        }
    }
    :hover{
        cursur: pointer;
    }
    .link{
        padding: 1em;
        :hover{
            color: #FFF;
        }
    }
    
}
`;

export default ButtonStyled