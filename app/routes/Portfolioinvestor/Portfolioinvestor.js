import React, {Component} from 'react';
import Chart from "react-apexcharts";
import faker from 'faker/locale/en_US';

import { getQuote, getTrending, getMktnews, getSectors } from "../API/api.js";
import Mktstatus from '../components/Mktstatus/Mktstatus';

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


class Portfolioinvestor extends Component {
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
                        title="NOVA SOLAR FARM"
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
                                                        <Input type="radio" name="radioInline" />{' '}
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

        <Row>
            <Col lg={ 3 }>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h5" className="text-info mb-0">
                            Size
                        </CardTitle>
                        <p className="mb-4">
                            Product Size (NAV)
                        </p>
                        <div>
                            <div className="mb-2">
                                <h4>€ 50,000,000</h4>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg={ 3 }>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h5" className="text-info mb-0">
                            Originator
                        </CardTitle>
                        <p className="mb-4">
                            Entity Name
                        </p>
                        <div>
                            <div className="mb-2">
                                <h4>Intermoney</h4>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg={ 3 }>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle className="mb-0 d-flex">
                            <h5 className="text-info mb-0">Performance</h5>
                            <Button color="link" size="sm" className="pt-0 ml-auto">
                                    1Y <i className="text-info fa fa-angle-down"></i>
                            </Button>
                        </CardTitle>
                        <p className="mb-4">
                            Return %
                        </p>
                        <div>
                            <div className="mb-2 text-info">
                                <h4>5.03%</h4>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg={ 3 }>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h5" className="text-info mb-0">
                            Asset Class
                        </CardTitle>
                        <p className="mb-4">
                            Type of security
                        </p>
                        <div>
                            <div className="mb-2">
                            <Badge color="primary">VENTURE CAPITAL</Badge>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            
        </Row>
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
                    Fund Snapshot
                </CardHeader>
                <Table responsive hover borderless className="table mb-0">
                    <thead>
                        <tr>
                            <th scope="col" className="bt-0">Indicator</th>
                            <th scope="col" className="text-right bt-0">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="align-middle text-inverse">
                            Launch Date
                            </td>
                            <td className="align-middle text-right text-info">
                            1-Jan-2021
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Recommended Holding Period
                            </td>
                            <td className="align-middle text-right text-info">
                            3 Years
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Notice for redemption
                            </td>
                            <td className="align-middle text-right text-info">
                            6 Months
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Expense Ratio
                            </td>
                            <td className="align-middle text-right text-info">
                            0.500%
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Minimum Ticket
                            </td>
                            <td className="align-middle text-right text-info">
                            € 10,000
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <CardBody>
                    <div>
                        <p className="ml-0">
                            Total Placement
                        </p>
                        <Progress multi className="mb-1" style={{height: "10px"}}>
                            <Progress animated bar color="info" value="75" />
                            </Progress>
                    </div>
                </CardBody>
                </Card>

                
              </CardDeck>
              </Col>  
        </Row>
    </Container>
    );
  } //render
}
export default Portfolioinvestor
