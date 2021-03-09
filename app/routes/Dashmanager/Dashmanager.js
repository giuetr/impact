import React, {Component} from 'react';
import Chart from "react-apexcharts";
import faker from 'faker/locale/en_US';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { HeaderMain } from "../components/HeaderMain";

import { getQuote, getTrending, getMktnews, getSectors } from "../API/api.js";
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import Mktstatus from '../components/Mktstatus/Mktstatus';
import {
    SessionsByDevice
  } from "../components/Analytics/SessionsByDevice";
  
import {
    Container,
    Row,
    Card,
    Button,
    CardBody,
    CardDeck,
    CardTitle,
    CardHeader,
    CardFooter,
    Col,
    Badge,
    Progress,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
    Table,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Media,
    Avatar,
    AvatarAddOn
} from '../../components'
import {
    ProfileOverviewCard
} from "../components/Profile/ProfileOverviewCard";
import {
    TinyAreaChart
} from "../components/Analytics/TinyAreaChart";

const payment = [
    "success",
    "danger",
    "warning",
    "secondary"
];

const offering = [
    "NOVA SOLAR FARM",
    "SPAIN ENERGY A",
    "NEW GREEN FUND A",
];

class Dashmanager extends Component {
    constructor(props) {
        super(props);

        this.state = {
          yf_sectors: null,
          yf_trend: null,
          yf_mktnws: null,
          yf_financialData_nasdaq: null,
          yf_financialData_djones:null,
          yf_financialData_SP500: null,


          series: [
            {
            name: "Portfolio",
            data: [11, 21, 39, 27, 43, 33, 56, 83, 132, 109, 145, 171]
            },
        ],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          colors: ['#33AE9A'],
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.5,
              opacityTo: 0,
              stops: [0, 90, 100]
            },
          },
          title: {
            text: 'Portfolio Performance',
            align: 'center'
          },
          grid: {
            row: {
              colors: ['transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          }
        },


        series2: [76, 67, 61, 90],
            options2: {
              chart: {
                type: 'radialBar',
                height: 390,
              },
              plotOptions: {
                radialBar: {
                  offsetY: 0,
                  startAngle: 0,
                  endAngle: 270,
                  hollow: {
                    margin: 5,
                    size: '30%',
                    background: 'transparent',
                    image: undefined,
                  },
                  dataLabels: {
                    name: {
                      show: false,
                    },
                    value: {
                      show: false,
                    }
                  }
                }
              },
              title: {
                text: 'Asset Classes Allocation',
                align: 'center'
              },
              colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
              labels: ['Venture Cap', 'Equity', 'Fixed-Income', 'ETF'],
              legend: {
                show: true,
                floating: true,
                fontSize: '16px',
                position: 'left',
                offsetX: 16,
                offsetY: 30,
                labels: {
                  useSeriesColors: true,
                },
                markers: {
                  size: 0
                },
                formatter: function(seriesName, opts) {
                  return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                },
                itemMargin: {
                  vertical: 3
                }
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  legend: {
                      show: false
                  }
                }
              }]
            },


        };
    }


    async componentDidMount() {
      //^GSPC -->SP500
      //^DJI -->djones
      //^NDX -->nasdaq 100
      //
      const ticker = '^GSPC,^DJI,^NDX'
      await getQuote(ticker)
      .then(data => this.setState({ 
        yf_financialData_SP500: data.quoteResponse.result[0],
        yf_financialData_djones: data.quoteResponse.result[1],
        yf_financialData_nasdaq: data.quoteResponse.result[2]})    
      )
      await getSectors()
      .then(data => this.setState({ 
        yf_sectors: data.quoteResponse.result})    
      )
      await getTrending()
      .then(data => this.setState({ 
        yf_trend: data.finance.result[0].quotes})    
      )
      await getMktnews()
      .then(data => this.setState({ 
        yf_mktnws: data})    
      )
      }

render() {
      if (!this.state.yf_financialData_SP500) {
        return <div>Loading Data Engine <i className="fa fa-fw fa-spinner fa-spin text-info"></i></div>;
      }
    return (
        <Container>
            <Mktstatus/>

            <Container className="pl-0">
                <div className="d-flex mt-3 mb-5">
                    <div>
                        <HeaderMain 
                            title="Manager Dashboard"
                            className=""
                        />
                        <div className="h3">
                            <span className="text-info mr-3">Green Asset Manager</span>
                        </div>

                    </div>
                </div>
            </Container>

            <Row>
            <Col lg={ 3 }>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h5" className="text-info mb-0">
                            Total AuM
                        </CardTitle>
                        <p className="mb-4">
                            Assets under management
                        </p>
                        <div>
                            <div className="mb-2">
                                <h4>€ 450,000,000</h4>
                                <small>Since: 1 Jan 2020</small>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg={ 3 }>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h5" className="text-info mb-0">
                            Total Fees
                        </CardTitle>
                        <p className="mb-4">
                            Since inception
                        </p>
                        <div>
                            <div className="mb-2">
                                <h4>€2,250,000</h4>
                                <small>Average Fee: 0.5% </small>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg={ 3 }>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle className="mb-0 d-flex">
                            <h5 className="text-info mb-0">Fund Return</h5>
                            <Button color="link" size="sm" className="pt-0 ml-auto">
                                    1Y <i className="text-info fa fa-angle-down"></i>
                            </Button>
                        </CardTitle>
                        <p className="mb-4">
                            Average Annual Return %
                        </p>
                        <div>
                            <div className="mb-2 text-info">
                                <h4>21.02%</h4>
                                <small>YTD: 15.05% </small>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg={ 3 }>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle className="text-info mb-0 d-flex">
                            <h5 className="text-info mb-0">ESG Score</h5>
                            <Badge pill tag="p" color="info" className="mb-1 ml-auto">TOP PERFORMER</Badge>
                        </CardTitle>
                        <p className="mb-4">
                            Fund's Sustainability Performance
                        </p>
                        <div>
                            <div className="mb-2">
                            <h4><span className="text-info"><i className="fa fa-fw fa-envira text-info"></i></span>87/100</h4>
                            <small>Sector Average: 65/100 </small>
                            
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            
        </Row>

        <Row className="mt-3">
                <Col lg={ 12 }>
                    <Card className="mb-3 p-4">
                        <CardBody className="pb-0">
                            <Row>
                            <Col sm={4}>
                                <div className="d-flex mb-4 justify-content-center">
                                <h5 className="mb-1 text-info">TOP FUND</h5>
                                </div>
                                <div className="text-center mb-4">
                                    <h2>
                                    NOVA SOLAR FARM
                                    </h2>
                                    <div className="mt-2">
                                    NVSLR
                                    </div>
                                    <div>
                                        Sector: <span className="text-info">Energy</span>
                                    </div>
                                </div>
                            </Col>    


                            <Col sm={ 4 }>
                                <div className="d-flex mb-4 justify-content-center">
                                    <h5 className="mb-1 text-info">TOTAL INVESTORS</h5>
                                </div>
                                <div className="text-center mb-4">
                                    <h2 className="text-yellow">
                                    1,032
                                    </h2>
                                    <div className="mt-2">
                                    Number of total investors managed
                                    </div>
                                    <div>
                                        Since: <span className="text-info">1-Jan-2019</span>
                                    </div>
                                </div>
                                  
                            </Col>
                            <Col sm={ 4 }>
                                <div className="d-flex mb-4 justify-content-center">
                                    <h5 className="mb-1 text-info">PERFORMANCE</h5>
                                    
                                </div>
                                <div className="text-center mb-4">
                                    <h2 className="text-info">
                                    21.02%
                                    </h2>
                                    <div className="mt-2">
                                        <span className="text-info">CAGR</span>
                                    </div>
                                    <div>
                                        Since: <span className="text-info">1-Jan-2019</span>
                                    </div>
                                </div>
                            </Col>
                              
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        <Row className="mb-4">
            <Col lg={ 7 }>
                <Card>
                    <CardBody>
                    <div>
                    <Chart options={this.state.options} series={this.state.series} type="area" />
                        
                    </div>

                    </CardBody>
                </Card>
            </Col>

            <Col lg={ 5 }>
                <Card>
                    <CardBody>
                    <div>
                    <Chart options={this.state.options2} series={this.state.series2} type="radialBar" height={390} />
                        
                    </div>

                    </CardBody>
                </Card>
            </Col>
            
        </Row>

            <Col lg={ 12 } className="pl-0 mb-4">
                    <Card>
                        
                        <CardBody>
                            <CardTitle tag="h4" className="text-info">
                                Assets Managed
                            </CardTitle>
                            <Row className="mb-4 mt-5">
                                <Col sm={ 3 }>
                                    <div className="h4">
                                        4
                                    </div>
                                    <span className="text-muted">
                                        TOTAL INVESTMENTS
                                    </span>
                                </Col>
                                <Col sm={ 3 }>
                                    <div className="h4">
                                        € 200,000,000
                                    </div>
                                    <span className="text-muted">
                                        TOTAL SIZE
                                    </span>
                                </Col>
                                <Col sm={ 3 }>
                                    <div className="h4">
                                        € 55,000
                                    </div>
                                    <span className="text-muted">
                                        AVERAGE INVESTMENT
                                    </span>
                                </Col>
                                <Col sm={ 3 }>
                                    <div className="h4">
                                        231
                                    </div>
                                    <span className="text-muted">
                                        AVERAGE INVESTORS PER FUND
                                    </span>
                                </Col>
                            </Row>

                        <Table className="mb-0" hover responsive>
                            <thead>
                                <tr>
                                    <th className="bt-0 pr-5">Name</th>
                                    <th className="bt-0 pr-5">Originator</th>
                                    <th className="bt-0">Size</th>
                                    <th className="bt-0">Investors</th>
                                    <th className="bt-0">Engagement</th>
                                    <th className="bt-0">Fee</th>
                                    <th className="bt-0">Investment Date</th>
                                    <th className="bt-0">Asset Class</th>
                                    <th className="bt-0 text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <td className="align-middle text-inverse">
                                            <div>
                                            NOVA SOLAR FARM
                                            </div>
                                            <span className="text-muted">
                                                <i className="fa fa-fw fa-map-marker text-info text-left"></i> Spain
                                            </span>
                                        </td>
                                        <td className="align-middle">
                                            New Green Assets
                                        </td>
                                        <td className="align-middle text-info">
                                            € 30,000,000
                                        </td>
                                        <td className="align-middle">
                                            312
                                        </td>
                                        <td className="align-middle text-info">
                                        11.01%
                                        </td>
                                        <td className="align-middle">
                                        0.5%
                                        </td>
                                        <td className="align-middle">
                                            1-Mar-2021
                                        </td>
                                        <td className="align-middle">
                                            <Badge pill color="primary">
                                                VENTURE CAPITAL
                                            </Badge>
                                        </td>
                                        <td className="align-middle text-right">
                                            <Badge pill color="info">
                                                ACTIVE
                                            </Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle text-inverse">
                                            <div>
                                            SPAIN ENERGY A
                                            </div>
                                            <span className="text-muted">
                                                <i className="fa fa-fw fa-map-marker text-info text-left"></i> Spain
                                            </span>
                                        </td>
                                        <td className="align-middle">
                                            CleanTech AM
                                        </td>
                                        <td className="align-middle text-info">
                                            € 25,000,000
                                        </td>
                                        <td className="align-middle">
                                            112
                                        </td>
                                        <td className="align-middle text-info">
                                        11.01%
                                        </td>
                                        <td className="align-middle">
                                        0.5%
                                        </td>
                                        <td className="align-middle">
                                            1-Feb-2021
                                        </td>
                                        <td className="align-middle">
                                            <Badge pill color="warning">
                                                PRIVATE EQUITY
                                            </Badge>
                                        </td>
                                        <td className="align-middle text-right">
                                            <Badge pill color="info">
                                                ACTIVE
                                            </Badge>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="align-middle text-inverse">
                                            <div>
                                            XTECH ABSOLUTE RETURN
                                            </div>
                                            <span className="text-muted">
                                                <i className="fa fa-fw fa-map-marker text-info text-left"></i> Spain
                                            </span>
                                        </td>
                                        <td className="align-middle">
                                            ESG Fund Inc.
                                        </td>
                                        <td className="align-middle text-info">
                                            € 130,000,000
                                        </td>
                                        <td className="align-middle">
                                            450
                                        </td>
                                        <td className="align-middle text-info">
                                        11.01%
                                        </td>
                                        <td className="align-middle">
                                        0.5%
                                        </td>
                                        <td className="align-middle">
                                            1-Jan-2021
                                        </td>
                                        <td className="align-middle">
                                            <Badge pill color="danger">
                                                EQUITY
                                            </Badge>
                                        </td>
                                        <td className="align-middle text-right">
                                            <Badge pill color="info">
                                                ACTIVE
                                            </Badge>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="align-middle text-inverse">
                                            <div>
                                            NEW GREEN FUND A
                                            </div>
                                            <span className="text-muted">
                                                <i className="fa fa-fw fa-map-marker text-info text-left"></i> Spain
                                            </span>
                                        </td>
                                        <td className="align-middle">
                                            Environment Global Fund
                                        </td>
                                        <td className="align-middle text-info">
                                            € 15,000,000
                                        </td>
                                        <td className="align-middle">
                                            1021
                                        </td>
                                        <td className="align-middle text-info">
                                        8.92%
                                        </td>
                                        <td className="align-middle">
                                            0.5%
                                        </td>
                                        <td className="align-middle">
                                            11-Feb-2021
                                        </td>
                                        <td className="align-middle">
                                            <Badge pill color="danger">
                                                EQUITY
                                            </Badge>
                                        </td>
                                        <td className="align-middle text-right">
                                            <Badge pill color="info">
                                                ACTIVE
                                            </Badge>
                                        </td>
                                    </tr>
                            
                              </tbody>
                        </Table>

                        </CardBody>
                    </Card>
            </Col>


            
        <Row>
            <Col lg={ 5 }>
              <CardDeck>
              <Card className="d-flex flex-column">
                <CardHeader className="bb-0 pt-4 text-info" tag="h4">
                    YOUR PORTFOLIO
                </CardHeader>
                <Table responsive hover borderless className="table mb-0">

                    <tbody>
                        <tr>
                            <td className="align-middle text-inverse">
                            Portfolio Value
                            </td>
                            <td className="align-middle text-right text-info">
                            € 1,200,000
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                                PnL
                            </td>
                            <td className="align-middle text-right text-info">
                            € 390,000
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Starting Investment
                            </td>
                            <td className="align-middle text-right text-info">
                           € 500,000 
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Average Investment
                            </td>
                            <td className="align-middle text-right text-info">
                            € 15,000
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Average Fee
                            </td>
                            <td className="align-middle text-right text-info">
                            0.5%
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <CardBody>
                    <div>
                        <p className="ml-0 mb-0">
                            Risk Level:
                        </p>
                        <h5 className="text-info mb-4">Low</h5>
                        <Progress multi className="mb-1" style={{height: "10px"}}>
                            <Progress animated bar color="info" value="37" />
                            </Progress>
                    </div>
                </CardBody>
                </Card>

                
              </CardDeck>
              </Col>  
        </Row>
        

        
        

        </Container>
    );
  } //render
}
export default Dashmanager
