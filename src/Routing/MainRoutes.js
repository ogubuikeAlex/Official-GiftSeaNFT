import { Navigate, Route, Routes, Router, Link, Outlet } from "react-router-dom";
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
import MarketPlace from "../pages/Userdashboardpages/MarketPlace";
import HeroSection from "../pages/Userdashboardpages/HeroSection";
import TreasuryMetadata from '../pages/Admindashboardpages/Metadatas/TreasuryMeta'
import { propTypes } from "react-bootstrap/esm/Image";

export default function MainRoutes({ isAuthenticated, connect }) {
    return (
        <Routes>
            <Route>
                {
                    !isAuthenticated &&
                    <Route path="/" element={<Homepage connect={connect} />} />
                }
                {
                    isAuthenticated &&
                    <Route path="/admindashboard" element={<AdminLayout />}>
                        <Route path="/admindashboard" index element={<AdminHero />} />
                        <Route path="marketplace" element={<MarketPlace />}/>
                        <Route path="favourites" element={<Favourites />} />
                        <Route path="treasury" element={<Treasury />} />
                        <Route path="upload" element={<Upload />} />
                        <Route path="transactions" element={<Favourites />} />
                        <Route path="about" element={<TreasuryMetadata />} />
                    </Route>
                }
                {
                    isAuthenticated &&
                    <Route path="/userdashboard" element={<MainLayout currentUser ={propTypes.currentUser}/>}>
                        <Route path="/userdashboard" index element={<HeroSection />} />
                        <Route path="marketplace" element={<MarketPlace />} />
                        <Route path="favourites" element={<Favourites />} />
                        <Route path="collections" element={<Collections />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="about" element={<About />} />
                    </Route>
                }
            </Route>
            <Route path="*" element={<Navigate to={isAuthenticated ? "/userdashboard" : "/"}/>}/>            
        </Routes>
    );
} 