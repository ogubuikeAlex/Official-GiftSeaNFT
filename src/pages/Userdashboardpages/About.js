import React from 'react'
import Dashboard from './Dashboard'
import AboutpageStyled from '../../Styled-components/MarketplaceStyled'

const About = () => {
    return (
        <AboutpageStyled>
            <h4>About Us</h4>

            <div>
                <small>
                Building an open digital economy
                At GiftseaNFT, we're excited about a brand-new type of digital good called a non-fungible token, or NFT. NFTs have exciting new properties: they’re unique, provably scarce, tradeable, and usable across multiple applications. Just like physical goods, you can do whatever you want with them! 
                You could throw them in the trash, gift them to a friend across the world, or go sell them on an open marketplace. But unlike physical goods, they're armed with all the programmability of digital goods.
                A core part of our vision is that open protocols like Ethereum and interoperable standards like ERC-721 and ERC-1155 will enable vibrant new economies. We're building tools that allow consumers to trade their items freely, creators to launch new digital works, and developers to build rich, integrated marketplaces for their digital items.
                </small>
            </div>
        </AboutpageStyled>
    )
}

export default About
