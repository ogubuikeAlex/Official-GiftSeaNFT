import React, { useState } from 'react'
import AdminUpload from '../Admindashboardpages/AdminUpload'
import UploadStyled from '../../Styled-components/UploadStyled'
import { create as ipfsHttpClient } from 'ipfs-http-client'


import {
    nftaddress, nftmarketaddress
} from '../../config'

import NFT from '../../artifacts/contracts/GiftSeaNFT.sol/NFT.json'
import Market from '../../artifacts/contracts/Market.sol/NFTMarket.json'
const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')


const Upload = () => {
    const [fileUrl, setFileUrl] = useState(null);
    const [formInput, setFormInput] = useState({ price: '', name: '', description: '' })
    return (
        <UploadStyled>
            <div className='uploadContainer'>
                <div className='items'>
                    <p>Item Name</p>
                    {/* use labels for your inputs: here instead of paragraphs */}
                    <input type='text' />
                    <p className='descriptionText'>Description</p>
                    <textarea className='description' type='search' />
                </div>
                <div className='uploadnft'>
                    <p>NFT image</p>
                    <div className='uploadCentered'>
                        <div className='centered'>
                            <i className='fas fa-arrow-up'></i>
                            <label htmlFor="filePicker">
                                <p className='pickMe'>Upload Images</p>
                            </label>
                            <input id="filePicker" style={{ visibility: "hidden" }} type={"file"} />
                            <p className='filesTitle'>PNG, GIF, WEBP, MP4 max 50mb</p>
                        </div>
                    </div>
                </div>
                <section className="items" id="property">
                    <p>Property</p>
                    <div id='property_layer'>
                        <div className='property_layer-InputContainer'>
                            <label for="price">Item Price</label>
                            <input className='property_layer-input' type="text" className="price" placeholder='ETH 0.00' />
                        </div>
                        <div className='property_layer-InputContainer'>
                            <label for="price">Network</label>
                            <input className='property_layer-input' type="text" className="price" value='Ethereum' readonly />
                        </div>

                    </div>
                    <hr />
                    <div id='property_layer'>
                        <div className='property_layer-InputContainer'>
                            <label for="price">Copies</label>
                            <input className='property_layer-input' type="text" className="price" placeholder='0000' />

                        </div>

                        <div className='property_layer-InputContainer'>
                            <label for="price">Category</label>
                            <input className='property_layer-input' type="text" className="price" value='Trending' readonly />
                        </div>


                    </div>
                    <div id='property_layer button'>
                        <button>Mint NFT</button>
                    </div>

                </section>
            </div>
            <AdminUpload />
        </UploadStyled>

    )
}


export default Upload;