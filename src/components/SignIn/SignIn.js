import React, { Component } from 'react';
import './SignIn.css';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state= {
      signInEmail: '',
      SignInPassword: ''
    }
  }
  onEmailChange(event) {
    this.setState({signInEmail: event.target.value})
  }
  onPasswordChange(event) {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('https://desolate-ridge-72290.herokuapp.com/signin', {
      method:'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
    })
  }
  render() {
    return (
      <article className="signin-form">
        <main className="">
          <div className="signin-cont">
            <fieldset id="sign-in" className="">
              <legend className="signin-title">Sign In</legend>
              <div className="sign-email">
                <label className="sign-left" htmlFor="email-address">Email</label>
                <input className="sign-right" 
                       onChange={(e) => this.onEmailChange(e)}
                       type="email" 
                       name="email-address"  
                       id="email-address" />
              </div>
              <div className="sign-pass">
                <label className="sign-left" htmlFor="password">Password</label>
                <input className="sign-right" 
                       onChange={(e) => this.onPasswordChange(e)}
                       type="password" 
                       name="password"  
                       id="password" />
              </div>
            </fieldset>
            <div className="">
              <input 
                onClick={this.onSubmitSignIn}
                className="" 
                type="submit" 
                value="Sign in" />
            </div>
          </div>
        </main>
      </article>
    )
  }
} 