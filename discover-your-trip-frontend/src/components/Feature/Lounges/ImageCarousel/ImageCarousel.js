import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.css';
import { Carousel } from 'react-responsive-carousel';

export default class ImageCarousel extends Component {
  render() {
    const images = this.props.image;
    console.log(images);
    console.log(images[0].url);
    return (
      <Carousel className="carousels" showThumbs={false} showArrows={true} infiniteLoop={true} showStatus={false}>
        { images && images.map(image => (
          <div className="carousel-image">
            <img alt={image.alt_text} src={image.url} />
          </div>
        )

        )}

      </Carousel>
    )
  }
}
