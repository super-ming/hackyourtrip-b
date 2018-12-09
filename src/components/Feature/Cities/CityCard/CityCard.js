import React, { Component } from 'react';
import './CityCard.css';

export default class CityCard extends Component {
  render() {
    let cityDescription;
    if (this.props.cityInfo.city) {
      cityDescription = (     
      <div id='city-info-container'>
        <p id="city-card-name">{this.props.cityInfo.city}</p>
        <p id="city-card-desc">{this.props.cityInfo.description}</p>
      </div>
      )
    }
    return (
      <div>
      {cityDescription}
      </div>
    )
  }
}