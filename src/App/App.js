import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SideBar from './components/sideBar/SideBar';
import Navbar from './components/navBar/Navbar';
import AuthenticatedComponent from './pages/login/AuthenticatedComponent';
import IndoorAir from './pages/indoorAir/IndoorAir';
import Login from './pages/login/Login';
import Camera from './pages/camera/Camera';
import Sensors from './pages/sensorStatus/Sensors';
import Dashboard from './pages/dashboard/Dashboard';
import Power from './pages/electricPower/Power';
import classNames from 'classnames';
import './App.css';

import ReactLineChart from './components/charts/ReactLineChart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
    this.sideBarVisibleHandle = this.sideBarVisibleHandle.bind(this);
  }

  sideBarVisibleHandle(e) {
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    let componentBodyClasses = classNames(this.state.visible ? 'component-body-sidebar':'component-body-sidebar-hidden', 'component-body');
    return (
      <div className="app-body">
        <Switch>
          <Route exact path='/login' component={Login}/>
          <AuthenticatedComponent>
            <SideBar visible={this.state.visible}/>
            <Navbar handleVisible={this.sideBarVisibleHandle}/>
            <div className={componentBodyClasses}>
              <Route exact path='/home' component={IndoorAir}/>
              <Route exact path='/camera' component={Camera}/>
              <Route exact path='/sensors' component={Sensors}/>
              <Route exact path='/dashboard' component={Dashboard}/>
              <Route exact path='/power' component={Power}/>
            </div>
          </AuthenticatedComponent>
        </Switch>
      </div>
    );
  }
}

export default App;
