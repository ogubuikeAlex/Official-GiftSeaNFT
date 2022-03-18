import React, { useState } from 'react'
import { Navigate } from "react-router-dom";
import AdminUpload from '../Admindashboardpages/AdminUpload'
import UploadStyled from '../../Styled-components/UploadStyled'
import { create as ipfsHttpClient } from 'ipfs-http-client';
import { ethers } from 'ethers';

import {
    nftAddress, marketAddress
} from '../../config'

import NFT from '../../artifacts/contracts/GiftSeaNFT.sol/NFT.json'
import Market from '../../artifacts/contracts/Market.sol/NFTMarket.json'
const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

const Upload = () => {
    const [fileUrl, setFileUrl] = useState(null);
    const [formInput, setFormInput] = useState({ price: '', name: '', description: '' })

    async function setImageUrlOnChange(e) {
        const file = e.target.files[0]
        try {
            const added = await client.add(
                file,
                {
                    progress: (prog) => console.log(`received: ${prog}`)
                }
            )
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            setFileUrl(url)
        } catch (error) {
            console.log('Error uploading file: ', error)
        }
    }

    async function createMarket() {
        const { name, description, price } = formInput
        if (!name || !description || !price || !fileUrl) return
        /* first, upload to IPFS */
        console.log("This is the image url", fileUrl)

        const data = JSON.stringify({
            name, description, image: fileUrl
        })
        console.log()
        try {
            const added = await client.add(data)
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
            
            createSale(url)
            console.log("This is the url", url)
        } catch (error) {
            console.log('Error uploading file: ', error)
        }
    }

    async function createSale(url) {
        const { ethereum } = window;

        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();

            /* next, create the item */
            let contract = new ethers.Contract(nftAddress, NFT.abi, signer)
            let transaction = await contract.createToken(url)
            let tx = await transaction.wait()
            console.log(tx)
            let event = tx.events[0]
            console.log(event)
            let value = event.args[2]
            let tokenId = value.toNumber();
            console.log(tokenId);

            const price = ethers.utils.parseUnits(formInput.price, 'ether')

            /* then list the item for sale on the marketplace */
            contract = new ethers.Contract(marketAddress, Market.abi, signer)

            transaction = await contract.createMarketItem(nftAddress, tokenId, price)
            await transaction.wait()
            console.log("oya go to market place");           
            <Navigate to={"/"} />
        }
    }

    return (
        <UploadStyled>
            <div className='uploadContainer'>
                <div className='items'>
                    <p>Item Name</p>
                    {/* use labels for your inputs: here instead of paragraphs */}
                    <input type='text' onChange={e => setFormInput({ ...formInput, name: e.target.value })} />
                    <p className='descriptionText'>Description</p>
                    <textarea className='description' type='search'
                        onChange={e => setFormInput({ ...formInput, description: e.target.value })} />
                </div>
                <div className='uploadnft'>
                    <p>NFT image</p>
                    <div className='uploadCentered'>
                        <div className='centered'>
                            <i className='fas fa-arrow-up'></i>
                            <label htmlFor="filePicker">
                                <p className='pickMe'>Upload Images</p>
                            </label>
                            <input id="filePicker" style={{ visibility: "hidden" }} type={"file"} onChange={setImageUrlOnChange} />
                            <p className='filesTitle'>PNG, GIF, WEBP, MP4 max 50mb</p>
                        </div>
                    </div>
                </div>
                <section className="items" id="property">
                    <p>Property</p>
                    <div id='property_layer'>
                        <div className='property_layer-InputContainer'>
                            <label for="price">Item Price</label>
                            <input className='property_layer-input price' type="text" placeholder='ETH 0.00'
                                onChange={e => setFormInput({ ...formInput, price: e.target.value })} />

                        </div>
                        <div className='property_layer-InputContainer '>
                            <label for="price">Network</label>
                            <input className='property_layer-input price' type="text" value='Ethereum' readonly />
                        </div>

                    </div>
                    <hr />
                    <div id='property_layer'>
                        <div className='property_layer-InputContainer'>
                            <label for="price">Copies</label>
                            <input className='property_layer-input price' type="text" value='0000' readonly />
                        </div>

                        <div className='property_layer-InputContainer'>
                            <label for="price">Category</label>
                            <input className='property_layer-input price' type="text" value='Trending' readonly />
                        </div>
                    </div>
                    <div style={{marginTop: '15px'}} id='property_layer button'>
                        <button style={{padding: '.5em 35px', background:'#02AAB0', border: 'none', borderRadius:'5px', color: '#FFF'}} onClick={createMarket}>Mint NFT</button>
                    </div>
                </section>
            </div>

            <AdminUpload
                name={formInput.name}
                description={formInput.description}
                price={formInput.price}
                imageUrl={fileUrl}
            />
        </UploadStyled>
    )
}

export default Upload;