import './Logo.css';
import logo from '../../assets/images/logo.png';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';


export default props => 
    <aside className="logo">
        <BrowserRouter className="logo" to="/">
            <img src={logo} alt="logo" />
        </BrowserRouter>
    </aside>