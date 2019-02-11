import React, { Component } from 'react';
import LineChart from '../../components/charts/LineChart';
import CircularProgressBar from '../../components/charts/CircularProgressBar';
import AuthService from '../../Authentication/AuthService';
import QueryFunctions from '../../components/QueryFunctions';
import isAfter from 'date-fns/is_after';
import DayPickerComponent from './DayPickerComponent';
import moment from 'moment';
import './IndoorAir.css';

class IndoorAir extends Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    this.api = new QueryFunctions();
    this.state = {
      lineLoad: false,
      pieLoad: false,
      rawData: null,
      lineChartData: null,
      pieChartData: null,
      startDate: new Date(),
      endDate: new Date()
    };
    this.sortChartDataByTime = this.sortChartDataByTime.bind(this);
    this.tick = this.tick.bind(this);
    this.lineChartRef = React.createRef();
  }

  handleError(error) {
    if (error.response.status === 500) {
      this.Auth.logOut();
      this.props.history.push('/login');
    }
  }

  //------------------------------------------------

  handleChangeStart = startDate => this.handleChange({ startDate });
  handleChangeEnd = endDate => this.handleChange({ endDate });

  handleChange = ({ startDate, endDate }) => {
    startDate = startDate || this.state.startDate;
    endDate = endDate || this.state.endDate;
    if (isAfter(startDate, endDate)) {
      endDate = startDate;
    }
    this.setState({ startDate, endDate });
  };

  //------------------------------------------------

  initLineChart(token, response) {
    console.log(response);
    var keyObjects = Object.keys(response.data[0].airData);
    var colors = ['RGB(250, 128, 114)', 'RGB(93, 173, 226)']
    var params = [];
    keyObjects.forEach((key, index) => {
      var rawData = response.data.map(item => {
        return [((item.time + 7200) * 1000), item.airData[keyObjects[index]]];
      });
      params[index] = {
        name: keyObjects[index],
        data: rawData,
        color: colors[index],
        type: 'line',
        lineWidth: 2.5,
      };
    });
    this.setState({lineChartData: params, lineLoad: true});
  }

  initPieChart(token, response) {
    var airObjects = Object.keys(response.data[0].airData);
    var rawData = [
      { name: "Lämpötila", data:response.data[response.data.length -1].airData.temperature },
      { name: "Kosteus", data:response.data[response.data.length -1].airData.humidity }
    ];
    this.setState({pieChartData: rawData, pieLoad: true})
  }

  tick() {
    const data = [
      [1548969938000, 21],
      [1548970804000, 20.7],
      [1548971670000, 20.5],
      [1548972543000, 20.4],
      [1548976876000, 19.7],
      [1548977749000, 19.6],
      [1548983805000, 19.5],
      [1548984672000, 19.5],
      [1548988134000, 19.5],
      [1548989004000, 19.5],
      [1548989877000, 19.5],
      [1548995073000, 19.4],
      [1548995947000, 19.4],
      [1549002011000, 19.5],
      [1549002876000, 19.5]
    ];

    const data2 = data.map(x => [x[0], x[1] * 2]);

    this.lineChartRef.current.state.chartOptions.chart.series[0].setData(data);
    this.lineChartRef.current.state.chartOptions.chart.series[1].setData(data2);

  }

  sortChartDataByTime() {
    this.state.startDate.setHours(0, 0, 0);
    this.state.endDate.setHours(23, 59, 0);

    let startDate = moment(this.state.startDate).format("YYYY-MM-DD HH:mm:ss");
    let endDate = moment(this.state.endDate).format("YYYY-MM-DD HH:mm:ss");
    console.log(startDate);
    console.log(endDate);
    const sensorData = this.getSensorData(startDate, endDate, 1);
  }

  getSensorData(startDate, endDate, sensorId) {
    const token = this.Auth.getToken();
    const sensorData = this.api.getSensorDataBetweenTwoDays(token, startDate, endDate, sensorId)
    .then(response => {
      this.updateLineChart(response.data);
    })
  }

  updateLineChart(data) {
    console.log(data);
    var keyObjects = Object.keys(data[0].airData);
    var sensorDataArray = [];
    keyObjects.forEach((key, index) => {
      var rawData = data.map(item => {
        return [((item.time + 7200) * 1000), item.airData[keyObjects[index]]];
      });
      sensorDataArray[index] = {
        name: keyObjects[index],
        data: rawData,
        //color: colors[index],
        type: 'line',
        lineWidth: 2.5,
      };
    });
    console.log(sensorDataArray[0].data);
    console.log(this.lineChartRef.current.state.chartOptions.chart.series[0]);
    this.lineChartRef.current.state.chartOptions.chart.series[0].setData(sensorDataArray[0].data);
    this.lineChartRef.current.state.chartOptions.chart.series[1].setData(sensorDataArray[1].data);
    //console.log(this.lineChartRef.current.state.chartOptions.chart.series.map(x => x.name));
    //this.lineChartRef.current.state.chartOptions.chart.series[1].setData(data2);
  }

  componentDidMount() {
    var token = this.Auth.getToken();
    this.api.getDhtData(token, 1, 'YEAR')
    .then(response => {
      this.setState({
        rawData: response.data
      })
      return response;
    }).then(data => {
      this.initLineChart(token, data);
      this.initPieChart(token, data);
    }).catch(error => {
      this.handleError(error);
    })
  }

  render() {
    return (
      <div className="body">
      <div className="chart-row2">
        <div className="chart-column full">
          <div className="chart">
            {
              !this.state.pieLoad ? <div className="Graph-loader"/> :
              <div>
              <div style={{float: 'left'}}>
                <label style={{display: 'block'}}>Keittiö</label>
                <CircularProgressBar type={'temp'} percentage={this.state.pieChartData[0].data} unit={'°C'} clockwise={false} />
                <CircularProgressBar type={'hum'} percentage={this.state.pieChartData[1].data} unit={'%'} clockwise={false} />
              </div>
              <div style={{float: 'left'}}>
                <label style={{display: 'block'}}>Eteinen</label>
                <CircularProgressBar type={'temp'} percentage={this.state.pieChartData[0].data} unit={'°C'} clockwise={false} />
                <CircularProgressBar type={'hum'} percentage={this.state.pieChartData[1].data} unit={'%'} clockwise={false} />
              </div>
              <div style={{float: 'left'}}>
                <label style={{display: 'block'}}>Olohuone</label>
                <CircularProgressBar type={'temp'} percentage={this.state.pieChartData[0].data} unit={'°C'} clockwise={false} />
                <CircularProgressBar type={'hum'} percentage={this.state.pieChartData[1].data} unit={'%'} clockwise={false} />
              </div>
              </div>
            }
          </div>
        </div>
      </div>

      <div className="chart-controller">
        <div className="chart-column full">
          <div className="controller">
            <label style={{display: 'block'}}>Etsi aikaväliltä</label>
            <DayPickerComponent
              placeholder={''}
              onDayChange={this.handleChangeStart}
              selectedDays={this.state.startDate}
              disabledDays={this.state.endDate}
              mode={'after'} />
            -
            <DayPickerComponent
              placeholder={''}
              onDayChange={this.handleChangeEnd}
              selectedDays={this.state.endDate}
              disabledDays={this.state.startDate}
              mode={'before'} />

            <button onClick={this.sortChartDataByTime}>Etsi</button>
          </div>
        </div>
      </div>
      <div className="chart-row1">
        <div className="chart-column full">
          <div className="chart">
            {
              !this.state.lineLoad
                ? <div className="Graph-loader"/>
              : <LineChart container="lineChart1" ref={this.lineChartRef} type="Chart" title="Sisäilma" base="full" data={this.state.lineChartData} />
            }
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default IndoorAir;
