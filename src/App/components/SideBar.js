import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AuthService from '../Authentication/AuthService';
import QueryFunctions from '../components/QueryFunctions';
import classNames from 'classnames';
import axios from 'axios';
import './SideBar.css';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    this.Query = new QueryFunctions();
    this.state = {
    }
  }

  render() {
    return (
      <div className="sidebar">
        <NavLink to="/dashboard" style={style.navLink} className="sidebar-btn" activeClassName="sidebar-btn-active"><i className="fa fa-tachometer"></i>Perustiedot</NavLink>
        <NavLink to="/home" style={style.navLink} className="sidebar-btn" activeClassName="sidebar-btn-active"><i className="fa fa-thermometer"></i>Sisäilma</NavLink>
        <NavLink to="/power" style={style.navLink} className="sidebar-btn" activeClassName="sidebar-btn-active"><i className="fa fa-bolt"></i>Sähkö</NavLink>
        <NavLink to="/camera" style={style.navLink} className="sidebar-btn" activeClassName="sidebar-btn-active"><i className="fa fa-camera"></i>Kamerat</NavLink>
        <NavLink to="/sensors" style={style.navLink} className="sidebar-btn" activeClassName="sidebar-btn-active"><i className="fa fa-battery-half"></i>Mittarit</NavLink>
      </div>
    );
  }
}

const style = {
  navLink: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '17px',
  }
};

export default SideBar;
//"fa fa-fort-awesome"
// sidebar-btn-active
