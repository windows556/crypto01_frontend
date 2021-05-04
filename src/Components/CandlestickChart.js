import React from 'react';
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                data: props.data
            }],
            options: {
                chart: {
                    type: 'candlestick',
                    height: 350
                },
                title: {
                    // text: 'CandleStick Chart',
                    text: props.title,
                    align: 'left'
                },
                xaxis: {
                    type: 'datetime'
                },
                yaxis: {
                    tooltip: {
                        enabled: true
                    }
                }
            }
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="candlestick" height={350} />
            </div>
        );
    }
}

export default ApexChart;