import React from 'react'
import {Link} from 'react-router-dom'
import NFTContainerStyled from '../../Styled-components/NFTContainer'
import image1 from '../../img/latestNft.png'
import Card from '../../Components/Card'


const TrendingCards = () => {

  return (
<NFTContainerStyled>
        <div className='nftContainer'>
            <div className='text-container' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <p className='listedNFT'>Trending NFTs</p>
                <Link to='../marketplace'><p className='SeeAll' style={{cursor: 'pointer'}}>See All</p></Link>
            </div>
            <div className='NFTCardContainer'>
            <div className='dashCards'>
            <img src={image1}alt=""/>
            <Card/>
            </div>
            <div className='dashCards'>
            <img src={image1}alt=""/>
            <Card/>
            </div>
            </div>
    </div>
</NFTContainerStyled>
  )
}

export default TrendingCards
