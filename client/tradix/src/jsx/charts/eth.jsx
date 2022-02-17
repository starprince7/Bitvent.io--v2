
import axios from 'axios'
import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";



class EthChart extends Component {
    
    fetchEthereumData = () => {
        axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=30')
        .then(res => {
            // Iterate through res.data & return an array of two values [Time, HighPrice]
            const data = res.data.Data.map((data) => [data.time * 1000, data.high] )
            // console.log('Parsed ETH Data', data)
            // Set data to the component State.
            this.setState({
                series: [
                    ...this.state.series,
                    { data: data }
                ]
            })
            // _data.push(res.data.Data.)
        })
        .catch(e => console.log(e))
    }

    componentDidMount() {
        this.fetchEthereumData()
    }

    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: "ETH (USD)",
                data: [] /* [10, 41, 35, 51, 49, 62, 69, 91, 80, 10, 41, 35, 51, 49, 62, 69, 91, 80] */
            }],
            options: {
                chart: {
                    height: 100,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },

                    toolbar: {
                        show: false,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    width: 2,
                    colors: ["#282828"],
                },
                grid: {
                    show: false,
                },
                tooltip: {
                    enabled: false,
                    x: {
                        format: "dd MMM yyyy"
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                    axisBorder: {
                        show: false
                    },

                    labels: {
                        show: false
                    }
                },
                yaxis: {
                    labels: {
                        show: false
                    }
                },
            },


        };
    }



    render() {
        return (


            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={100} />


        );
    }
}

export default EthChart;