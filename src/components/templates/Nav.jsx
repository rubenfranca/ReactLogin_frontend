import './Nav.css';
import React from 'react';
import NavItem from './NavItem';

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem icon="home" title="Home" >Home</NavItem>
            <NavItem redirect="users" icon="users">Users</NavItem>
        </nav>
    </aside>