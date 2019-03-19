import React, { Component } from 'react';
import AuthService from '../../Authentication/AuthService';
import './Login.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Auth = new AuthService();
    this.state = {
      errorVisible: false,
      errorMessage: null,
      data: []
    }
  }

  handleInputChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleErrorMessage(message) {
    this.setState({
      errorVisible: true,
      errorMessage: message
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.email && this.state.password) {
      this.Auth.login(this.state.email, this.state.password).then(response => {
        if (response.data.error === 0) {
          this.props.history.push('/dashboard');
        } else if (response.data.error === 1) {
          this.handleErrorMessage('Sähköposti ja salasana ei täsmää');
        }
      })
      .catch(error => {
        this.handleErrorMessage('Jokin taisi mennä vikaan, yritä uudestaan päivittämällä sivu');
      })
    } else {
      this.handleErrorMessage('Täytä molemmat kentät');
    }
  }

  render() {
    return (
      <div className="login-body">
        <div className="form-header"></div>
          <div className="form-body">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="fname">Sähköposti</label>
              <input
                className="form-input"
                type="text"
                name="email"
                placeholder="Sähköposti"
                onChange={this.handleInputChange}
                />
              <label htmlFor="lname">Salasana</label>
              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="Salasana"
                onChange={this.handleInputChange}/>
              { this.state.errorVisible &&
                <div className="login-error-label">
                  {this.state.errorMessage}
                </div>
              }
              <input
                className="form-btn"
                type="submit"
                value="Kirjaudu"
                />
            </form>
        </div>

      </div>
    );
  }
}

export default Login;
