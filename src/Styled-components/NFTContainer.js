import styled from 'styled-components'


const NFTContainerStyled = styled.div`
.contentContainer{
    height: 370px;
    width: 716px;
    border-radius: 10px;
    background: #FFF;
    padding: 0.8em;
    transform: translateX(10px);
    @media only screen and (max-width: 1316px){
        width: 100%;
        height: fit-content;
    }
    @media(max-width: 1220px){
        width: 100%;
    }
    @media only screen and (max-width: 1165px){
        width: 100%;
        height: fit-content;
        display: grid;
        grid-template-columns: repeat(1, 1fr);

    }
    @media only screen and (max-width: 768px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media only screen and (max-width: 540px){
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        height:fit-content;
        :hover{
            box-shadow: 0px 20px 20px 0px #3333331A;
        }
    }
}

.NFTCardContainer{
    display: grid;
    width: 710.19px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    @media only screen and (max-width: 1316px){
        width: 100%;
    }
    @media(max-width: 1220px){
        width: 100%;
    }
    @media(max-width: 1045px)and(min-width: 900px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: calc(100% + 17%);
    }
    @media (max-width: 1080px){
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
    @media only screen and (max-width: 849px){
        grid-template-columns: repeat(2, 1fr);
        margin-left: -30px;
    }
    @media only screen and (max-width: 825px){
        grid-template-columns: repeat(1, 1fr);
        width: 80%;
        transform: translateX(45px);
    }
    @media only screen and (max-width: 768px){
        display: grid;
        width: 90%;
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 682px){
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
    @media only screen and (max-width: 540px){
        grid-template-columns: repeat(1, 1fr);
        width: 80%;
        transform: translateX(80px);
        justify-content: center;
    }
    @media(max-width:400px){
        width: 100%;
        transform: translateX(30px);
    }
    .dashCards{
        padding:0.6em;
        background:#FFF;
        border-radius: 20px;
        margin: 10px;
        box-shadow: 0px 10px 30px 0px #0000001A;
        @media(max-width: 1220px){
            width: 100%;
            font-size: 14px;
        }
        @media(max-width: 1138px){
            width: 100%;
            font-size: 12px;
            font-weight: 500;
        }
        @media(max-width: 1080px){
            width: 65%;
            transform: translateX(55px);
            font-size: 16px;
            font-weight: 600;
        }
        @media(max-width: 950px){
            font-size: 13px;
            width: 70%;
            margin-left: -10px;
        }
        @media(max-width: 932px){
            font-size: 10px;
        }
        @media(max-width: 918px){
            width: 85%;
            margin-left: -35px;
        }
        @media(max-width: 849px){
            width: 100%;
        }
        @media(max-width: 540px){
            width: 100%;
            transform: translateX(20px);
        }
        @media(max-width: 400px){
            width: 100%;
            transform: translateX(40px);
        }
        button{
            @media only screen and (max-width: 1080px){
                padding:0.8em;
            }
            @media only screen and (max-width: 1200px){
                padding:0.4em;
            }
            @media only screen and (max-width: 1165px){
                padding:0.4em;
            }
            @media(max-width: 932px){
                padding: 0.7em;
            }
        }
        }
}
.text-container{
    @media only screen and (max-width: 1316px){
        width: 100%;
    }
    @media(max-width: 1220px){
        width: 100%;
    }
    @media only screen and (max-width: 540px){
        width: 100%;
    }
}
.woman{
    height: 316px;
    width: 320px;
    border-radius: 3px;
    @media only screen and (max-width: 1316px){
        width: 100%;
    }
    @media(max-width: 1220px){
        width: 100%;
    }
    @media(max-width: 540px){
        width: 100%;
    }
}
.listedNFT{
    width: 175px;
    font-size: 24px;
    font-weight: 500;
    font-family: 'inter';
    line-height: 29px;
}
.ether{
    @media(max-width: 540px){
        margin-top:40px;
    }
}
.SeeAll{
    width: 52px;
    line-height: 19px;
    color: #645D66;
    font-weight: 400;
    font-size: 16px;
}
.africana{
    height: 29px;
    width: 162px;
    font-family: 'Inter';
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    text-align: left;
    @media(max-width: 540px){
        margin-top: 10px;
        margin-left: 10px;
    }
}
.africanaContent{
    height: 100px;
    width: 291px;
    font-family: 'Inter';
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: #888888;
    @media only screen and (max-width: 1165px){
        width: 100%;
        height: fit-content;
    }
    @media(max-width: 540px){
        width: 100%;
    }
}
.ethereumprice{
    font-family: 'Inter';
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
    color:#645D66;
    @media(max-width: 540px){
        margin-top: -20px;
        width: 100%;
    }
}
.holding{
    height: 30px;
    width: 120px;
    font-family: 'inter';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    text-align: left;
}
.view,
.buy{
    height: 41px;
    width: 100%;
    background: #FFF;
    font-size:14px;
    border-radius: 3px;
    border: solid 1px #888888;
    margin-top: 35px;
    outline: none;
    :hover{
        background: #02AAB0;
        transition: ease-in-out all .4s;
        cursor: pointer;
        outline: none;
        color: #FFF;
    }
}
`;

export default NFTContainerStyled;