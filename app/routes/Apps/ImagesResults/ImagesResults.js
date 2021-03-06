import React from 'react';

import { 
    Container,
    Row,
    Card,
    CardColumns,
    CardBody,
    Col,
    Badge,
    Button,
} from './../../../components';
import { HeaderMain } from "../../components/HeaderMain";
import { SearchResultsLeftNav } from "../../components/SearchResults/SearchResultsLeftNav";
import { SearchResultsHeader } from "../../components/SearchResults/SearchResultsHeader";
import { ImagesResultsCard } from "../../components/SearchResults/ImagesResultsCard";
import { Paginations } from "../../components/Paginations";
import {Link} from 'react-router-dom'

const ImagesResults = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Explore"
                className="mb-5 mt-4"
            />
            { /* START Content */}
            <Row>
                <Col lg={ 3 }>
                    <SearchResultsLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <SearchResultsHeader />
                    <CardColumns>

                        {/* <ImagesResultsCard /> */}
            
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

                    <div className="d-flex justify-content-center">
                        <Paginations />
                    </div>
                </Col>
            </Row>
            { /* END Content */}
        </Container>
    </React.Fragment>
);

export default ImagesResults;