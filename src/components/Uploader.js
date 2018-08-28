import React, { Component } from 'react';
import Nav from './Nav';
import MainPage from './MainPage';

class Uploader extends Component {
  constructor(){
    super();
    this.state = {
      percentageUploaded: Number
    }

  } 
  componentWillMount(){
    this.setState({
      percentageUploaded: 0
    });
  }

  componentWillReceiveProps(){

  }

render() {
    return (
  <div>Uploader</div>
    );
  }
}

export default Uploader;