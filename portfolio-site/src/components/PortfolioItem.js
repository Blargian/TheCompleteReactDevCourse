import React from 'react';

const PortfolioItem = (props) => (
    <div>
        <h1>A thing I've done</h1>
        <p>This page is for the project {props.match.params.id} I did</p>
    </div>
);

export default PortfolioItem;