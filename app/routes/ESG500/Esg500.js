import React, {Component} from 'react';
import Chart from "react-apexcharts";
import faker from 'faker/locale/en_US';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import InsidersTable from '../../assetsnew/InsidersTable';
import Mktstatus from '../components/Mktstatus/Mktstatus';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { getQuote, getESG_lab} from '../API/api.js'



import {
    Container,
    Row,
    Button,
    Card,
    CardBody,
    CardTitle,
    Col,
    Badge,
    Table
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
import ESG_labTable from '../../assetsnew/ESG_labTable.';
  

class Esg500 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tickers:null,
            esg_lab: null,
            yf_quote: null,
            options: {},
            series: [64, 55, 21, 17, 15],
            labels: ['AAPL', 'TSLA', 'NVDA', 'AMD', 'FB'],
        };
    }


    async componentDidMount() {
        await getESG_lab()
        .then(data =>this.setState({
            esg_lab: data,
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
    if (!this.state.esg_lab) {
        return <div>Loading Data Engine <i className="fa fa-fw fa-spinner fa-spin text-info"></i></div>;
      }
      var merged = _.merge(_.keyBy(this.state.esg_lab, 'Symbol'), _.keyBy(this.state.yf_quote, 'symbol'));
      var values = _.values(merged);
      const final = Object.entries(values);
    return (
        <Container>
            <Mktstatus/>
          
          <Container className="pl-0">
            <div className="d-flex mt-3 mb-5">
              <div>
                  <HeaderMain 
                      title="ESG Lab"
                      className=""
                  />
                  <div className="h3">
                    <span className="text-info mr-3">ESG Insights of the top US Companies</span>
                  </div>

              </div>
            </div>

            <Row className="mt-3">
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody className="pb-0">
                            <CardTitle tag="h5" className="text-info">
                                Top Stock of the Week
                            </CardTitle>
                            <p className="mb-4">
                                A selection from the top performing and most virtuous companies
                            </p>
                            <Row>
                            <Col sm={4}>
                            <div className="d-flex mb-4 justify-content-center">
                            
                            </div>
                        <div className="text-center mb-4">
                            <h2 className="text-primary">
                               KEYS
                            </h2>
                            <h4>Keysight Technologies, Inc.</h4>
                            <div className="mt-2">
                                ESG Group: <span className="text-info">Technology Hardware</span>
                            </div>
                        </div>
                            <CardBody className="p-0">
                                <TinyAreaChart />
                            </CardBody>

                            </Col>    


                            <Col sm={ 4 }>
                                <div className="mb-4">
                                    <div>
                                        <h5 className="mb-1 text-info">ESG</h5>
                                        <p>Company Scores vs. Group Averages</p>
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <TinyDonutChart />
                                        <div className="ml-2 align-self-center">
                                            <span>ESG Score</span>
                                            <h2 className="mb-0">
                                            9.5 vs. 17.036
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="text-left">
                                            <div className="small mb-2">
                                                <i className="fa fa-circle fa-fw text-info"></i> Environmental
                                            </div>
                                            <h6 className="mb-0">
                                            1.3 vs. 7.38
                                            </h6>
                                        </div>
                                        <div className="text-left">
                                            <div className="small mb-2">
                                                <i className="fa fa-circle fa-fw text-primary"></i> Social
                                            </div>
                                            <h6 className="mb-0">
                                            2.7 vs. 6.39
                                            </h6>
                                        </div>
                                        <div className="text-left">
                                            <div className="small mb-2">
                                                <i className="fa fa-circle fa-fw text-gray-300"></i> Governance
                                            </div>
                                            <h6 className="mb-0">
                                            5.8 vs. 3.26
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                  
                              </Col>
                              <Col sm={ 4 }>
                              <Table size="sm">
                                    <div className="mb-3">
                                        <h5 className="text-info">CONTROVERSIES</h5> 
                                        <p>Total: <span className="text-warning">0</span></p>
                                    </div>
                                  <tbody>
                                      <tr>
                                          <td className="text-inverse bt-0">Social Supply Chain Incidents</td>
                                          <td className="text-right bt-0">
                                              <Badge color="success" pill>0</Badge>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="text-inverse">Customer Incidents</td>
                                          <td className="text-right">
                                              <Badge color="primary" pill>0</Badge>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="text-inverse">Business Ethics Incidents</td>
                                          <td className="text-right">
                                              <Badge color="info" pill>0</Badge>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="text-inverse">Peer Average Controversies</td>
                                          <td className="text-right">
                                          1.54
                                          </td>
                                      </tr>
                                  </tbody>
                              </Table>
                            </Col>
                              
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>


            <Row className="mt-3">
                <ESG_labTable items={final}/>
            </Row>

          </Container>
    </Container>
    );
  } //render
}
export default Esg500
