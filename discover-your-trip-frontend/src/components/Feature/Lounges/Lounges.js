import React, { Component } from 'react';
<<<<<<< HEAD
import './Lounges.css';
||||||| initial frontend
=======
import './Lounges.css';
import Details from '../Details/details';
import ImageCarousel from '../../ImageCarousel/ImageCarousel';
>>>>>>> front

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
<<<<<<< HEAD
      <div id="lounges">
        {this.state.loungeName}
        <div className="cityChoose">
          City: 
          <input onChange={(e) => this.handleCityInput(e)}></input>
        </div>
||||||| initial frontend
      <div>
        Information from api about lounges
=======
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
>>>>>>> front
      </div>

    )
  }
}
