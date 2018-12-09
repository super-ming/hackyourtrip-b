import React, { Component } from 'react';
import './MerchantCard.css';

export default class MerchantCard extends Component {
  render() {
    const { name, phone, address1, website, zip_code } = this.props.merchant;
    return (
      <div className='merchant-card'>
        <p className='merch-name'>{name}</p>
        <p className='merch-phone'>{phone}</p>
        <p className='merch-address'>{address1}, {zip_code}</p>
        <a className='merch-website merch-anchor' href={website}>Visit Site</a>
      </div>
    )
  }
}