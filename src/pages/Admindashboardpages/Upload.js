import React, { useState } from 'react';
import ethers from "ethers";
import AdminUpload from '../Admindashboardpages/AdminUpload'
import UploadStyled from '../../Styled-components/UploadStyled'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { useNavigate } from 'react-router-dom';

import {
    nftAddress, marketAddress
} from '../../config'

import nftAbi from '../../artifacts/contracts/GiftSeaNFT.sol/NFT.json'
import marketAbi from '../../artifacts/contracts/Market.sol/NFTMarket.json'
const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')


const Upload = () => {
    const [fileUrl, setFileUrl] = useState(null);
    const [formInput, setFormInput] = useState({ price: '', name: '', description: '' })
    const navigate = useNavigate();

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
            console.log(url)//Add urls to a db
            setFileUrl(url)
        } catch (error) {
            console.log('Error uploading file: ', error)
        }
    }

    async function createMarket() {      
        const { name, description, price } = formInput 
         console.log(name, description,price)
        if (!name || !description || !price || !fileUrl) return
        /* first, upload to IPFS */
        console.log("0")
        const data = JSON.stringify({
            name, description, image: fileUrl
        })
        try {
            console.log("1")
            const added = await client.add(data)
            console.log("2")
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            console.log("3")
            console.log(url)
            /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
            createSale(url)
        } catch (error) {
            console.log('Error uploading file: ', error)
        }
    }

    async function createSale(url) {
        const { ethereum } = window
        if (!ethereum) return;

        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        /* next, create the item */
        const contract = new ethers.Contract(nftAddress, nftAbi.abi, signer);
        let transaction = await contract.createToken(url)
        let tx = await transaction.wait()
        let event = tx.events[0]
        setTimeout(() => console.log("cjill"), 10000)
        console.log(event)
        let value = event.args[2]
        let tokenId = value.toNumber()

        const price = ethers.utils.parseUnits(formInput.price, 'ether')

        /* then list the item for sale on the marketplace */
        contract = new ethers.Contract(marketAddress, marketAbi.abi, signer)

        transaction = await contract.createMarketItem(nftAddress, tokenId, price)
        await transaction.wait()
        navigate("/admindashboard/marketplace")
    }

    return (
        <UploadStyled>
            <div className='uploadContainer'>
                <div className='items'>
                    <p>Item Name</p>
                    {/* use labels for your inputs: here instead of paragraphs */}

                    <input
                        type='text'
                        placeholder='Asset Name'
                        onChange={e => setFormInput({ ...formInput, name: e.target.value })}
                    />

                    <p className='descriptionText'>Description</p>
                    <textarea
                        className='description'
                        type='search'
                        onChange={e => setFormInput({ ...formInput, description: e.target.value })}
                    />

                </div>
                <div className='uploadnft'>
                    <p>NFT image</p>
                    <div className='uploadCentered'>
                        <div className='centered'>
                            <i className='fas fa-arrow-up'></i>
                            <label htmlFor="filePicker">
                                <p className='pickMe'>Upload Images</p>
                            </label>
                            <input
                                id="filePicker"
                                style={{ visibility: "hidden" }}
                                type="file"
                                onChange={setImageUrlOnChange}
                            />
                            <p className='filesTitle'>PNG, GIF, WEBP, MP4 max 50mb</p>
                        </div>
                    </div>
                </div>
                <section className="items" id="property">
                    <p>Property</p>
                    <div id='property_layer'>
                        <div className='property_layer-InputContainer'>
                            <label for="price">Item Price</label>
                            <input
                                className='property_layer-input'
                                type="text" className="price"
                                placeholder='ETH 0.00'
                                onChange={e => setFormInput({ ...formInput, price: e.target.value })}
                            />
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
                            <input className='property_layer-input' type="text" className="price" value='0000' readonly />
                        </div>

                        <div className='property_layer-InputContainer'>
                            <label for="price">Category</label>
                            <input className='property_layer-input' type="text" className="price" value='Trending' readonly />
                        </div>


                    </div>
                    <div id='property_layer button'>
                        <button onClick={createMarket}> Mint NFT</button>
                    </div>
                </section>
            </div>
            <AdminUpload
                name = {formInput.name}
                src = {fileUrl}
                price = {formInput.price}
                description = {formInput.description}
            />
        </UploadStyled>
    )
}

export default Upload;