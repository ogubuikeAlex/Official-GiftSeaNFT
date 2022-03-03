import { Route, Routes } from "react-router-dom";
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
import Adminsidebar from '../layout/Adminlayout'
import Dashboard from "../pages/Userdashboardpages/Dashboard";
import HeroSection from "../pages/Userdashboardpages/HeroSection";

export default function MainRoutes() {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<Homepage />} />
                <Route path="/admindashboard" element={<AdminLayout />}>
                    <Route path="admindashboard" element={<AdminHero />} />
                    <Route path="marketplace" element={<MarketPlace />} />
                    <Route path="favourites" element={<Favourites />} />
                    <Route path="treasury" element={<Treasury />} />
                    <Route path="upload" element={<Upload />} />
                    <Route path="transactions" element={<Favourites />} />
                    <Route path="push" element={<Favourites />} />
                </Route>
                <Route path="/userdashboard" element={<MainLayout />}>
                    <Route path="/userdashboard" index element={<HeroSection />} />
                    <Route path="marketplace" element={<MarketPlace />} />
                    <Route path="favourites" element={<Favourites />} />
                    <Route path="collections" element={<Collections />} />
                    <Route path="contact" element={<Contact/>} />
                    <Route path="about" element={<About/>} />
                </Route>
            </Route>
        </Routes>
    );
}
