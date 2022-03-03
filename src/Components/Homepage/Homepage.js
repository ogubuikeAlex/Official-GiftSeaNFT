import React from 'react';
import Header from '../Header'
import HeroSection from '../HeroSection'
import CounterSection from '../CounterSection'
import Features from '../Features'
import TabToggle from '../TabToggle'
import Trending from '../Trending'
import Toggler from '../Toggler'
import Newsletter from '../Newletter'
import Footer from '../Footer'

const Homepage = (props) => {

  return (

    <div>
      <Header handleClick={props.connect} />
      <HeroSection />
      <CounterSection />
      <Features />
      <TabToggle />
      <Trending />
      <Toggler />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Homepage