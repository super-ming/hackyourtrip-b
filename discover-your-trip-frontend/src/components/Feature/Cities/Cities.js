import React, { Component } from 'react';
import './Cities.css';
export default class Cities extends Component {
  constructor() {
    super()
    this.state = {
      city: 'chicago',
      cityInfo: '',
      cityMerchants: '',
    }
  }

  handleCityInput(e) {
    this.setState({
      country: e.target.value
    })
  }

  componentDidMount() {
    const corsProxy = "https://cors-anywhere.herokuapp.com/";
    fetch(corsProxy + `https://apis.discover.com/cityguides/v2/merchants?card_network=DCI&merchant_city=Toronto`, {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + this.props.code,
        'x-dfs-api-plan': 'CITYGUIDES_SANDBOX',
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => this.setState({ cityMerchants: data }))
    // fetch(corsProxy + `https://apis.discover.com/cityguides/v2/cities`, {
    //   method: "GET",
    //   headers: {
    //     'Authorization': 'Bearer 233d2c0f-5a72-4b25-b476-2b32205c0efd',
    //     'x-dfs-api-plan': 'CITYGUIDES_SANDBOX',
    //     'Content-Type': 'application/json'
    //   }
    // })
    //   .then(resp => resp.json())
    //   .then(data => this.setState({ cityInfo: data }))
  }

  render() {
    console.log(this.state.citiesInfo, this.state.cityMerchants)
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
      </div>
    )
  }
}