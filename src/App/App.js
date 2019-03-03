import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import AuthenticatedComponent from './pages/login/AuthenticatedComponent';
import IndoorAir from './pages/indoorAir/IndoorAir';
import Login from './pages/login/Login';
import Camera from './pages/camera/Camera';
import Sensors from './pages/sensorStatus/Sensors';
import Dashboard from './pages/dashboard/Dashboard';
import Power from './pages/electricPower/Power';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="app-body">
        <Switch>
          <Route exact path='/login' component={Login}/>
          <AuthenticatedComponent>
            <SideBar/>
            <Navbar/>
            <div className="component-body">
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
