import React, { Component } from 'react';
import Nav from './Nav';
//import Carousal from './Carousal'
import Carousal from './ControlledCarousel'

class MainPage extends Component {
  constructor(){
    super();
    this.state={
      itemAdded: false
    }
      
    
  }
    handleClick(item){
       this.props.handleItem(item);
       this.setState({itemAdded:true});
    }
  render() {
      let displayItems;
      displayItems = this.props.defaultDisplay.map((item)=>{
        var name = item.brand+item.name;
        //console.log(name)
         return(
            <div className="itemDisp" key={item.id}>
                 <div style={{marginLeft:'10%',textAlign:'center'}}>{item.name}</div>
                 <img className="images" src={require('../images/'+name+'.jpeg')} alt="no img"/>
                 <div className="priceNbutton">
                  <div className="price">${item.price}</div>
                  <div>           
                      <button onClick={this.handleClick.bind(this, item)} className="btn btn-outline-dark btn-sm" style={{marginLeft:'30%'}} >Add to cart</button>
                  </div>
                 </div>
            </div>
         )
         
      })
    return (
     <div className="container">
     <div className="Carousel">
    
      <Carousal/></div>
      <div class="alert alert-success alertDisp" role="alert" style={{"display":(this.state.itemAdded)?"block":"none"}}>
        <h3>Item has been added to cart</h3>
        <h4>Click on the cart icon to access your shopping cart</h4>
      </div>
        {displayItems}
    </div>
    );
  }
}//style={{"display":(this.itemAdded)?"block":"none"}}

export default MainPage;