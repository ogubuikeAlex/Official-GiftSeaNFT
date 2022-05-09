import React, {useState, useEffect} from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "../Components/Homepage/Homepage";
import AdminLayout from "../layout/Adminlayout";
import MainLayout from "../layout/MainLayout";
import AdminHero from "../pages/Admindashboardpages/AdminHero";
import Treasury from "../pages/Admindashboardpages/TreasuryCard";
import Upload from "../pages/Admindashboardpages/Upload";
import About from "../pages/Userdashboardpages/About";
import Collections from "../pages/Userdashboardpages/Collections";
import Contact from "../pages/Userdashboardpages/Contact";
import Favourites from "../pages/Userdashboardpages/Favourites";
import Adminfavourites from "../pages/Admindashboardpages/Favourites";
import MarketPlace from "../pages/Userdashboardpages/MarketPlace";
import Transactions from "../pages/Admindashboardpages/Transactions";
import HeroSection from "../pages/Userdashboardpages/HeroSection";
import { propTypes } from "react-bootstrap/esm/Image";
import UserCollection from "../pages/Userdashboardpages/Collection/UserCollection";
import Metadata from "../pages/Admindashboardpages/Metadatas/CollectionMetadata";
import MarketMetadata from "../pages/Admindashboardpages/Metadatas/MarketMetadata";
import AdminMarketPlace from "../pages/Admindashboardpages/MarketPlace";
import AdminMarketMetadata from "../pages/Admindashboardpages/Metadatas/AdminMarketdata";

import {
    adminAddress
} from '../config'
import Administrator from "../pages/Admindashboardpages/Administrator";
import { getCurrentAdmins } from '../pages/Admindashboardpages/Metadatas/AdmistratorMethods';

export default function MainRoutes({ isAuthenticated, connect, currentUser }) {    
    const [admin, setCurrentAdmin] = useState("");
    const [superAdmin, setSuperAdmin] = useState("")

    let setAdmins = async () => {
        var admins = await getCurrentAdmins();

        setCurrentAdmin(admins.admin.toString())
        setSuperAdmin(admins.owner.toString())
    }

    useEffect(() => {
        setAdmins();
    }, [])
    return (
        <Routes>
            {
                isAuthenticated !== null && isAuthenticated !== undefined ?
                    <Route path="/" element={<Homepage connect={connect} />} /> : <Route path="/" element={<Homepage connect={connect} />} />
            }
            {
                isAuthenticated && currentUser?.toString().toLowerCase() === adminAddress.toLowerCase() &&
                <Route path="/admindashboard" element={<AdminLayout currentUser={currentUser} />}>
                    <Route path="/admindashboard" index element={<AdminHero />} />
                    <Route path="marketplace">
                        <Route index element={<AdminMarketPlace />} />
                        <Route path="adminMarketMetadata" element={<AdminMarketMetadata />} />
                    </Route>
                    <Route path="favourites" element={<Favourites />} />
                    <Route path="treasury" element={<Administrator />} />
                    <Route path="upload" element={<Upload />} />
                    <Route path="transactions" element={<Transactions />} />
                    <Route path="about" element={<About />} />
                </Route>
            }

            {/* {
                isAuthenticated && currentUser?.toString().toLowerCase() === superAdmin.toLowerCase() &&
                <Route path="/superAdmindashboard" element={<AdminLayout currentUser={currentUser} />}>
                    <Route path="/superAdmindashboard" index element={<AdminHero />} />
                    <Route path="marketplace">
                        <Route index element={<AdminMarketPlace />} />
                        <Route path="adminMarketMetadata" element={<AdminMarketMetadata />} />
                    </Route>
                    <Route path="favourites" element={<Favourites />} />
                    <Route path="treasury" element={<Administrator />} />
                    <Route path="upload" element={<Upload />} />
                    <Route path="transactions" element={<Transactions />} />
                    <Route path="about" element={<About />} />
                </Route>
            } */}
            {
                isAuthenticated &&
                <Route path="/userdashboard" element={<MainLayout currentUser={currentUser} />}>
                    <Route path="/userdashboard" index element={<HeroSection />} />
                    <Route path="marketplace">
                        <Route index element={<MarketPlace />} />
                        <Route path="marketMetadata" element={<MarketMetadata />} />
                    </Route>
                    <Route path="favourites" element={<Favourites />} />
                    <Route path="collections">
                        <Route index element={<UserCollection currentUser={currentUser} />} />
                        <Route path="metadata" element={<Metadata />} />
                    </Route>
                    <Route path="contact" element={<Contact />} />
                    <Route path="about" element={<About />} />
                </Route>
            }

            <Route path="*" element={<Navigate to={
                isAuthenticated && currentUser?.toString().toLowerCase() === adminAddress.toLowerCase()
                    ? "/admindashboard" : isAuthenticated
                        ? "/userdashboard" : "/"

            } />}
            />

        </Routes>
    );
} 
