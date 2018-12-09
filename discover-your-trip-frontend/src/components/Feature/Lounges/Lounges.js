import React, { Component } from 'react';
import './Lounges.css';
import Details from '../Details/details';
import ImageCarousel from '../../ImageCarousel/ImageCarousel';

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
    return (
      <div id="lounges">
        {this.state.loungeName}
        <div className="cityChoose">
          City:
          <input onChange={(e) => this.handleCityInput(e)}></input>
        </div>
        <div className="window d-flex">
          <ImageCarousel />
          <Details name={this.state.route}/>
        </div>
      </div>

    )
  }
}
