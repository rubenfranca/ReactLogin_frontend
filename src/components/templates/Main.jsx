import './Main.css';
import React, { Fragment } from 'react';
import Header from './Header';

export default props =>
    <Fragment>
        <Header />
        <main className="content">
            Content
        </main>
    </Fragment>