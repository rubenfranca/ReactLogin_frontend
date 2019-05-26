import './NavItem.css';
import React from 'react';

export default props =>
    <a href={`#/${props.redirect || ''}`}>
        <i className={`fa fa-${props.icon}`}></i>{props.children}
    </a>