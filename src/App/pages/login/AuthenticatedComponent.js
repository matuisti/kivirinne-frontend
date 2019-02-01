import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AuthService from '../../Authentication/AuthService';

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
      console.log("error");
    }

    this.Auth.getUser(jwtToken)
      .then(response => {
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

  render() {
    if (this.state.user == null) {
      return (
        <div className="App">
          <div className="App-loader"/>
        </div>
      );
    }
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
export default withRouter(AuthenticatedComponent);
