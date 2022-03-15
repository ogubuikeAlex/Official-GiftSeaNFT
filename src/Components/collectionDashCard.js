import React from 'react'
import Card from '../Components/Card'
import MyCollectionCard from './MyCollectionCard'

export default function CollectionDashCard (props) {
 return (
    <div className='dashCards'>    
    <img src={props.url}alt=""/>
    <MyCollectionCard
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
