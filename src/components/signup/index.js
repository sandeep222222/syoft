import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.css';
import Welcome from '../welcome';

class SignUp extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    phone: '',
    showSubmitError: false,
    errorMsg: '',
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangePhone = (event) => {
    this.setState({ phone: event.target.value });
  };

  onSubmitSuccess = () => {
    const { history } = this.props;
    history.replace('/');
  };

  onSubmitFailure = (errorMsg) => {
    this.setState({ showSubmitError: true, errorMsg });
  };

  submitForm = async (event) => {
    event.preventDefault();
    const { username, email, password, phone } = this.state;
    const userDetails = {
      user_firstname: username,
      user_email: email,
      user_password: password,
      user_phone: phone,
      user_lastname: 'ni',
      user_city: 'Hyderabad',
      user_zipcode: '500072',
    };

    const url = 'https://syoft.dev/Api/user_registeration/api/user_registeration';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data)
      if (data.status) {
        this.onSubmitSuccess();
     
        
      } else {
        this.onSubmitFailure(data.msg);
      }
    } catch (error) {
      this.onSubmitFailure('Something went wrong, please try again.');
    }
  };

  renderPasswordField = () => {
    const { password } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="password">
          Password *
        </label>
        <input
          type="password"
          id="password"
          className="username-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder=""
          required
        />
      </>
    );
  };

  renderUsernameField = () => {
    const { username } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="username">
          Full name *
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder=""
          required
        />
      </>
    );
  };

  renderEmailField = () => {
    const { email } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="email">
          Email address *
        </label>
        <input
          type="email"
          id="email"
          className="username-input-field"
          value={email}
          onChange={this.onChangeEmail}
          placeholder=""
          required
        />
      </>
    );
  };

  renderPhoneField = () => {
    const { phone } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="phone">
          Phone *
        </label>
        <input
          type="number"
          id="phone"
          className="username-input-field"
          value={phone}
          onChange={this.onChangePhone}
          placeholder=""
          required
        />
      </>
    );
  };

  render() {
    const { showSubmitError, errorMsg } = this.state;

    return (
      <div className="app-container-signup">
        <Welcome />
        <div className="form-side">
          <form className="form-container" onSubmit={this.submitForm}>
            <img
              src="https://res.cloudinary.com/dwwunc51b/image/upload/v1721023220/fuse_ylhmmd.svg"
              alt="logo"
              className="logo"
            />
            <h1 className="signup">Sign up</h1>
            <p className="sub-signup">
              Already have an account?{' '}
              <span className="span" onClick={() => this.props.history.push('/')}>
                Sign in
              </span>
            </p>
            {this.renderUsernameField()}
            {this.renderEmailField()}
            {this.renderPasswordField()}
            {this.renderPhoneField()}
            <div className="privacy-policy">
              <input type="checkbox" className="check" required />
              <p className="agree">
                I agree to the{' '}
                <span className="span-text">Terms of Service</span> and{' '}
                <span className="span-text">Privacy Policy</span>
              </p>
            </div>
            {showSubmitError && <p className="error-message">*{errorMsg}</p>}
            <button type="submit" className="btn">
              Create your free account
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);