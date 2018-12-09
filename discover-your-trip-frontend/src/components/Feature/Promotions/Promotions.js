import React, { Component } from 'react';
import './Promotions.css';
import Details from '../Details/details';
import ImageCarousel from '../../ImageCarousel/ImageCarousel';

export default class Promotions extends Component {
  constructor() {
    super()
    this.state = {
      city: 'chicago',
      offers: '',
    }
  }

  componentDidMount() {
    const corsProxy = "https://cors-anywhere.herokuapp.com/";
    fetch(corsProxy + `https://apis.discover.com/dci-offers/v2/offers?destination=${this.state.city}&lang=en&sortdir=asc`, {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + this.props.code,
        'x-dfs-api-plan': 'DCIOFFERS_SANDBOX',
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(data => this.setState({ offers: data.result }))
  }

  handleCityInput(e) {
    this.setState({
      country: e.target.value
    })
  }
  render() {
    console.log(this.state.offers)
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
