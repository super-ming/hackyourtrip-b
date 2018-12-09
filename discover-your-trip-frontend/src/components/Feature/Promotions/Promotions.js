import React, { Component } from 'react';
import './Promotions.css';
import Details from '../Details/details';
import ImageCarousel from '../../ImageCarousel/ImageCarousel';

export default class Promotions extends Component {
  constructor() {
    super()
    this.state = {
      city: '',

      merchantName: 'Sky Lounge at  Golden Tulip Sovereign Hotel Bangkok',
      merchant_email: "pr@gthbkk.com",
      merchant_phone: "6602-641-4777",
      merchant_website: "www.goldentulipbangkok.com",
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
        Information from api about Promotions {this.props.country}
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
