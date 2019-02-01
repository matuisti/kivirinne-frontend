import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import LineChart from '../../components/charts/LineChart';
import PieChart from '../../components/charts/PieChart';
import CircularProgressBar from '../../components/charts/CircularProgressBar';
import AuthService from '../../Authentication/AuthService';
import QueryFunctions from '../../components/QueryFunctions';
import './IndoorAir.css';
import 'react-datepicker/dist/react-datepicker.css';

import isAfter from 'date-fns/is_after';
import Highcharts from 'highcharts/highstock';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';

import 'moment/locale/fi';

class IndoorAir extends Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    this.Query = new QueryFunctions();
    this.state = {
      lineLoad: false,
      pieLoad: false,
      rawData: null,
      lineChartData: null,
      pieChartData: null,
      startDate: null,
      endDate: null,
      locale: 'fi',
    };
    this.shortChartData = this.shortChartData.bind(this);
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
    this.setState({lineChartData: params, lineLoad: true})
  }

  initPieChart(token, response) {
      var airObjects = Object.keys(response.data[0].airData);
      var rawData = [
        { name: "Lämpötila", data:response.data[response.data.length -1].airData.temperature },
        { name: "Kosteus", data:response.data[response.data.length -1].airData.humidity }
      ];
      this.setState({pieChartData: rawData, pieLoad: true})
  }

  shortChartData() {
    console.log(this.state.startDate, this.state.endDate);
  }

  componentDidMount() {
    var token = this.Auth.getToken();
    this.Query.getDhtData(token, 1, 'YEAR')
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
      <Navbar/>
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
            <div className="date-picker">
              <DayPickerInput
                formatDate={formatDate}
                parseDate={parseDate}
                placeholder={`${formatDate(new Date())}`}
                onDayChange={this.handleChangeStart}
                dayPickerProps={{
                  selectedDays: this.state.startDate,
                  disabledDays: { after: this.state.endDate },
                  locale: 'fi',
                  localeUtils: MomentLocaleUtils,
                  todayButton: 'Tänään',
                }}
              />
            </div>
            -
            <div className="date-picker">
              <DayPickerInput
                formatDate={formatDate}
                parseDate={parseDate}
                placeholder={`${formatDate(new Date())}`}
                onDayChange={this.handleChangeEnd}
                dayPickerProps={{
                  selectedDays: this.state.endDate,
                  disabledDays: { before: this.state.startDate },
                  locale: 'fi',
                  localeUtils: MomentLocaleUtils,
                  todayButton: 'Tänään',
                }}
              />
            </div>
            <button onClick={this.shortChartData}>Etsi</button>

          </div>
        </div>
      </div>
      <div className="chart-row1">
        <div className="chart-column full">
          <div className="chart">
            {
              !this.state.lineLoad
                ? <div className="Graph-loader"/>
              : <LineChart container="lineChart1" type="Chart" title="Sisäilma" base="full" data={this.state.lineChartData} />
            }
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default IndoorAir;
