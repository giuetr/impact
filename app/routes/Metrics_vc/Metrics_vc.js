import React, {Component} from 'react';
import Chart from "react-apexcharts";
import faker from 'faker/locale/en_US';

import { getQuote, getTrending, getMktnews, getSectors } from "../API/api.js";
import Mktstatus from '../components/Mktstatus/Mktstatus';
import {Link} from 'react-router-dom'

import {
    CardTitle,
    Container,
    Row,
    Button,
    Card,
    CardBody,
    CardDeck,
    CardHeader,
    CardFooter,
    Progress,
    Label,
    Col,
    Badge,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    FormGroup,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
    Table,
    Media,
    ModalBody,
    ModalFooter,
    UncontrolledModal,
    ModalHeader
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
  } from "../components/Monitor/TinyDonutChart"

class Metrics_vc extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [
                {
                name: "Fund",
                data: [10, 41, 35, 51, 49, 24, 69, 91, 148, 113, 133, 151]
                },
                {
                name: "Benchmark",
                data: [12, 33, 43, 41, 33, 12, 71, 95, 112, 121, 143, 147]
                }
            ],
            options: {
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                }
              },
              colors: ['#77B6EA', '#33AE9A'],
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
                text: 'Fund Performance vs. Benchmark',
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

            options3: {
                chart: {
                    height: 350,
                    type: 'treemap'
                  }
            },
            series3: [{
                data:[{
                    x: 'Technology',
                    y: 218
                  },
                  {
                    x: 'IT',
                    y: 149
                  },
                  {
                    x: 'Agriculture',
                    y: 184
                  },
                  {
                    x: 'Consumer Staple',
                    y: 55
                  },]
            }],

            series2: [{
                data: 
                [{
                    x: 1,
                    y: 2.14,
                    z: 'title1'
                }, {
                    x: 1.2,
                    y: 2.19,
                    z: 'hey'
                }, {
                    x: 1.8,
                    y: 2.43,
                    z: 'mike'
                }, {
                    x: 2.3,
                    y: 3.8,
                    z: 'BE'
                }, {
                    x: 2.6,
                    y: 4.14,
                    z: 'aye'
                }, {
                    x: 2.9,
                    y: 5.4,
                    z: 'ral'
                }]
              },
            ],
            options2: {
                chart: {
                    height: 350,
                    type: 'scatter',
                  },
                  
                  xaxis: {
                    
                  },
                  yaxis: {
                    
                  },
                  tooltip: {
                    y: {
                        formatter: undefined,
                        title: 'ESG: '
                    },
                    z: {
                        formatter: undefined,
                        title: 'Title: '
                    },
                  },
                  fill: {
                    type: 'gradient',
                    gradient: {
                      shade: 'light',
                      shadeIntensity: 0.25,
                      gradientToColors: undefined,
                      inverseColors: true,
                      opacityFrom: 0.85,
                      opacityTo: 0.85,
                      stops: [50, 0, 100]
                    },
                  }
              },



          yf_sectors: null,
          yf_trend: null,
          yf_mktnws: null,
          yf_financialData_nasdaq: null,
          yf_financialData_djones:null,
          yf_financialData_SP500: null,
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
      if (!this.state.yf_financialData_SP500 || !this.state.yf_trend || !this.state.yf_mktnws) {
        return <div>Loading Data Engine <i className="fa fa-fw fa-spinner fa-spin text-info"></i></div>;
      }
    return (
        <Container>
            <Mktstatus/>
        
        <Container className="pl-0">
            <div className="d-flex mt-3 mb-5">
                <div>
                    <HeaderMain 
                        title="Fund Analytics"
                        className=""
                    />
                    <div className="h3">
                        <span className="text-info mr-3">NVSLR</span>
                        <span>101.09</span>
                        <span className="small mr-3">EUR</span>
                        <span className= "text-info">+1.03%</span>
                    </div>
                </div>
                
                

                <div className="d-flex ml-auto align-self-start">
                  <div className="d-flex flex-column">
                    <Button id="modalDefault202" size="lg" className="mt-1" color="info">
                        <i className="fa fa-envira mr-2"></i> Invest
                    </Button>
                    <Button outline size="lg" className="mt-3" color="info">
                        <i className="fa fa-star-o mr-2"></i> Add To Favorites
                    </Button>
                  </div>
                </div>

                    { /* START Investment Modal */}
                    <UncontrolledModal target="modalDefault202">
                        <ModalHeader tag="h4">
                            Invest Now
                        </ModalHeader>
                        <ModalBody>
                            <h5 className="text-info">
                                FUND SUMMARY
                            </h5>
                            <h6>NOVA SOLAR FARM</h6>
                            <div className="mb-5">
                                <p className="text-dark fw-500 mb-0">Size: <span className="text-secondary fw-400">€50,000,000</span></p>
                                <p className="text-dark fw-500 mb-0">Minimum Investment: <span className="text-secondary fw-400">10,000</span></p>
                                <p className="text-dark fw-500 mb-0">1Y Return: <span className="text-secondary fw-400">5.03%</span></p>
                                <p className="text-dark fw-500 mb-0">Fee: <span className="text-secondary fw-400">0.5%</span></p>
                            </div>

                            <div className="mb-5">
                                <h5 className="text-info">
                                    SELECT YOUR ACCOUNT
                                </h5>
                                <p>Select the investment account</p>
                                <FormGroup row>
                                        <Col sm={12}>
                                            <Input 
                                                type="select" 
                                                name="select" 
                                                id="defaultSelect" 
                                            >
                                                <option defaultValue="">Select Account</option>
                                                <option>Portfolio I</option>
                                                <option>Portfolio II</option>
                                                <option>Portfolio III</option>
                                            </Input>
                                        </Col>
                                </FormGroup>
                                
                            </div>

                            <div className="mb-5">
                                <h5 className="text-info">
                                    SELECT INVESTMENT AMOUNT
                                </h5>
                                <p>Select the amount to invest or enter a custom amount:</p>
                                        <Form>
                                            <FormGroup>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="radio" name="radioInline" defaultChecked />{' '}
                                                        €10,000
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="radio" name="radioInline" />{' '}
                                                        €50,000
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="radio" name="radioInline" disabled />{' '}
                                                        €100,000
                                                    </Label>
                                                </FormGroup>
                                            </FormGroup>
                                        </Form>
                                        <div className="mt-3 mb-3">
                                            <InputGroup>
                                                <InputGroupAddon addonType="prepend">€</InputGroupAddon>
                                                <Input placeholder="Custom Amount" id="leftAddon" />
                                            </InputGroup>
                                        </div>
                                
                            </div>

                            
                            

                        </ModalBody>
                        <ModalFooter>
                            <UncontrolledModal.Close color="link" className="text-info">
                                Close
                            </UncontrolledModal.Close>
                            <UncontrolledModal.Close color="info" size="lg">
                                Invest
                            </UncontrolledModal.Close>
                        </ModalFooter>
                    </UncontrolledModal>

            </div>
            
        </Container>

        <CardDeck>
            { /* START Card Widget */}
            <Card className="mb-3">
                    <CardBody>
                        <div>
                            <div>
                                <h6 className="mb-1 text-info">ESG</h6>
                                <p>Real Time Sustainability Profile</p>
                            </div>
                            <div className="mb-3 d-flex">
                                <TinyDonutChart />
                                <div className="ml-2 align-self-center">
                                    <span>ESG Risk</span>
                                    <h2 className="mb-0">
                                    10
                                      </h2>
                                    <span>Peer avg: <span className="text-info">
                                    13
                                    </span></span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-info"></i> Eco: <span>2</span>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-primary"></i> Social: <span>4</span>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-gray-300"></i> Gov: <span>4</span>
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
                                <p> 1Y Return</p>
                            </div>
                            <div className="mb-3 d-flex">
                                <div className="ml-2 align-self-center">
                                    <h2 className="mb-0">5.03%</h2>
                                    <span><span className="text-info">+1%</span> from Benchmark</span>
                                </div>
                            </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <div className="text-center">
                                        <h6 className="mb-0">3.02%</h6>
                                        <span>1 Month</span>
                                    </div>
                                    <div className="text-center">
                                        <h6 className="mb-0">21.12%</h6>
                                        <span>3 Years</span>
                                    </div>
                                    <div className="text-center">
                                        <h6 className="mb-0">25.45%</h6>
                                        <span>All</span>
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
                                <h5 className="mb-1 text-info">VALUATION &amp; SIZE</h5>
                                <p>Key Metrics</p>
                            </div>
                            <div className="mb-3 d-flex">
                                <div className="ml-2 align-self-center">
                                    <h2 className="mb-0">50M</h2>
                                    <span className="text-info">NAV</span>
                                </div>
                            </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <div className="text-center">
                                        <h6 className="mb-0">2%</h6>
                                        <span>Volatility</span>
                                    </div>
                                    <div className="text-center">
                                        <h6 className="mb-0">0.2</h6>
                                        <span>Beta</span>
                                    </div>
                                </div>
                        </div>
                    </CardBody>
                </Card>

                { /* START Card Widget */}
                <Card className="mb-3" type="border" color="success">
                    <CardBody>
                        <div>
                            <div className="mb-4">
                                <h5 className="mb-1 text-info">TREND &amp; SENTIMENT</h5>
                                <p>Key Metrics</p>
                            </div>
                            <div className="mb-3 d-flex">
                                <div className="ml-2 align-self-center">
                                    <h2 className="mb-0">Bullish</h2>
                                    <span>Avg. <span className="text-info">Market</span></span>
                                </div>
                            </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <div className="text-center">
                                        <h6 className="mb-0"><Badge color="info">BULLISH</Badge></h6>
                                        <span>Sentiment</span>
                                    </div>
                                    <div className="text-center">
                                        <h6 className="mb-0"><Badge color="warning">AVERAGE</Badge></h6>
                                        <span>Momentum</span>
                                    </div>
                                    <div className="text-center">
                                        <h6 className="mb-0">5M</h6>
                                        <span>Volume</span>
                                    </div>
                                </div>
                        </div>
                    </CardBody>
                </Card>
            { /* START Card Widget */}
        </CardDeck>

        
        <Row className="mb-4">
            <Col sm={12}>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5" className="text-info">
                            Fund overview
                        </CardTitle>
                        <p>
                            The purpose of the fund is to provide investors with a medium-term return via investment in shares of companies listed in Portugal and Spain’s regulated markets. Alternatively, if said companies are listed in other regulated markets they shall have management or relevant revenue sources in these two markets while preferring companies that adopt best practices in terms of Governance, Human Rights and Environment, whilst declining any investment in companies that operate in controversial sectors, such as Tobacco, Gambling and Personal Firearms or whose main revenues are obtained in the aforementioned sectors.
                        </p>
                    </CardBody>
                </Card>
            </Col>
        </Row>

        <Row className="mb-4">
            <Col sm={12}>
            <CardDeck>
              
              <Card className="d-flex flex-column">
              <CardHeader className="bb-0 pt-4 bg-none text-info" tag="h5">
                  Key Metrics
              </CardHeader>
              <Table responsive hover className="table mb-0">
                  <thead>
                      <tr>
                          <th scope="col" className="bt-0">Indicator</th>
                          <th scope="col" className="text-right bt-0">Value</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td className="align-middle text-inverse">
                          Shares Outstanding
                          </td>
                          <td className="align-middle text-right text-info">
                          20,000
                          </td>
                      </tr>
                      <tr>
                          <td className="align-middle text-inverse">
                          Total Investors
                          </td>
                          <td className="align-middle text-right text-info">
                          315
                          </td>
                      </tr>
                      <tr>
                          <td className="align-middle text-inverse">
                          Average 30-Day Volume
                          </td>
                          <td className="align-middle text-right text-info">
                         € 1.03M 
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
                      <tr>
                          <td className="align-middle text-inverse">
                          Discount/Premium to NAV
                          </td>
                          <td className="align-middle text-right text-info">
                          0.06%
                          </td>
                      </tr>
                      <tr>
                          <td className="align-middle text-inverse">
                          Fund Status
                          </td>
                          <td className="align-middle text-right text-info">
                          <Badge color="info">OPEN</Badge>
                          </td>
                      </tr>
                  </tbody>
              </Table>
              <CardFooter className="mt-auto flex-grow-0">
                  <Media className="small">
                      <Media left>
                          <i className="fa fa-fw fa-info-circle mr-2"></i>
                      </Media>
                      <Media body>
                      Real Time Update
                      </Media>
                  </Media>
              </CardFooter>
              </Card>

              <Card className="d-flex flex-column">
              <CardHeader className="bb-0 pt-4 bg-none text-info" tag="h5">
                  Key Info
              </CardHeader>
              <Table responsive hover className="table mb-0">
                  <thead>
                      <tr>
                          <th scope="col" className="bt-0">Indicator</th>
                          <th scope="col" className="text-right bt-0">Value</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td className="align-middle text-inverse">
                          52-Week Low
                          </td>
                          <td className="align-middle text-right text-info">
                          96.03
                          </td>
                      </tr>
                      <tr>
                          <td className="align-middle text-inverse">
                          52-Week High
                          </td>
                          <td className="align-middle text-right text-info">
                          121.92
                          </td>
                      </tr>
                      <tr>
                          <td className="align-middle text-inverse">
                          Dividend Yield (YTM) 1.47%
                          </td>
                          <td className="align-middle text-right text-info">
                          1.37%
                          </td>
                      </tr>
                      <tr>
                          <td className="align-middle text-inverse">
                          Distribution Frequency
                          </td>
                          <td className="align-middle text-right text-info">
                          <Badge color="primary">SEMI-ANNUAL</Badge>
                          </td>
                      </tr>
                      <tr>
                          <td className="align-middle text-inverse">
                          ESG Performance
                          </td>
                          <td className="align-middle text-right text-info">
                          <Badge color="info">TOP PERFORMER</Badge>
                          </td>
                      </tr>
                      <tr>
                          <td className="align-middle text-inverse">
                          Risk Performance
                          </td>
                          <td className="align-middle text-right text-info">
                          <Badge color="info">LOW RISK</Badge>
                          </td>
                      </tr>
                      
                  </tbody>
              </Table>
              <CardFooter className="mt-auto flex-grow-0">
                  <Media className="small">
                      <Media left>
                          <i className="fa fa-fw fa-info-circle mr-2"></i>
                      </Media>
                      <Media body>
                          Real Time Update
                      </Media>
                  </Media>
              </CardFooter>
              </Card>

            </CardDeck>
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
                <CardHeader className="bb-0 pt-4 bg-none text-info" tag="h5">
                    Data Room
                </CardHeader>
                <Table responsive hover borderless className="table mb-0">
                    <thead>
                        <tr>
                            <th scope="col" className="bt-0">Document</th>
                            <th scope="col" className="text-right bt-0">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="align-middle text-inverse">
                            Fund Prospectus (ES)
                            </td>
                            <td className="align-middle text-right text-info">
                            <i className="fa fa-download"></i>
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Fund Factsheet (ES)
                            </td>
                            <td className="align-middle text-right text-info">
                            <i className="fa fa-download"></i>
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Semi Annual Report
                            </td>
                            <td className="align-middle text-right text-info">
                            <i className="fa fa-download"></i>
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Annual Report
                            </td>
                            <td className="align-middle text-right text-info">
                            <i className="fa fa-download"></i>
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                                Fund KIID
                            </td>
                            <td className="align-middle text-right text-info">
                            <i className="fa fa-download"></i>
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                                Real Time ESG Report
                            </td>
                            <td className="align-middle text-right text-info">
                                <Link to="../Disclosures2">
                                    <Button size="lg" color="info">
                                        <i className="fa fa-envira"></i> ESG Report
                                    </Button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </Card>

                
              </CardDeck>
              </Col>  
        </Row>
    </Container>
    );
  } //render
}
export default Metrics_vc
