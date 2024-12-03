import React from 'react';
import ReactApexChart from 'react-apexcharts';

export default class ApexChart extends React.Component 
{

    constructor(props) {
        super(props);

        this.state = {
            series: [89,10],
            options: {
                chart: {
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '70%'
                        }
                    }
                },
                colors: ['#878786', '#eb9c4d'],
                dataLabels: {
                    enabled: true,
                    style: {
                        colors: ['white']
                    }
                },
                labels: ['Not updated', 'Updated'],  
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: 'bottom',
                        }
                    }
                }],
                legend: {
                    position: 'right',
                    offsetY: 0,
                    height: 230,
                }
            },
        };
    }

    render() {
        return (
            <div style={{ height: '80%', width: '80%' }}>
                <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height="100%" width="100%" />
            </div>
        );
    }
}