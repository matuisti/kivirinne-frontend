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
    this.lineChartRef = React.createRef();
  }

  handleError(error) {
    if (error.response.status === 500) {
      this.Auth.logOut();
      this.props.history.push('/login');
    }
  }

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

  initLineChart(token, response) {
    const time = this.timeFormatter(this.state.startDate, this.state.endDate);
    this.api.getSensorDataBetweenTwoDays(token, time.startDate, time.endDate).then(response => {
      this.setState({ lineChartData: response.data, lineLoad: true });
      //console.log(response.data);
    })
  }

  initPieChart(token, response) {
    var airObjects = Object.keys(response.data[0].airData);
    var rawData = [
      { name: "Lämpötila", data:response.data[response.data.length -1].airData.temperature },
      { name: "Kosteus", data:response.data[response.data.length -1].airData.humidity }
    ];
    this.setState({pieChartData: rawData, pieLoad: true})
  }

  timeFormatter(startDate, endDate) {
    startDate.setHours(0, 0, 0);
    endDate.setHours(23, 59, 0);
    const formattedDate = {
      startDate: moment(startDate).format("YYYY-MM-DD HH:mm:ss"),
      endDate: moment(endDate).format("YYYY-MM-DD HH:mm:ss")
    };
    return formattedDate;
  }

  sortChartDataByTime() {
    const time = this.timeFormatter(this.state.startDate, this.state.endDate);
    const sensorData = this.getSensorData(time.startDate, time.endDate);
  }

  getSensorData(startDate, endDate) {
    const token = this.Auth.getToken();
    const sensorData = this.api.getSensorDataBetweenTwoDays(token, startDate, endDate)
    .then(response => {
      this.updateLineChart(response.data);
      //console.log(response.data);
    })
  }

  updateLineChart(data) {
    data.map((chart, index) => {
      this.lineChartRef.current.state.chartOptions.chart.series[index].setData(chart.data);
    });
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
      //setInterval(() => this.sortChartDataByTime(), 150000);
    }).catch(error => {
      console.error(error);
      this.handleError(error);
    })
  }

  render() {
    return (
      <div className="indoor-air-body">
      {
      // <div className="chart-row2">
      //   <div className="chart-column full">
      //     <div className="chart">
      //       {
      //         !this.state.pieLoad ? <div className="Graph-loader"/> :
      //         <div>
      //         <div style={{float: 'left'}}>
      //           <label style={{display: 'block'}}>Keittiö</label>
      //           <CircularProgressBar type={'temp'} percentage={this.state.pieChartData[0].data} unit={'°C'} clockwise={false} />
      //           <CircularProgressBar type={'hum'} percentage={this.state.pieChartData[1].data} unit={'%'} clockwise={false} />
      //         </div>
      //         <div style={{float: 'left'}}>
      //           <label style={{display: 'block'}}>Eteinen</label>
      //           <CircularProgressBar type={'temp'} percentage={this.state.pieChartData[0].data} unit={'°C'} clockwise={false} />
      //           <CircularProgressBar type={'hum'} percentage={this.state.pieChartData[1].data} unit={'%'} clockwise={false} />
      //         </div>
      //         <div style={{float: 'left'}}>
      //           <label style={{display: 'block'}}>Olohuone</label>
      //           <CircularProgressBar type={'temp'} percentage={this.state.pieChartData[0].data} unit={'°C'} clockwise={false} />
      //           <CircularProgressBar type={'hum'} percentage={this.state.pieChartData[1].data} unit={'%'} clockwise={false} />
      //         </div>
      //         </div>
      //       }
      //     </div>
      //   </div>
      // </div>
      }
      <div className="chart-row1">
        <div className="chart-column full">
          <div className="chart">
            {
              !this.state.lineLoad
                ? <div className="Graph-loader"/>
              : <LineChart
                  container="lineChart1"
                  ref={this.lineChartRef}
                  type="Chart"
                  title=""
                  base="full"
                  data={this.state.lineChartData}
                />
            }
          </div>
        </div>
      </div>

      <div className="chart-controller">
        {
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
      }
      </div>
    </div>
    );
  }
}

export default IndoorAir;
