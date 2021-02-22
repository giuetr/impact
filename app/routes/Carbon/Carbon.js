import React, {Component} from 'react';
import Chart from "react-apexcharts";
import faker from 'faker/locale/en_US';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Mktstatus from '../components/Mktstatus/Mktstatus';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { getQuote, getCarbon} from '../API/api.js'


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
            tickers:null,
            carbon: null,
            yf_quote: null,
            options: {},
            series: [64, 55, 21, 17, 15],
            labels: ['AAPL', 'TSLA', 'NVDA', 'AMD', 'FB'],
        };
    }


    async componentDidMount() {
        await getCarbon()
        .then(data =>this.setState({
            carbon: data,
            tickers: _.values(data).map(function(i) {
                return (
                   i.Symbol
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
    if (!this.state.carbon) {
        return <div>Loading Data Engine <i className="fa fa-fw fa-spinner fa-spin text-info"></i></div>;
      }
      var merged = _.merge(_.keyBy(this.state.carbon, 'Symbol'), _.keyBy(this.state.yf_quote, 'symbol'));
      var values = _.values(merged);
      const final = Object.entries(values);
    return (
        <Container>
            <Mktstatus/>
          
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
                <CarbonTable items={final}/>
            </Row>

          </Container>
    </Container>
    );
  } //render
}
export default Carbon
