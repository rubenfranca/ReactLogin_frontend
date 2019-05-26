import './Logo.css';
import logo from '../../assets/images/logo.png';
import React from 'react';


export default props => 
    <aside className="logo">
        <a className="logo" href="/">
            <img src={logo} alt="logo" />
        </a>
    </aside>