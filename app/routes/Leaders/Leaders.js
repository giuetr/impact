import React, {Component} from 'react';
import Chart from "react-apexcharts";
import faker from 'faker/locale/en_US';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Tablestock from '../../assetsnew';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import {getAll, getESG} from '../API/api.js'


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
import InsidersTable from '../../assetsnew/InsidersTable';
import {
  TinyDonutChart
} from "../components/Monitor/TinyDonutChart";

class Leaders extends Component {
    constructor(props) {
        super(props);

        this.state = {
            yf_esg: null,
            yf_all: null,
            options: {},
            series: [64, 55, 21, 17, 15],
            labels: ['AAPL', 'TSLA', 'NVDA', 'AMD', 'FB'],
        };
    }


    async componentDidMount() {
        const ticker = 'AMD'
        await getAll(ticker)
        .then(data => this.setState({ 
          yf_all: data.quoteSummary.result[0]})   
        )
        await getESG(ticker)
        .then(data => this.setState({ 
          yf_esg: data})   
        )
      }

render() {
    if (!this.state.yf_all) {
        return <div>Loading Data</div>;
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
                      title="EV and Self-Driving"
                      className=""
                  />
                  <div className="h3">
                    <span className="text-info mr-3">Explore our data assets</span>
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
                                <p>Real Time Sustainability Profile</p>
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
                                        <span><Badge color="danger">SPY</Badge></span>
                                    </div>
                                    <div className="text-center">
                                        <h6 className="mb-0">15%</h6>
                                        <span><Badge color="secondary">NDX</Badge></span>
                                    </div>
                                    <div className="text-center">
                                        <h6 className="mb-0">7%</h6>
                                        <span><Badge color="primary">DJI</Badge></span>
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
                                <h5 className="mb-1 text-info">SENTIMENT</h5>
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
        </CardDeck>

            <CardDeck>
                <Card className="mb-3">
                    <CardBody className="pb-0">
                        <div className="d-flex mb-4 justify-content-center">
                            <CardTitle tag="h5">
                                Total Value Traded
                            </CardTitle>
                        </div>
                        <div className="text-center mb-4">
                            <h2>
                               $2,890.12
                            </h2>
                            <div className="mb-1 text-success">
                                <i className="fa mr-1 fa-caret-up"></i>
                                23.34%
                            </div>
                            <div>
                                Month: <span className="text-info">December 2020</span>
                            </div>
                        </div>
                    </CardBody>
                    <CardBody className="p-0">
                        <TinyAreaChart />
                    </CardBody>
                </Card>
                <Card className="mb-3">
                    <CardBody className="pb-0">
                        <div className="d-flex mb-4 justify-content-center">
                            <CardTitle tag="h5">
                                Total Transactions
                            </CardTitle>
                        </div>
                        <div className="text-center mb-4">
                            <h2>
                                52
                            </h2>
                            <div className="mb-1 text-success">
                                <i className="fa mr-1 fa-caret-up"></i>
                                15.23%
                            </div>
                            <div>
                                Activity level: <span className="text-primary">Medium</span>
                            </div>
                        </div>
                    </CardBody>
                    <CardBody>
                        <Progress animated striped value={45} />
                    </CardBody>
                </Card>
                <Card className="mb-3">
                    <CardBody className="pb-0">
                        <div className="d-flex mb-4 justify-content-center">
                            <CardTitle tag="h5">
                                Most Traded Stock
                            </CardTitle>
                        </div>
                        <div className="text-center mb-4">
                            <h2>
                                TSLA
                            </h2>
                            <div className="mb-3">
                                <Badge color="info">LONG</Badge>
                            </div>
                            <div>
                                Trend: <span className="text-info">STRONG</span>
                            </div>
                        </div>
                    </CardBody>
                    <CardBody>
                    </CardBody>
                </Card>
            </CardDeck>

            <CardDeck>
                <Card>
                    <CardBody className="pb-0">
                            <div className="d-flex mb-2 justify-content-center">
                                <CardTitle tag="h5">
                                    Stock Trading Activity
                                </CardTitle>
                            </div>
                            <div className="donut pb-2">
                                <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
                            </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="pb-0">
                        <div className="d-flex mb-2 justify-content-center">
                            <CardTitle tag="h5">
                                Momentum: <span className="text-info">January 2021</span>
                            </CardTitle>
                        </div>
                        <div className="text-center mb-4">
                            <h2>
                                Bullish
                            </h2>
                            <div className="mb-3mb-1">
                                <Badge color="success">LONG</Badge>
                            </div>
                            <div>
                                Trend: <span className="text-info">STRONG</span>
                            </div>
                        </div>
                            <Row className="text-center">
                                <Col sm={ 6 }>
                                        <SessionsByDevice 
                                            title="LONG"
                                            valuePercent="60"
                                            valuePercentColor="text-success"
                                            value="$201,345"
                                            valueColor="text-muted"
                                        />
                                </Col>
                                <Col sm={ 6 }>
                                        <SessionsByDevice 
                                            title="SHORT"
                                            valuePercent="50"
                                            valuePercentColor="text-danger"
                                            value="$134,201"
                                            valueColor="text-muted"
                                        />
                                </Col>
                            </Row>
                            <Progress multi style={{height: "5px"}}>
                                <Progress animated bar color="success" value="60" />
                                <Progress animated bar color="danger" value="50" />
                            </Progress>
                    </CardBody>
                </Card>

            </CardDeck>
            <Row className="mt-3">
              <InsidersTable/>
            </Row>

          </Container>
    </Container>
    );
  } //render
}
export default Leaders
