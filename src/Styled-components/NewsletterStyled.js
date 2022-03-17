import styled from 'styled-components'

const NewsletterStyled = styled.div`
transform:translateY(-15px);
background: #02AAB0;
border-radius: 10px;
width: 100%;
height: 181px;
margin-bottom: 15px;
@media only screen and (max-width: 1316px){
    width: 100%;
}
.attach{
    position: absolute;
    width: 100%;
    right: 0;
    height: 181px;
}
.center-container{
    justify-content: left;
    transform: translateY(30px) translateX(20px);
    @media(max-width: 540px){
        width: 100%;
    }
}
.center-container p{
    width: 368px;
    height: 29px;
    color: #FFF;
    font-family: 'Inter';
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    @media (max-width: 1000px){
        transform: translateX(-10px);
        font-size: 18px;
    }
    @media(max-width: 540px){
        width: 100%;
        font-size:16px;
    }

}
 .explore{
    border: none;
    background: #FFF;
    color: #02AAB0;
    width: 186px;
    height: 41px;
    transform: translateY(20px);
    @media(max-width: 540px){
        width: 70%;
        font-size: 16px;
    }
    }
}

`;

export default NewsletterStyled;