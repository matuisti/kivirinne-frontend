import React, { Component } from 'react';
import LineChart from '../../components/charts/LineChart';
import './Dashboard.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const DashboardWeatherComponent = ({loaded, chartName, title, chartData, unit, icon}) => {
  return (
    <div className="chart-column full">
      <div className="weather-chart-text">
      {
        loaded &&
        <div>
          <p>{11}</p>
          <p>{unit}</p>
          <p>{title}</p>
          <img src="http://openweathermap.org/img/w/02d.png"/>
        </div>
      }
      </div>
      <div className="chart">
      {
      !loaded
        ? <div className="Graph-loader"/>
        :
        <LineChart
          container={chartName}
          type="Chart"
          title={''}
          base="weather"
          yAxisMin={chartData.tempMin}
          yAxisMax={chartData.tempMax}
          data={[chartData.chart]}
        />
      }
      </div>
    </div>
  )
};

export default DashboardWeatherComponent;
