import React from 'react'
import {NavLink,Link, Switch, BrowserRouter, Route} from 'react-router-dom'

const Header = () => (
    <header>
        <h2>Portfolio</h2>
        <NavLink to="/" activeClassName="isActive">Home</NavLink>
        <NavLink to="/portfolio" activeClassName="isActive">Portfolio</NavLink>
        <NavLink to="/contact" activeClassName="isActive">Contact</NavLink>
    </header>
)

export default Header;