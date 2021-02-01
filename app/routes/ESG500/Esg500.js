import React, {Component} from 'react';
import Chart from "react-apexcharts";
import faker from 'faker/locale/en_US';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import TableStock from '../../assetsnew/Tablestock';

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
  } from "../components/Monitor/TinyDonutChart"
  

class Esg500 extends Component {
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
        return <div>Loading Data Engine <i className="fa fa-fw fa-spinner fa-spin text-info"></i></div>;
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
                            <h2>
                               AMD
                            </h2>
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
                                            33
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="text-left">
                                            <div className="small mb-2">
                                                <i className="fa fa-circle fa-fw text-info"></i> Environmental
                                            </div>
                                            <h6 className="mb-0">
                                            33
                                            </h6>
                                        </div>
                                        <div className="text-left">
                                            <div className="small mb-2">
                                                <i className="fa fa-circle fa-fw text-primary"></i> Social
                                            </div>
                                            <h6 className="mb-0">
                                            33
                                            </h6>
                                        </div>
                                        <div className="text-left">
                                            <div className="small mb-2">
                                                <i className="fa fa-circle fa-fw text-gray-300"></i> Governance
                                            </div>
                                            <h6 className="mb-0">
                                            93
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                  
                              </Col>
                              <Col sm={ 4 }>
                              <Table size="sm">
                                    <div className="mb-3">
                                        <h5 className="text-info">CONTROVERSIES</h5> 
                                        <p>Total: <span className="text-warning">3</span></p>
                                    </div>
                                  <tbody>
                                      <tr>
                                          <td className="text-inverse bt-0">Social Supply Chain Incidents</td>
                                          <td className="text-right bt-0">
                                              <Badge color="success" pill>1</Badge>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="text-inverse">Customer Incidents</td>
                                          <td className="text-right">
                                              <Badge color="primary" pill>1</Badge>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="text-inverse">Business Ethics Incidents</td>
                                          <td className="text-right">
                                              <Badge color="info" pill>1</Badge>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="text-inverse">Peer Average Controversies</td>
                                          <td className="text-right">
                                              1.3
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
                <TableStock/>
            </Row>

          </Container>
    </Container>
    );
  } //render
}
export default Esg500
