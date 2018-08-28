import React, { Component } from 'react';
import Game from './Game';
import Nav from './Nav';
import MainPage from './MainPage';
import ls from 'local-storage';
import axios from 'axios'
class Home extends Component {
  constructor(){
    super();
    this.state= {
      default:[],
      ordered:[],
      spunk:[]
    }
  }

  componentWillMount(){
   
  }
  
  render() {
    return (
     <div className="container">
    
        <Game/>
    </div>
    );
  }
}

export default Home;