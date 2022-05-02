import React, { useState } from 'react';
import styled from 'styled-components';
// import Dashboard from '../AdminUpload';
import { Link, useLocation } from 'react-router-dom';
import CollectionStyled from '../../../Styled-components/MetadataStyled';
import { Modal, Form, Button } from 'react-bootstrap'
import ButtonStyled from '../../../Styled-components/ButtonStyled'
import { sellNft, giftNft } from '../../Userdashboardpages/Collection/metadataMethods';

// const tx = await contract.safeTransferFrom(from, to, tokenId, amount, [], {
//     gasLimit: 100000,
//     nonce: nonce || undefined,
//   });
//Setting gas limits

const Metadata = () => {
    const [receiver, setReceiver] = useState("")
    const location = useLocation();
    const {
        name,
        url,
        tokenId,
        description,
        itemId,
        price,
        dailyValue,
        apy,
        weeklyValue,
        total,
        available
    } = location.state;
    const [cancelgiftdisable, setCanceliftdisable] = useState(false);
    const [cancelselldisable, setCancelselldisable] = useState(false);
    

    const [show, setShow] = useState(false);
    const [displayGift, setGift] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleGift = () => setGift(false);
    const handleGiftShow = () => setGift(true);

    async function sendGift() {
        // debugger
        
        if (!receiver)
        return; 
        
        await giftNft(receiver, itemId, tokenId)   
    }

    //function to handle disabling cancel button for gift
    const handlegiftdisable = () => {
        // debugger
        const cancelgiftdisable = JSON.parse(localStorage.getItem('giftcanceldisable'));
        setCanceliftdisable(cancelgiftdisable);
        console.log("cancelgiftdisable", cancelgiftdisable)
    };
    
    async function sendSell() {
        debugger
        await sellNft(itemId, price, tokenId)
    }

    const handleselldisable = () => {
        debugger
        const cancelselldisable = JSON.parse(localStorage.getItem('contract'));
        setCancelselldisable(cancelselldisable);
        console.log("cancelselldisable", cancelselldisable)
    };

    return (
        <div>
            <CollectionStyled>
                <div style={{ display: 'flex' }}>
                    <Link to='/userdashboard/collections'><i className='fas fa-arrow-left' style={{ marginLeft: '10px', cursor: 'pointer', fontWeight: '600', width: '21px', marginTop: '10px' }}></i>&nbsp; &nbsp; </Link>
                    <p style={{ fontFamily: 'Inter', fontSize: '24px', fontWeight: '500' }}>My Collection / NFT Metadata</p>
                </div>
                <div className='metadata_container'>
                    <div style={{ display: 'block' }}>
                        <img src={url} alt='woman' />
                        <div className='nftContainer'>
                            <div className='text-container' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <p className='listedNFT'>{"African NFT" && name}  &nbsp; <span style={{ fontSize: '14px', fontWeight: '600' }}>{"##" && `#${itemId}`}</span></p>
                                <div className='giftCollection'>
                                    <button className='Buy' onClick={handleShow}>Sell</button>&nbsp;&nbsp;
                                    <button className='Buy' onClick={handleGiftShow}>GIft</button>
                                </div>
                            </div>

                            <div className='gridContainer'>
                                <div style={{ display: 'block' }}>
                                    <p className='title'>APY/ROI</p>
                                    <p className='details'>0.530ETH</p>
                                </div>
                                <div style={{ display: 'block' }}>
                                    <p className='title'>Daily Value</p>
                                    <p className='details'>0.530ETH</p>
                                </div>
                                <div style={{ display: 'block' }}>
                                    <p className='title'>Weekly Value</p>
                                    <p className='details'>0.530ETH</p>
                                </div>
                            </div>
                            <div className='contents'>
                                <p className='description'>Description</p>
                                <p style={{ textAlign: 'justify' }}>
                                    This beautiful artwork represents the heritage of us made with earnest and soulful this art means a lot to him This beautiful artwork represents the heritage of us made with earnest and soulful this art means a lot to him This beautiful artwork represents the heritage of us made with earnest and soulful this art means a lot to him This beautiful artwork represents the heritage of us made with earnest and soulful this art means a lot to him<br></br><br></br>
                                    This beautiful artwork represents the heritage of us made with earnest and soulful this art means a lot to him This beautiful artwork represents the heritage of us made with earnest and soulful this art means a lot to himThis beautiful artwork represents the heritage of us made with earnest and soulful this art means a lot to him This beautiful artwork represents the heritage of us made with earnest and soulful this art means a lot to him.
                                </p>
                                <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}>
                                    {cancelselldisable === true ?
                                    <Modal.Header style={{ border: 'none' }}></Modal.Header> 
                                    : 
                                    <Modal.Header style={{ border: 'none' }} closeButton></Modal.Header>
                                    }
                                    {/* <Modal.Header style={{ border: 'none' }} closeButton></Modal.Header> */}
                                    <div style={{ display: 'block', textAlign: 'center', marginBottom: '10px' }}>
                                        <h4 style={{ textAlign: 'center' }}>Sell your NFT</h4><br />
                                        {/* <small>Please confirm that all infos supplied are correct</small> 
                                        Incase of a warning for premature selling of the nft*/} 
                                    </div>
                                    <ButtonStyled>
                                        <Button onClick={() =>
                                            [sendSell(),
                                            handleselldisable()]
                                        } 
                                        className='button'>
                                            Sell
                                        </Button><br />
                                        {cancelselldisable === true ?
                                        <Button className='buttondis' disable>Please wait...</Button> 
                                        : 
                                        <Button className='button' onClick={handleClose}>Cancel</Button>
                                        }
                                        <br /><br /><br />
                                    </ButtonStyled>
                                </Modal>
                                <Modal
                                    show={displayGift}
                                    onHide={handleGift}
                                    backdrop="static"
                                    keyboard={false}>
                                    {cancelgiftdisable === true ?
                                    <Modal.Header style={{ border: 'none' }}></Modal.Header> 
                                    : 
                                    <Modal.Header style={{ border: 'none' }} closeButton></Modal.Header>
                                    }
                                    <div style={{ display: 'block', textAlign: 'center', marginBottom: '10px' }}>
                                        <h4 style={{ textAlign: 'center' }}>Gift someone an NFT</h4><br />
                                        <small>Please confirm that all infos supplied are correct</small>
                                    </div>
                                    <FormStyled>
                                        <Form style={{ margin: '20px' }}>
                                            <span>
                                                <label for='typeValidation' class='form-label'>
                                                    <small>Wallet type</small>
                                                </label><br />
                                                <select id='typeValidation' required style={{ width: '100%', cursor: 'pointer' }}>
                                                    <option value='' disabled selected hidden>Select your receiver wallet type</option>
                                                    <option value='ETH'>ETH</option>
                                                </select>
                                                <div className='invalid-feedback'>
                                                    Please select a valid wallet type
                                                </div>
                                            </span>
                                            <span>
                                                <label for='typeValidation' class='form-label'>
                                                    <small>Wallet Address</small>
                                                </label><br />
                                                <input
                                                    type='text'
                                                    class='form-select address'
                                                    id='typeValidation'
                                                    placeholder='Type your receiver wallet address here'
                                                    required style={{ width: '100%' }}
                                                    onChange={e => setReceiver(e.target.value)}
                                                />
                                                <div className='invalid-feedback'>
                                                    Please select a valid wallet type
                                                </div>
                                            </span>
                                        </Form>
                                    </FormStyled>
                                    <ButtonStyled>
                                        <Button 
                                        onClick={() =>
                                            [sendGift(),
                                            handlegiftdisable()]
                                        }
                                        className='button'
                                        >
                                            Gift
                                        </Button><br />
                                        {cancelgiftdisable === true ?
                                        <Button className='buttondis' disable>Please wait...</Button> 
                                        : 
                                        <Button className='button' onClick={handleGift}>Cancel</Button>
                                        }
                                        <br /><br /><br />
                                    </ButtonStyled>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </CollectionStyled>
        </div>

    )
}

const FormStyled = styled.div`
    select,
    .address{
        border: 1px solid #02AAB0;
        background: #FFF;
        padding:0.5em;
        outline: none;
        border-radius: 3px;
        :hover{
            outline: none;
        }
    }
    
`;

export default Metadata;
