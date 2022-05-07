import React, { useState } from 'react'
import { Navigate } from "react-router-dom";
import AdminUpload from '../Admindashboardpages/AdminUpload'
import UploadStyled from '../../Styled-components/UploadStyled'
import { create as ipfsHttpClient } from 'ipfs-http-client';
import { ethers } from 'ethers';

import {
    nftAddress, marketAddress
} from '../../config'
const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

const Administrator = ({currentUser}) => {
    const [fileUrl, setFileUrl] = useState(null);
    const [formInput, setFormInput] = useState({ price: '', name: '', description: '', amount: '' })

    return (
        <UploadStyled>
            <div className='uploadContainer'>

                <section className='items' id="property">
                    <div id='property_layer'>
                        <div className='property_layer-InputContainer'>
                            <label for="price">Contract </label>
                            <input className='property_layer-input price' type="text" value='Contract Balance' readonly />
                        </div>
                        <div className='property_layer-InputContainer'>
                            <label for="price">Balance</label>
                            <input className='property_layer-input price' type="text" placeholder='0000'
                                onChange={e => setFormInput({ ...formInput, amount: e.target.value })} />
                        </div>

                    </div>

                </section>

                <section className='items' id="property">
                    <div id='property_layer'>
                        <div className='property_layer-InputContainer'>
                            <label for="price">Withdraw</label>
                            <input className='property_layer-input' type="text" value=' Click to withdraw 👇' readonly />
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }} id='property_layer button'>
                        <button style={{ padding: '.5em 35px', background: '#02AAB0', border: 'none', borderRadius: '5px', color: '#FFF' }} >Withdraw Contract Balance</button>
                    </div>
                </section>

                <section className='items' id="property">
                    <div id='property_layer'>
                        <div className='property_layer-InputContainer'>
                            <label for="price">Current</label>
                            <input className='property_layer-input price' type="text" value='Current Admin' readonly />
                        </div>
                        <div className='property_layer-InputContainer'>
                            <label for="price">Admin</label>
                            <input className='property_layer-input price' type="text" placeholder='0000' />
                        </div>
                    </div>

                </section>
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

export default Administrator;