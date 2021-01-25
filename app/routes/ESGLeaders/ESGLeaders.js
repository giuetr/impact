import React, {Component} from 'react';
import Chart from "react-apexcharts";
import faker from 'faker/locale/en_US';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


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


class ESGLeaders extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPrice: null,
            
        };
    }


render() {
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
                      title="MegaTrends"
                      className=""
                  />
                  <div className="h3">
                    <span className="text-info mr-3">A Radar on tomorrow's Innovation and Sustainability Leaders</span>
                  </div>

              </div>
            </div>
            
            <CardColumns>
              <Card className="mb-3">
                <CardBody className="pb-0">
                    <div className="d-flex">
                            <i className="fa fa-envira text-primary"></i>
                    </div>

                    <div className="mb-4 mt-3 text-left">
                        <a className="h3 text-decoration-none" href="#">
                            Clean Energy
                        </a>
                        <div className="text-left mt-2">
                            Number of companies: <span className="text-info">13</span>
                        </div>
                    </div>
                    
                    <div className="text-left mb-4">
                        <div className="mb-2">
                            <span className="small text-primary">
                                Trending Now:
                            </span>
                        </div>
                        <Badge pill color="primary" className="mr-1">
                            FCEL
                        </Badge>
                        <Badge pill color="primary" className="mr-1">
                            PLUG
                        </Badge>
                        <Badge pill color="primary">
                            SPWR
                        </Badge>
                    </div>
                    <div className="text-left mb-4">
                        <p className="mb-0">
                            Renewable and clean energy leaders
                        </p>
                        <Button className="mt-3" color="primary">Explore</Button>             
                    </div>   
                </CardBody>
                <CardFooter className="d-flex">
                    <span className="align-self-center">
                        #Real-Time Update
                    </span>
                </CardFooter>
              </Card>

              <Card className="mb-3">
                <CardBody className="pb-0">
                    <div className="d-flex">
                        <i className="fa fa-envira text-primary"></i>
                    </div>

                    <div className="mb-4 mt-3 text-left">
                        <a className="h3 text-decoration-none" href="#">
                            Ultra Tech
                        </a>
                        <div className="text-left mt-2">
                            Number of companies: <span className="text-info">7</span>
                        </div>
                    </div>
                    
                    <div className="text-left mb-4">
                        <div className="mb-2">
                            <span className="small text-primary">
                                Trending Now:
                            </span>
                        </div>
                        <Badge pill color="primary" className="mr-1">
                            AAPL
                        </Badge>
                        <Badge pill color="primary" className="mr-1">
                            CSCO
                        </Badge>
                        <Badge pill color="primary">
                            AMD
                        </Badge>
                    </div>
                    <div className="text-left mb-4">
                        <p className="mb-0">
                            Companies leading innovation
                        </p>
                        <Button className="mt-3" color="primary">Explore</Button>             
                    </div>   
                </CardBody>
                <CardFooter className="d-flex">
                    <span className="align-self-center">
                        #Real-Time Update
                    </span>
                </CardFooter>
              </Card>



              <Card className="mb-3">
                <CardBody className="pb-0">
                    <div className="d-flex">
                        <i className="fa fa-envira text-primary"></i>
                    </div>

                    <div className="mb-4 mt-3 text-left">
                        <a className="h3 text-decoration-none" href="#">
                            EV &amp; Self-Driving
                        </a>
                        <div className="text-left mt-2">
                            Number of companies: <span className="text-info">7</span>
                        </div>
                    </div>
                    
                    <div className="text-left mb-4">
                        <div className="mb-2">
                            <span className="small text-primary">
                                Trending Now:
                            </span>
                        </div>
                        <Badge pill color="primary" className="mr-1">
                            TSLA
                        </Badge>
                        <Badge pill color="primary" className="mr-1">
                            NIO
                        </Badge>
                        <Badge pill color="primary">
                            F
                        </Badge>
                    </div>
                    <div className="text-left mb-4">
                        <p className="mb-0">
                            Leaders and Pioneers of the EV space
                        </p>
                        <Button className="mt-3" color="primary">Explore</Button>             
                    </div>   
                </CardBody>
                <CardFooter className="d-flex">
                    <span className="align-self-center">
                        #Real-Time Update
                    </span>
                </CardFooter>
              </Card>

              <Card className="mb-3">
                <CardBody className="pb-0">
                    <div className="d-flex">
                        <i className="fa fa-envira text-primary"></i>
                    </div>

                    <div className="mb-4 mt-3 text-left">
                        <a className="h3 text-decoration-none" href="#">
                            Future of Food
                        </a>
                        <div className="text-left mt-2">
                            Number of companies: <span className="text-info">7</span>
                        </div>
                    </div>
                    
                    <div className="text-left mb-4">
                        <div className="mb-2">
                            <span className="small text-primary">
                                Trending Now:
                            </span>
                        </div>
                        <Badge pill color="primary" className="mr-1">
                            KR
                        </Badge>
                        <Badge pill color="primary" className="mr-1">
                            WMT
                        </Badge>
                        <Badge pill color="primary">
                            BYND
                        </Badge>
                    </div>
                    <div className="text-left mb-4">
                        <p className="mb-0">
                            The NextGen food and nutrition paradigm 
                        </p>
                        <Button className="mt-3" color="primary">Explore</Button>             
                    </div>   
                </CardBody>
                <CardFooter className="d-flex">
                    <span className="align-self-center">
                        #Real-Time Update
                    </span>
                </CardFooter>
              </Card>

              <Card className="mb-3">
                <CardBody className="pb-0">
                    <div className="d-flex">
                        <i className="fa fa-envira text-primary"></i>
                    </div>

                    <div className="mb-4 mt-3 text-left">
                        <a className="h3 text-decoration-none" href="#">
                            Future Health
                        </a>
                        <div className="text-left mt-2">
                            Number of companies: <span className="text-info">7</span>
                        </div>
                    </div>
                    
                    <div className="text-left mb-4">
                        <div className="mb-2">
                            <span className="small text-primary">
                                Trending Now:
                            </span>
                        </div>
                        <Badge pill color="primary" className="mr-1">
                            SDC
                        </Badge>
                        <Badge pill color="primary" className="mr-1">
                            TWST
                        </Badge>
                        <Badge pill color="primary">
                            MCRB
                        </Badge>
                    </div>
                    <div className="text-left mb-4">
                        <p className="mb-0">
                            Healthcare Innovators
                        </p>
                        <Button className="mt-3" color="primary">Explore</Button>             
                    </div>   
                </CardBody>
                <CardFooter className="d-flex">
                    <span className="align-self-center">
                        #Real-Time Update
                    </span>
                </CardFooter>
              </Card>
              
              <Card className="mb-3">
                <CardBody className="pb-0">
                    <div className="d-flex">
                        <i className="fa fa-envira text-primary"></i>
                    </div>

                    <div className="mb-4 mt-3 text-left">
                        <a className="h3 text-decoration-none" href="#">
                            Smart Cities &amp; Building
                        </a>
                        <div className="text-left mt-2">
                            Number of companies: <span className="text-info">7</span>
                        </div>
                    </div>
                    
                    <div className="text-left mb-4">
                        <div className="mb-2">
                            <span className="small text-primary">
                                Trending Now:
                            </span>
                        </div>
                        <Badge pill color="primary" className="mr-1">
                            GE
                        </Badge>
                        <Badge pill color="primary" className="mr-1">
                            CSCO
                        </Badge>
                        <Badge pill color="primary">
                            QCOM
                        </Badge>
                    </div>
                    <div className="text-left mb-4">
                        <p className="mb-0">
                            Behind the cities of tomorrow
                        </p>
                        <Button className="mt-3" color="primary">Explore</Button>             
                    </div>   
                </CardBody>
                <CardFooter className="d-flex">
                    <span className="align-self-center">
                        #Real-Time Update
                    </span>
                </CardFooter>
              </Card>

              <Card className="mb-3">
                <CardBody className="pb-0">
                    <div className="d-flex">
                        <i className="fa fa-envira text-primary"></i>
                    </div>

                    <div className="mb-4 mt-3 text-left">
                        <a className="h3 text-decoration-none" href="#">
                            NextGen AI
                        </a>
                        <div className="text-left mt-2">
                            Number of companies: <span className="text-info">7</span>
                        </div>
                    </div>
                    
                    <div className="text-left mb-4">
                        <div className="mb-2">
                            <span className="small text-primary">
                                Trending Now:
                            </span>
                        </div>
                        <Badge pill color="primary" className="mr-1">
                            FARO
                        </Badge>
                        <Badge pill color="primary" className="mr-1">
                            ALTR
                        </Badge>
                        <Badge pill color="primary">
                            SLAB
                        </Badge>
                    </div>
                    <div className="text-left mb-4">
                        <p className="mb-0">
                            Beyond Tech
                        </p>
                        <Button className="mt-3" color="primary">Explore</Button>             
                    </div>   
                </CardBody>
                <CardFooter className="d-flex">
                    <span className="align-self-center">
                        #Real-Time Update
                    </span>
                </CardFooter>
              </Card>

              <Card className="mb-3">
                <CardBody className="pb-0">
                    <div className="d-flex">
                        <i className="fa fa-envira text-primary"></i>
                    </div>

                    <div className="mb-4 mt-3 text-left">
                        <a className="h3 text-decoration-none" href="#">
                            CyberSec 2.0
                        </a>
                        <div className="text-left mt-2">
                            Number of companies: <span className="text-info">7</span>
                        </div>
                    </div>
                    
                    <div className="text-left mb-4">
                        <div className="mb-2">
                            <span className="small text-primary">
                                Trending Now:
                            </span>
                        </div>
                        <Badge pill color="primary" className="mr-1">
                            FEYE
                        </Badge>
                        <Badge pill color="primary" className="mr-1">
                            CRWD
                        </Badge>
                        <Badge pill color="primary">
                            DOCU
                        </Badge>
                    </div>
                    <div className="text-left mb-4">
                        <p className="mb-0">
                            Building future resiliency
                        </p>
                        <Button className="mt-3" color="primary">Explore</Button>             
                    </div>   
                </CardBody>
                <CardFooter className="d-flex">
                    <span className="align-self-center">
                        #Real-Time Update
                    </span>
                </CardFooter>
              </Card>


            </CardColumns>

          </Container>
    </Container>
    );
  } //render
}
export default ESGLeaders
