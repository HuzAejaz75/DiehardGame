import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Home from './components/Home';
import MainPage from './components/MainPage';
import './components/App.css';
var ReactRouter = require('react-router-dom');
var IndexRoute = ReactRouter.IndexRoute;
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;


const  router = (
<Router>
  <div className="container">
    <Route path='/' component={App}/>
      <Route path='/Mainpage' component={MainPage}></Route>
      <Route path='/Home' component={Home}/>
    </div>
  </Router>
)
render(router, document.getElementById('root'));
