import React from 'react'
import Card from '../Components/Card'

export default function DashCard (props) {
    console.log("props", props)
 return (
    <div className='dashCards'>    
    <img src={props.url}alt=""/>
    <Card 
        tokenId = {props.tokenId}
        itemId = {props.itemId}
        name = {props.name}
        price = {props.price}
        total = {props.total}
        available = {props.available}
        loadNFTs = {props.loadNFTs}
        url = {props.url}
    />
    </div>
 )
}
