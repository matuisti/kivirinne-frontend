import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AuthService from '../Authentication/AuthService';
import classNames from 'classnames';
import 'font-awesome/css/font-awesome.min.css';
import './Navbar.css';

class Navbar extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
    this.state = {
      dropDown: false
    }
  }

  handleLogout() {
    this.Auth.logOut();
    this.props.history.push('/login');
  }

  dropDown() {
    this.setState({
      dropDown: !this.state.dropDown
    })
  }

  render(){
    var arrowClasses = classNames({
      'fa fa-caret-down': true }, {
      'rotate': this.state.dropDown
    });
    var dropdownClasses = classNames(
      this.state.dropDown ? 'dropdown-content-visible':'dropdown-content-hidden',{
      'dropdown-content' : true
      }
    );

    return (
      <div className="topnav-body">
      <div className="topnav">
        <a className="topnav-title "><i className="fa fa-fort-awesome"></i>Kivirinne</a>
        <div className="dropdown">
          <button className="dropbtn" onClick={this.dropDown.bind(this)}>Asetukset
            <i className={arrowClasses}></i>
          </button>
          </div>
          <div className={dropdownClasses}>
            <a>Profiili</a>
            <a onClick={this.handleLogout.bind(this)}>Kirjaudu ulos</a>
          </div>
          <button className="dropbtn-icon" onClick={this.dropDown.bind(this)}>
            <i className="fa fa-bars"></i>
          </button>
      </div>
    </div>
    );
  }
}

export default withRouter(Navbar);

//{this.state.dropDown ? 'toggleOn' :  'toggleOff' + " " + "dropdown-content"}
