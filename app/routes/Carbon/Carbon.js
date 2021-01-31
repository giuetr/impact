import React, {Component} from 'react';
import Chart from "react-apexcharts";
import faker from 'faker/locale/en_US';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

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
import {
    TinyDonutChart
  } from "../components/Monitor/TinyDonutChart";
import CarbonTable from '../../assetsnew/CarbonTable.js';


class Carbon extends Component {
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
        return <div>Loading Data Engine <i className="fa fa-fw fa-leaf text-info"></i></div>;
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
                      title="Carbon Leaders"
                      className=""
                  />
                  <div className="h3">
                    <span className="text-info mr-3">Measurable insights on the carbon footprint and policies of top US corporations</span>
                  </div>

              </div>
            </div>

            <Row className="mt-3">
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody className="pb-0">
                            <Row>
                            <Col sm={4}>
                                <div className="d-flex mb-4 justify-content-center">
                                <h5 className="mb-1 text-info">TOP POLLUTER</h5>
                                </div>
                                <div className="text-center mb-4">
                                    <h2>
                                    XOM
                                    </h2>
                                    <div className="mt-2 text-inverse">
                                        Exxon Mobil Corporation
                                    </div>
                                    <div>
                                        Industry: <span className="text-info">Oil &amp; Gas Integrated</span>
                                    </div>
                                    <div>
                                        Sector: <span className="text-info">Energy</span>
                                    </div>
                                </div>
                            </Col>    


                            <Col sm={ 4 }>
                                <div className="d-flex mb-4 justify-content-center">
                                    <h5 className="mb-1 text-info">TOTAL GHG EMISSIONS</h5>
                                </div>
                                <div className="text-center mb-4">
                                    <h2 className="text-yellow">
                                    43712138
                                    </h2>
                                    <div className="mt-2">
                                    Units of metric tons of carbon dioxide equivalent using GWP's from IPCC's AR4
                                    </div>
                                </div>
                                  
                            </Col>
                            <Col sm={ 4 }>
                                <div className="d-flex mb-4 justify-content-center">
                                    <h5 className="mb-1 text-info">1 YEAR PERFORMANCE</h5>
                                </div>
                                <div className="text-center mb-4">
                                    <h2 className="text-danger">
                                    -23%
                                    </h2>
                                    <div className="mt-2">
                                        Monthly return: <span className="text-danger">-11%</span>
                                    </div>
                                </div>
                            </Col>
                              
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>


            <Row className="mt-3">
                <CarbonTable/>
            </Row>

          </Container>
    </Container>
    );
  } //render
}
export default Carbon
