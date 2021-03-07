import React from 'react';

import { 
    Container,
    Row,
    Card,
    CardColumns,
    CardBody,
    CardFooter,
    Col,
    Badge,
    Button,
    CardImg,
    HolderProvider,
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
                    <HolderProvider.Icon
                            iconChar=""
                            size={ 32 }
                        >
                            <CardImg 
                                top 
                                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80"
                            />
                    </HolderProvider.Icon>
                    <CardBody>

                        <div className="mb-4 mt-2 text-left">
                            <a className="h5 text-uppercase text-decoration-none fw-500 text-info" href="#">
                                Nova Solar Farm
                            </a>
                            <div className="text-left mt-2">
                                Originator: <span className="text-info">Intermoney</span>
                            </div>
                            <div className="text-left">
                                <i className="fa fa-map-marker mr-1"></i>
                                Spain
                            </div>
                        </div>
                        
                        <div className="text-left mb-2">
                            <p className="mb-1 fw-500 text-dark">
                                Asset Class: <span className="fw-400">
                                    <Badge pill color="primary" className="mr-1">
                                        VENTURE CAPITAL
                                    </Badge>
                                </span>
                            </p>
                            <p className="mb-1 fw-500 text-dark">
                                Total amount: <span className="fw-400">€ 50,000,000</span>
                            </p>
                            <p className="mb-2 fw-500 text-dark">
                                Return: <span className="fw-400">5.03%</span>
                            </p>
                            <Link to="/ESGleaders"><Button className="mt-3" color="info">Explore</Button></Link>
                                        
                        </div>   
                    </CardBody>
                    <CardFooter className="d-flex">
                        <div className="mr-auto">
                            <span className="mr-3">
                                Investors:
                            </span>
                        </div>
                        <span>152</span>
                    </CardFooter>
                </Card>
                
                <Card className="mb-3">
                    <HolderProvider.Icon
                            iconChar=""
                            size={ 32 }
                        >
                            <CardImg 
                                top 
                                src="https://images.unsplash.com/photo-1568347877321-f8935c7dc5a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1568&q=80"
                            />
                    </HolderProvider.Icon>
                    <CardBody>

                        <div className="mb-4 mt-2 text-left">
                            <a className="h5 text-uppercase text-decoration-none fw-500 text-info" href="#">
                                IBERIA FIXED INCOME I
                            </a>
                            <div className="text-left mt-2">
                                Originator: <span className="text-info">Intermoney</span>
                            </div>
                            <div className="text-left">
                                <i className="fa fa-map-marker mr-1"></i>
                                Spain
                            </div>
                        </div>
                        
                        <div className="text-left mb-2">
                            <p className="mb-1 fw-500 text-dark">
                                Asset Class: <span className="fw-400">
                                    <Badge pill color="secondary" className="mr-1">
                                        FIXED INCOME
                                    </Badge>
                                </span>
                            </p>
                            <p className="mb-1 fw-500 text-dark">
                                Total amount: <span className="fw-400">€ 50,000,000</span>
                            </p>
                            <p className="mb-2 fw-500 text-dark">
                                Return: <span className="fw-400">5.03%</span>
                            </p>
                            <Link to="/ESGleaders"><Button className="mt-3" color="info">Explore</Button></Link>
                                        
                        </div>   
                    </CardBody>
                    <CardFooter className="d-flex">
                        <div className="mr-auto">
                            <span className="mr-3">
                                Investors:
                            </span>
                        </div>
                        <span>231</span>
                    </CardFooter>
                </Card>

                <Card className="mb-3">
                    <HolderProvider.Icon
                            iconChar=""
                            size={ 32 }
                        >
                            <CardImg 
                                top 
                                src="https://images.unsplash.com/photo-1509390981263-4d8df07d826c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80"
                            />
                    </HolderProvider.Icon>
                    <CardBody>

                        <div className="mb-4 mt-2 text-left">
                            <a className="h5 text-uppercase text-decoration-none fw-500 text-info" href="#">
                                SPAIN ENERGY A
                            </a>
                            <div className="text-left mt-2">
                                Originator: <span className="text-info">Intermoney</span>
                            </div>
                            <div className="text-left">
                                <i className="fa fa-map-marker mr-1"></i>
                                Spain
                            </div>
                        </div>
                        
                        <div className="text-left mb-2">
                            <p className="mb-1 fw-500 text-dark">
                                Asset Class: <span className="fw-400">
                                    <Badge pill color="warning" className="mr-1">
                                        PRIVATE EQUITY
                                    </Badge>
                                </span>
                            </p>
                            <p className="mb-1 fw-500 text-dark">
                                Total amount: <span className="fw-400">€ 25,000,000</span>
                            </p>
                            <p className="mb-2 fw-500 text-dark">
                                Return: <span className="fw-400">8.02%</span>
                            </p>
                            <Link to="/ESGleaders"><Button className="mt-3" color="info">Explore</Button></Link>
                                        
                        </div>   
                    </CardBody>
                    <CardFooter className="d-flex">
                        <div className="mr-auto">
                            <span className="mr-3">
                                Investors:
                            </span>
                        </div>
                        <span>157</span>
                    </CardFooter>
                </Card>

                <Card className="mb-3">
                    <HolderProvider.Icon
                            iconChar=""
                            size={ 32 }
                        >
                            <CardImg 
                                top 
                                src="https://images.unsplash.com/photo-1451485435476-a244439c78cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                            />
                    </HolderProvider.Icon>
                    <CardBody>

                        <div className="mb-4 mt-2 text-left">
                            <a className="h5 text-uppercase text-decoration-none fw-500 text-info" href="#">
                                NEW GREEN FUND A
                            </a>
                            <div className="text-left mt-2">
                                Originator: <span className="text-info">Intermoney</span>
                            </div>
                            <div className="text-left">
                                <i className="fa fa-map-marker mr-1"></i>
                                Spain
                            </div>
                        </div>
                        
                        <div className="text-left mb-2">
                            <p className="mb-1 fw-500 text-dark">
                                Asset Class: <span className="fw-400">
                                    <Badge pill color="danger" className="mr-1">
                                        EQUITY
                                    </Badge>
                                </span>
                            </p>
                            <p className="mb-1 fw-500 text-dark">
                                Total amount: <span className="fw-400">€ 15,000,000</span>
                            </p>
                            <p className="mb-2 fw-500 text-dark">
                                Return: <span className="fw-400">8.92%</span>
                            </p>
                            <Link to="/ESGleaders"><Button className="mt-3" color="info">Explore</Button></Link>
                                        
                        </div>   
                    </CardBody>
                    <CardFooter className="d-flex">
                        <div className="mr-auto">
                            <span className="mr-3">
                                Investors:
                            </span>
                        </div>
                        <span>208</span>
                    </CardFooter>
                </Card>

                <Card className="mb-3">
                    <HolderProvider.Icon
                            iconChar=""
                            size={ 32 }
                        >
                            <CardImg 
                                top 
                                src="https://images.unsplash.com/photo-1543946602-a0fce8117697?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                            />
                    </HolderProvider.Icon>
                    <CardBody>

                        <div className="mb-4 mt-2 text-left">
                            <a className="h5 text-uppercase text-decoration-none fw-500 text-info" href="#">
                                XTECH ABSOLUTE RETURN
                            </a>
                            <div className="text-left mt-2">
                                Originator: <span className="text-info">Intermoney</span>
                            </div>
                            <div className="text-left">
                                <i className="fa fa-map-marker mr-1"></i>
                                Spain
                            </div>
                        </div>
                        
                        <div className="text-left mb-2">
                            <p className="mb-1 fw-500 text-dark">
                                Asset Class: <span className="fw-400">
                                    <Badge pill color="danger" className="mr-1">
                                        EQUITY
                                    </Badge>
                                </span>
                            </p>
                            <p className="mb-1 fw-500 text-dark">
                                Total amount: <span className="fw-400">€ 130,000,000</span>
                            </p>
                            <p className="mb-2 fw-500 text-dark">
                                Return: <span className="fw-400">9.01%</span>
                            </p>
                            <Link to="/ESGleaders"><Button className="mt-3" color="info">Explore</Button></Link>
                                        
                        </div>   
                    </CardBody>
                    <CardFooter className="d-flex">
                        <div className="mr-auto">
                            <span className="mr-3">
                                Investors:
                            </span>
                        </div>
                        <span>79</span>
                    </CardFooter>
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