import React, { Component } from 'react';
import Nav from './Nav';
import Draggable from 'react-draggable';

class Game extends Component {

    constructor(){
       
        super();
        this.state= {
            selected: null,
            leftCapacity:5,
            rightCapacity:3,
            leftFilled:0,
            rightFilled:0,
            timer:Date.now()
        }
        this.startTimer();
      }
      startTimer(){
       
       this.hey();
        
      }
      handleClick(id){
       this.setState({selected:id});
      }
      handleFill(){
          if(this.state.selected==="left"){
              this.setState({leftFilled:this.state.leftCapacity});
          }
          else
          if(this.state.selected==="right"){
            this.setState({rightFilled:this.state.rightCapacity});
        }
      }
      handleEmpty(){
        if(this.state.selected==="left"){
            this.setState({leftFilled:0});
        }
        else
        if(this.state.selected==="right"){
          this.setState({rightFilled:0});
      }
      }

      dragEvent(e){
        console.log("started drgaiing")
        e.dataTransfer.setData("text", e.target.id);
       
      }
      handleHover(e){
          console.log("hover");
        
      }
      
      dragged(eb){
       
        console.log("hey man")
        console.log("hey man")
        eb.preventDefault;
 
      } 
     hey(){
         var timer = new Date().getTime();
        var x = setInterval(function() {

            // Get todays date and time
            var now =   new Date().getTime();
           
            // Find the distance between now and the count down date
            var distance = now - timer;
            
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log(minutes+":"+seconds);
        },1000
    )
}
    
  render() {
  
    
    return (
        <div className="game">
       
       <div class="container">
        <div className="std_button">
           <button className="btn btn-primary func"  onClick={this.handleEmpty.bind(this)}>Empty</button>
           <button className="btn btn-primary func" onClick={this.handleFill.bind(this)}>Fill</button>
           <button className="btn btn-primary func" >Transfer</button>
        </div>
     </div>

        <div class="container">
            <Draggable>
           <div id ="left" className="left-div can"   onClick={this.handleClick.bind(this,"left")}>
           <div className="status">{this.state.leftFilled}</div>
                <img className="image" src = {require("../images/can_empty.png")} alt ="can"/>
           </div>
          </Draggable>

    
        <div className="right-div can"  onClick={this.handleClick.bind(this,"right")}>
        <div className="status">{this.state.rightFilled}</div>
             <img className="image" src = {require("../images/can.png")} alt ="can"/>
        </div>
     </div>
     
     <div class="container"> 
    
     <div className="table"  onClick={this.handleClick.bind(this)}>
            <div className="blackboard">
            <div className="firstboard dash">
            <button type="button" class="btn btn-xs btn-outline-danger">Abort</button>
            <p>01:00:00</p>
            
            </div>
            <div className="firstboard bomb">
               
            </div>
            </div>
        </div>
    </div>
    
   
     </div>
    );
  }
}

export default Game;