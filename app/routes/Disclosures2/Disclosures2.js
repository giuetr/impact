import React, {Component} from 'react';
import Chart from "react-apexcharts";
import faker from 'faker/locale/en_US';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Mktstatus from '../components/Mktstatus/Mktstatus';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {Link} from 'react-router-dom'


import {
    Container,
    Row,
    Button,
    Card,
    CardBody,
    CardTitle,
    CardDeck,
    CardHeader,
    CardFooter,
    CardColumns,
    Col,
    Badge,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
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
  TinyDonutChart
} from "../components/Monitor/TinyDonutChart";

class Disclosures2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPrice: null,

            series: [{
                name: 'ESG Rating',
                data: [5.3, 5.2, 6.1, 7.1, 4.9, 5.6, 7.2, 5.3, 7.4, 6.8, 8.3, 10]
              }],
              options: {
                chart: {
                  type: 'bar',
                },
                plotOptions: {
                  bar: {
                    dataLabels: {
                      position: 'top', // top, center, bottom
                    },
                  }
                },
                dataLabels: {
                  enabled: true,
                  formatter: function (val) {
                    return val + "%";
                  },
                  offsetY: -20,
                  style: {
                    fontSize: '12px',
                    colors: ["#304758"]
                  }
                },
                
                xaxis: {
                  categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                  position: 'top',
                  axisBorder: {
                    show: false
                  },
                  axisTicks: {
                    show: false
                  },
                  crosshairs: {
                    fill: {
                      type: 'gradient',
                      gradient: {
                        colorFrom: '#D8E3F0',
                        colorTo: '#BED1E6',
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                      }
                    }
                  },
                  tooltip: {
                    enabled: true,
                  }
                },
                yaxis: {
                  axisBorder: {
                    show: false
                  },
                  axisTicks: {
                    show: false,
                  },
                  labels: {
                    show: false,
                    formatter: function (val) {
                      return val + "";
                    }
                  }
                
                },
                title: {
                  text: 'Monthly ESG Rating',
                  floating: true,
                  offsetY: 330,
                  align: 'center',
                  style: {
                    color: '#444'
                  }
                }
              },

            options2: {
                series: [85],
                chart: {
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: '70%',
                  }
                },
              },
              labels: ['ESG Allocation'],
              },
            
        };
    }


render() {
    return (
        <Container>
            <Mktstatus/>
          <Container className="pl-0">
            <div className="d-flex mt-3 mb-5">
              <div>
                  <HeaderMain 
                      title="ESG Disclosures Report"
                      className=""
                  />
                  <div className="h4">
                    <span className="text-info mr-3">ESG Report</span>
                  </div>

              </div>
            </div>
            
            <Row className="mt-3">
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody className="pb-0">
                            <CardTitle tag="h5" className="text-info">
                                ESG Profile
                            </CardTitle>
                            <p className="mb-3">
                                Overview of the fund sustainability imprint
                            </p>
                            
                            <Row>
                            <Col sm={ 4 }>
                                <div className="d-flex mb-4 justify-content-center">
                                    <h5 className="mb-1 text-info">TOTAL GHG EMISSIONS</h5>
                                </div>
                                <div className="text-center mb-4">
                                    <h2 className="text-yellow">
                                    301,294
                                    </h2>
                                    <div className="mt-2">
                                    Units of metric tons of carbon dioxide
                                    </div>
                                </div>
                                  
                            </Col> 


                            <Col sm={ 4 }>
                                <div className="mb-4">
                                    <div>
                                        <h5 className="mb-1 text-info">Portfolio ESG Risk</h5>
                                        <p>Average Risk Rating</p>
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <TinyDonutChart />
                                        <div className="ml-2 align-self-center">
                                            <span>ESG Score</span>
                                            <h2 className="mb-0">
                                            10
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="text-left">
                                            <div className="small mb-2">
                                                <i className="fa fa-circle fa-fw text-info"></i> Environmental
                                            </div>
                                            <h6 className="mb-0">
                                            2
                                            </h6>
                                        </div>
                                        <div className="text-left">
                                            <div className="small mb-2">
                                                <i className="fa fa-circle fa-fw text-primary"></i> Social
                                            </div>
                                            <h6 className="mb-0">
                                            4
                                            </h6>
                                        </div>
                                        <div className="text-left">
                                            <div className="small mb-2">
                                                <i className="fa fa-circle fa-fw text-gray-300"></i> Governance
                                            </div>
                                            <h6 className="mb-0">
                                            4
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                  
                              </Col>
                              <Col sm={ 4 }>
                              <Table size="sm">
                                    <div className="mb-3">
                                        <h5 className="text-info">CONTROVERSIES</h5> 
                                        <p>Sector Average: <span className="text-warning">2.03</span></p>
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
                                          <td className="text-inverse">Trailing Average Controversies</td>
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
            <CardDeck className="mb-3">
                <Card>
                    <CardBody className="pb-0">
                        <div className="d-flex mb-2 justify-content-center">
                            <CardTitle tag="h5">
                                Monthly ESG Rating
                            </CardTitle>
                        </div>
                        <div className="donut pb-2">
                            <Chart options={this.state.options} series={this.state.series} type="bar"/>
                        </div>

                        

                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="pb-0">
                            <div className="d-flex mb-2 justify-content-center">
                                <CardTitle tag="h5">
                                    ESG Asset Allocation
                                </CardTitle>
                            </div>
                            <div className="donut pb-2">
                                <Chart options={this.state.options2} series={this.state.options2.series} height={300} type="radialBar"/>
                            </div>
                    </CardBody>
                </Card>
            </CardDeck>

            <Card>
                <CardBody className="pb-0">
                    <div className="h2 mt-3">
                        <span className=" mr-3">Financial Product Disclosures</span>
                    </div>
                    <div className="h4 mt-5">
                        <span className="text-info mr-3">Environmental and/or social characteristics</span>
                    </div>
                    <p>
                        This financial product promotes environmental or social characteristics, but does not have as its objective a sustainable investment. It might invest partially in assets that have a sustainable objective, for instance qualified as sustainable according to the EU classification.
                    </p>
                    <div className="h4 mt-5">
                        <span className="text-info mr-3">Environmental and/or social characteristics promoted by the financial product</span>
                    </div>
                    <p>
                    The characteristic promoted by this financial product consist in the exclusion of investments in companies that own fossil fuel reserves.
                    </p>
                    <div className="h4 mt-5">
                        <span className="text-info mr-3">Investment strategy followed to meet the E/S characteristics</span>
                    </div>
                    <p>
                        The investment strategy aims at tracking an index (the TRXI World Fossil Fuel Free Index) that is primarily designed to exclude companies based on the specific ESG criterion of ownership of fossil fuel reserves. It serves as a potential replacement for current TRXI World index exposure for investors interested in eliminating fossil fuel reserves from their portfolio.
                    </p>
                    <div className="h4 mt-5">
                        <span className="text-info mr-3">Binding elements for the investment selection</span>
                    </div>
                    <p>
                        The exclusion of investments in companies that own fossil fuel reserves related to fossil fuel reserves is the binding element.
                    </p>
                    <div className="h4 mt-5">
                        <span className="text-info mr-3">Strategy implementation on a continuous basis</span>
                    </div>
                    <p>
                        The investment seeks to provide investment results that, before fees and expenses, correspond generally to the total return performance of the TRXI World Fossil Fuel Free Index. Normally, the fund generally invests substantially all, but at least 95%, of its total assets in the securities comprising the index. In addition, it may invest in equity securities that are not included in the index, cash and cash equivalents or money market instruments. The index is designed to measure the performance of companies in the TRXI World Index that are “fossil fuel free”, which are defined as companies that do not own fossil fuel reserves. The fund is non-diversified. The compliance with the “fossil fuels free” characteristics is monitored on a regular basis.
                    </p>
                    <div className="h4 mt-5">
                        <span className="text-info mr-3">Amount of potential investments excluded</span>
                    </div>
                    <p>
                        The implementation of the selection criteria leads to the exclusion of at least 15% of potential investments. The strategy eliminates companies that own fossil fuel reserves from the TRXI World index.
                    </p>
                    <div className="h4 mt-5">
                        <span className="text-info mr-3">Policy to assess good governance practices of the investee companies</span>
                    </div>
                    <p>
                        The investee companies are rated for governance aspects using the IMPACT Proprietary Rating Suite.
                    </p>
                    <div className="h4 mt-5">
                        <span className="text-info mr-3">Key Assets</span>
                    </div>
                    <p>
                    The fund may invest in equity securities that are not included in the index, cash and cash equivalents or money market instruments.
                    </p>
                    <div className="h4 mt-5">
                        <span className="text-info mr-3">Impact of the sustainable investments of the financial product to a sustainable objective</span>
                    </div>
                    <p>
                    Investments in solar photovoltaic energy production are considered as significantly contributing to climate change mitigation under the EU Taxonomy. The investments in companies supplying water contribute to climate change adaptation. The activity of the company supplying water has a substantial contribution to GHG emissions savings through low specific energy consumption in the water supply system measured in kWh per cubic meter of water. Nonetheless, all of the selected companies supplying water might not be compliant with EU Taxonomy energy consumption thresholds for substantial contribution to climate change adaptation.
                    </p>
                    <div className="h4 mt-5">
                        <span className="text-info mr-3">Principal adverse impacts on sustainability</span>
                    </div>
                    <p>
                    Upon investment and over the life of the product, we assess and monitor indicators that are deemed to indicate the presence of a principal adverse impact as per EU law, except for all biodiversity-related indicators, for which we are unable to collect data. More details can be found under the prospectus section on Adverse Impact. We address adverse impacts by engaging with investee companies. We use research from proxy voting companies to help us decide how to vote.
                    </p>
                </CardBody>
            </Card>

          </Container>
    </Container>
    );
  } //render
}
export default Disclosures2
