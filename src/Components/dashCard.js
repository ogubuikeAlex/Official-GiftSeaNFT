import React from 'react'
import unsplash from '../img/unsplashed5.png'
import Card from '../Components/Card'

export default function DashCard (props) {
 return (
    <div className='dashCards'>    
    <img src={props.url}alt=""/>
    <Card 
        itemId = {props.itemId}
        name = {props.name}
        price = {props.price}
        total = {props.total}
        available = {props.available}
        loadNFTs = {props.loadNFTs}
    />
    </div>
 )
}
