import React, {Component} from 'react';
import Chart from "react-apexcharts";
import faker from 'faker/locale/en_US';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import {getSummaryDetail, getFinancialData} from '../API/api.js'


import {
    Container,
    Row,
    Card,
    CardBody,
    CardDeck,
    CardHeader,
    CardFooter,
    CardTitle,
    Progress,
    Col,
    Badge,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
    Table,
    Media
} from '../../components'
import {
    ProfileOverviewCard
} from "../components/Profile/ProfileOverviewCard";
import {
    TinyAreaChart
} from "../components/Analytics/TinyAreaChart";
import { HeaderMain } from "../components/HeaderMain";
import {
  TinyDonutChart
} from "../components/Monitor/TinyDonutChart"
import {
  SessionsByDevice
} from "../components/Analytics/SessionsByDevice";


class Security extends Component {
    constructor(props) {
        super(props);

        this.state = {
            yf_financial_data
            : null,
            yf_summary_detail: null,
            series: [{
                data: [{
                    x: new Date(1538778600000),
                    y: [6629.81, 6650.5, 6623.04, 6633.33]
                  },
                  {
                    x: new Date(1538780400000),
                    y: [6632.01, 6643.59, 6620, 6630.11]
                  },
                  {
                    x: new Date(1538782200000),
                    y: [6630.71, 6648.95, 6623.34, 6635.65]
                  },
                  {
                    x: new Date(1538784000000),
                    y: [6635.65, 6651, 6629.67, 6638.24]
                  },
                  {
                    x: new Date(1538785800000),
                    y: [6638.24, 6640, 6620, 6624.47]
                  },
                  {
                    x: new Date(1538787600000),
                    y: [6624.53, 6636.03, 6621.68, 6624.31]
                  },
                  {
                    x: new Date(1538789400000),
                    y: [6624.61, 6632.2, 6617, 6626.02]
                  },
                  {
                    x: new Date(1538791200000),
                    y: [6627, 6627.62, 6584.22, 6603.02]
                  },
                  {
                    x: new Date(1538793000000),
                    y: [6605, 6608.03, 6598.95, 6604.01]
                  },
                  {
                    x: new Date(1538794800000),
                    y: [6604.5, 6614.4, 6602.26, 6608.02]
                  },
                  {
                    x: new Date(1538796600000),
                    y: [6608.02, 6610.68, 6601.99, 6608.91]
                  },
                  {
                    x: new Date(1538798400000),
                    y: [6608.91, 6618.99, 6608.01, 6612]
                  },
                  {
                    x: new Date(1538800200000),
                    y: [6612, 6615.13, 6605.09, 6612]
                  },
                  {
                    x: new Date(1538802000000),
                    y: [6612, 6624.12, 6608.43, 6622.95]
                  },
                  {
                    x: new Date(1538803800000),
                    y: [6623.91, 6623.91, 6615, 6615.67]
                  },
                  {
                    x: new Date(1538805600000),
                    y: [6618.69, 6618.74, 6610, 6610.4]
                  },
                  {
                    x: new Date(1538807400000),
                    y: [6611, 6622.78, 6610.4, 6614.9]
                  },
                  {
                    x: new Date(1538809200000),
                    y: [6614.9, 6626.2, 6613.33, 6623.45]
                  },
                  {
                    x: new Date(1538811000000),
                    y: [6623.48, 6627, 6618.38, 6620.35]
                  },
                  {
                    x: new Date(1538812800000),
                    y: [6619.43, 6620.35, 6610.05, 6615.53]
                  },
                  {
                    x: new Date(1538814600000),
                    y: [6615.53, 6617.93, 6610, 6615.19]
                  },
                  {
                    x: new Date(1538816400000),
                    y: [6615.19, 6621.6, 6608.2, 6620]
                  },
                  {
                    x: new Date(1538818200000),
                    y: [6619.54, 6625.17, 6614.15, 6620]
                  },
                  {
                    x: new Date(1538820000000),
                    y: [6620.33, 6634.15, 6617.24, 6624.61]
                  },
                  {
                    x: new Date(1538821800000),
                    y: [6625.95, 6626, 6611.66, 6617.58]
                  },
                  {
                    x: new Date(1538823600000),
                    y: [6619, 6625.97, 6595.27, 6598.86]
                  },
                  {
                    x: new Date(1538825400000),
                    y: [6598.86, 6598.88, 6570, 6587.16]
                  },
                  {
                    x: new Date(1538827200000),
                    y: [6588.86, 6600, 6580, 6593.4]
                  },
                  {
                    x: new Date(1538829000000),
                    y: [6593.99, 6598.89, 6585, 6587.81]
                  },
                  {
                    x: new Date(1538830800000),
                    y: [6587.81, 6592.73, 6567.14, 6578]
                  },
                  {
                    x: new Date(1538832600000),
                    y: [6578.35, 6581.72, 6567.39, 6579]
                  },
                  {
                    x: new Date(1538834400000),
                    y: [6579.38, 6580.92, 6566.77, 6575.96]
                  },
                  {
                    x: new Date(1538836200000),
                    y: [6575.96, 6589, 6571.77, 6588.92]
                  },
                  {
                    x: new Date(1538838000000),
                    y: [6588.92, 6594, 6577.55, 6589.22]
                  },
                  {
                    x: new Date(1538839800000),
                    y: [6589.3, 6598.89, 6589.1, 6596.08]
                  },
                  {
                    x: new Date(1538841600000),
                    y: [6597.5, 6600, 6588.39, 6596.25]
                  },
                  {
                    x: new Date(1538843400000),
                    y: [6598.03, 6600, 6588.73, 6595.97]
                  },
                  {
                    x: new Date(1538845200000),
                    y: [6595.97, 6602.01, 6588.17, 6602]
                  },
                  {
                    x: new Date(1538847000000),
                    y: [6602, 6607, 6596.51, 6599.95]
                  },
                  {
                    x: new Date(1538848800000),
                    y: [6600.63, 6601.21, 6590.39, 6591.02]
                  },
                  {
                    x: new Date(1538850600000),
                    y: [6591.02, 6603.08, 6591, 6591]
                  },
                  {
                    x: new Date(1538852400000),
                    y: [6591, 6601.32, 6585, 6592]
                  },
                  {
                    x: new Date(1538854200000),
                    y: [6593.13, 6596.01, 6590, 6593.34]
                  },
                  {
                    x: new Date(1538856000000),
                    y: [6593.34, 6604.76, 6582.63, 6593.86]
                  },
                  {
                    x: new Date(1538857800000),
                    y: [6593.86, 6604.28, 6586.57, 6600.01]
                  },
                  {
                    x: new Date(1538859600000),
                    y: [6601.81, 6603.21, 6592.78, 6596.25]
                  },
                  {
                    x: new Date(1538861400000),
                    y: [6596.25, 6604.2, 6590, 6602.99]
                  },
                  {
                    x: new Date(1538863200000),
                    y: [6602.99, 6606, 6584.99, 6587.81]
                  },
                  {
                    x: new Date(1538865000000),
                    y: [6587.81, 6595, 6583.27, 6591.96]
                  },
                  {
                    x: new Date(1538866800000),
                    y: [6591.97, 6596.07, 6585, 6588.39]
                  },
                  {
                    x: new Date(1538868600000),
                    y: [6587.6, 6598.21, 6587.6, 6594.27]
                  },
                  {
                    x: new Date(1538870400000),
                    y: [6596.44, 6601, 6590, 6596.55]
                  },
                  {
                    x: new Date(1538872200000),
                    y: [6598.91, 6605, 6596.61, 6600.02]
                  },
                  {
                    x: new Date(1538874000000),
                    y: [6600.55, 6605, 6589.14, 6593.01]
                  },
                  {
                    x: new Date(1538875800000),
                    y: [6593.15, 6605, 6592, 6603.06]
                  },
                  {
                    x: new Date(1538877600000),
                    y: [6603.07, 6604.5, 6599.09, 6603.89]
                  },
                  {
                    x: new Date(1538879400000),
                    y: [6604.44, 6604.44, 6600, 6603.5]
                  },
                  {
                    x: new Date(1538881200000),
                    y: [6603.5, 6603.99, 6597.5, 6603.86]
                  },
                  {
                    x: new Date(1538883000000),
                    y: [6603.85, 6605, 6600, 6604.07]
                  },
                  {
                    x: new Date(1538884800000),
                    y: [6604.98, 6606, 6604.07, 6606]
                  },
                ]
              }],
              options: {
                chart: {
                  type: 'candlestick',
                  height: 350
                },
                title: {
                  text: 'CandleStick Chart',
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
              },
        };
    }

    

    async componentDidMount() {
      const ticker = 'AAPL'
      await getSummaryDetail(ticker)
      .then(data => this.setState({ 
        yf_summary_detail: data.quoteSummary.result[0].summaryDetail})   
      )
      await getFinancialData(ticker)
      .then(data => this.setState({ 
        yf_financial_data: data.quoteSummary.result[0].financialData})   
      )
    }

render() {
  if (!this.state.yf_summary_detail) {
    return <div>didn't get summary detail</div>;
  }
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
                    title="Apple Inc."
                    className=""
                />
                <div className="h3">
                  <span className="text-info mr-3">AAPL</span>
                  <span>{this.state.yf_summary_detail.open.fmt}</span>
                  <span className="small mr-3">USD</span>
                  <span className="text-danger">-0.77%</span>
                </div>

            </div>

                

                
                <div className="d-flex ml-auto align-self-start">
                  <div className="d-flex flex-column">
                    <div color="link" className="text-left pl-0 text-decoration-none mb-2 mr-5">
                      Industry: <span className="text-muted">Consumer Electronics</span>
                    </div>
                    <div color="link" className="text-left pl-0 text-decoration-none mb-2 mr-5">
                      Sector: <span className="text-muted">Technology</span>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <div color="link" className="text-left pl-0 text-decoration-none mb-2 mr-5">
                      <i className="fa fa-globe text-body mr-2"></i>
                      <a href="#" target="_blank" className="text-info">www.apple.com</a>
                    </div>
                    <div color="link" className="text-left pl-0 text-decoration-none mb-2 mr-5">
                      <i className="fa fa-child text-body mr-2"></i>
                      Employees: <span className="text-muted">147,000</span>
                    </div>
                  </div>
                </div>


          </div>
          </Container>

       
        { /* START Section 1 */}
        <CardDeck>
            { /* START Card Widget */}
            <Card className="mb-3">
                    <CardBody>
                        <div>
                            <div>
                                <h6 className="mb-1 text-info">ESG</h6>
                                <p>Real Time Sustainability Profile</p>
                            </div>
                            <div className="mb-3 d-flex">
                                <TinyDonutChart />
                                <div className="ml-2 align-self-center">
                                    <h2 className="mb-0">52</h2>
                                    <span>ESG Score</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-info"></i> Environmental
                                    </div>
                                    <h6 className="mb-0">48,7</h6>
                                    <span>79</span>
                                </div>
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-primary"></i> Social
                                    </div>
                                    <h6 className="mb-0">26,9</h6>
                                    <span>65</span>
                                </div>
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-gray-300"></i> Governance
                                    </div>
                                    <h6 className="mb-0">2,7</h6>
                                    <span>34</span>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            { /* START Card Widget */}
            { /* START Card Widget */}
            <Card className="mb-3">
                <CardBody>
                    <ProfileOverviewCard 
                        title="PRICE TARGET"
                        badgeTitle="UP"
                        badgeColor="info"
                        value="135.02"
                        valueTitle="+5% MoM"
                        footerTitle="Potential Return:"
                        footerTitleClassName="text-info"
                        footerValue="5%"
                        footerIcon="caret-up"
                    />
                    <div className="d-flex justify-content-between mt-3">
                                <div className="text-center">
                                    <h6 className="mb-0">132</h6>
                                    <span>Min</span>
                                </div>
                                <div className="text-center">
                                    <h6 className="mb-0">135.02</h6>
                                    <span>Avg</span>
                                </div>
                                <div className="text-center">
                                    <h6 className="mb-0">142</h6>
                                    <span>Max</span>
                                </div>
                            </div>     
                    
                </CardBody>
            </Card>
            { /* START Card Widget */}
            { /* START Card Widget */}
            <Card className="mb-3">
                <CardBody>
                    <ProfileOverviewCard 
                        title="RECOMMENDATIONS"
                        badgeTitle="LONG"
                        badgeColor="info"
                        value="BUY"
                        valueTitle="STRONG"
                        footerTitle="Analysts:"
                        footerTitleClassName="text-INFO"
                        footerValue="30"
                        footerIcon=""
                    />
                    <div className="d-flex justify-content-between mt-3">
                                <div className="text-center">
                                    <h6 className="mb-0 text-danger">SELL</h6>
                                    <span>3</span>
                                </div>
                                <div className="text-center">
                                    <h6 className="mb-0 text-secondary">HOLD</h6>
                                    <span>10</span>
                                </div>
                                <div className="text-center">
                                    <h6 className="mb-0 text-info">BUY</h6>
                                    <span>17</span>
                                </div>
                            </div> 
                </CardBody>
            </Card>
            { /* START Card Widget */}
            { /* START Card Widget */}
            <Card type="border" color="success" className="mb-3">
                <CardBody className="table-success">
                    <ProfileOverviewCard 
                        title="SENTIMENT"
                        badgeTitle="Real time"
                        badgeColor="success"
                        value="87%"
                        valueTitle="BULLISH"
                        footerTitle="Trend:"
                        footerTitleClassName="text-success"
                        footerValue="8%"
                        footerIcon="caret-up"
                    />
                    <div className="d-flex justify-content-between mt-3">
                                <div className="text-center">
                                    <h6 className="mb-0 text-danger">SELL</h6>
                                    <span>3</span>
                                </div>
                                <div className="text-center">
                                    <h6 className="mb-0 text-secondary">HOLD</h6>
                                    <span>10</span>
                                </div>
                                <div className="text-center">
                                    <h6 className="mb-0 text-info">BUY</h6>
                                    <span>17</span>
                                </div>
                            </div> 
                </CardBody>
            </Card>
            { /* START Card Widget */}
        </CardDeck>
        { /* START Section 1 */}

        <Row>
            <Col lg={ 7 }>
                <Card className="mb-3">
                    <CardBody>
                        <div className="chart-candlestick">
                            <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="candlestick"
                            width="100%"
                            />
                        </div>

                    </CardBody>
                </Card>
            </Col>

            <Col lg={ 5 }>
              <CardDeck>
              
                <Card className="d-flex flex-column">
                <CardHeader className="bb-0 pt-3 bg-none" tag="h6">
                    Key Financials
                </CardHeader>
                <Table responsive hover borderless className="table mb-0">
                    <thead>
                        <tr>
                            <th scope="col" className="bt-0">Indicator</th>
                            <th scope="col" className="text-right bt-0">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="align-middle text-inverse">
                            Market Cap
                            </td>
                            <td className="align-middle text-right">
                            {this.state.yf_summary_detail.marketCap.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            EPS
                            </td>
                            <td className="align-middle text-right">
                            0.52
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Revenue
                            </td>
                            <td className="align-middle text-right">
                            190M
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            EBITDA
                            </td>
                            <td className="align-middle text-right">
                            590M
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Cash
                            </td>
                            <td className="align-middle text-right">
                            1.023B
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Debt
                            </td>
                            <td className="align-middle text-right">
                            256M
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Cash Flow
                            </td>
                            <td className="align-middle text-right">
                            256M
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </Card>

                <Card className="d-flex flex-column">
                <CardHeader className="bb-0 pt-3 bg-none" tag="h6">
                    Top Peers
                </CardHeader>
                <Table responsive hover className="table mb-0">
                    <thead>
                        <tr>
                            <th scope="col" className="bt-0">Company</th>
                            <th scope="col" className="text-right bt-0">Ticker</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="align-middle text-inverse">
                            Advanced Micro Devices
                            </td>
                            <td className="align-middle text-right">
                            <Badge color="info">AMD</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                              Tesla Motors
                            </td>
                            <td className="align-middle text-right">
                            <Badge color="info">TSLA</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Micron
                            </td>
                            <td className="align-middle text-right">
                            <Badge color="info">MU</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Facebook
                            </td>
                            <td className="align-middle text-right">
                            <Badge color="info">FB</Badge>
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Google
                            </td>
                            <td className="align-middle text-right">
                            <Badge color="info">GOOG</Badge>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </Card>

              </CardDeck>
                
                </Col>  
        </Row>

        <Row>
        <Col lg={ 12 }>
              <CardDeck>
              
                <Card className="d-flex flex-column">
                <CardHeader className="bb-0 pt-3 bg-none" tag="h6">
                    Key Valuation Metrics
                </CardHeader>
                <Table responsive hover className="table mb-0">
                    <thead>
                        <tr>
                            <th scope="col" className="bt-0">Indicator</th>
                            <th scope="col" className="text-right bt-0">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="align-middle text-inverse">
                            Market Cap
                            </td>
                            <td className="align-middle text-right">
                            2.256T
                            <i className="fa fa-caret-down text-danger ml-1"></i>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <CardFooter className="mt-auto flex-grow-0">
                    <Media className="small">
                        <Media left>
                            <i className="fa fa-fw fa-info-circle mr-2"></i>
                        </Media>
                        <Media body>
                            How do your users (visitors), sessions (visits) and pageviews 
                            metrics for <abbr title="attribute" className="text-dark">www.webkom.com</abbr> compare to your targets over the last 30 days?
                        </Media>
                    </Media>
                </CardFooter>
                </Card>

                <Card className="d-flex flex-column">
                <CardHeader className="bb-0 pt-3 bg-none" tag="h6">
                    Key technicals
                </CardHeader>
                <Table responsive hover className="table mb-0">
                    <thead>
                        <tr>
                            <th scope="col" className="bt-0">Indicator</th>
                            <th scope="col" className="text-right bt-0">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="align-middle text-inverse">
                            Beta
                            </td>
                            <td className="align-middle text-right">
                            {this.state.yf_summary_detail.beta.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            50 Days Average
                            </td>
                            <td className="align-middle text-right">
                            {this.state.yf_summary_detail.fiftyDayAverage.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                              200 Days Average
                            </td>
                            <td className="align-middle text-right">
                            {this.state.yf_summary_detail.twoHundredDayAverage.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            52 Weeks High
                            </td>
                            <td className="align-middle text-right">
                            {this.state.yf_summary_detail.fiftyTwoWeekHigh.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            52 Weeks Low
                            </td>
                            <td className="align-middle text-right">
                            {this.state.yf_summary_detail.fiftyTwoWeekLow.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Volume
                            </td>
                            <td className="align-middle text-right">
                            {this.state.yf_summary_detail.volume.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Avg. Volume Last 10 Days
                            </td>
                            <td className="align-middle text-right">
                            {this.state.yf_summary_detail.averageVolume10days.fmt}
                            </td>
                        </tr>
                        
                    </tbody>
                </Table>
                </Card>

              </CardDeck>
                
                </Col>  
        </Row>

        <Row className="mt-3">
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody className="pb-0">
                            <CardTitle tag="h6">
                                Governance Risk and Executives Pay
                            </CardTitle>
                            <p className="mb-4">
                                A measure of the company Governance risk and the breakdown of high-level corporate salaries, including stock options compensation.
                            </p>
                            <Row>
                              <Col sm={ 4 }>
                              <ProfileOverviewCard 
                                  title="OVERALL GOVERNANCE RISK"
                                  badgeTitle="HIGH RISK"
                                  badgeColor="danger"
                                  value="10"
                                  valueTitle="Vs. Sector Average: 7"
                                  footerTitle=""
                                  footerTitleClassName="text-info"
                                  footerValue=""
                                  footerIcon=""
                              />
                                  
                              </Col>
                              <Col sm={ 4 }>
                              <ProfileOverviewCard 
                                  title="EXEC. PAY"
                                  badgeTitle="TOP PERFORMER"
                                  badgeColor="info"
                                  value="-55%"
                                  valueTitle="lower than market average"
                                  footerTitle=""
                                  footerTitleClassName="text-info"
                                  footerValue=""
                                  footerIcon=""
                              />
                                  
                              </Col>
                              <Col sm={ 4 }>
                              <Table size="sm">
                                  <tbody>
                                      <tr>
                                          <td className="text-inverse bt-0">Audit Risk</td>
                                          <td className="text-right bt-0">
                                              <Badge color="success" pill>2</Badge>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="text-inverse">Board Risk</td>
                                          <td className="text-right">
                                              <Badge color="primary" pill>10</Badge>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="text-inverse">Compensantion Risk</td>
                                          <td className="text-right">
                                              <Badge color="info" pill>10</Badge>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="text-inverse">Shareholders Rights Risk</td>
                                          <td className="text-right">
                                              <Badge color="secondary" pill>10</Badge>
                                          </td>
                                      </tr>
                                  </tbody>
                              </Table>
                              </Col>
                              
                            </Row>
                        </CardBody>
                        { /* START Table */}
                        <Table className="mb-0" hover responsive>
                            <thead>
                                <tr>
                                    <th className="bt-0">Name</th>
                                    <th className="bt-0">Role</th>
                                    <th className="bt-0">Pay</th>
                                    <th className="bt-0">Exercised</th>
                                    <th className="text-right bt-0">
                                        Born
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                              <tr>
                                  <td className="align-middle text-inverse">
                                  Mr. Elon R. Musk
                                  </td>
                                  <td className="align-middle">
                                  Co-Founder, CEO & Director	
                                  </td>
                                  <td className="align-middle">
                                  23.76k	
                                  </td>
                                  <td className="align-middle">
                                  N/A
                                  </td>
                                  <td className="align-middle text-right">
                                  1972
                                  </td>
                              </tr>
                            </tbody>
                        </Table>
                        { /* END Table */}
                    </Card>
                </Col>
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody className="mb-0">
                            <CardTitle tag="h6">
                                Insider Transactions
                            </CardTitle>
                            <p className="mb-3">
                                <span className="text-success">Long</span> or <span className="text-danger">Short</span> insider transaction pressure in the last 6 months to date.
                            </p>
                            <Row className="justify-content-between">
                            <Col lg={4}>
                              <ProfileOverviewCard 
                                  title="INSIDER TREND"
                                  badgeTitle="LONG"
                                  badgeColor="info"
                                  value="LONG"
                                  valueTitle="Upgrade"
                                  footerTitle=""
                                  footerTitleClassName="text-info"
                                  footerValue=""
                                  footerIcon=""
                              />
                            </Col>
                            <Col lg={5}>
                              <Row>
                                <Col sm={ 6 }>
                                    <SessionsByDevice 
                                        title="Buy"
                                        valuePercent="60"
                                        valuePercentColor="text-info"
                                        value="$201,345"
                                        valueColor="text-muted"
                                    />
                                </Col>
                                <Col sm={ 6 }>
                                    <SessionsByDevice 
                                        title="Sell"
                                        valuePercent="50"
                                        valuePercentColor="text-danger"
                                        value="$134,201"
                                        valueColor="text-muted"
                                    />
                                </Col>
                              </Row>
                              <Progress multi className="mb-2" style={{height: "5px"}}>
                                  <Progress bar color="info" value="60" />
                                  <Progress bar color="danger" value="50" />
                              </Progress>
                            </Col>

                            </Row>
                            
                            
                        </CardBody>
                        { /* START Table */}
                        <Table className="mb-0" hover responsive>
                            <thead>
                                <tr>
                                    <th className="bt-0">Insider</th>
                                    <th className="bt-0">Transaction</th>
                                    <th className="bt-0">Value</th>
                                    <th className="bt-0">Date</th>
                                    <th className="bt-0">Quantity</th>
                                    <th className="text-right bt-0">
                                        Type
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                              <tr>
                                  <td className="align-middle text-inverse">
                                  Mr. Elon R. Musk
                                  </td>
                                  <td className="align-middle">
                                  Sale at price 674.68 per share	
                                  </td>
                                  <td className="align-middle">
                                  1,012,020	
                                  </td>
                                  <td className="align-middle">
                                  Dec 28, 2020
                                  </td>
                                  <td className="align-middle">
                                  1,500
                                  </td>
                                  <td className="align-middle text-right">
                                  <Badge color="danger">SHORT</Badge>
                                  </td>
                              </tr>
                            </tbody>
                        </Table>
                        { /* END Table */}
                    </Card>
                </Col>
        </Row>

        <Row>
            <Col  lg={ 12 }>
            <div className="mb-5 mt-5">
                        <ListGroup>
                            <ListGroupItem active>
                                <ListGroupItemHeading className="h4 mt-2">
                                    Newsfeed
                                </ListGroupItemHeading>
                            </ListGroupItem>
                            <ListGroupItem tag="a" href="#" action>
                                <span className="mt-2 d-flex h6 mb-1 text-info">
                                    <span className="text-info">
                                        { faker.name.firstName() }
                                    </span>
                                    <span className="ml-auto small text-muted">
                                        06:09 PM
                                    </span>

                                </span>
                                <ListGroupItemHeading className="h5">
                                    List group item heading
                                </ListGroupItemHeading>
                                <ListGroupItemText className="mb-2">
                                    { faker.lorem.sentence() }
                                </ListGroupItemText>
                                
                            </ListGroupItem>

                            <ListGroupItem tag="a" href="#" action>
                                <span className="mt-2 d-flex h6 mb-1 text-info">
                                    <span className="text-info">
                                        { faker.name.firstName() }
                                    </span>
                                    <span className="ml-auto small text-muted">
                                        06:09 PM
                                    </span>

                                </span>
                                <ListGroupItemHeading className="h5">
                                    List group item heading
                                </ListGroupItemHeading>
                                <ListGroupItemText className="mb-2">
                                    { faker.lorem.sentence() }
                                </ListGroupItemText>
                                
                            </ListGroupItem>

                            <ListGroupItem tag="a" href="#" action>
                                <span className="mt-2 d-flex h6 mb-1 text-info">
                                    <span className="text-info">
                                        { faker.name.firstName() }
                                    </span>
                                    <span className="ml-auto small text-muted">
                                        06:09 PM
                                    </span>

                                </span>
                                <ListGroupItemHeading className="h5">
                                    List group item heading
                                </ListGroupItemHeading>
                                <ListGroupItemText className="mb-2">
                                    { faker.lorem.sentence() }
                                </ListGroupItemText>
                                
                            </ListGroupItem>

                            <ListGroupItem tag="a" href="#" action>
                                <span className="mt-2 d-flex h6 mb-1 text-info">
                                    <span className="text-info">
                                        { faker.name.firstName() }
                                    </span>
                                    <span className="ml-auto small text-muted">
                                        06:09 PM
                                    </span>

                                </span>
                                <ListGroupItemHeading className="h5">
                                    List group item heading
                                </ListGroupItemHeading>
                                <ListGroupItemText className="mb-2">
                                    { faker.lorem.sentence() }
                                </ListGroupItemText>
                                
                            </ListGroupItem>


                        </ListGroup>
                    </div>
            </Col>
        </Row>

        
        

    </Container>
    );
  } //render
}
export default Security
