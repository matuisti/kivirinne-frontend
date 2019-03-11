import React, { Component } from 'react';
import { lineChartOptions, plainLineChartOptions, highchartsLaquageOptions, weatherChartOptions } from './chartOptions/ChartOptions.js';
import Highcharts from 'highcharts/highstock';
import './ChartStyles.css';

class LineChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartOptions: null,
      height: window.innerHeight,
      width: window.innerWidth
    }
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
    // this.state.chartOptions.chart.setSize(this.state.width - 225);
    //this.state.chartOptions.chart.reflow();
   }

  componentDidMount() {
    switch (this.props.base) {
      case 'plain':
        this.state.chartOptions = plainLineChartOptions(this.props);
        break;
      case 'full':
        this.state.chartOptions = lineChartOptions(this.props);
        break;
      case 'weather':
        this.state.chartOptions = weatherChartOptions(this.props);
        break;
      default:
    }
    window.addEventListener("resize", this.updateDimensions.bind(this));
    //setInterval(() => this.updateDimensions(), 1500);
    highchartsLaquageOptions();
    this.state.chartOptions.chart = new Highcharts[this.props.type || "Chart"](
      this.props.container,
      this.state.chartOptions
    );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
    this.state.chartOptions.chart.destroy();
  }

  render() {
    return (
      <div className="line-chart-body">
        <div className="line-chart-wrapper" key={this.props.key} id={this.props.container}></div>
      </div>
    );
  }
}

export default LineChart;
