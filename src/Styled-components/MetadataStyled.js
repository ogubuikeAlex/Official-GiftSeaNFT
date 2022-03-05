import styled from 'styled-components'

const MetadataStyles = styled.div`
width: 718.99px;
@media only screen and (max-width: 1316px){
    width: 70%;
    height: fit-content;
    margin-left:-35px;
    padding: 1em;
}
@media only screen and (max-width: 1165px){
    margin-left: -45px;
}
@media only screen and (max-width: 1120px){
    margin-left: -55px;
}
@media(max-width: 1080px){
    margin-left: -65px;
}
@media only screen and (max-width: 1000px){
    margin-left: -80px;
}
@media only screen and (max-width: 1000px){
    margin-left: -80px;
}
@media(max-width: 918px){
    margin-left: -85px;
}
@media(max-width: 900px){
    margin-left: -95px;
}
@media(max-width: 849px){
    width: 100%;
    transform: translateX(40px);
}
@media only screen and (max-width: 768px){
    transform: translateX(90px);       
}
@media(max-width: 540px){
    width: 100%;
}
.metadata_container{
    width: 100%;
    background: #fff;
    padding: 0.8em;
    margin-top: 15px;
    object-fit: cover;
    img{
        height: 316px;
        width: 100%;
        object-fit: cover;
    }
}
.nftContainer{
    margin-top: 8px;
    margin-bottom: 8px;
    .listedNFT{
        font-family: Inter;
        font-size: 24px;
        font-weight: 500;
        line-height: 29px;
        text-align: left;
        @media(max-width:1045px){
            font-size: 19px;
        }
    }
    .giftCollection{
        display: flex;
        flex-direction: row;
        @media(max-width: 900px){
            flex-direction: row;
            line-height: 15px;
        }
        @media(max-width: 768px){
            flex-direction: row;
            line-height: 15px;
        }
        
        
    }
    .Buy{
        border: none;
        color: #fff;
        padding: 0.8em;
        background: #02AAB0;
        border-radius: 3px;
        width: 154px;
        @media(max-width: 1045px){
            width: 100px;
        }
        @media(max-width: 900px){
            width: 50px;
        }
        @media(max-width: 768px){
            width: 120px;
        }
        @media(max-width: 400px){
            width: 50px;
        }
    }
}
.gridContainer{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    position: relative;
    @media(max-width:1045px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: 400px){
        grid-template-columns: repeat(1, 1fr);
    }
    div{
        border: 1px solid rgba(26, 16, 54, 0.4);
        padding: 0.5em;
        justify-content: center;
        text-align: left;
        line-height: 10px;
        margin-top: 10px;
        .title{
            font-family: Inter;
            font-size: 12px;
            font-weight: 500;
            line-height: 15px;
            text-align: center;
            color: #645D66;
        }
        .details{
            font-family: Inter;
            font-size: 18px;
            font-weight: 700;
            line-height: 30px;
            text-align: center;
        }
    }
}

        .contents{
        .description{
            font-family: Inter;
            margin-top: 10px;
            font-size: 18px;
            font-weight: 500;
            line-height: 22px;
            text-align: left;
    
        }
    }

`;

export default MetadataStyles