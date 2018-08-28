import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
class ControlledCarousel extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null
       
      };
    }
    myTimer() {
      var d = this.state.index;
      d = (d+1)%3;
      this.setState({index:d});
    }
  
  
   componentDidMount(){
    var myVar = setInterval(()=>{
      var d = this.state.index;
      d = (d+1)%3;
      this.setState({index:d});
    }, 3000);
   }
   
    handleSelect(selectedIndex, e) {
     // alert(`selected=${selectedIndex}, direction=${e.direction}`);
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        
        >
          <Carousel.Item style={{"display":(this.state.index===0)?"block":"none"}}>
            <img width={900} height={500} alt="900x500" src={require("./slide1.jpg")} />
            <Carousel.Caption>
              <h3 className="textDisp">Laptops</h3>
              <p className="textDisp">Buy the latest laptops for the cheapest price.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{"display":(this.state.index===1)?"block":"none"}}>
            <img width={900} height={500} alt="900x500" src={require("../images/slide2.jpg")} />
            <Carousel.Caption>
              <h3 className="textDisp" style={{"left":"0px","textAlign":"left "}}>Phones</h3>
              <p className="textDisp" style={{"textAlign":"left "}}>Buy Smart Phones</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{"display":(this.state.index===2)?"block":"none"}}> 
            <img width={900} height={500} alt="900x500" src={require("../images/slide3.png")}/>
            <Carousel.Caption>
              <h3 className="textDisp">Home Automation</h3>
              <p className="textDisp">
                Buy products from Nest and amazon.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }
  export default ControlledCarousel;