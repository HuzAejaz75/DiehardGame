import React, { Component } from 'react';
import FaSearch from 'react-icons/lib/fa/search';
import ls from 'local-storage';
import axios from 'axios';

import { createHashHistory } from 'history'

import {
  withRouter
} from 'react-router-dom'
export const history = createHashHistory()
var Link = require('react-router-dom').Link;
var ReactRouter = require('react-router-dom');
var Redirect = ReactRouter.Redirect;

class Nav extends Component {
  handleSearch(e){
    let data;
    data={
        key: this.refs.search.value
    }
    console.log(data);
   
    
    e.preventDefault();
}
handleLogin(e){
  var email = this.refs.email.value;
  var password = this.refs.password.value;
  axios.post("https://pacific-lowlands-60458.herokuapp.com/user/getallusers",{email:email, password:password}).then((resp)=>{
    if(resp.data.data[0]){
      ls.clear();
      ls.set("userData",resp.data.data[0].email);
      this.setState({loggedIn:true});
      history.push("/Home")
    }
    else{
      alert(" You entered the wrong password");
    }
  });

  
  e.preventDefault();
}
handleLogout(e){
 
  ls.clear();
  this.state.loggedIn=false;
  return(
    <Redirect to="/Login"/>
  )
  e.preventDefault();
}

  render() {
    return (
     <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">ShopATon</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"> </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/Home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/shoppingcart">Cart</a>
      </li>
      <li className="nav-item" style={{marginLeft:'470px'}}>
      <form onSubmit={this.handleLogin.bind(this)} style={{"display":(ls.get("userData"))?"none":"block"}}>
          <div class="row" >
            <div class="col">
              <input type="email" ref="email"class="form-control" placeholder="Email"/>
            </div>
            <div class="col">
              <input type="password" ref="password"class="form-control" placeholder="Password"/>
            </div>
            <button class="btn btn-outline-primary btm-sm">
               Login
            </button>
           
          </div>
        </form>   
      </li>
      <li className="nav-item" onClick={this.handleLogout.bind(this)} style={{"display":(ls.get("userData"))?"block":"none"}}>
      
      <a href="/login">Logout</a>
      
      </li>
      </ul>
      
    </div>
        </nav>
            
    </div>
    );
  }
}

export default Nav;