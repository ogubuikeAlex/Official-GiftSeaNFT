import React from 'react';
import '../assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import '../scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeroSection from '../pages/HeroSection'
import MarketPlace from '../pages/MarketPlace'
import Favourites from '../pages/Favourites'
import Collections from '../pages/Collections'
import Contact from '../pages/Contact'
import About from '../pages/About'
import MainLayout from '../layout/MainLayout'

function Userdashboard() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HeroSection/>} />
                    <Route path="marketplace" element={<MarketPlace/>} />
                    <Route path="favourites" element={<Favourites/>} />
                    <Route path="collections" element={<Collections/>} />
                    <Route path="contact" element={<Contact/>} />
                    <Route path="about" element={<About/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Userdashboard;
