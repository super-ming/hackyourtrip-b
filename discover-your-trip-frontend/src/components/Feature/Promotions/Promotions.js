import React, { Component } from 'react';
import PromoCard from './PromoCard/PromoCard';
import FocusedCard from './FocusedCard/FocusedCard';
import './Promotions.css';

export default class Promotions extends Component {
  constructor() {
    super()
    this.state = {
      city: 'rome',
      offers: [],
      focusedCard: '',
      route: 'normal'
    }
    this.handleFocusUpdate = this.handleFocusUpdate.bind(this);
  }

  componentDidMount() {
    this.handlePromotions();
  }

  handleFocusUpdate(data) {
    if (!this.state.focusedCard) {
      this.setState({ focusedCard: data, route: 'focused' })
    } else {
      this.setState({ focusedCard: '', route: 'normal' })
    }
  }

  handlePromotions() {
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
      city: e.target.value
    })
  }

  handleRefine() {
    this.handlePromotions();
  }

  render() {
    let offers = [], availableOffers;
    console.log('focus', this.state.focusedCard)
    offers = this.state.offers;

    if (offers[0] && offers !== undefined && offers !== null) {
      // console.log(offers[0].destinations[1].name.toLowerCase(), this.state.city)
      offers = this.state.offers.filter(offer => {
        return offers[0].destinations[1].name.toLowerCase() === this.state.city
      })
      if (this.state.route === 'normal') {
        availableOffers = offers.map(offer => <PromoCard sendFocus={this.handleFocusUpdate} key={offer.id} offer={offer} />)
      } else {
        availableOffers = <FocusedCard revertFocus={this.handleFocusUpdate} offer={this.state.focusedCard}/>
      }

      console.log(offers)
    }

    return (
      <div id="promotions">
        <div className="cityChoose">
          City:
          <input onChange={(e) => this.handleCityInput(e)}></input>
        </div>
        <button onClick={() => this.handleRefine()}>Update</button>
        <div id="promo-cards">
          {availableOffers}
        </div>
      </div>
    )
  }
}
