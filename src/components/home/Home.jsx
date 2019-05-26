import React from 'react';
import Main from '../templates/Main';

export default props =>
    <Main icon="home" title="Home" subtitle="Insert subtitle here">
        <div className="display-4">Welcome</div>
        <hr />
        <p className="mb-0">Subtitle example</p>
    </Main>