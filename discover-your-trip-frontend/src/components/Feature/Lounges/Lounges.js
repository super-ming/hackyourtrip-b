import React, { Component } from 'react';
import './Lounges.css';
import Details from '../Details/details';
import ImageCarousel from '../../ImageCarousel/ImageCarousel';
import Feed from '../Feed/feed';

export default class Lounges extends Component {
  constructor() {
    super();
    this.state = {
      city: ''
    }
  }

  handleCityInput(e) {
    this.setState({
      country: e.target.value
    })
  }

  render() {
    let lounges = ['London', 'Bangkok', 'Miami', 'Singapore', 'New York']
    return (
      <div id="lounges">
        {this.state.loungeName}
        <div className="cityChoose">
          Find Lounges:
          <input onChange={(e) => this.handleCityInput(e)} placeholder={"Enter a city..."}></input>
        </div>
        <div className="window d-flex">
          <ImageCarousel className="img-carousel"/>
          <Details name={this.state.route}/>
          <Feed></Feed>
          </div>
        </div>
    )
  }
}
