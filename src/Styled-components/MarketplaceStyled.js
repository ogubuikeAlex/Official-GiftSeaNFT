
import styled from 'styled-components';

const MarketplaceStyled = styled.div`
  width: 100%;
  margin-bottom: 50px;
  margin-left: -25px;
  @media only screen and (max-width: 1316px){
    margin-left: -50px;
}

@media only screen and (max-width: 1140px){
    margin-left: -60px;
}
@media only screen and (max-width: 1000px){
    margin-left: -70px;
  }
  @media only screen and (max-width: 849px){
    margin-left: -50px;
  }
  @media only screen and (max-width: 768px){
    margin-left: 0px;
  }
  
  .container {
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 60px;
  justify-content: center;
  h1{
    font-weight: bold;
    @media(max-width: 540px){
      font-size: 22px;
  }
  }
}

.bloc-tabs {
  display: flex;
  justify-content: space-between;
  width: 70%;
  background: #FFF;
  @media only (max-width:1220px) and (min-width: 1080px){
      margin-left: -20px;
  }
  @media only screen and (max-width: 1130px){
    margin-left: 10px;
  }
  @media only screen and (max-width: 1080px){
    margin-left: -10px;
  }
  @media only screen and (max-width: 930px){
    margin-left: -20px;
  }
  @media only screen and (max-width: 849px){
    width: 95%;
    margin-left: 10px;
  }
  
}
.dashCards{
  box-shadow: 2px 4px 8px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 100%;
  object-fit: cover;
  transform: translateX(-10px);
  margin: 2rem;
  background: #fff;
  padding: .3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 1140px){
    font-size: 14px;
}
@media only screen and (max-width: 1180px){
    margin-left: 15px;
    font-size: 12px;
}
 @media only screen and (max-width: 1080px){
    margin-left: 20px;
  }
  @media only screen and (max-width: 1060px){
    font-size: 11px;
    font-weight: 600;
  }
  @media only screen and (max-width: 1045px){
    font-size: 14px;
    width: 65%;
    margin-left: 90px;
  }
  @media only screen and (max-width: 1020px){
    margin-left: 80px;
    width: 65%;
  }
  @media only screen and (max-width: 900px){
    width: 50%;
    font-size: 14px;
    font-weight: 600;
    margin-left: 50px;
  }
  @media only screen and (max-width: 849px){
    width: 95%;
    font-size: 10px;
    transform: translateX(-40px);
    margin-bottom: -20px;
  }
  @media only screen and (max-width: 768px){
    width: 85%;
    font-size: 14px;
    transform: translateX(-10px);
  }
  @media only screen and (max-width: 600px){
    font-size: 14px;
    width: 95%;
    transform: translateX(-25px);
  }
  @media only screen and (max-width: 540px){
    width: 70%;
  }
  @media only screen and (max-width: 400px){
    width: 100%;
    transform: translateX(-85px);
  }
}
  
.tabs {
  padding: 15px;
  text-align: center;
  background: #FFF;
  font-size: 18px;
  justify-content: center;
  cursor: pointer;
  position: relative;
  outline: none;
  @media only screen and (max-width: 956px){
    font-size: 15px;
  }
  @media only screen and (max-width: 400px){
    font-size: 13px;
  }
}

.active-tabs  {
  line-height: 22px;
  background: #02AAB0;
  transition: ease-in-out .4s all;
  color: #FFF;
}

button {
  border: none;  
  justify-content: center;
  width: 100%;
  padding: 0em 80px;
  @media (max-width: 1316px){
      font-size: 14px;
      width: 100%;
  }
}
.content {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  display: none;
}
.active-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    width: 70%;
    margin-left: -20px;
  @media(max-width: 900px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0 !important;
    width: 100%;
    font-size: 10px;
    align-items: center;
  }
  @media only screen and (max-width: 1045px){
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (max-width: 1020px){
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (max-width: 849px){
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
  @media(max-width: 540px){
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(1, 1fr);
    width: 90%;
    transform: translateX(60px);
    margin: 0 !important;
  }

}
`;

export default MarketplaceStyled