import React, { Component } from 'react';
import './PromoCard.css';

export default class PromoCard extends Component {
  render() {
    let rating = [], merchLogo;
    if (this.props.offer.rating_average) {
      for (let i = 0; i < 5; i++) {
        if (i < this.props.offer.rating_average) {
          rating.push('★')
        } else rating.push('☆')
      }
    }

    if (this.props.offer.merchant_logo) {
      merchLogo = <img src={this.props.offer.merchant_logo} alt="merchant-logo" />

    }
    return (
      <div className='promo-card' onClick={(offer) => this.props.sendFocus(this.props.offer)}>
        <div className='promo-card-title'>
          {merchLogo}
          <p className="promo-merch-name">{this.props.offer.merchant_name}</p>
        </div>
        <p>{this.props.offer.merchant_phone.replace(' ', '-')}</p>
        <p>{this.props.offer.name}</p>

        <p>{rating}</p>
      </div>
    )
  }
}