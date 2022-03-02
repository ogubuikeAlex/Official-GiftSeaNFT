import React from 'react';
import '../assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import '../scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeroSection from '../pages/Userdashboardpages/HeroSection'
import MarketPlace from '../pages/Userdashboardpages/MarketPlace'
import Favourites from '../pages/Userdashboardpages/Favourites'
import Collections from '../pages/Userdashboardpages/Collections'
import Contact from '../pages/Userdashboardpages/Contact'
import About from '../pages/Userdashboardpages/About'
import MainLayout from '../layout/MainLayout'
import Metadata from '../pages/Admindashboardpages/TreasuryMeta/Metadata'

function Userdashboard() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/userdashboard" element={<MainLayout />}>
                    <Route index element={<HeroSection/>} />
                    <Route path="marketplace" element={<MarketPlace/>}>
                    <Route path="nftmetadata" element={<Metadata/>} />    
                    </Route>
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
