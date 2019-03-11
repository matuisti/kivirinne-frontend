import React, { Component } from 'react';
import AuthService from '../../Authentication/AuthService';
import QueryFunctions from '../../components/QueryFunctions';
import ReactLineChart from '../../components/charts/ReactLineChart';

class Power extends Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    this.Query = new QueryFunctions();
    this.state = {
      lineLoad: false,
      simulatedData: [{
        data:[[1551465996000,20.5],[1551466859000,19.2],[1551467734000,19.2],[1551468607000,19.1],[1551469483000,18.9],[1551470359000,90.7]],
        name: "testiii"
      }]
    }
  }

  componentDidMount() {
    this.setState({
      lineLoad: true
    })
    console.log(this.state.simulatedData);
  }

  render() {
    const options = {
      title: {
        text: 'My chart'
      },
      series: [{
        data: [1, 2, 3]
      }]
    };
    return (
      <div className="body">
      <div className="chart-row1">
        <div className="chart-column full">
          <div className="chart">
            {
              !this.state.lineLoad
                ? <div className="Graph-loader"/>
                : <ReactLineChart options={options} />
            }
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default Power;
