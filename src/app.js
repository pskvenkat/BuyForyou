import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import Routes from './Router'
import {HashRouter, Router, browserHistory } from 'react-router-dom';
import * as prodActions from '../src/actions/prodActions';
import { Provider }  from 'react-redux';
import createStore from '../src/store/store';

const store = createStore();
store.dispatch(prodActions.fetchProducts());

ReactDOM.render(
    <Provider store= { store }> 
        <Routes  history={browserHistory} />
    </Provider>,
    document.getElementById('app')
);
