import React, {Component} from 'react';
import Chart from "react-apexcharts";
import faker from 'faker/locale/en_US';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import ShortsTable from '../../assetsnew/ShortsTable';
import Mktstatus from '../components/Mktstatus/Mktstatus';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { getQuote_internal, getShort} from '../API/api.js'


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
  } from "../components/Monitor/TinyDonutChart"
  

class Shorts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tickers:null,
            shorts: null,
            yf_quote: null,
            options: {},
            series: [64, 55, 21, 17, 15],
            labels: ['AAPL', 'TSLA', 'NVDA', 'AMD', 'FB'],
        };
    }


    async componentDidMount() {
        await getShort()
        .then(data =>this.setState({
            shorts: data,
            tickers: _.values(data).map(function(i) {
                return (
                   i.symbol
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
    if (!this.state.shorts) {
        return <div>Loading Data Engine <i className="fa fa-fw fa-spinner fa-spin text-info"></i></div>;
      }
      var merged = _.merge(_.keyBy(this.state.shorts, 'symbol'), _.keyBy(this.state.yf_quote, 'symbol'));
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
                      title="Shorts Radar"
                      className=""
                  />
                  <div className="h3">
                    <span className="text-info mr-3">Spot short squeezes before the market</span>
                  </div>

              </div>
            </div>

            <Row className="mt-3">
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody className="pb-0">
                            <CardTitle tag="h5" className="text-info">
                                Top Short Interest
                            </CardTitle>
                            <p className="mb-4">
                                The stock with the highest short interest
                            </p>
                            <Row>
                            <Col sm={4}>
                                <div className="d-flex mb-4 justify-content-center">
                                <h5 className="mb-1 text-info">HIGHEST SHORT INTEREST</h5>
                                </div>
                                <div className="text-center mb-4">
                                    <h2>
                                    BBBY
                                    </h2>
                                    <div className="mt-2">
                                        Insiders ownership: <span className="text-info">10%</span>
                                    </div>
                                    <div>
                                        Institutional ownership: <span className="text-info">25%</span>
                                    </div>
                                </div>
                            </Col>    


                            <Col sm={ 4 }>
                                <div className="d-flex mb-4 justify-content-center">
                                    <h5 className="mb-1 text-info">CHANGE IN SHORTS</h5>
                                </div>
                                <div className="text-center mb-4">
                                    <h2 className="text-info">
                                    20%
                                    </h2>
                                    <div className="mt-2">
                                        Shorted shares now: <span className="text-muted">3129312</span>
                                    </div>
                                    <div>
                                        Shorted shares prev. month: <span className="text-muted">23192312</span>
                                    </div>
                                </div>
                                  
                            </Col>
                            <Col sm={ 4 }>
                                <div className="d-flex mb-4 justify-content-center">
                                    <h5 className="mb-1 text-info">SHORT % OF FLOAT</h5>
                                </div>
                                <div className="text-center mb-4">
                                    <h2>
                                    23%
                                    </h2>
                                    <div className="mt-2">
                                        Vs. Previous Month: <span className="text-info">3129312</span>
                                    </div>
                                </div>
                            </Col>
                              
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>


            <Row className="mt-3">
                <ShortsTable items={final}/>
            </Row>

          </Container>
    </Container>
    );
  } //render
}
export default Shorts
