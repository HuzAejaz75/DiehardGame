import React, { Component } from 'react';

import ls from 'local-storage';
import { createHashHistory } from 'history'

import {
    withRouter
  } from 'react-router-dom'
  export const history = createHashHistory();
  var Link = require('react-router-dom').Link;
  var ReactRouter = require('react-router-dom');
  var Redirect = ReactRouter.Redirect;
class Game extends Component {

    constructor(){
       
        super();
        this.state= {
            selected: null,//state to determine which jug is selected
            leftCapacity:5,//denotes the max capacity of the left jug
            rightCapacity:3,//denotes the max capacity of the right jug
            leftFilled:0,//denotes the current amount of water in left jug
            rightFilled:0,//denotes the current amount of water in right jug
            number:"",//state that represents the timer in the bomb
            explode:false,// is true when the bomb explodes to load certain css classes
            abort:null,//is true when the bomb is successfully aborted
            targetWeight: 4,//the weight we are aiming to acheive 
            left_stat:"empty",//the current status of the jugs
            right_stat:"empty"// can be 'full', 'empty' or anything in between represented by 'half'
        }
       
      }
     componentWillMount(){
        ls.clear();
        var timer = new Date().getTime();//sets the timer when the game starts for 2 minutes
        this.interval = setInterval(() => {
         
            var now =   new Date().getTime();
            var distance = now - timer; 
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var min = ((1-minutes) <10)? "0"+(1-minutes) : (1-minutes);
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            var sec = (59-seconds < 10)? "0"+(59-seconds):(59-seconds);
            this.setState({number: min+":"+sec});
            if(min ==="00" && sec === "00") {this.setState({explode:true})}
          }, 1000);
     }
      handleClick(id){
       this.setState({selected:id});
      }
      handleFill(){
          if(this.state.selected==="left"){
              this.setState({leftFilled:this.state.leftCapacity});
              if(ls.get('action')){
                    var str = ls.get("action");
                    str+=' Filled '+ (this.state.leftCapacity-this.state.leftFilled)+' Gallons in the left jug ,';
                    ls.set('action',str);
              }
              else{
                
                ls.set('action','Filled '+(this.state.leftCapacity-this.state.leftFilled)+' Gallons in the left jug ,');
              }

              this.setState({left_stat:"full"});
              
          }
          else
          if(this.state.selected==="right"){
            this.setState({rightFilled:this.state.rightCapacity});
            if(ls.get('action')){
                var str = ls.get("action");
                str+=' Filled '+ (this.state.rightCapacity-this.state.rightFilled)+' Gallons in the right jug ,';
                ls.set('action',str);
          }
          else{
            ls.set('action','Filled '+(this.state.rightCapacity-this.state.rightFilled)+' Gallons in the right jug ,');
          }
          this.setState({right_stat:"full"});//setting the state of the jug
        }
      }
      handleEmpty(){
        if(this.state.selected==="left"){
            this.setState({leftFilled:0});
            if(ls.get('action')){//if it exists, append to it
                var str = ls.get("action");
                str+=' Emptied left jug,';
                ls.set('action',str);
          }
          else{//or add new
            ls.set('emptied left jug ,');
          }
          this.setState({left_stat:"empty"}); //setting the state of the jug
        }
        else
        if(this.state.selected==="right"){
          this.setState({rightFilled:0});
            if(ls.get('action')){//if ls exists append to it 
                    var str = ls.get("action");
                    str+=' Emptied right jug,';
                    ls.set('action',str);
            }
            else{//or add new
                ls.set('emptied right jug ,');
            }
            this.setState({right_stat:"empty"});//setting the state of the jug
      }
      }

      handleTransfer(){
        console.log(this.state.selected);
        if(this.state.selected==="left"){
            if(this.state.leftFilled===0 || this.state.rightFilled===this.state.rightCapacity){
                console.log("Transfer not possible");
            }
            else{
                var transferWt = 0;
                var gap = this.state.rightCapacity - this.state.rightFilled;
                if(gap === this.state.leftFilled){ //gap === to water in left jug
                    if(this.state.rightFilled+gap===this.state.rightCapacity){
                        this.state.right_stat="full";//setting the state of the jug
                    }
                    else{
                        this.state.right_stat="half";//setting the state of the jug
                    }
                    this.setState({left_stat:"empty"})
                    this.setState({rightFilled: this.state.rightFilled+gap});
                    this.setState({leftFilled: this.state.leftFilled-gap});
                    transferWt = gap
                 
                }
                else
                if(gap > this.state.leftFilled) //gap greater than water in left jug
                {
                    if(this.state.rightFilled+this.state.leftFilled===this.state.rightCapacity){
                        this.state.right_stat="full";//setting the state of the jug
                    }
                    else{
                        this.state.right_stat="half";//setting the state of the jug
                    }
                    this.setState({rightFilled: this.state.rightFilled+this.state.leftFilled});
                    transferWt = this.state.leftFilled;
                    this.setState({leftFilled: 0});
                    this.setState({left_stat:"empty"});
                }
                else{   //gap less than water in left jug
                    this.state.right_stat="full";//setting the state of the jug
                    this.setState({left_stat:"half"});//setting the state of the jug
                    this.setState({rightFilled: this.state.rightFilled+gap});
                    transferWt = gap;
                    this.setState({leftFilled: this.state.leftFilled - gap});
                }
                if(ls.get('action')){//if localstorage exists append to it 
                    var str = ls.get("action");
                    str+=' Transferred '+ transferWt+ ' gallons from left jug to the right jug,';
                    ls.set('action',str);
                }
                else{ //or add new
                     ls.set('Transferred '+ transferWt+ ' gallons from left jug to the right jug,');
                }


            }
        }
        else
        if(this.state.selected==="right"){
            if(this.state.rightFilled===0 || this.state.leftFilled===this.state.leftCapacity){
                console.log("Transfer not possible");
            }
            else{
                var gap = this.state.leftCapacity - this.state.leftFilled;
                if(gap === this.state.rightFilled)
                {//gap equals the water in right jug
                    if(this.state.leftFilled+gap===this.state.leftCapacity){
                        this.setState({left_stat:"full"});//setting the state of the jug
                    }
                    else{
                        this.setState({left_stat:"half"});//setting the state of the jug
                    }
                    this.setState({right_stat:"empty"});//setting the state of the jug

                    this.setState({leftFilled:this.state.leftFilled+gap});
                    this.setState({rightFilled:this.state.rightFilled-gap});
                    transferWt = gap
                }
                else
                if(gap > this.state.rightFilled)//gap is greater than water in right jug
                {
                    if(this.state.leftFilled+this.state.rightFilled===this.state.leftCapacity){
                        this.setState({left_stat:"full"});//setting the state of the jug
                    }
                    else{
                        this.setState({left_stat:"half"});//setting the state of the jug
                    }
                    this.setState({right_stat:"empty"});//setting the state of the jug
                    this.setState({leftFilled: this.state.leftFilled+this.state.rightFilled});
                    transferWt = this.state.rightFilled;
                    this.setState({rightFilled: 0});
                }
                else
                {    //gap is less than water in right jug
                    this.setState({left_stat:"full"});//setting the state of the jug
                    this.setState({right_stat:"half"});//setting the state of the jug
                    this.setState({leftFilled: this.state.leftFilled+gap});
                    this.setState({rightFilled: this.state.rightFilled - gap});
                    transferWt = gap
                }


                if(ls.get('action')){//apend if localstorage exists f
                    var str = ls.get("action");
                    str+=' Transferred '+ transferWt+ ' gallons from right jug to the left jug,';
                    ls.set('action',str);
                }
                else{//or add new
                     ls.set('Transferred '+ transferWt+ ' gallons from right jug to the left jug,');
                }
      }
      }
    }

  abortBomb(){
      
      if((this.state.leftFilled===this.state.targetWeight || this.state.rightFilled === this.state.target)&& !this.state.explode){
        this.setState({abort:true});//if correct weight exists then diffuse the bomb
        if(ls.get('action')){
            var str = ls.get("action");
            str+=' bomb has been diffused successfully';
            ls.set('action',str);
        }
        else{
             ls.set("action",'bomb has been diffused successfully');
        }
        
      }
      else{//if correct weight does not exist in either of the jugs then explode
        this.setState({explode:true});
        if(ls.get('action')){
            var str = ls.get("action");
            str+=' bomb could not be diffused ';
            ls.set('action',str);
        }
        else{
             ls.set("action",'bomb could not be diffused ');
        }
      }
    

  } 
  reset(){
      window.location.reload();
  } 

  render() {
    var str = ls.get("action");
     var actions;
     var size = 0
     if(str !==null && str.length>0){
         console.log(str);
        actions = str.split(',');
        size = actions.length -1;
        var disp = actions.map((act)=>{
           
            return(
                <li className="list">{act}</li>
            )
        })// take the string containing the action and split it and display it
     }
     console.log(actions);
    return (
        <div className="game">
       <div className="moves" style={{"display":(this.state.abort || this.state.explode)?"block":"none"}}>
       <h1>{(this.state.explode)?"Game Over":"Bomb Diffused"}</h1>
       <h6>You took {size} moves</h6>
       {disp}
       <button className="btn btn-primary btn-lg btn-block" onClick={this.reset.bind(this)}> 
            Play Again
       </button>
       </div>
       <div class="container">
        <div className="std_button" style={{"display":(!this.state.explode)&&(!this.state.abort)?"":"none"}}>
           <button className="btn btn-primary func"  onClick={this.handleEmpty.bind(this)}>Empty</button>
           <button className="btn btn-primary func" onClick={this.handleFill.bind(this)}>Fill</button>
           <button className="btn btn-primary func" onClick={this.handleTransfer.bind(this)}>Transfer</button>
        </div>
     </div>

        <div class="container">
          
           <div id ="left" className="left-div can"   onClick={this.handleClick.bind(this,"left")}>
           <div className="status">{this.state.leftFilled}/{this.state.leftCapacity}</div>
                <img className="image" src = {require("../images/"+((this.state.selected==="left")?"blue":"black")+this.state.left_stat+".png")} alt ="can"/>
           </div>
          

    
        <div className="right-div can"  onClick={this.handleClick.bind(this,"right")}>
            <div className="status">{this.state.rightFilled}/{this.state.rightCapacity}</div>
                <img className="image" src =  {require("../images/"+((this.state.selected==="right")?"blue":"black")+this.state.right_stat+".png")}  alt ="can"/>
            </div>
        </div>
     
     <div class="container"> 
    
     <div className="table"  onClick={this.handleClick.bind(this)}>
            <div className="blackboard">
            <div className="firstboard dash">
            <button type="button" class="btn btn-xs btn-outline-danger" onClick={this.abortBomb.bind(this)}>Diffuse</button>
            <p style={{"display":(this.state.explode || this.state.abort)?"none":"block"}}>{this.state.number}</p>
            </div>
            <div className="firstboard bomb">
            </div>
            </div>
        </div>
    </div>
    
  <div className={(this.state.explode) && (!this.state.abort)?"dot center explode":"dot"} ></div>

  </div>
    );
  }
}

export default Game;