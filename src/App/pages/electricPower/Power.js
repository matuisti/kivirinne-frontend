import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import LineChart from '../../components/charts/LineChart';
import PieChart from '../../components/charts/PieChart';
import AuthService from '../../Authentication/AuthService';
import QueryFunctions from '../../components/QueryFunctions';
import Highcharts from 'highcharts/highstock';

class Home extends Component {
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
    }
  }

  handleError(error) {
    if (error.response.status === 500) {
      this.Auth.logOut();
      this.props.history.push('/login');
    }
  }

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

  componentDidMount() {
    var token = this.Auth.getToken();
    this.Query.getDhtData(token, 1, 'YEAR')
    .then(response => {
      console.log(response.data)
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
        <div className="chart-column side">
          <div className="chart">
            {
              !this.state.pieLoad
                ? <div className="Graph-loader"/>
              : <PieChart container="pieChart2" type="Chart" title="Olohuone" data={this.state.pieChartData} />
            }
          </div>
        </div>
        <div className="chart-column side">
          <div className="chart">
            {
              !this.state.pieLoad
                ? <div className="Graph-loader"/>
              : <PieChart container="pieChart3" type="Chart" title="Makuuhuone" data={this.state.pieChartData} />
            }
          </div>

        </div>
        <div className="chart-column side">
          <div className="chart">
            {
              !this.state.pieLoad
                ? <div className="Graph-loader"/>
              : <PieChart container="pieChart4" type="Chart" title="Keittiö" data={this.state.pieChartData} />
            }
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
      <div className="chart-row2">
        <div className="chart-column side">
          <div className="chart"></div>
        </div>
        <div className="chart-column side">
          <div className="chart"></div>
        </div>
        <div className="chart-column side">
          <div className="chart"></div>
        </div>
      </div>
      <div className="chart-row2">
        <div className="chart-column side">
          <div className="chart"></div>
        </div>
        <div className="chart-column side">
          <div className="chart"></div>
        </div>
        <div className="chart-column side">
          <div className="chart"></div>
        </div>
      </div>
    </div>
    );
  }
}
export default Home;
