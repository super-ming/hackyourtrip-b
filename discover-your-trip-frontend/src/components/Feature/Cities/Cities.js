import React, { Component } from 'react';
import './Cities.css';
import Details from '../Details/details';
import ImageCarousel from '../../ImageCarousel/ImageCarousel';
export default class Cities extends Component {
  constructor() {
    super()
    this.state = {
      city: '',
    }
  }

  handleCityInput(e) {
    this.setState({
      country: e.target.value
    })
  }

  render() {
    return (
      <div>
        Information from api about cities in {this.props.country}
        <div className="cityChoose">
          City:
          <select onChange={(e) => this.handleCityInput(e)}>
            <option value="New York">New York</option>
            <option value="Bangkok">Bangkok</option>
            <option value="Rome">Rome</option>
          </select>
        </div>
        <div className="window d-flex">
          <ImageCarousel />
          <Details name={this.state.route}/>
        </div>
      </div>
    )
  }
}
