import React from 'react';
import {Link, Route} from 'react-router-dom';

const PortfolioPage = (props) => (
    <div>
        <h1>My Work</h1>
        <p>Checkout the following things I've done:</p>
        <Link to="/portfolio/1">Item 1</Link>
        <Link to="/portfolio/2">Item 2</Link>
    </div>
);

export default PortfolioPage;