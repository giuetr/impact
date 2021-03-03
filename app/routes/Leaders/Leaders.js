import React, {Component} from 'react';
import Chart from "react-apexcharts";
import faker from 'faker/locale/en_US';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import TableStock from '../../assetsnew/TableStock'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Mktstatus from '../components/Mktstatus/Mktstatus';

import { getQuote, getmegatrends} from '../API/api.js'

import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer'
import {ESGreport} from './ESGreport.js'
import {Link} from 'react-router-dom'

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
import { object, symbol } from 'prop-types';
import Tablestock from '../../assetsnew/TableStock';


class Leaders extends Component {
    constructor(props) {
        super(props);
        var settore;
        switch (this.props.match.params.pillar) {
            case 'CE':
              settore = "Clean Energy";
              break;
            case 'EV' :
                settore = "EV & Self-Driving";
              break;
            case 'FF':
                settore = "Future of Food";
              break;
            case 'AI':
                settore = "Iberian Fund Tracker Equity US";
              break;
            case 'XT':
                settore = "Ultra Tech";
              break;
            case 'CS':
                settore = "CyberSec 2.0";
              break;
            case 'SB':
                settore = "Smart Cities & Building";
            break;
            case 'FH':
                settore = "Future Health";
          }

        this.state = {
            tickers:null,
            arr_megatrends:null,
            arr_tickers:null,
            pillar:this.props.match.params.pillar,
            settore:settore,
            megatrends: null,
            merged_flow: null,
            yf_quote: null,
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
   


    async componentWillMount() {
        /* nel then di getmegatrends ho sintetizzato questa serie di operazioni
    const arr_megatrends= _.values(this.state.megatrends);
    const arr_tickers = arr_megatrends.map(function(i) {
        return (
           i.symbol
      );
    });
    const tickers = arr_tickers.toString();
    console.log(tickers)
*/
        await getmegatrends(this.state.pillar)
        .then(data =>this.setState({
            megatrends: data,
            tickers: _.values(data).map(function(i) {
                return (
                   i.symbol
              );
            }).toString()
            })
       
            )
            getQuote(this.state.tickers)
        .then(data => this.setState({ 
        yf_quote: data.quoteResponse.result})   
        )
    }
    
 


    
  
render() {
    

    
    if (!this.state.megatrends ) {
        return <div>Loading Data Engine <i className="fa fa-fw fa-spinner fa-spin text-info"></i></div>;   
      }
      var merged = _.merge(_.keyBy(this.state.megatrends, 'symbol'), _.keyBy(this.state.yf_quote, 'symbol'));
      var values = _.values(merged);
     // console.log(values);
      const final = Object.entries(values);

    return (
        <Container>
            <Mktstatus/>

          
          <Container className="pl-0">
            <div className="d-flex mt-3 mb-5">
              <div>
                  <HeaderMain 
                      title={this.state.settore}
                      className=""
                  />
                  <div className="h3">
                  <span className="text-info mr-3">Equity</span>
                  <span className="mx-2">·</span>
                  <span>204.02</span>
                  <span className="small mr-3">EUR</span>
                  <span className="mx-2">·</span>
                  <span style={{color: "#1BB934"}}>3.02%</span>
                </div>

              </div>
            </div>

            <CardDeck>
            { /* START Card Widget */}
                <Card className="mb-3">
                    <CardBody>
                        <div>
                            <div className="mb-4">
                                <h5 className="mb-1 text-info">TOTAL HOLDINGS</h5>
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
                                        <i className="fa fa-circle fa-fw text-info"></i> Class: Equity
                                    </div>
                                </div>
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-primary"></i> Region: US
                                    </div>
                                </div>
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-gray-300"></i> Risk: 4/10
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
                                <p> 1Y Return</p>
                            </div>
                            <div className="mb-3 d-flex">
                                <div className="ml-2 align-self-center">
                                    <h2 className="mb-0">16.02%</h2>
                                    <span><span className="text-info">+7%</span> from Benchmark</span>
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
                                <h5 className="mb-1 text-info">VALUATION &amp; SIZE</h5>
                                <p>Key Metrics</p>
                            </div>
                            <div className="mb-3 d-flex">
                                <div className="ml-2 align-self-center">
                                    <h2 className="mb-0">350M</h2>
                                    <span className="text-info">NAV</span>
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
                                    <h2 className="mb-0">Bullish</h2>
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

        <Row className="mt-3">
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody className="pb-0">
                            <CardTitle tag="h5" className="text-info">
                                ESG Profile
                            </CardTitle>
                            <p className="mb-3">
                                Overview of the fund sustainability imprint
                            </p>
                            
                            <div>
                                <Link to="../Disclosures">
                                    <Button outline className="mb-3" color="info">
                                        Explore
                                    </Button>
                                </Link>
                           
                                <Button className="mb-3 ml-3" color="primary">
                                    <PDFDownloadLink style={{ color: 'white' }} document={<ESGreport />} fileName="ESG_Report_1MAR21.pdf">
                                        {({ blob, url, loading, error }) => (loading ? 'Creating ESG Report...' : 'Download Report')}
                                    </PDFDownloadLink>
                                </Button>
                            </div>
                            <Row>
                            <Col sm={4}>
                            <div className="d-flex mb-4 justify-content-center">
                            
                            </div>
                        <div className="text-center mb-4">
                            <h2>
                               ESG-Aligned 
                                <i className="fa fa-envira text-info ml-2"></i> 
                            </h2>
                            <div className="mt-2">
                                Top Asset: <span>
                                <Link className="text-info" to="../Security">TSLA</Link>
                                </span>
                            </div>
                        </div>
                            <CardBody className="p-0">
                                <TinyAreaChart />
                            </CardBody>

                            </Col>    


                            <Col sm={ 4 }>
                                <div className="mb-4">
                                    <div>
                                        <h5 className="mb-1 text-info">Portfolio ESG Risk</h5>
                                        <p>Average Risk Rating</p>
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <TinyDonutChart />
                                        <div className="ml-2 align-self-center">
                                            <span>ESG Score</span>
                                            <h2 className="mb-0">
                                            37
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="text-left">
                                            <div className="small mb-2">
                                                <i className="fa fa-circle fa-fw text-info"></i> Environmental
                                            </div>
                                            <h6 className="mb-0">
                                            18
                                            </h6>
                                        </div>
                                        <div className="text-left">
                                            <div className="small mb-2">
                                                <i className="fa fa-circle fa-fw text-primary"></i> Social
                                            </div>
                                            <h6 className="mb-0">
                                            11
                                            </h6>
                                        </div>
                                        <div className="text-left">
                                            <div className="small mb-2">
                                                <i className="fa fa-circle fa-fw text-gray-300"></i> Governance
                                            </div>
                                            <h6 className="mb-0">
                                            8
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                  
                              </Col>
                              <Col sm={ 4 }>
                              <Table size="sm">
                                    <div className="mb-3">
                                        <h5 className="text-info">CONTROVERSIES</h5> 
                                        <p>Average: <span className="text-warning">3</span></p>
                                    </div>
                                  <tbody>
                                      <tr>
                                          <td className="text-inverse bt-0">Social Supply Chain Incidents</td>
                                          <td className="text-right bt-0">
                                              <Badge color="success" pill>1</Badge>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="text-inverse">Customer Incidents</td>
                                          <td className="text-right">
                                              <Badge color="primary" pill>1</Badge>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="text-inverse">Business Ethics Incidents</td>
                                          <td className="text-right">
                                              <Badge color="info" pill>1</Badge>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="text-inverse">Benchmark Average Controversies</td>
                                          <td className="text-right">
                                              1.3
                                          </td>
                                      </tr>
                                  </tbody>
                              </Table>
                            </Col>
                              
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>



            <CardDeck className="mb-3">
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
        


            
           
            <Row>
                <Tablestock items={final} />
            </Row>
          </Container>
          
    </Container>
    );
  } //render
}
export default Leaders
