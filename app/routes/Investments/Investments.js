import React, {Component} from 'react';
import Chart from "react-apexcharts";
import faker from 'faker/locale/en_US';
import classes from './investments.scss';
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

class Investments extends Component {
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
                            title="Your Portfolio"
                            className=""
                        />
                        <div className="h3">
                            <span className="text-info mr-3">Overview of your investments</span>
                        </div>

                    </div>
                </div>
            </Container>

            <Row>
            <Col lg={ 3 }>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h5" className="text-info mb-0">
                            Your investments
                        </CardTitle>
                        <p className="mb-4">
                            Total Active Investments
                        </p>
                        <div>
                            <div className="mb-2">
                                <h4>4</h4>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg={ 3 }>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h5" className="text-info mb-0">
                            Total PnL
                        </CardTitle>
                        <p className="mb-4">
                            Since inception
                        </p>
                        <div>
                            <div className="mb-2">
                                <h4>€390,000</h4>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg={ 3 }>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle className="mb-0 d-flex">
                            <h5 className="text-info mb-0">PnL</h5>
                            <Button color="link" size="sm" className="pt-0 ml-auto">
                                    1Y <i className="text-info fa fa-angle-down"></i>
                            </Button>
                        </CardTitle>
                        <p className="mb-4">
                            Return %
                        </p>
                        <div>
                            <div className="mb-2 text-info">
                                <h4>21.03%</h4>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg={ 3 }>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h5" className="text-info mb-0">
                            ESG Profile
                        </CardTitle>
                        <p className="mb-4">
                            Portfolio Sustainability Category
                        </p>
                        <div>
                            <div className="mb-2">
                            <Badge color="info">Risk Balanced</Badge>
                            </div>
                        </div>
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
            

            <Col lg={ 12 } className="pl-0">
                    <Card>
                        
                        <CardBody>
                            <CardTitle tag="h4" className="text-info">
                                Active Investments
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
                                        € 550,000
                                    </div>
                                    <span className="text-muted">
                                        TOTAL INVESTED
                                    </span>
                                </Col>
                                <Col sm={ 3 }>
                                    <div className="h4">
                                        5.00%
                                    </div>
                                    <span className="text-muted">
                                        AVERAGE RETURN
                                    </span>
                                </Col>
                            </Row>

                        <Table className="mb-0" hover responsive>
                            <thead>
                                <tr>
                                    <th className="bt-0 pr-5">Name</th>
                                    <th className="bt-0 pr-5">Originator</th>
                                    <th className="bt-0">Size</th>
                                    <th className="bt-0">Invested</th>
                                    <th className="bt-0">Total Return</th>
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
                                            € 200,000
                                        </td>
                                        <td className="align-middle text-info">
                                        11.01%
                                        </td>
                                        <td className="align-middle">
                                            1.5%
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
                                            € 200,000
                                        </td>
                                        <td className="align-middle text-info">
                                        11.01%
                                        </td>
                                        <td className="align-middle">
                                            8.02%
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
                                            € 50,000
                                        </td>
                                        <td className="align-middle text-info">
                                        11.01%
                                        </td>
                                        <td className="align-middle">
                                            9.01%
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
                                            € 100,000
                                        </td>
                                        <td className="align-middle text-info">
                                        8.92%
                                        </td>
                                        <td className="align-middle">
                                            1.5%
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


            
       
        

        
        

        </Container>
    );
  } //render
}
export default Investments
