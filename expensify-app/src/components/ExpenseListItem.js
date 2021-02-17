import React from 'react';
import ExpenseList from './ExpenseList';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({dispatch,description,amount,createdAt,id}) => {

    return (
    <div>
            <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
            <p>{amount} - {createdAt}</p>
    </div>
    );

    };

export default connect()(ExpenseListItem)