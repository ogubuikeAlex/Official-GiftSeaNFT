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
import MarketPlace from "../pages/Userdashboardpages/MarketPlace";
import HeroSection from "../pages/Userdashboardpages/HeroSection";
import { propTypes } from "react-bootstrap/esm/Image";
import UserCollection from "../pages/Userdashboardpages/Collection/UserCollection";
import Metadata from "../pages/Admindashboardpages/Metadatas/CollectionMetadata";
import MarketMetadata from "../pages/Admindashboardpages/Metadatas/MarketMetadata";
import AdminMarketPlace from "../pages/Admindashboardpages/MarketPlace";
import AdminMarketMetadata from "../pages/Admindashboardpages/Metadatas/AdminMarketdata";

export default function MainRoutes({ isAuthenticated, connect, currentUser }) {
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
                        <Route path="marketplace">
                            <Route index element={<AdminMarketPlace />} />
                            <Route path="adminMarketMetadata" element={<AdminMarketMetadata /> } /> 
                        </Route>
                        <Route path="favourites" element={<Favourites />} />
                        <Route path="treasury" element={<Treasury />} />
                        <Route path="upload" element={<Upload />} />
                        <Route path="transactions" element={<Favourites />} />
                        <Route path="metadata" element={<Metadata />} />
                    </Route>
                }
                {
                    isAuthenticated &&
                    <Route path="/userdashboard" element={<MainLayout currentUser={currentUser} />}>
                        <Route path="/userdashboard" index element={<HeroSection />} />
                        <Route path="marketplace">
                            <Route index element={<MarketPlace />} />
                            <Route path="marketMetadata" element={<MarketMetadata /> } /> 
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
            </Route>
            <Route path="*" element={<Navigate to={isAuthenticated ? "/userdashboard" : "/"} />} />
        </Routes>
    );
} 