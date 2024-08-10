import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.css';


import Welcome from '../welcome';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSuccess = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
 
    const { history } = this.props;
    history.replace('/dashboard');
    
  };

  onSubmitFailure = (errorMsg) => {
    this.setState({ showSubmitError: true, errorMsg });
  };

  submitForm = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const userDetails = { user_email: email, user_password: password };

    const url = 'https://syoft.dev/Api/userlogin/api/userlogin';
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
        
        this.onSubmitSuccess(data.user_data[0]);
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
        <label className="input-label-in" htmlFor="password">
          Password *
        </label>
        <input
          type="password"
          id="password"
          className="username-input-field-in"
          value={password}
          onChange={this.onChangePassword}
          required
        />
      </>
    );
  };

  renderEmailField = () => {
    const { email } = this.state;
    return (
      <>
        <label className="input-label-in" htmlFor="email">
          Email address *
        </label>
        <input
          type="email"
          id="email"
          className="username-input-field-in"
          value={email}
          onChange={this.onChangeEmail}
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
        <div className="form-side-signin">
          <form className="form-container" onSubmit={this.submitForm}>
            <img
              src="https://res.cloudinary.com/dwwunc51b/image/upload/v1721023220/fuse_ylhmmd.svg"
              alt="logo"
              className="logo"
            />
            <h1 className="signin">Sign in</h1>
            <p className="sub-signup">
              Don't have an account?{' '}
              <span className="span" onClick={() => this.props.history.push('/signup')}>
                Sign up
              </span>
            </p>
            {this.renderEmailField()}
            {this.renderPasswordField()}
            {showSubmitError && <p className="error-message">{errorMsg}</p>}
            <button type="submit" className="btn-in">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);