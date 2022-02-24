import React from 'react';
import '../assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import '../scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from '../Components/Homepage/Homepage'

<<<<<<< HEAD
function Homescreen() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />}/>
            </Routes>
        </BrowserRouter>
    )
=======
const HomeScreen = (props) => {
  return (
    <div>
      <Header handleClick={props.handleClick} />
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
>>>>>>> efadb3e3371a4088e3ca86f00b7db5f6387277fe
}

export default Homescreen;
