import React from 'react'
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import CounterSection from '../Components/CounterSection';
import Features from '../Components/Features';
import TabToggle from '../Components/TabToggle';
import Trending from '../Components/Trending'
import Toggler from '../Components/Toggler'
import Newsletter from '../Components/Newletter';
import Footer from '../Components/Footer';

const HomeScreen = () => {
  return (
    <div>
      <Header/>
      <HeroSection/> 
      <CounterSection/>  
      <Features/>
      <TabToggle/>
      <Trending/>
      <Toggler/>
      <Newsletter/>
      <Footer/>

    </div>
  )
}

export default HomeScreen;