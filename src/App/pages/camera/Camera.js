import React, { Component } from 'react'; 
import AuthService from '../../Authentication/AuthService';
import QueryFunctions from '../../components/QueryFunctions';
import './Camera.css';

class Camera extends Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    this.Query = new QueryFunctions();
    this.state = {
    }
  }

  componentDidMount() {
    var token = this.Auth.getToken();
  }

  render() {
    return (
      <div className="camera-body">
        <div className="stream-container">
          <img src="http://192.168.0.117:8082/?action=stream"/>
        </div>
      </div>
    );
  }
}

export default Camera;
