import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.css';

import { Carousel } from 'react-responsive-carousel';

export default class ImageCarousel extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeIndex: 0,
      direction: null
    }
  }

  render() {
    const {activeIndex, direction} = this.state;
    return (
      <Carousel className="carousels" showThumbs={false} showArrows={true}>
        <div className="carousel-image">
          <img alt="grey" src={require('./grey.jpg')} />
        </div>
        <div className="carousel-image">
          <img alt="balls" src={require('./balls.JPG')}/>
        </div>
      </Carousel>
    )
  }
}
