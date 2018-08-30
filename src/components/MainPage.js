import React, { Component } from 'react';
var ReactRouter = require('react-router-dom');
var Redirect = ReactRouter.Redirect;
var Link = require('react-router-dom').Link;
class MainPage extends Component {
  constructor(){
    super();
    this.state={
      itemAdded: false
    }
  }

  render() {
     
    return (
     <div className="container">
      <div className="openingScene">
       <h2>Stop the bomb</h2>
        <h3>Instructions</h3>
        <h6> 1. There are 2 jugs with a capacity of 5 gallons and 3 gallons</h6>
        <div id ="left" className="left-disp" >
        <img className="image" src = {require("../images/blackempty.png")} alt ="can"/></div>
         <h6> 2. There is a bomb that will blow up in 2 minutes</h6>
        <div id ="left" className="left-disp" >
        <img className="bomb_img" src = {require("../images/table.png")} alt ="can"/></div>
        <h6> 3. To diffuse the bomb, you have to fill one of the jugs to weigh 4 gallons</h6>
        <h6> 4. You have three buttons to modify the contents of the jugs "Fill", "Empty","Transfer"</h6>
        <h6>5. <b>Select</b> a jug and click on the buttons to modify the contents of the jugs</h6>
        <h6><b>note: To select you have to click on the jug and the jug color changes to blue</b></h6>
        <h6>6. Click on the diffuse button in the dashboard connected to the bomb to diffuse it</h6>
        <img style={{"height":"100px","width":"280px"}} src = {require("../images/dash.png")} alt ="can"/>
        <button className="btn btn-primary btn-lg btn-block" >
         
          <Link to="/Home" style={{"color":"white"}}> Play the game</Link>
        </button>
      </div>
     
    </div>
    );
  }
}

export default MainPage;