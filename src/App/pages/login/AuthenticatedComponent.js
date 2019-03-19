import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AuthService from '../../Authentication/AuthService';
import './AuthenticatedComponent.css';

class AuthenticatedComponent extends Component {
  constructor(props){
    super(props);
    this.Auth = new AuthService();
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    const jwtToken = this.Auth.getToken();
    if (!jwtToken) {
      this.props.history.push('/login');
      console.warn("Jwt token is invalid");
    } else {
      this.Auth.getUser(jwtToken).then(response => {
        this.setState({
          user: response.data
        })
      })
      .catch(error => {
        this.state = null;
        this.Auth.removeToken();
        this.props.history.push('/login');
      });
    }
  }

  componentDidUpdate(prevProps){
    const jwtToken = this.Auth.getToken();
    if (!jwtToken) {
      this.props.history.push('/login');
      console.warn("Jwt token is invalid");
    }
  }

  render() {
    if (this.state.user === null) {
      return (
        <div className="app-body">
          <div className="App-loader"/>
        </div>
      );
    }
    return this.props.children;
  }
}

export default withRouter(AuthenticatedComponent);
