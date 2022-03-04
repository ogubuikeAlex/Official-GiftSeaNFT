import styled from 'styled-components'

const UploadStyled = styled.div`
width: 718.99px;
@media only screen and (max-width: 1316px){
    width: 70%;
    height: fit-content;
    margin-left:-40px;
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
.button{
        width: 100%;
        border: 2px solid red;
        margin: 20px;

    }
.items{      
    background: #FFF;    
    width: 100%;
    border-radius: 9px;
    padding: 20px;
    margin-top: 5px;
    p{
        font-family: Inter;
        font-size: 18px;
        font-weight: 500;
        line-height: 26px;
        text-align: left;
    }
    .descriptionText{
        margin-top: 25px;
    }
    input{
        width: 100%;
        height: 54px;
        border-radius: 5px;
        padding: 10px;
        outline: #02AAB0;
        border: 1px solid #CECECE;
    }
    .description{
        height: 139px;
        width: 100%;
        border-radius: 5px;
        padding: 10px;
        outline: #02AAB0;
        border: 1px solid #CECECE;
    }
}

.uploadCentered{
    height: 204px;
    width: 100%;
    border-radius: 4px;
    border: 1px dashed #8C9196;
    background: #F6F6F7;
    .pickMe{
        padding: 0.4em 30px;
        border-radius: 9px;
        border: 1px solid #CECECE;
        outline: none;
        text-decoration: none;
        background: #FFF;
    }
    .centered{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 10px;
        margin-top: 30px;
    }
    i{
        border-radius:50%;
        padding: 0.4em;
        background: #5C5F62;
        color: #FFF;
        width: 25px;
        height: 25px;
        margin-bottom: 10px;
        .filesTitle{
            height: 19px;
            width: 247px;
            font-family: Inter;
            font-size: 16px;
            font-weight: 400;
            text-align: center;

        }

    }
}

    .uploadnft{
        background: #FFF;
        width: 100%;
        margin-top: 30px;
        height: 334px;
        border-radius: 9px;
        padding: 30px 45px 30px 45px;
        p{
            font-family: Inter;
            font-size: 18px;
            font-weight: 500;
            line-height: 26px;
            text-align: left;
        }
    }

    #property {
        margin-top: 2rem;
        height: min-content; 
        padding: 25px 30px;       
    }

    #property_layer{
        display: flex;
    }

    .property_layer-InputContainer{
        input{
        width: 90%;
        height: 54px;
        border-radius: 5px;
        padding: 10px;
        outline: #02AAB0;
        border: 1px solid #CECECE;
        margin-top: 1rem;

        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
           font-size: 12px;
            opacity: 0.5; /* Firefox */
          }
          
        }
    }    
`;

export default UploadStyled;