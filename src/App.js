import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import App from './components/App';
import Cart from './components/Cart';
import Home from './components/Home';
import Login from './components/Login';
import './components/App.css';
var ReactRouter = require('react-router-dom');
var IndexRoute = ReactRouter.IndexRoute;
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;


const  router = (
<Router>
  <div className="container">
    <Route path='/' component={App}/>
    <Route path='/Login' component={Login}/>
    <Route path='/Home' component={Home}/>
    <Route path='/shoppingcart' component={Cart}/>
  
  
  
    </div>
  </Router>
)
render(router, document.getElementById('root'));
