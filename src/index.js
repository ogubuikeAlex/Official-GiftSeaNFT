import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App2 from './App2';
import './polyfill.js';


ReactDOM.render(
    <BrowserRouter>
    <App2/>  
    </BrowserRouter>,
document.getElementById('root'));
