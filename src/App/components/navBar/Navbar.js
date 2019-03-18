import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import AuthService from '../../Authentication/AuthService';
import classNames from 'classnames';
import 'font-awesome/css/font-awesome.min.css';
import './Navbar.css';

class Navbar extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
    this.state = {
      dropDown: false,
      sideBarVisible: false
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

    return (
      <div className="topnav-body">
      <div className="topnav">
        <a className="topnav-title">
          <i className="fa fa-fort-awesome"></i>Kivirinne
        </a>
      {
        // <button className="topnav-sidebar-btn" onClick={(e) => this.props.handleVisible(e)}>
        //   <i className="fa fa-bars"></i>
        // </button>
      }
        <div className="dropdown">
          <button className="dropbtn" onClick={this.dropDown.bind(this)}>
            Valikko
            <i className={arrowClasses}></i>
          </button>
          </div>
          <div className={classNames(this.state.dropDown ? 'dropdown-content-visible':'dropdown-content-hidden', 'dropdown-content')}>
            <div className="dropdown-router-buttons">
              <NavLink to="/dashboard" style={style.navLink} className='sidebar-btn' activeClassName="sidebar-btn-active"><i className="fa fa-tachometer"></i>Perustiedot</NavLink>
              <NavLink to="/home" style={style.navLink} className='sidebar-btn' activeClassName="sidebar-btn-active"><i className="fa fa-thermometer"></i>Sisäilma</NavLink>
              <NavLink to="/power" style={style.navLink} className='sidebar-btn' activeClassName="sidebar-btn-active"><i className="fa fa-bolt"></i>Sähkö</NavLink>
              <NavLink to="/camera" style={style.navLink} className='sidebar-btn' activeClassName="sidebar-btn-active"><i className="fa fa-camera"></i>Kamerat</NavLink>
              <NavLink to="/sensors" style={style.navLink} className='sidebar-btn' activeClassName="sidebar-btn-active"><i className="fa fa-battery-half"></i>Mittarit</NavLink>
            </div>
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

const style = {
  navLink: {
    textDecoration: 'none',
    color: 'grey',
    fontSize: '17px',
  }
};

export default withRouter(Navbar);
