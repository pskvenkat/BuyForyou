import React from 'react';
import { BrowserRouter, HashRouter,IndexRoute, Switch, Route, Link, browserHistory } from "react-router-dom";
import Main from '../src/components/main'
import Products from '../src/components/Products/products'
import ProdDetails from '../src/components/Products/product_details'
import Home from '../src/components/home/home'
 
const Routes = () => (
    <BrowserRouter>
        <div>
          <Main />
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/products" component={Products}/>
          <Route path="/Details" component={ProdDetails}/></Switch>
        </div>
      </BrowserRouter>
  )
export default Routes
  