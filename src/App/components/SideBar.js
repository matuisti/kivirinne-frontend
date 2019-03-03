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
    this.handleSideBarHide = this.handleSideBarHide.bind(this);
    this.state = {
      visible: true,
    }
  }

  handleSideBarHide() {
    this.setState({
      visible: !this.state.visible
    });
  }

  componentDidMount() {
    //setInterval(() => this.handleSideBarHide(), 5000);
  }

  render() {
    return (
      <div>
      {
        this.state.visible &&
      <div className="sidebar-body">
        <a className="sidebar-title"><i className='fa fa-fort-awesome'></i>Kivirinne</a>
        <NavLink to="/dashboard" style={style.navLink} className='sidebar-btn' activeClassName="sidebar-btn-active"><i className="fa fa-tachometer"></i>Perustiedot</NavLink>
        <NavLink to="/home" style={style.navLink} className='sidebar-btn' activeClassName="sidebar-btn-active"><i className="fa fa-thermometer"></i>Sisäilma</NavLink>
        <NavLink to="/power" style={style.navLink} className='sidebar-btn' activeClassName="sidebar-btn-active"><i className="fa fa-bolt"></i>Sähkö</NavLink>
        <NavLink to="/camera" style={style.navLink} className='sidebar-btn' activeClassName="sidebar-btn-active"><i className="fa fa-camera"></i>Kamerat</NavLink>
        <NavLink to="/sensors" style={style.navLink} className='sidebar-btn' activeClassName="sidebar-btn-active"><i className="fa fa-battery-half"></i>Mittarit</NavLink>
        <button onClick={this.handleSideBarHide}><i className="fa fa-bars"></i></button>
      </div>
    }
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
