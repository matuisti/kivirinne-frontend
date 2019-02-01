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
      data: []
    }
  }

  handleInputChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.email && this.state.password) {
      this.Auth.login(this.state.email, this.state.password)
        .then(response => {
          this.props.history.push('/dashboard');
        })
        .catch(err => {
          alert(err);
        })
    } else {
      alert("Täytä molemmat kentät");
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
