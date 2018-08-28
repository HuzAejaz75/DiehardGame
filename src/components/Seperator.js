import React, { Component } from 'react';
import Nav from './Nav';


class Seperator extends Component {

    constructor(){
        super();
        this.state= {
            width:0,
            negW :0
        }
      }
      handleClick(){
        
          var curWidth = this.state.width;
          var curNeg = this.state.negW;
          curWidth += 10;
          curNeg -= 10
          this.setState({width:curWidth});
          this.setState({negW:curNeg});
      }
  render() {

    return (
     <div className="container">
       <div style={{"marginLeft":"350px"}}>
           <div style={{"float":"left"}}>
                <img src = {require("../images/man.png")} style={{"height":"500px","width":"500px", "marginLeft":this.state.negW}}alt="man"/>
           </div>
           <div style={{"height":"400px","width":"400px","backgroundColor":"yellow","marginLeft":this.state.width}}>

           </div>
       </div>
       <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>Push</button>
    </div>
    );
  }
}

export default Seperator;