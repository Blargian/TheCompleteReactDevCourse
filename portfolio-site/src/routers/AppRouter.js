import React from 'react';
import {NavLink,Link, Switch, BrowserRouter, Route} from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import HomePage from '../components/HomePage';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioItem from '../components/PortfolioItem';
import ContactPage from '../components/ContactPage';
import Header from '../components/Header';


const AppRouter = () => (

    <BrowserRouter>
        <div>
            <Header></Header>
            <Switch>
            <Route path="/" component={HomePage} exact="true"></Route>
            <Route path="/portfolio" component={PortfolioPage} exact="true"></Route>
            <Route path="/portfolio/:id" component={PortfolioItem} ></Route>
            <Route path="/contact" component={ContactPage} ></Route>
            <Route component={NotFoundPage}/>
            </Switch>

        </div>
    </BrowserRouter>
)

export default AppRouter;