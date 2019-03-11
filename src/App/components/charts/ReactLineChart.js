import React, { Component } from 'react';
import { lineChartOptions, plainLineChartOptions, highchartsLaquageOptions } from './chartOptions/ChartOptions.js';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import './ChartStyles.css';

class ReactLineChart extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    console.log(this.props.options);
  }


  render() {
    return (
      <div className="line-chart-body">
        <HighchartsReact highcharts={Highcharts} options={this.props.options} />
      </div>
    );
  }
}

export default ReactLineChart;
