import React, { Component } from 'react';
import { carouselData } from '../../data';
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);

// 2 slices of state: 1 the array of images coming in as data, and 2 the index of the currently selected image, initialized to 0
    this.state = {
      images: [],
      arrayRefOfCurrent: 0
    };
  }
  componentDidMount() {
    this.setState({
      images: carouselData
    });
  }

// Logic to determine what arrayRefOfCurrent should be set to on left click
  leftClick = () => {
    if (this.state.arrayRefOfCurrent === 0) {
      this.setState({
        arrayRefOfCurrent: 3
      });
    } else {
      this.setState(prevState => ({
        arrayRefOfCurrent: prevState.arrayRefOfCurrent - 1
      }));
    }
  };

// Logic to determine what arrayRefOfCurrent should be set to on right click
  rightClick = () => {
    if (this.state.arrayRefOfCurrent === 3) {
      this.setState({
        arrayRefOfCurrent: 0
      });
    } else {
      this.setState(prevState => ({
        arrayRefOfCurrent: prevState.arrayRefOfCurrent + 1
      }));
    }
  };

  render() {
    return (
      <div className="carousel">
        <img
// Set the image source equal to the arrayOfImages[index of currently selected image];
          src={this.state.images[this.state.arrayRefOfCurrent]}
          style={{ display: 'block' }}
          alt={'snowy'}
        />
        <div className="left-button" onClick={this.leftClick}>
          {'<'}
        </div>
        <div className="right-button" onClick={this.rightClick}>
          {'>'}
        </div>
      </div>
    );
  }
}
