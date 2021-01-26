import React, {Component} from 'react';
import Chart from "react-apexcharts";
import faker from 'faker/locale/en_US';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import InsidersTable from '../../assetsnew/InsidersTable';

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
  

class Insiders extends Component {
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
                      title="Insiders Trends"
                      className=""
                  />
                  <div className="h3">
                    <span className="text-info mr-3">Signals and trends from the trading activity of key shareholders</span>
                  </div>

              </div>
            </div>

            <CardDeck>
                <Card className="mb-3">
                    <CardBody className="pb-0">
                        <div className="d-flex mb-4 justify-content-center">
                            <CardTitle tag="h5" className="text-info">
                                TOTAL TRADES
                            </CardTitle>
                        </div>
                        <div className="text-center mb-4">
                            <h2>
                               321
                            </h2>
                            <div className="mt-2">
                                LONG: <span className="text-info">124</span>
                            </div>
                            <div>
                                SHORT: <span className="text-danger">101</span>
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
                            <CardTitle tag="h5" className="text-info">
                                TOTAL SHARES
                            </CardTitle>
                        </div>
                        <div className="text-center mb-0">
                            <h2>
                                20301232
                            </h2>
                            <div className="mt-2">
                                LONG: <span className="text-info">1123124</span>
                            </div>
                            <div>
                                SHORT: <span className="text-danger">4023012</span>
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
                            <CardTitle tag="h5" className="text-info">
                                MOST TRADED STOCKS
                            </CardTitle>
                        </div>
                        <div>
                            <p className="mb-0">
                            <i className="fa fa-circle text-success mr-2"></i> 
                                Long
                            </p>
                            <h4 className="mt-0">
                            <Badge color="success">TSLA</Badge> - <span className="text-info">3000000</span> <span className="small">Shares</span>
                            </h4>
                        </div>
                        <div class="hr-text hr-text-center mb-2 mt-2"><span>vs.</span></div>
                        <div>
                            <p className="mb-0">
                            <i className="fa fa-circle text-danger mr-2"></i> 
                                Short
                            </p>
                            <h4 className="mt-0 mb-0">
                            <Badge color="danger">AMD</Badge> - <span className="text-info">200200</span> <span className="small">Shares</span>
                            </h4>
                        </div>
                    </CardBody>
                    <CardBody>
                    </CardBody>
                </Card>
                <Card className="mb-3">
                    <CardBody className="pb-0">
                        <div className="d-flex mb-2 justify-content-center">
                            <CardTitle tag="h5" className="text-info">
                                L/S MOMENTUM
                            </CardTitle>
                        </div>
                        <div className="text-center mb-3">
                            <h2 className="text-info">
                            <i class="fa mr-1 fa-caret-up"></i>
                                1.3%
                            </h2>
                            <div className="">
                                <Badge color="success">LONG</Badge>
                            </div>
                        </div>
                            <Row className="mt-2 text-center">
                                <Col sm={ 6 }>
                                    <div className="mb-2">
                                        LONG
                                    </div>
                                    <h2 className="text-info">
                                        80%
                                    </h2>
                                </Col>
                                <Col sm={ 6 }>
                                    <div className="mb-2">
                                        SHORT
                                    </div>
                                    <h2 className="text-danger">
                                        20%
                                    </h2>
                                </Col>
                            </Row>
                            <Progress multi style={{height: "5px"}}>
                                <Progress animated bar color="info" value="80" />
                                <Progress animated bar color="danger" value="20" />
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
export default Insiders
