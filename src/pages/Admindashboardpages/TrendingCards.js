import React from 'react'
import NFTContainerStyled from '../../Styled-components/NFTContainer'
import ClickedButt from '../../Components/clickedButton/ClickedButt'
import image1 from '../../img/latestNft.png'
import Card from '../../Components/Card'


const TrendingCards = () => {
  return (
<NFTContainerStyled>
        <div className='nftContainer'>
            <div className='text-container' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <p className='listedNFT'>Trending NFTs</p>
                <p className='SeeAll'>See All</p>
            </div>
            <div className='NFTCardContainer'>
            <div className='dashCards'>
            <img src={image1}alt=""/>
            <ClickedButt/>
            <Card/>
            </div>
            <div className='dashCards'>
            <img src={image1}alt=""/>
            <ClickedButt/>
            <Card/>
            </div>
            </div>
    </div>
</NFTContainerStyled>
  )
}

export default TrendingCards
