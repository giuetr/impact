import React, {Component} from 'react';
import Chart from "react-apexcharts";
import faker from 'faker/locale/en_US';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import PoliticsTable from '../../assetsnew/PoliticsTable'
import { getQuote_internal, getSenator} from '../API/api.js'
 
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
  

class Politics extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tickers:null,
            senators: null,
            yf_quote: null,
            currentPrice: null,
            options: {},
            series: [64, 55, 21, 17, 15],
            labels: ['AAPL', 'TSLA', 'NVDA', 'AMD', 'FB'],
        };
    }

    async componentWillMount() {
        await getSenator()
        .then(data =>this.setState({
            senators: data,
            tickers: _.values(data).map(function(i) {
                return (
                   i.ticker
              );
            }).toString()
            })
       
            )
            getQuote_internal()
        .then(data => this.setState({ 
        yf_quote: data})   
        )
    }

render() {
    if (!this.state.senators ) {
        return <div>Loading Data Engine <i className="fa fa-fw fa-spinner fa-spin text-info"></i></div>;   
      }
      var merged = _.merge(_.keyBy(this.state.senators, 'ticker'), _.keyBy(this.state.yf_quote, 'symbol'));
      var values = _.values(merged);
     // console.log(values);
      const final = Object.entries(values);
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
                      title="Politicians Trading"
                      className=""
                  />
                  <div className="h3">
                    <span className="text-info mr-3">Market insights from the US Senators trading activity</span>
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
                               123
                            </h2>
                            <div className="mt-2">
                                LONG: <span className="text-info">32</span>
                            </div>
                            <div>
                                SHORT: <span className="text-danger">21</span>
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
                                MEDIAN TRADE VALUE
                            </CardTitle>
                        </div>
                        <div className="text-center mb-0">
                            <h2>
                                $ 10,000
                            </h2>
                            <div className="mt-2">
                                Most Active Senator: <span className="text-info">Michael Jones</span>
                            </div>
                            <div>
                                Activity level: <span className="text-info">Medium</span>
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
                            <Badge color="success">TSLA</Badge> - <span className="text-info">3000000</span> <span className="small">Trades</span>
                            </h4>
                        </div>
                        <div class="hr-text hr-text-center mb-2 mt-2"><span>vs.</span></div>
                        <div>
                            <p className="mb-0">
                            <i className="fa fa-circle text-danger mr-2"></i> 
                                Short
                            </p>
                            <h4 className="mt-0 mb-0">
                            <Badge color="danger">AMD</Badge> - <span className="text-info">200200</span> <span className="small">Trades</span>
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
              <PoliticsTable items={final}/>
            </Row>

          </Container>
    </Container>
    );
  } //render
}
export default Politics
