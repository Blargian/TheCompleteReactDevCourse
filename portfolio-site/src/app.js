import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink,Link, Switch, BrowserRouter, Route} from 'react-router-dom'
import './styles/styles.scss'
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter'

ReactDOM.render(<AppRouter/>,document.getElementById('app'));

