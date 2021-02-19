import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {NavLink,Link, Switch, BrowserRouter, Route} from 'react-router-dom'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();
store.dispatch(addExpense({description:'Water bill',note:'starbucks flat white',amount:10,createdAt:3}));
store.dispatch(addExpense({description:'Electricity bill',note:'ESKOM eish',amount:20,createdAt:2}));
store.dispatch(addExpense({description:'Gas bill',note:'20L diesel',amount:30,createdAt:7}));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render(jsx,document.getElementById('app'));

