import styled from 'styled-components'

const AdminHeroStyled = styled.div`
width: 708px;
// @media only screen and (max-width: 1440px){
//   transform: translateX()
// }

@media only screen and (max-width: 1366px){
  margin-left: 0px;
}
@media only screen and (max-width: 1360px){
  margin-left: -20px;
}
@media only screen and (max-width: 1316px){
    width: 70%;
    height: fit-content;
    padding: 1em;
}
@media only screen and (max-width: 1165px){
    margin-left: -45px;
}
@media only screen and (max-width: 1120px){
    margin-left: -55px;
}
@media only screen and (max-width: 1090px){
  margin-left: 25px;
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

.Hero{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 10px;
  box-shadow: 0px 10px 20px 0px #0000001A;
  width: 100%;
  height: fit-content;
  background: #FFF;
  padding: 1rem;
  transform: translate(-50% -50%);
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1045px){
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    grid-gap: 10px;
    justify-content: center;
  }
  @media(max-width: 768px){
    grid-template-columns: repeat(3, 1fr);
  }
  @media(max-width: 540px){
    grid-template-columns: repeat(1, 1fr);
  }
  @media(max-width: 400px){
    grid-template-columns: repeat(1, 1fr);
  }
  .boughtNFT{
    border-right: 1px solid #C4C4C4;
    height: 80px;
    padding: 0.5em 30px;
    border-left: 1px solid #C4C4C4;;
    justify-content: center;
    text-align: center;
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
    color: #02AAB0;
    @media(max-width: 1045px){
      border: none;
      justify-content: center;
      width: 100%;
      text-align: center;
      font-size: 18px;
      border-radius: 10px;
      box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
    }
    @media(max-width: 540px){
      font-size: 14px;
      font-weight: 600;
    }
  }
  .mintedNFT,
  .soldNFT{
    padding: 0.5em 30px;
    justify-content: center;
    text-align: center;
    font-family: Inter;
    height: 80px;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
    color: #02AAB0;
    @media(max-width: 1045px){
      justify-content: center;
      width: 100%;
      font-weight: 400;
      box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      font-size: 16px;
      text-align: center;
    }
    @media(max-width: 540px){
      font-size: 14px;
      font-weight: 600;
    }
  }
  
  .NFT{
    font-family: Inter;
    font-size: 26px;
    font-weight: 500;
    line-height: 39px;
    text-align: left;
    color: #252F40;
    @media(max-width: 1045px){
      justify-content: center;
      text-align: center;
      font-size: 22px;
    }
    @media(max-width: 540px){
      font-size: 16px;
      margin-top: -8px;
      font-weight: 600;
    }
  }
}

`;

export default AdminHeroStyled;