import React, { Component } from 'react';
import Game from './Game';

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