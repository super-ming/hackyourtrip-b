import React, { Component } from 'react';
import './FocusedCard.css';

export default class FocusedCard extends Component {

  handleAnchorWithin(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }

  render() {
    let rating = [], merchLogo, promoImg;
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
    if (this.props.offer.images) {
      promoImg = <img src={this.props.offer.images} alt="promo" />
    }
    return (
      <div className='promo-focus' onClick={() => this.props.revertFocus()}>
        <div className='promo-focus-title'>
          {merchLogo}
          <p className="promo-focus-name">{this.props.offer.merchant_name}</p>
          <p className="promo-focus-number">{this.props.offer.merchant_phone.replace(' ', '-')}</p>
        </div>
        <div id="promo-focus-info">
          <p>{this.props.offer.name}</p>
          {promoImg}
        </div>
        <p>{rating}</p>
        <a class="promo-anchor" onClick={this.handleAnchorWithin} href={this.props.offer.merchant_website}>Visit Merchant Website</a>
      </div>
    )
  }
}