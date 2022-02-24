import React from 'react';
import '../assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import '../scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminHero from '../pages/Admindashboardpages/AdminHero'
import MarketPlace from '../pages/Admindashboardpages/MarketPlace'
import Favourites from '../pages/Admindashboardpages/Favourites'
import Adminsidebar from '../layout/Adminlayout'


function Admindashboard() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin_dashboard" element={<Adminsidebar/>}>
                    <Route index element={<AdminHero/>} />
                    <Route path="marketplace" element={<MarketPlace/>} />
                    <Route path="favourites" element={<Favourites/>}/>
                    <Route path="treasury" element={<Favourites/>}/>
                    <Route path="upload" element={<Favourites/>}/>
                    <Route path="transactions" element={<Favourites/>}/>
                    <Route path="push" element={<Favourites/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Admindashboard;
