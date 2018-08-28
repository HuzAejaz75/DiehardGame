import React, { Component } from 'react';
import Nav from './Nav';
import MainPage from './MainPage';

class Downloader extends Component {
  constructor(){
    super();
    this.state = {
      percentageDownloaded: Number
    }

  } 
  componentWillMount(){
    this.setState({
      percentageDownloaded: 0
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

export default Downloader;