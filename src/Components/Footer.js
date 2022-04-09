import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import logo from '../img/Group 77.png'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// import './footer.css';
import PrivacyPolicy from './Footermodals/PrivacyPolicy';
import TermsofService from './Footermodals/TermsofService';
import TermsandContions from './Footermodals/TermsandConditions';
import { Link } from 'react-router-dom';
import Help from './Footermodals/Help';

const Footer = () => {
    const [lgShowPP, setLgShowPP] = useState(false);
    const [lgShowTS, setLgShowTS] = useState(false);
    const [lgTC, setLgTC] = useState(false);
    const [lgShowHelp, setLgShowHelp] = useState(false);


    const handleClosePP = () => setLgShowPP(false);
    const handleShowPP = () => setLgShowPP(true);

    const handleCloseTS = () => setLgShowTS(false);
    const handleShowTS = () => setLgShowTS(true);

    const handleCloseTC = () => setLgTC(false);
    const handleShowTC = () => setLgTC(true);

    const handleCloseHelp = () => setLgShowHelp(false);
    const handleShowHelp = () => setLgShowHelp(true);

    const handleTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <FooterStyled>
            <div className='footer'>
                <div className='imgCon'>
                    <img src={logo} alt='' />
                </div>
                <div className='listItems'>
                    <ul className='lists'>
                        <li onClick={handleTop}><Link to='/'>Home</Link></li>
                        {/* <li>How it works</li> */}
                        {/* <li>Trending NFT</li> */}
                        {/* <li>Blog</li> */}


                        <li onClick={() => setLgShowHelp(true)}>Help</li>
                        <Modal
                            size="xl"
                            show={lgShowHelp}
                            onHide={() => setLgShowHelp(false)}
                            aria-labelledby="example-modal-sizes-title-lg"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    Frequently Asked Questions
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{ textAlign: 'justify' }}>
                                <Help />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseHelp}>
                                    Close
                                </Button>
                                {/* <Button style={{background: '#02AAB0', border: 'none'}} onClick={handleCloseHelp}>Understood</Button> */}
                            </Modal.Footer>
                        </Modal>

                        <li onClick={() => setLgShowPP(true)}>Privacy Policy</li>
                        <Modal
                            size="xl"
                            show={lgShowPP}
                            onHide={() => setLgShowPP(false)}
                            aria-labelledby="example-modal-sizes-title-lg"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    Privacy Policy
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{ textAlign: 'justify' }}>
                                <PrivacyPolicy />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClosePP}>
                                    Close
                                </Button>
                                <Button style={{ background: '#02AAB0', border: 'none' }} onClick={handleClosePP}>Understood</Button>
                            </Modal.Footer>
                        </Modal>

                        <li onClick={() => setLgShowTS(true)}>Terms of Service</li>
                        <Modal
                            size="xl"
                            show={lgShowTS}
                            onHide={() => setLgShowTS(false)}
                            aria-labelledby="example-modal-sizes-title-lg"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    Terms of Service
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{ textAlign: 'justify' }}>
                                <TermsofService />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseTS}>
                                    Close
                                </Button>
                                <Button style={{ background: '#02AAB0', border: 'none' }} onClick={handleCloseTS}>Understood</Button>
                            </Modal.Footer>
                        </Modal>

                        <li onClick={() => setLgTC(true)}>Terms and Conditions</li>
                        <Modal
                            size="xl"
                            show={lgTC}
                            onHide={() => setLgTC(false)}
                            aria-labelledby="example-modal-sizes-title-lg"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    Terms and Conditions
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{ textAlign: 'justify' }}>
                                <TermsandContions />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseTC}>
                                    Close
                                </Button>
                                <Button style={{ background: '#02AAB0', border: 'none' }} onClick={handleCloseTC}>Understood</Button>
                            </Modal.Footer>
                        </Modal>
                    </ul>
                </div>
                <hr />
                <div className='copyright'>
                    <div>
                        <small>Copyright GiftNFT. All rights reserved</small>
                    </div>
                    <div className='icons-container'>
                        <ul className='iconsbottom'>
                            <li><a target='_blank' href='https://www.instagram.com/nft_sea/'><i class="fab fa-instagram"></i></a></li>
                            {/* <li><i class="fab fa-linkedin"></i></li> */}
                            <li><a target='_blank' href='https://twitter.com/giftseanft?s=20&t=pSVgxH-7KYVGhGfzlopDQA'><i class="fab fa-twitter"></i></a></li>
                            {/* <li><i class="fab fa-youtube"></i></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </FooterStyled>
    )
}

const FooterStyled = styled.div`
.footer{
background: #1A1036;
color: #fff;
height: fit-content;
margin-top: 300px;
padding: 3em;
width: 100%;
@media(max-width: 540px){
    margin-top: 200px;
}

img{
    width: 150px;
}
.imgCon{
    justify-content: center;
    text-align: center;
}
.listItems{
    justify-content: center;
    text-align: center;
    }
.lists{
    display: flex;
    flex-direction: row;
    list-style: none;
    width: 100%;
    justify-content: center;
    text-align: center;
    @media(max-width:540px){
        flex-direction: column;
        text-align: center;
        justify-content: center;
    }
}
.lists li{
    margin-right: 20px;
    margin-top: 20px;
    cursor: pointer;
    :hover{
        color: rgba(158, 158, 158, 0.8);
        transition: all ease-in-out .4s;
    }
}
    li{
        margin: right: 20px;
    }
    
    .copyright{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 15px;
        @media(max-width:540px){
            text-align: center;
            flex-direction: column-reverse;
            justify-content: center;
        }
    }
    .iconsbottom{
        display: flex;
        flex-direction: space-around;
        width: 100%;
        li{
            list-style: none;
            margin-right: 20px;
            font-size: 25px;
            :hover{
                color: rgba(158, 158, 158, 0.8);
                transition: all ease-in-out .4s;
                transform: translateY(-3px);
                cursor: pointer;
            }
        }
        @media(max-width:540px){
            margin-top: 20px;
            text-align: center;
            justify-content: center;
        }
    }
  }
}
`;

export default Footer;