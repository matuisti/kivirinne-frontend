import React, { Component } from 'react';
import LineChart from '../../components/charts/LineChart';
import './Dashboard.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const DashboardChartComponent = ({loaded, chartName, title, chartData, unit, icon}) => {
  return (
    <div className="plain-chart-column plain">
      <div className="chart-text">
        <p>{chartData[chartData.length - 1]}</p>
        <p>{unit}</p>
        <p>{title}</p>
        <p><FontAwesomeIcon icon={icon}/></p>
      </div>
      <div className="chart">
        {
          !loaded
            ? <div className="Graph-loader"/>
          : <LineChart container={chartName} type="Chart" title={title} base="plain" data={chartData} />
        }
      </div>
    </div>
  )
};

export default DashboardChartComponent;
