import HomeScreen from './screen/HomeScreen'
import Userdashboard from './screen/Userdashboard'
import React, {useState} from 'react'
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


const App = () => {

  

  return (
    <div className='App'>
    <BrowserRouter>
      <main>
        <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/userdashboard" element={<Userdashboard/>}/>
        </Routes>
        </main>
      </BrowserRouter>
          </div>    
  )
}

export default App;
