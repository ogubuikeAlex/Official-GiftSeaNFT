import React, { useEffect, useState } from 'react'
import { Navigate } from "react-router-dom";
import AdminUpload from '../Admindashboardpages/AdminUpload'
import UploadStyled from '../../Styled-components/UploadStyled'
import { create as ipfsHttpClient } from 'ipfs-http-client';
import { ethers } from 'ethers';

import {
    nftAddress, marketAddress
} from '../../config'
import { getBalance, getCurrentAdmins, withdrawBalance, withdrawMoneyTo , setAdmin} from './Metadatas/AdmistratorMethods';
const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

const SuperAdministrator = () => {
    const [balance, setBalance] = useState('')
    const [admin, setCurrentAdmin] = useState("");
    const [newAdmin, setNewAdmin] = useState("");
    const [receiver, setReceiver] = useState("")
    const [fileUrl, setFileUrl] = useState(null);
    const [formInput, setFormInput] = useState({ price: '', name: '', description: '', amount: '' })

    let setPage = async () => {
        var sum = await getBalance();
        setBalance(sum);

        var admins = await getCurrentAdmins();
        setCurrentAdmin(admins.admin)
    }

    let withdrawTo = () => {
        if (!receiver)
            return;
        withdrawMoneyTo(receiver);
    }

    let setAdmin = () => {
        if (!newAdmin)
        return;
//Check if address is proper
        setAdmin(newAdmin)
    }

    useEffect(() => {
        setPage();
    }, [])

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
                            <input className='property_layer-input price' type="text" placeholder={balance && balance} readOnly />
                        </div>
                    </div>
                </section>

                <section className='items' id="property">
                    <div id='property_layer'>
                        <div className='property_layer-InputContainer'>
                            <label for="price">Withdraw</label>
                            <input
                                onChange={e => setReceiver(e.target.value)}
                                className='property_layer-input' type="text" value=' Click to withdraw 👇' readonly />
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }} id='property_layer button'>
                        <button
                            style={{ padding: '.5em 35px', background: '#02AAB0', border: 'none', borderRadius: '5px', color: '#FFF' }}
                            onClick={() => withdrawBalance()}> Withdraw Contract Balance To</button>
                    </div>
                </section>

                <section className='items' id="property">
                    <div id='property_layer'>
                        <div className='property_layer-InputContainer'>
                            <label for="price">Withdraw</label>
                            <input className='property_layer-input' type="text" placeholder='Add a correct address or loose all funds!' />
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }} id='property_layer button'>
                        <button
                            style={{ padding: '.5em 35px', background: '#02AAB0', border: 'none', borderRadius: '5px', color: '#FFF' }}
                            onClick={() => withdrawTo()} >Withdraw Contract Balance</button>
                    </div>
                </section>

                <section className='items' id="property">
                    <div id='property_layer'>
                        <div className='property_layer-InputContainer'>
                            <label for="price">Set New Admin</label>
                            <input
                                onChange={e => setNewAdmin(e.target.value)}
                                className='property_layer-input' type="text" placeholder='Add a correct address for the new admin' />
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }} id='property_layer button'>
                        <button
                            style={{ padding: '.5em 35px', background: '#02AAB0', border: 'none', borderRadius: '5px', color: '#FFF' }}
                            onClick={() => setAdmin()}> Set new Admin</button>
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
                            <input className='property_layer-input price' type="text" placeholder={admin && admin} readonly />
                        </div>
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

export default SuperAdministrator;