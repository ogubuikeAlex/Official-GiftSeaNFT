import React, { useState } from 'react'
import { Navigate } from "react-router-dom";
import AdminUpload from '../Admindashboardpages/AdminUpload'
import UploadStyled from '../../Styled-components/UploadStyled'
import { create as ipfsHttpClient } from 'ipfs-http-client';
import { ethers } from 'ethers';
import Swal from 'sweetalert2';
import * as ReactBootStrap from 'react-bootstrap';

import {
    nftAddress, marketAddress
} from '../../config'

import NFT from '../../artifacts/contracts/erc1155nft.sol/ERC1155NFT.json'
import Market from '../../artifacts/contracts/Erc115market.sol/NFTMarket1155.json'
const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

const Upload = ({currentUser}) => {
    const [fileUrl, setFileUrl] = useState(null);
    const [propertyform, setPropertyform] = useState('');
    const [mintNftsuccess, setMintNftsuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [formInput, setFormInput] = useState({ price: '', name: '', description: '', amount: '' })

    async function setImageUrlOnChange(e) {
        const file = e.target.files[0]
        setLoading(true)
        try {
            const added = await client.add(
                file,
                {
                    progress: (prog) => console.log(`received: ${prog}`)
                }
            )
            console.log("Image Uploaded")
            const propertyform = added.cid;
            setPropertyform(propertyform)
            // console.log(propertyform)
            if (propertyform) {
                Swal.fire({
                    title: 'Image Upload Successful',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                      },
                      hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                      },
                    text: 'You have successfully Uploaded your image',
                    icon: 'success',
                    customClass: 'swal-wide',
                    confirmButtonColor: '#02AAB0',           
                });
            } else {
               return alert("Upload Processing");
            };

            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            setFileUrl(url)
            setLoading(false)
        } catch (error) {
            console.log('Error uploading file: ', error)
        }
    }

    async function createMarket() {
        setLoading(true)
        const { name, description, price, amount } = formInput
        if (!name || !description || !price || !fileUrl || !amount) return
        /* first, upload to IPFS */
        console.log("This is the image url", fileUrl)

        const data = JSON.stringify({
            name, description, image: fileUrl, initialMint: amount
        })
        console.log()
        try {
            const added = await client.add(data)
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            /* after file is uploaded to IPFS, pass the URL to save it on Polygon */

            createSale(url)
            console.log("This is the url", url)
            console.log("This is the data", data)
            console.log("This mint success", added)
            const mintNftsuccess = added.cid;
            setMintNftsuccess(mintNftsuccess)
            // console.log(propertyform)
            // if (mintNftsuccess) {
            //     Swal.fire({
            //         title: 'NFT Mint Added Successfully',
            //         showClass: {
            //             popup: 'animate__animated animate__fadeInDown'
            //           },
            //           hideClass: {
            //             popup: 'animate__animated animate__fadeOutUp'
            //           },
            //         text: 'You have successfully Uploaded your nftmint',
            //         icon: 'success',
            //         customClass: 'swal-wide',
            //         confirmButtonColor: '#02AAB0',           
            //     });
            // } else {
            //    return alert("Upload Processing");
            // };
        
        }catch(error) {
            console.log("catched", error)
            if (error.data.originalError.code === 3) {
                // swal(error.response.data.email.toString())

                Swal.fire({

                    text: 'Mint failed' + error.data.originalError.message.toString(),
                    icon: 'warning',
                    customClass: 'swal-wide',
                    confirmButtonColor: '#282E52',
                    confirmButtonText: 'OK'
                });
        }
    }
        setLoading(false)
    }

    // async function createSale(url) {
    //     const { ethereum } = window;

    //     if (ethereum) {
    //         const provider = new ethers.providers.Web3Provider(ethereum);
    //         const signer = provider.getSigner();

    //         /* next, create the item */
    //         let contract = new ethers.Contract(nftAddress, NFT.abi, signer)
    //         let transaction = await contract.createToken(url)
    //         let tx = await transaction.wait()
    //         console.log(tx)
    //         let event = tx.events[0]
    //         console.log(event)
    //         let value = event.args[2]
    //         let tokenId = value.toNumber();
    //         console.log("tokenIdstuff", tokenId);
    //         // console.log("txm", ((await txm.wait()).events[0].args[4]).toNumber()) //GetTokenId

    //         const price = ethers.utils.parseUnits(formInput.price, 'ether')

    //         /* then list the item for sale on the marketplace */
    //         contract = new ethers.Contract(marketAddress, Market.abi, signer)

    //         transaction = await contract.createMarketItem(nftAddress, tokenId, price)
    //         await transaction.wait()
    //         console.log("oya go to market place");           
    //         <Navigate to={"/"} />
    //     }
    // }

    async function createSale(url) {
        const { ethereum } = window;

        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();

            /* next, create the item */
            let contract = new ethers.Contract(nftAddress, NFT.abi, signer)
           
            let transaction = await contract.createToken(formInput.amount, url); //WIll set the uri            
            let tx = await transaction.wait()            
            let event = tx.events[0]            
            let tokenId = (event.args[3]).toNumber()
           
            const price = ethers.utils.parseUnits(formInput.price, 'ether')

            /* then list the item for sale on the marketplace */
            contract = new ethers.Contract(marketAddress, Market.abi, signer)

            transaction = await contract.createMarketItem(nftAddress, tokenId, formInput.amount, price)
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
                        {loading ? <ReactBootStrap.Spinner animation="border" /> :
                        <div className='centered'>
                            <i className='fas fa-arrow-up'></i>
                            <label htmlFor="filePicker">
                                <p className='pickMe'>Upload Images</p>
                            </label>
                            <input id="filePicker" style={{ visibility: "hidden" }} type={"file"} onChange={setImageUrlOnChange} />
                            <p className='filesTitle'>PNG, GIF, WEBP, MP4 max 50mb</p>
                        </div>
                        }
                    </div>
                </div>
                
                { propertyform ? 
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
                            <input className='property_layer-input price' type="text" placeholder='0000'
                                onChange={e => setFormInput({ ...formInput, amount: e.target.value })} />
                        </div>

                        <div className='property_layer-InputContainer'>
                            <label for="price">Category</label>
                            <input className='property_layer-input price' type="text" value='Trending' readonly />
                        </div>
                    </div>
                    {loading ? <ReactBootStrap.Spinner animation="border" /> :
                        <div style={{ marginTop: '15px' }} id='property_layer button'>
                        <button style={{ padding: '.5em 35px', background: '#02AAB0', border: 'none', borderRadius: '5px', color: '#FFF' }} onClick={createMarket}>Mint NFT</button>
                    </div>
                    }
                </section>
                : 
                <section className="items" id="property" style={{pointerEvents: 'none', backgroundColor: '#F4F4F4'}}>
                    <p>Property</p>
                    <div id='property_layer'>
                        <div className='property_layer-InputContainer'>
                            <label for="price">Item Price</label>
                            <input className='property_layer-input price' type="text" placeholder='ETH 0.00'
                                onChange={e => setFormInput({ ...formInput, price: e.target.value })} disabled />

                        </div>
                        <div className='property_layer-InputContainer '>
                            <label for="price">Network</label>
                            <input className='property_layer-input price' type="text" value='Ethereum' readonly disabled />
                        </div>

                    </div>
                    <hr />
                    <div id='property_layer'>
                        <div className='property_layer-InputContainer'>
                            <label for="price">Copies</label>
                            <input className='property_layer-input price' type="text" placeholder='0000'
                                onChange={e => setFormInput({ ...formInput, amount: e.target.value })} disabled />
                        </div>

                        <div className='property_layer-InputContainer'>
                            <label for="price">Category</label>
                            <input className='property_layer-input price' type="text" value='Trending' readonly disabled />
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }} id='property_layer button'>
                        <button style={{ padding: '.5em 35px', background: 'rgba(2, 170, 176, 0.2)', border: 'none', borderRadius: '5px', color: '#FFF' }} disabled >Mint NFT</button>
                    </div>
                </section>
                }
            </div>

            <AdminUpload
                name={formInput.name}
                description={formInput.description}
                price={formInput.price}
                imageUrl={fileUrl}
                currentUser={currentUser}
            />
        </UploadStyled>
    )

}

export default Upload;