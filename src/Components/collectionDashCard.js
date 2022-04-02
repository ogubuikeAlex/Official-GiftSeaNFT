import React from 'react'
import Card from '../Components/Card'
import MyCollectionCard from './MyCollectionCard'

export default function CollectionDashCard (props) {
    console.log("collectionDAshCArd",props.description)

 return (
    <div className='dashCards'>    
    <img src={props.url}alt=""/>
    <MyCollectionCard
        tokenId = {props.tokenId}
        itemId = {props.itemId}
        url = {props.url}
        name = {props.name}
        price = {props.price}
        total = {props.total}
        available = {props.available}
        loadNFTs = {props.loadNFTs}
        description = {props.description}
        increase = {props.increase}
            />
    </div>
 )
}