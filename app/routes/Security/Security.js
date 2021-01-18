import React, {Component} from 'react';
import Chart from "react-apexcharts";
import faker from 'faker/locale/en_US';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import classes from './security.scss';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import {getAll, getPeers, getChart} from '../API/api.js'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';


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
            yf_all: null,
            yf_peers: null,
            yf_chart: null,
            date: new Date(),
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
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
      const ticker = 'TSLA'
      await getAll(ticker)
      .then(data => this.setState({ 
        yf_all: data.quoteSummary.result[0]})   
      )
      await getPeers(ticker)
      .then(data => this.setState({ 
        yf_peers: data.finance.result[0].recommendedSymbols})   
      )
      await getChart(ticker)
      .then(data => this.setState({ 
        yf_chart: data.chart.result[0]})   
      )
    }

    tick() {
      this.setState({
        date: new Date()
      });
    }  
render() {
  if (!this.state.yf_all || !this.state.yf_peers) {
    return <div>didn't get summary detail</div>;
  }
    return (
        <Container>
          <Row className="mb-3">
            <Col lg={ 12 }>
                <h5 className="mb-0">
                <span>{this.state.date.toDateString()} </span>
                <span className="text-info">{this.state.date.toLocaleTimeString()}</span>
                <span className="small text-muted"> CET</span>
                </h5>
                <Badge color="info">MARKET OPEN</Badge>
            </Col>
          </Row>
          <Container className="pl-0">

          <div className="d-flex mt-3 mb-5">
            <div>
                <HeaderMain 
                    title={this.state.yf_all.quoteType.shortName}
                    className=""
                />
                <div className="h3">
                  <span className="text-info mr-3">{this.state.yf_all.quoteType.symbol}</span>
                  <span>{this.state.yf_all.price.regularMarketPrice.raw}</span>
                  <span className="small mr-3">USD</span>
                  <span style={{color: Math.sign(this.state.yf_all.price.regularMarketChangePercent.raw) > 0 ? "green" : "red"}}>{this.state.yf_all.price.regularMarketChangePercent.fmt}</span>
                </div>

            </div>

                

                
                <div className="d-flex ml-auto align-self-start">
                  <div className="d-flex flex-column">
                    <div color="link" className="text-left pl-0 text-decoration-none mb-2 mr-5">
                      Industry: <span className="text-muted">{this.state.yf_all.assetProfile.industry}</span>
                    </div>
                    <div color="link" className="text-left pl-0 text-decoration-none mb-2 mr-5">
                      Sector: <span className="text-muted">{this.state.yf_all.assetProfile.sector}</span>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <div color="link" className="text-left pl-0 text-decoration-none mb-2 mr-5">
                      <i className="fa fa-globe text-body mr-2"></i>
                      <a href="#" target="_blank" className="text-info">{this.state.yf_all.assetProfile.website}</a>
                    </div>
                    <div color="link" className="text-left pl-0 text-decoration-none mb-2 mr-5">
                      <i className="fa fa-child text-body mr-2"></i>
                      Employees: <span className="text-muted">{this.state.yf_all.assetProfile.fullTimeEmployees}</span>
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
                                    <span>ESG Score</span>
                                    <h2 className="mb-0">{this.state.yf_all.esgScores.totalEsg.fmt}</h2>
                                    <span>Peer avg: <span className="text-info">{this.state.yf_all.esgScores.peerEsgScorePerformance.avg.toFixed(0)}</span></span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-info"></i> Environmental
                                    </div>
                                    <h6 className="mb-0">{this.state.yf_all.esgScores.environmentScore.fmt}</h6>
                                </div>
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-primary"></i> Social
                                    </div>
                                    <h6 className="mb-0">{this.state.yf_all.esgScores.socialScore.fmt}</h6>
                                </div>
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-gray-300"></i> Governance
                                    </div>
                                    <h6 className="mb-0">{this.state.yf_all.esgScores.governanceScore.fmt}</h6>
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
                        value={this.state.yf_all.financialData.targetMeanPrice.raw}
                        valueTitle="+5% MoM"
                        footerTitle="Potential Return:"
                        footerTitleClassName="text-info"
                        footerValue="5%"
                        footerIcon="caret-up"
                    />
                    <div className="d-flex justify-content-between mt-3">
                                <div className="text-center">
                                    <h6 className="mb-0">{this.state.yf_all.financialData.targetLowPrice.raw}</h6>
                                    <span>Min</span>
                                </div>
                                <div className="text-center">
                                    <h6 className="mb-0">{this.state.yf_all.financialData.targetMedianPrice.raw}</h6>
                                    <span>Avg</span>
                                </div>
                                <div className="text-center">
                                    <h6 className="mb-0">{this.state.yf_all.financialData.targetHighPrice.raw}</h6>
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
                        badgeTitle={this.state.yf_all.financialData.recommendationKey}
                        badgeColor="info"
                        value={this.state.yf_all.financialData.recommendationKey}
                        valueTitle="STRONG"
                        footerTitle="Analysts:"
                        footerTitleClassName="text-INFO"
                        footerValue={this.state.yf_all.financialData.numberOfAnalystOpinions.fmt}
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
                        
                        <div>
                        <TradingViewWidget
                            symbol={this.state.yf_all.quoteType.symbol}
                            theme={Themes.LIGHT}
                            locale="en"
                            interval= "D"
                            allow_symbol_change={false} 
                            height={370}
                            width="auto"
                            save_image= {false}
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
                            <td className="align-middle text-right text-info">
                            {this.state.yf_all.summaryDetail.marketCap.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Revenue
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.yf_all.financialData.totalRevenue.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Gross Margin
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.yf_all.financialData.grossMargins.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            EBITDA
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.yf_all.financialData.ebitda.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Cash
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.yf_all.financialData.totalCash.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Debt
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.yf_all.financialData.totalDebt.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Cash Flow
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.yf_all.financialData.freeCashflow.fmt}
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
                            <th scope="col" className="bt-0">Ticker</th>
                            <th scope="col" className="text-right bt-0">Similarity Score</th>
                        </tr>
                    </thead>
                    <tbody>
                      {this.state.yf_peers.map((i) => {
                        return (
                          <tr>
                            <td className="align-middle">
                            <Badge color="info">{i.symbol}</Badge>
                            </td>
                            <td className="align-middle text-inverse text-right">
                            {i.score.toFixed(3)}
                            </td>
                          </tr>
                        );
                      })}
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
                    Key Valuation
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
                            Revenue Growth
                            </td>
                            <td className="align-middle text-right" style={{color: Math.sign(this.state.yf_all.financialData.revenueGrowth.raw) > 0 ? "#33AE9A" : "red"}}>
                            <i className={Math.sign(this.state.yf_all.financialData.revenueGrowth.raw) > 0 ? "fa fa-caret-up mr-2" : "fa fa-caret-down mr-2"}></i>
                            {this.state.yf_all.financialData.revenueGrowth.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Earnings Growth
                            </td>
                            <td className="align-middle text-right" style={{color: Math.sign(this.state.yf_all.financialData.operatingMargins.raw) > 0 ? "#33AE9A" : "red"}}>
                            <i className={Math.sign(this.state.yf_all.financialData.operatingMargins.raw) > 0 ? "fa fa-caret-up mr-2" : "fa fa-caret-down mr-2"}></i>
                            {this.state.yf_all.financialData.operatingMargins.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Operating Margins
                            </td>
                            <td className="align-middle text-right" style={{color: Math.sign(this.state.yf_all.financialData.operatingMargins.raw) > 0 ? "#33AE9A" : "red"}}>
                            <i className={Math.sign(this.state.yf_all.financialData.operatingMargins.raw) > 0 ? "fa fa-caret-up mr-2" : "fa fa-caret-down mr-2"}></i>
                            {this.state.yf_all.financialData.operatingMargins.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Return on Equity
                            </td>
                            <td className="align-middle text-right" style={{color: Math.sign(this.state.yf_all.financialData.returnOnEquity.raw) > 0 ? "#33AE9A" : "red"}}>
                            <i className={Math.sign(this.state.yf_all.financialData.returnOnEquity.raw) > 0 ? "fa fa-caret-up mr-2" : "fa fa-caret-down mr-2"}></i>
                            {this.state.yf_all.financialData.returnOnEquity.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Return on Assets
                            </td>
                            <td className="align-middle text-right" style={{color: Math.sign(this.state.yf_all.financialData.returnOnAssets.raw) > 0 ? "#33AE9A" : "red"}}>
                            <i className={Math.sign(this.state.yf_all.financialData.returnOnAssets.raw) > 0 ? "fa fa-caret-up mr-2" : "fa fa-caret-down mr-2"}></i>
                            {this.state.yf_all.financialData.returnOnAssets.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Current Ratio
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.yf_all.financialData.currentRatio.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Forward PE
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.yf_all.defaultKeyStatistics.forwardPE.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Forward EPS
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.yf_all.defaultKeyStatistics.forwardEps.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Enterprise to EBITDA
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.yf_all.defaultKeyStatistics.enterpriseToEbitda.fmt}
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
                    Key Technicals
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
                            <td className="align-middle text-right text-info">
                            {this.state.yf_all.summaryDetail.beta.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            50 Days Average
                            </td>
                            <td className="align-middle text-right text-info">
                            $ {this.state.yf_all.summaryDetail.fiftyDayAverage.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                              200 Days Average
                            </td>
                            <td className="align-middle text-right text-info">
                            $ {this.state.yf_all.summaryDetail.twoHundredDayAverage.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            52 Weeks High
                            </td>
                            <td className="align-middle text-right text-info">
                            $ {this.state.yf_all.summaryDetail.fiftyTwoWeekHigh.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            52 Weeks Low
                            </td>
                            <td className="align-middle text-right text-info">
                            $ {this.state.yf_all.summaryDetail.fiftyTwoWeekLow.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Volume
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.yf_all.summaryDetail.volume.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Avg. Volume Last 10 Days
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.yf_all.summaryDetail.averageVolume10days.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Shorted Shares
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.yf_all.defaultKeyStatistics.sharesShort.fmt} <span className="text-muted">vs. {this.state.yf_all.defaultKeyStatistics.sharesShortPriorMonth.fmt} MoM</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Short % of Float
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.yf_all.defaultKeyStatistics.shortPercentOfFloat.fmt}
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
                                  value={this.state.yf_all.assetProfile.overallRisk}
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
                                              <Badge color="success" pill>{this.state.yf_all.assetProfile.auditRisk}</Badge>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="text-inverse">Board Risk</td>
                                          <td className="text-right">
                                              <Badge color="primary" pill>{this.state.yf_all.assetProfile.boardRisk}</Badge>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="text-inverse">Compensantion Risk</td>
                                          <td className="text-right">
                                              <Badge color="info" pill>{this.state.yf_all.assetProfile.compensationRisk}</Badge>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="text-inverse">Shareholders Rights Risk</td>
                                          <td className="text-right">
                                              <Badge color="secondary" pill>{this.state.yf_all.assetProfile.shareHolderRightsRisk}</Badge>
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
                                    <th className="text-right bt-0">
                                        Age
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                              <tr>
                                  <td className="align-middle text-inverse">
                                  {this.state.yf_all.assetProfile.companyOfficers[0].name}
                                  </td>
                                  <td className="align-middle">
                                  {this.state.yf_all.assetProfile.companyOfficers[0].title}
                                  </td>
                                  <td className="text-info">
                                  $ {this.state.yf_all.assetProfile.companyOfficers[0].totalPay.longFmt}
                                  </td>
                                  <td className="align-middle text-right text-primary">
                                  {this.state.yf_all.assetProfile.companyOfficers[0].age}
                                  </td>
                              </tr>
                              <tr>
                                  <td className="align-middle text-inverse">
                                  {this.state.yf_all.assetProfile.companyOfficers[1].name}
                                  </td>
                                  <td className="align-middle">
                                  {this.state.yf_all.assetProfile.companyOfficers[1].title}
                                  </td>
                                  <td className="text-info">
                                  $ {this.state.yf_all.assetProfile.companyOfficers[1].totalPay.longFmt}
                                  </td>
                                  <td className="align-middle text-right text-primary">
                                  {this.state.yf_all.assetProfile.companyOfficers[1].age}
                                  </td>
                              </tr>
                              <tr>
                                  <td className="align-middle text-inverse">
                                  {this.state.yf_all.assetProfile.companyOfficers[2].name}
                                  </td>
                                  <td className="align-middle">
                                  {this.state.yf_all.assetProfile.companyOfficers[2].title}
                                  </td>
                                  <td className="text-info">
                                  $ {this.state.yf_all.assetProfile.companyOfficers[2].totalPay.longFmt}
                                  </td>
                                  <td className="align-middle text-right text-primary">
                                  {this.state.yf_all.assetProfile.companyOfficers[2].age}
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
                            <Col lg={4}>
                              <Row>
                                <Col sm={ 6 }>
                                    <SessionsByDevice 
                                        title="Buy"
                                        valuePercent="60"
                                        valuePercentColor="text-success"
                                        value={this.state.yf_all.netSharePurchaseActivity.buyInfoShares.fmt}
                                        valueColor="text-muted"
                                    />
                                </Col>
                                <Col sm={ 6 }>
                                    <SessionsByDevice 
                                        title="Sell"
                                        valuePercent="50"
                                        valuePercentColor="text-danger"
                                        value={this.state.yf_all.netSharePurchaseActivity.sellInfoShares.fmt}
                                        valueColor="text-muted"
                                    />
                                </Col>
                              </Row>
                              <Progress multi className="mb-2" style={{height: "5px"}}>
                                  <Progress animated bar color="success" value="60" />
                                  <Progress animated bar color="danger" value="50" />
                              </Progress>
                            </Col>
                            <Col sm={ 4 }>
                              <Table size="sm">
                                  <tbody>
                                      <tr className="table-info">
                                          <td className="text-inverse bt-0">Shareholders</td>
                                          <td className="bt-0"></td>

                                      </tr>
                                      <tr>
                                          <td className="text-inverse bt-0">Insider Shares %</td>
                                          <td className="text-right text-info bt-0">
                                              {this.state.yf_all.majorHoldersBreakdown.insidersPercentHeld.fmt}
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="text-inverse">Institutions Shares %</td>
                                          <td className="text-right text-info">
                                              {this.state.yf_all.majorHoldersBreakdown.institutionsPercentHeld.fmt}
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="text-inverse">Institutional owners</td>
                                          <td className="text-right text-info">
                                              {this.state.yf_all.majorHoldersBreakdown.institutionsCount.raw}
                                          </td>
                                      </tr>
                                  </tbody>
                              </Table>
                            </Col>

                            </Row>
                            
                            
                        </CardBody>
                        { /* START Table */}
                        
                        <Table className="mb-0">
                            <thead>
                                <tr>
                                    <th className="bt-0 pr-5">Insider</th>
                                    <th className="bt-0 pr-5">Transaction</th>
                                    <th className="bt-0">Quantity</th>
                                    <th className="bt-0">Value</th>
                                    <th className="bt-0">Date</th>
                                </tr>
                            </thead>
                        </Table>

                        <div className={ classes['table-scroll-wrap'] }>
                          <Table className="mb-0" hover responsive>
                              <tbody>
                                {this.state.yf_all.insiderTransactions.transactions.slice(0, 10).map((i) => {
                                  return (
                                    <tr>
                                    <td className="align-middle text-inverse">
                                    <div>
                                    {i.filerName}
                                    </div>
                                    <span className="text-info">
                                    {i.filerRelation}
                                    </span>
                                    </td>
                                    <td className="align-middle">
                                    {i.transactionText}
                                    </td>
                                    <td className="align-middle">
                                    {i.shares.longFmt}
                                    </td>
                                    <td className="align-middle text-info">
                                    $ {i.value.longFmt}
                                    </td>
                                    <td className="align-middle">
                                    {i.startDate.fmt}
                                    </td>
                                    <td className="align-middle text-right">
                                    <Badge color="danger">SHORT</Badge>
                                    </td>
                                </tr>
                                  );
                                })}
                              </tbody>
                          </Table>
                        </div>
                        
                        
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
