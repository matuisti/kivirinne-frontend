import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import AuthService from '../../Authentication/AuthService';
import QueryFunctions from '../../components/QueryFunctions';
import './Dashboard.css';
import DashboardChartComponent from './DashboardChartComponent';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    this.Query = new QueryFunctions();
    this.state = {
      weekData1: [7.0, 6.9, 9.5, 18.5, 15.4, 21.5, 25.2, 16.5, 23.3, 18.3, 13.9, 9.6],
      weekData2: [0.0, 7.9, 5.5, 10.5, 18.4, 20.5, 15.2, 26.5, 15.3, 18.3, 10.9, 20.6],
      weekData3: [12.0, 13.9, 16.5, 7.5, 13.4, 25.5, 15.2, 20.5, 13.3, 28.3, 5.9, 4.6],
      lineLoad: false,
    }
  }

  componentDidMount() {
    var token = this.Auth.getToken();
    this.Query.getCurrentSensordata(token).then(response => {
      console.log(response.data);
      this.setState({
        lineLoad: true,
      })
    }).catch(error => {
      console.error(error);
    })

    this.Query.getWeatherForecast().then(response =>{
      console.log(response);
    })
  }

  render() {
    return (
      <div className="body">
        <Navbar/>
          <div className="plain-chart-row1">
            <DashboardChartComponent loaded={this.state.lineLoad} chartName={'tempChart1'} title={'Olohuone'} chartData={this.state.weekData1} />
            <DashboardChartComponent loaded={this.state.lineLoad} chartName={'tempChart2'} title={'Eteinen'} chartData={this.state.weekData2} />
            <DashboardChartComponent loaded={this.state.lineLoad} chartName={'tempChart3'} title={'Makuuhuone'} chartData={this.state.weekData3} />
          </div>
          <div className="plain-chart-row1">
            <DashboardChartComponent loaded={this.state.lineLoad} chartName={'humidityChart1'} title={'Olohuone'} chartData={this.state.weekData1} />
            <DashboardChartComponent loaded={this.state.lineLoad} chartName={'humidityChart2'} title={'Eteinen'} chartData={this.state.weekData2} />
            <DashboardChartComponent loaded={this.state.lineLoad} chartName={'humidityChart3'} title={'Makuuhuone'} chartData={this.state.weekData3} />
          </div>
      </div>
    );
  }
}

export default Dashboard;
