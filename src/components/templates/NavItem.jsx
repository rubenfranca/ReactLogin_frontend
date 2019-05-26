import './NavItem.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default props =>
    <Link to={`/${props.redirect || ''}`}>
        <i className={`fa fa-${props.icon}`}></i>{props.children}
    </Link>