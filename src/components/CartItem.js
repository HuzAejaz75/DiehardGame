import React, { Component } from 'react';
import ls from 'local-storage';
import DisplayItem from './DisplayItem';
import axios from 'axios'

class CartItem extends Component {


  handleCancel(items){
    this.props.handleCancels(items);
  }
  handleSubmit(e){
   
   alert(this.state.ordered.length + " items have been checked out");
   //ls.clear();
   e.preventDefault();
  }
  render() {
    let displayCart;
    let total =0;
      
  
        displayCart = this.props.cartData.map((item)=>{
          var name = item.brand+item.name;
          total += item.price*item.quantity;
          return(
          
            <tr>
              <th>{item.id}</th>
              <td><img   className="images" src={require('../images/'+name+'.jpeg')}/></td>
              <td>{item.quantity}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.price*item.quantity}</td>
              <td><button onClick={this.handleCancel.bind(this,item)}>X</button></td>
            
            </tr>
          )    
        });
      

    return (
     <div className="container">
       <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Total Price</th>
                <th scope="col">cancel</th>
                </tr>
            </thead>
            <tbody>
              {displayCart} 
             
            </tbody>
          </table>
          <div className="alert alert-primary" style={{textAlign:"right"}}>Total: {total}</div>
          <form onSubmit={this.handleSubmit.bind(this)}>
              <button style={{float:'right'}} className="btn btn-lg btn-success" >Check Out</button>
          </form>
    </div>
    );
  }
}

export default CartItem;
/*

     <td>{item.quantity}<button  style={{marginLeft:'2px'}}>+</button><button>-</button></td>
          <td>{(item.status)?"available": "Not available"}</td>
          */