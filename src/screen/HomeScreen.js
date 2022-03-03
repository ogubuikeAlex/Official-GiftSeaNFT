import React from 'react';
import '../assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import '../scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from '../Components/Homepage/Homepage'

function Homescreen() {
    return (
        <div>
            <Homepage />
        </div>
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/userdashboard" element={<Homepage />}/>
        //     </Routes>
        // </BrowserRouter>
    )
}

export default Homescreen;
