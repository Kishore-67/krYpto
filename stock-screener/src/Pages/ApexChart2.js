import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'Series 1',
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90]
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2021-09-19T00:00:00Z", "2021-09-20T01:30:00Z", "2021-09-21T02:30:00Z", "2021-09-22T03:30:00Z", "2021-09-23T04:30:00Z", "2021-09-24T05:30:00Z", "2021-09-25T06:30:00Z", "2021-09-26T07:30:00Z", "2021-09-27T08:30:00Z"],
        },
      },
    };
  }

  render() {
    return (
      <div style={{ position:'absolute' , alignItems: 'center', width: '100%', height: '100vh',left:800,top:375 }}>
        
        <div style={{ width: '600px' }}>
        <h2>ALLCARGO</h2>
          <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
        </div>
      </div>
    );
  }
}

export default ApexChart2;
