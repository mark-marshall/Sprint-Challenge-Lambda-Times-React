import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      arrayRefOfCurrent: 0,
    }
  }
  componentDidMount(){
    this.setState({
      images: carouselData,
    })
  }

  leftClick = () => {
    if (this.state.arrayRefOfCurrent === 0){
      this.setState({
        arrayRefOfCurrent: 3,
      })
    } else {
      this.setState (prevState => ({
        arrayRefOfCurrent: prevState.arrayRefOfCurrent -1,
      }))
    }
  }

  rightClick = () => {
    if (this.state.arrayRefOfCurrent === 3){
      this.setState({
        arrayRefOfCurrent: 0,
      })
    } else {
      this.setState (prevState => ({
        arrayRefOfCurrent: prevState.arrayRefOfCurrent +1,
      }))
    }
  }
  
  render(){
    return (
      <div className="carousel">
        <img src={this.state.images[this.state.arrayRefOfCurrent]} style={{display: 'block'}} />
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}