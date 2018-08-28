import React, { Component } from 'react';
import ls from 'local-storage';
import axios from 'axios';
var ReactRouter = require('react-router-dom');
var Redirect = ReactRouter.Redirect;
class Login extends Component {
    handleSubmit(e){
        var email = this.refs.email.value;
        var password = this.refs.password.value;
        var rpassword = this.refs.rpassword.value;
        if(password ===rpassword){
            axios.post("https://pacific-lowlands-60458.herokuapp.com/user/addUser",{email:email,password:password}).then((resp)=>{
                alert("user created");
            });
        }
        else{
            alert("The passwords did not match")
        }
        e.preventDefault();
    }
  render() {
    if(ls.get("userData")){
   
        return( <Redirect  to="/Home"/>);
         
     }
     else{
    return (
        <div className="login">
        
              <form className="signUp" onSubmit={this.handleSubmit.bind(this)}>
                    <div style={{marginTop:"50px"}}>
                        <div class="form-group col-md-6">
                        <label>Email</label>
                        <input type="email" ref="email"class="form-control" id="inputEmail4" placeholder="Email"/>
                        </div>
                        <div class="form-group col-md-6">
                        <label>Password</label>
                        <input type="password" ref="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                        </div>
                        <div class="form-group col-md-6">
                        <label >Retype Password</label>
                        <input type="password"  ref="rpassword"class="form-control" id="inputPassword5" placeholder="Retype Password"/>
                        </div>
                    </div>

 
            <div className="signup_button">
             <button type="submit" class="btn btn-primary" style={{width:"380px"}}>Sign in</button>
             </div>
            
        </form>   
    </div>
    );
  }
}
}

export default Login;