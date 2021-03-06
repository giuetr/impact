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


class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPrice: null,
            
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
                      title="Data Products"
                      className=""
                  />
                  <div className="h3">
                    <span className="text-info mr-3">Explore our data assets</span>
                  </div>

              </div>
            </div>
            
            <CardColumns>
            
                <Card className="mb-3">
                    <CardBody>
                        <div className="d-flex">
                            <i className="fa fa-diamond m-2"></i>
                        </div>

                        <div className="mb-4 mt-3 text-center">
                            <a className="h3 text-decoration-none" href="#">
                                Mega<span className="fw-600">Trends</span>
                            </a>
                            <div className="text-center mt-2">
                                Frequency: <span className="text-info">Weekly</span>
                            </div>
                            <div className="text-center">
                                <i className="fa fa-map-marker mr-1"></i>
                                EQUITY
                            </div>
                        </div>
                        
                        <div className="text-center mb-4">
                            <div className="mb-2">
                                <span className="small">
                                    Top users:
                                </span>
                            </div>
                            <Badge pill color="primary" className="mr-1">
                                Investors
                            </Badge>
                            <Badge pill color="warning" className="mr-1">
                                Banks
                            </Badge>
                            <Badge pill color="pink">
                                Hedge Funds
                            </Badge>
                        </div>
                        <div className="text-center mb-4">
                            <p className="mb-0">
                                The companies leading the shift towards a sustainable future, organized by sector of innovation. Discover tomorrow's leaders.
                            </p>
                            <Link to="/ESGleaders"><Button className="mt-3" color="primary">Free Access</Button></Link>
                                        
                        </div>   
                    </CardBody>
                </Card>

              <Card className="mb-3">
                <CardBody>
                    <div className="d-flex">
                        <i className="fa fa-diamond m-2"></i>
                    </div>

                    <div className="mb-4 mt-3 text-center">
                        <a className="h3 text-decoration-none" href="#">
                            <span className="fw-600">Shorts</span> &amp; Squeezes
                        </a>
                        <div className="text-center mt-2">
                            Frequency: <span className="text-info">Weekly</span>
                        </div>
                        <div className="text-center">
                            <i className="fa fa-map-marker mr-1"></i>
                            EQUITY
                        </div>
                    </div>
                    
                    <div className="text-center mb-4">
                        <div className="mb-2">
                            <span className="small">
                                Top users:
                            </span>
                        </div>
                        <Badge pill color="yellow" className="mr-1">
                            Traders
                        </Badge>
                        <Badge pill color="pink">
                            Hedge Funds
                        </Badge>
                    </div>
                    <div className="text-center mb-4">
                        <p className="mb-0">
                            Instantly visualize short squeezes, stocks with high short interest and predict contrarian moves before the rest of the market.
                        </p>
                        <Link to="/Shorts"><Button className="mt-3" color="primary">Free Access</Button></Link>                
                    </div>   
                </CardBody>
              </Card>

              <Card className="mb-3">
                <CardBody>
                    <div className="d-flex">
                        <i className="fa fa-diamond m-2"></i>
                    </div>

                    <div className="mb-4 mt-3 text-center">
                        <a className="h3 text-decoration-none" href="#">
                        <span className="fw-600">Insider</span> Trends
                        </a>
                        <div className="text-center mt-2">
                            Frequency: <span className="text-info">Weekly</span>
                        </div>
                        <div className="text-center">
                            <i className="fa fa-map-marker mr-1"></i>
                            EQUITY
                        </div>
                    </div>
                    
                    <div className="text-center mb-4">
                        <div className="mb-2">
                            <span className="small">
                                Top users:
                            </span>
                        </div>
                        <Badge pill color="primary" className="mr-1">
                            Investors
                        </Badge>
                        <Badge pill color="pink">
                            Hedge Funds
                        </Badge>
                    </div>
                    <div className="text-center mb-4">
                        <p className="mb-0">
                            The latest trends and insights from the corporate insider trading activity of US equities. An in-depth look at flows, momentum and changes coming from the most informed shareholders.
                        </p>
                        <Link to="/Insiders"><Button className="mt-3" color="primary">Free Access</Button></Link>          
                    </div>   
                </CardBody>
              </Card>

              <Card className="mb-3">
                <CardBody>
                    <div className="d-flex">
                        <i className="fa fa-diamond m-2"></i>
                    </div>

                    <div className="mb-4 mt-3 text-center">
                        <a className="h3 text-decoration-none" href="#">
                            <span className="fw-600">ESG</span> Lab
                        </a>
                        <div className="text-center mt-2">
                            Frequency: <span className="text-info">Weekly</span>
                        </div>
                        <div className="text-center">
                            <i className="fa fa-map-marker mr-1"></i>
                            EQUITY
                        </div>
                    </div>
                    
                    <div className="text-center mb-4">
                        <div className="mb-2">
                            <span className="small">
                                Top users:
                            </span>
                        </div>
                        <Badge pill color="primary" className="mr-1">
                            Investors
                        </Badge>
                        <Badge pill color="pink">
                            Hedge Funds
                        </Badge>
                    </div>
                    <div className="text-center mb-4">
                        <p className="mb-0">
                            Unlock the return potential of ESG factors by gaining a privileged view of the ESG profile of US Equities.
                        </p>
                        <Link to="/Esg500"><Button className="mt-3" color="primary">Free Access</Button></Link>             
                    </div>   
                </CardBody>
              </Card>

              <Card className="mb-3">
                <CardBody>
                    <div className="d-flex">
                        <i className="fa fa-diamond m-2"></i>
                    </div>

                    <div className="mb-4 mt-3 text-center">
                        <a className="h3 text-decoration-none" href="#">
                            <span className="fw-600">Carbon</span> Leaders
                        </a>
                        <div className="text-center mt-2">
                            Frequency: <span className="text-info">Monthly</span>
                        </div>
                        <div className="text-center">
                            <i className="fa fa-map-marker mr-1"></i>
                            EQUITY
                        </div>
                    </div>
                    
                    <div className="text-center mb-4">
                        <div className="mb-2">
                            <span className="small">
                                Top users:
                            </span>
                        </div>
                        <Badge pill color="primary" className="mr-1">
                            Investors
                        </Badge>
                        <Badge pill color="yellow" className="mr-1">
                            Traders
                        </Badge>
                        <Badge pill color="pink">
                            Hedge Funds
                        </Badge>
                    </div>
                    <div className="text-center mb-4">
                        <p className="mb-0">
                            The carbon emissions of hundreds of corporations. Discover the actual envirnomental impact of these companies and empower your prediction of their future performance.
                        </p>
                        <Link to="/Carbon"><Button className="mt-3" color="primary">Free Access</Button></Link>               
                    </div>   
                </CardBody>
              </Card>
              

              <Card className="mb-3">
                <CardBody>
                    <div className="d-flex">
                        <i className="fa fa-diamond m-2"></i>
                    </div>

                    <div className="mb-4 mt-3 text-center">
                        <a className="h3 text-decoration-none" href="#">
                            <span className="fw-600">Politicians</span> Trading
                        </a>
                        <div className="text-center mt-2">
                            Frequency: <span className="text-info">Weekly</span>
                        </div>
                        <div className="text-center">
                            <i className="fa fa-map-marker mr-1"></i>
                            EQUITY
                        </div>
                    </div>
                    
                    <div className="text-center mb-4">
                        <div className="mb-2">
                            <span className="small">
                                Top users:
                            </span>
                        </div>
                        <Badge pill color="primary" className="mr-1">
                            Investors
                        </Badge>
                        <Badge pill color="yellow" className="mr-1">
                            Traders
                        </Badge>
                        <Badge pill color="pink">
                            Hedge Funds
                        </Badge>
                    </div>
                    <div className="text-center mb-4">
                        <p className="mb-0">
                            An updated set of actionable insights, metrics and KPIs from the trading and investing activity of the US Senate and House Members. 
                        </p>
                        <Link to="/Politics"><Button className="mt-3" color="primary">Free Access</Button></Link>              
                    </div>   
                </CardBody>
              </Card>

              

            </CardColumns>

          </Container>
    </Container>
    );
  } //render
}
export default Portfolio
