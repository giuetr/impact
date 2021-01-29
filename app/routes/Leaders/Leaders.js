import React, {Component} from 'react';
import Chart from "react-apexcharts";
import faker from 'faker/locale/en_US';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import TableStock from '../../assetsnew/TableStock'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import {getAll, getESG, getQuote} from '../API/api.js'


import {
    Container,
    Row,
    Button,
    Card,
    CardBody,
    CardDeck,
    CardHeader,
    CardFooter,
    CardTitle,
    CardColumns,
    Col,
    Badge,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
    Progress,
    Table,
    Media,
    UncontrolledTooltip,
    UncontrolledButtonDropdown,
} from '../../components'
import {
    ProfileOverviewCard
} from "../components/Profile/ProfileOverviewCard";
import {
    TinyAreaChart
} from "../components/Analytics/TinyAreaChart";
import { HeaderMain } from "../components/HeaderMain";
import {
    SessionsByDevice
  } from "../components/Analytics/SessionsByDevice";
import {
  TinyDonutChart
} from "../components/Monitor/TinyDonutChart";

class Leaders extends Component {
    constructor(props) {
        super(props);
        

        this.state = {
            yf_esg: null,
            yf_all: null,
            merge_all_esg: null,
            options: {
                chart: {
                    height: 350,
                    type: 'treemap'
                  }
            },
            series: [{
                data:[{
                    x: 'Technology',
                    y: 218
                  },
                  {
                    x: 'IT',
                    y: 149
                  },
                  {
                    x: 'Agriculture',
                    y: 184
                  },
                  {
                    x: 'Consumer Staple',
                    y: 55
                  },]
            }],

            series2: [{
                data: 
                [{
                    x: 1,
                    y: 2.14,
                    z: 'title1'
                }, {
                    x: 1.2,
                    y: 2.19,
                    z: 'hey'
                }, {
                    x: 1.8,
                    y: 2.43,
                    z: 'mike'
                }, {
                    x: 2.3,
                    y: 3.8,
                    z: 'BE'
                }, {
                    x: 2.6,
                    y: 4.14,
                    z: 'aye'
                }, {
                    x: 2.9,
                    y: 5.4,
                    z: 'ral'
                }]
              },
            ],
            options2: {
                chart: {
                    height: 350,
                    type: 'scatter',
                  },
                  
                  xaxis: {
                    
                  },
                  yaxis: {
                    
                  },
                  tooltip: {
                    y: {
                        formatter: undefined,
                        title: 'ESG: '
                    },
                    z: {
                        formatter: undefined,
                        title: 'Title: '
                    },
                  },
                  fill: {
                    type: 'gradient',
                    gradient: {
                      shade: 'light',
                      shadeIntensity: 0.25,
                      gradientToColors: undefined,
                      inverseColors: true,
                      opacityFrom: 0.85,
                      opacityTo: 0.85,
                      stops: [50, 0, 100]
                    },
                  }
              },
        };
    }


    async componentDidMount() {
        const ticker = 'CRM'
        await getAll(ticker)
        .then(data => this.setState({ 
          yf_all: data.quoteSummary.result[0]})   
        )
        await getESG(ticker)
        .then(data => this.setState({ 
          yf_esg: data[0]})   
        )
        await getQuote(ticker)
        .then(data => this.setState({ 
          yf_quote: data.quoteResponse.result[0]})   
        )
        
        
      }


     
render() {
    if (!this.state.yf_all || !this.state.yf_esg) {
        return <div>Loading Data</div>;
      }
      
      const  merge_all_esg= { ...this.state.yf_esg, ...this.state.yf_quote};
      //const merge_all_esg = [].concat(this.state.yf_esg, this.state.yf_all);
      console.log(merge_all_esg);
    return (
        <Container>
          <Row className="mb-3">
            <Col lg={ 12 }>
                <h5 className="mb-0">
                <span>1 January 2021 - </span>
                <span className="text-info">05:12:00 PM</span>
                <span className="small text-muted"> CET</span>
                </h5>
                <Badge color="info">MARKET OPEN</Badge>
            </Col>
          </Row>
          
          <Container className="pl-0">
            <div className="d-flex mt-3 mb-5">
              <div>
                  <HeaderMain 
                      title="EV and Self-Driving"
                      className=""
                  />
                  <div className="h3">
                    <span className="text-info mr-3">Leaders and Pioneers of the EV space</span>
                  </div>

              </div>
            </div>

            <CardDeck>
            { /* START Card Widget */}
                <Card className="mb-3">
                    <CardBody>
                        <div>
                            <div className="mb-4">
                                <h5 className="mb-1 text-info">TOTAL COMPANIES</h5>
                                <p>Weekly Snapshot</p>
                            </div>
                            <div className="mb-3 d-flex">
                                <div className="ml-2 align-self-center">
                                    <h2 className="mb-0">115</h2>
                                    <span>Change: <span className="text-info">+2</span></span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-info"></i> Environmental
                                    </div>
                                </div>
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-primary"></i> Social
                                    </div>
                                </div>
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-gray-300"></i> Governance
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>

                <Card className="mb-3">
                    <CardBody>
                        <div>
                            <div className="mb-4">
                                <h5 className="mb-1 text-info">PERFORMANCE</h5>
                                <p>Average 1Y Return</p>
                            </div>
                            <div className="mb-3 d-flex">
                                <div className="ml-2 align-self-center">
                                    <h2 className="mb-0">12.07%</h2>
                                    <span><span className="text-info">+2%</span> from Benchmark</span>
                                </div>
                            </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <div className="text-center">
                                        <h6 className="mb-0">12%</h6>
                                        <span><Badge pill color="danger">SPY</Badge></span>
                                    </div>
                                    <div className="text-center">
                                        <h6 className="mb-0">15%</h6>
                                        <span><Badge pill color="secondary">NDX</Badge></span>
                                    </div>
                                    <div className="text-center">
                                        <h6 className="mb-0">7%</h6>
                                        <span><Badge pill color="primary">DJI</Badge></span>
                                    </div>
                                </div>
                        </div>
                    </CardBody>
                </Card>
            { /* START Card Widget */}

                <Card className="mb-3">
                    <CardBody>
                        <div>
                            <div className="mb-4">
                                <h5 className="mb-1 text-info">VALUATION</h5>
                                <p>Key Metrics</p>
                            </div>
                            <div className="mb-3 d-flex">
                                <div className="ml-2 align-self-center">
                                    <h2 className="mb-0">350M</h2>
                                    <span>Avg. <span className="text-info">MarketCap</span></span>
                                </div>
                            </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <div className="text-center">
                                        <h6 className="mb-0">3%</h6>
                                        <span>Volatility</span>
                                    </div>
                                    <div className="text-center">
                                        <h6 className="mb-0">10</h6>
                                        <span>P/E</span>
                                    </div>
                                    <div className="text-center">
                                        <h6 className="mb-0">3.2</h6>
                                        <span>Beta</span>
                                    </div>
                                </div>
                        </div>
                    </CardBody>
                </Card>

                { /* START Card Widget */}
                <Card className="mb-3">
                    <CardBody>
                        <div>
                            <div className="mb-4">
                                <h5 className="mb-1 text-info">TREND</h5>
                                <p>Key Metrics</p>
                            </div>
                            <div className="mb-3 d-flex">
                                <div className="ml-2 align-self-center">
                                    <h2 className="mb-0">LONG</h2>
                                    <span>Avg. <span className="text-info">MarketCap</span></span>
                                </div>
                            </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <div className="text-center">
                                        <h6 className="mb-0"><Badge color="info">BULLISH</Badge></h6>
                                        <span>Sentiment</span>
                                    </div>
                                    <div className="text-center">
                                        <h6 className="mb-0"><Badge color="warning">AVERAGE</Badge></h6>
                                        <span>Momentum</span>
                                    </div>
                                    <div className="text-center">
                                        <h6 className="mb-0">300T</h6>
                                        <span>Volume</span>
                                    </div>
                                </div>
                        </div>
                    </CardBody>
                </Card>
            { /* START Card Widget */}
        </CardDeck>

            <CardDeck>
                <Card>
                    <CardBody className="pb-0">
                        <div className="d-flex mb-2 justify-content-center">
                            <CardTitle tag="h5">
                                Performance vs. ESG Scores
                            </CardTitle>
                        </div>

                        <Chart options={this.state.options2} series={this.state.series2} type="scatter"/>

                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="pb-0">
                            <div className="d-flex mb-2 justify-content-center">
                                <CardTitle tag="h5">
                                    Sectors
                                </CardTitle>
                            </div>
                            <div className="donut pb-2">
                                <Chart options={this.state.options} series={this.state.series} type="treemap"/>
                            </div>
                    </CardBody>
                </Card>

            </CardDeck>
            <Row className="mt-3">
              <TableStock/>
            </Row>

          </Container>
          
    </Container>
    );
  } //render
}
export default Leaders