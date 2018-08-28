import React, { Component } from 'react';
import Nav from './Nav';
import MainPage from './MainPage';

class DisplayItem extends Component {
   

render() {
         
 
 let elem = this.props.itemData.map((item)=>{
        console.log(item);
 });
 
    return (
   {elem}
    );
  }
}

export default DisplayItem;