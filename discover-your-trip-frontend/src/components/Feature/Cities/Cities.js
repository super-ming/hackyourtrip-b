import React, { Component } from 'react';
import CityCard from './CityCard/CityCard';
import MerchantCard from './MerchantCard/MerchantCard';
import './Cities.css';
export default class Cities extends Component {
  constructor() {
    super()
    this.state = {
      city: 'New York',
      cityInfo: null,
      cityMerchants: null,
      filteredCityInfo: null,
      refineBy: 'hotels'
    }
  }

  handleCityInput(e) {
    this.setState({
      city: e.target.value
    })
  }

  handlemcc(e) {
    this.setState({
      refineBy: e.target.value
    })
  }

  handleRefineData() {
    this.getCityData();
  }

  componentDidMount() {
    this.getCityData();
    const corsProxy = "https://cors-anywhere.herokuapp.com/";
    fetch(corsProxy + 'https://apis.discover.com/cityguides/v2/cities', {
      headers: {
        'Authorization': 'Bearer ' + this.props.code,
        'x-dfs-api-plan': 'CITYGUIDES_SANDBOX',
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => this.setState({ cityInfo: data.result }))
  }

  getCityData() {
    const corsProxy = "https://cors-anywhere.herokuapp.com/";
    fetch(corsProxy + `https://apis.discover.com/cityguides/v2/merchants?card_network=DCI&merchant_city=${this.state.city}`, {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + this.props.code,
        'x-dfs-api-plan': 'CITYGUIDES_SANDBOX',
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => this.setState({ cityMerchants: data.result }))
  }

  render() {
    let filteredCityInfo = [], cityCard, refinedMerchants, merchants;
    if (this.state.cityInfo && this.state.cityInfo !== undefined) {
      filteredCityInfo = this.state.cityInfo.filter(city => {
      return city._id.city === this.state.city;
      })
      cityCard = <CityCard cityInfo={filteredCityInfo[0]._id} merchants={this.state.cityMerchants} />
      if (this.state.cityMerchants) {
        refinedMerchants = this.state.cityMerchants.filter(merchant => {
          return merchant.mcc === this.state.refineBy;
        })
      }
      merchants = refinedMerchants.map((merchant, i) => {
        return <MerchantCard id={i} merchant={merchant} />
      })
      console.log('merchants', refinedMerchants);
    }

    return (
      <div>
        <div className="cityChoose">
          <span className='cities-sel-label'>City:</span>
          <select onChange={(e) => this.handleCityInput(e)}>
            <option value="New York">New York</option>
            <option value="Bangkok">Bangkok</option>
            <option value="Rome">Rome</option>
            <option value="Berlin">Berlin</option>
            <option value="Dubai">Dubai</option>
            <option value="London">London</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Miami">Miami</option>
            <option value="Paris">Paris</option>
            <option value="Singapore">Singapore</option>
            <option value="Toronto">Toronto</option>
          </select>
          <span className='cities-sel-label'>Refine By:</span>
          <select onChange={(e) => this.handlemcc(e)}>
            <option value="hotels">Hotels</option>
            <option value="retail">Retail</option>
            <option value="restaurants">Restaurants</option>
            <option value="Attractions">Attractions</option>
          </select>
        </div>
        <button onClick={() => {this.handleRefineData()}}>Update</button>
      {cityCard}
      <div id='merch-container'>
        {merchants}
      </div>
      </div>
    )
  }
}
