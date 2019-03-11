import React, { Component } from 'react';
import AuthService from '../../Authentication/AuthService';
import QueryFunctions from '../../components/QueryFunctions';
import './Dashboard.css';
import DashboardChartComponent from './DashboardChartComponent';
import DashboardWeatherComponent from './DashboardWeatherComponent';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    this.Api = new QueryFunctions();
    this.state = {
      weekData1: [7.0, 6.9, 9.5, 18.5, 15.4, 21.5, 25.2, 16.5, 23.3, 18.3, 13.9, 9.6],
      weekData2: [0.0, 7.9, 5.5, 10.5, 18.4, 20.5, 15.2, 26.5, 15.3, 18.3, 10.9, 20.6],
      weekData3: [12.0, 13.9, 16.5, 7.5, 13.4, 25.5, 15.2, 20.5, 13.3, 28.3, 5.9, 4.6],
      lineLoad: false,
      weatherData: [],
      weatherLoad: false,
      test: [
      {
          data: [
              { y: 29.9 },
              { y: 71.5 },
              { y: 106.4 },
              { y: 129.2 },
              { y: 144.0 },
              { y: 176.0 },
              { y: 135.6 },
              { y: 148.5 },
              { y: 216.4 },
              { y: 194.1 },
              { y: 95.6 },
              { y: 54.4 }
          ]
      },
      {
          data: [
              { y: 220, marker: { symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)' }},
              { y: 220, marker: { symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)' }},
              { y: 220, marker: { symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)' }},
              { y: 220, marker: { symbol: 'url(http://www.highcharts.com/demo/gfx/snow.png)' }},
              { y: 220, marker: { symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)' }},
              { y: 220, marker: { symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)' }},
              { y: 220, marker: { symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)' }},
              { y: 220, marker: { symbol: 'url(http://www.highcharts.com/demo/gfx/snow.png)' }},
              { y: 220, marker: { symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)' }},
              { y: 220, marker: { symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)' }},
              { y: 220, marker: { symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)' }},
              { y: 220, marker: { symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)' }}
          ],
          type: 'scatter'
      }
    ]
    }
  }

  componentDidMount() {
    var token = this.Auth.getToken();
    this.Api.getCurrentSensordata(token).then(response => {
      this.setState({
        lineLoad: true,
      })
    }).catch(error => {
      console.error(error);
    })

    this.Api.getWeatherForecast().then(response => {
      console.log(response.data);
      const url = 'http://openweathermap.org/img/w/';
      const timeTempArray = response.data.list.map((x) => [((x.dt + 7200) * 1000), x.main.temp]);
      const timeTempArray1 = response.data.list.map((x) => ({y: x.dt_txt, x: x.main.temp}));
      const iconArray = response.data.list.map((x) => [x.dt, url + x.weather[0].icon + '.png']);
      const mm = response.data.list.map((x) => ({ y: 8, marker: { symbol: 'url(' + url + x.weather[0].icon + '.png'+')' }}));
      const icon = url + response.data.list[0].weather[0].icon + '.png';
      console.log(icon);
      const weather = {
        chart: {
          data: timeTempArray,
          name: 'Lämpötila Antskog'
        },
        tempMax: Math.max(...response.data.list.map((x) => x.main.temp)),
        tempMin: Math.min(...response.data.list.map((x) => x.main.temp)),
        icon: icon
      };

      var weatherData = [
        {
        data: timeTempArray
      },
      {
        data:
          mm
        ,
        type: 'scatter'
      }
    ]

      this.setState({
        weatherData: weather,
        weatherLoad: true
      })
    })
  }

  render() {
    return (
      <div className="dashboard-body">
        <div className="weather-chart-row">
          <DashboardWeatherComponent loaded={this.state.weatherLoad} chartName={'weatherChart'} title={'Sääennuste Ansku 5pv'} chartData={this.state.weatherData} unit={'°C'} icon={'temperature-high'}/>
        </div>
        <div className="plain-chart-row1">
          <DashboardChartComponent loaded={this.state.lineLoad} chartName={'tempChart1'} title={'Olohuone lämpotila'} chartData={this.state.weekData1} unit={'°C'} icon={'temperature-high'}/>
          <DashboardChartComponent loaded={this.state.lineLoad} chartName={'tempChart2'} title={'Eteinen lämpotila'} chartData={this.state.weekData2} unit={'°C'} icon={'temperature-high'}/>
          <DashboardChartComponent loaded={this.state.lineLoad} chartName={'tempChart3'} title={'Makuuhuone lämpotila'} chartData={this.state.weekData3} unit={'°C'} icon={'temperature-low'}/>
        </div>
        <div className="plain-chart-row1">
          <DashboardChartComponent loaded={this.state.lineLoad} chartName={'humidityChart1'} title={'Olohuone kosteus'} chartData={this.state.weekData1} unit={'%'} icon={'tint'}/>
          <DashboardChartComponent loaded={this.state.lineLoad} chartName={'humidityChart2'} title={'Eteinen kosteus'} chartData={this.state.weekData2} unit={'%'} icon={'tint'}/>
          <DashboardChartComponent loaded={this.state.lineLoad} chartName={'humidityChart3'} title={'Makuuhuone kosteus'} chartData={this.state.weekData3} unit={'%'} icon={'tint'}/>
        </div>
        <div className="plain-chart-row1">
          <DashboardChartComponent loaded={this.state.lineLoad} chartName={'electricChart'} title={'Sähkönkulutus'} chartData={this.state.weekData1} unit={'W'} icon={'bolt'}/>
          <DashboardChartComponent loaded={this.state.lineLoad} chartName={'waterFlowChart'} title={'Tuloveden virtaus'} chartData={this.state.weekData1} unit={'l/min'} icon={'water'}/>
          <DashboardChartComponent loaded={this.state.lineLoad} chartName={'waterTempChart'} title={'Tuloveden lämpötila'} chartData={this.state.weekData1} unit={'°C'} icon={'thermometer-quarter'}/>
        </div>
      </div>
    );
  }
}

export default Dashboard;
