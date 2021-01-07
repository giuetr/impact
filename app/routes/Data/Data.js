import React, {Component} from 'react';
import Chart from "react-apexcharts";
import faker from 'faker/locale/en_US';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'



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


class Data extends Component {
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
                        <Button color="link" size="sm" id="tooltipGridAddToFavorites">
                            <i className="fa fa-star-o"></i>
                        </Button>
                        <UncontrolledTooltip placement="top" target="tooltipGridAddToFavorites">
                            Add To Favorites
                        </UncontrolledTooltip>
                    </div>

                    <div className="mb-4 mt-3 text-center">
                        <a className="h3 text-decoration-none" href="#">
                            Macro Vision
                        </a>
                        <div className="text-center mt-2">
                            Frequency: <span className="text-info">Weekly</span>
                        </div>
                        <div className="text-center">
                            <i className="fa fa-map-marker mr-1"></i>
                            FULL MARKET
                        </div>
                    </div>
                    
                    <div className="text-center mb-4">
                        <div className="mb-2">
                            <span className="small">
                                Top users:
                            </span>
                        </div>
                        <Badge pill color="info" className="mr-1">
                            Investors
                        </Badge>
                        <Badge pill color="warning" className="mr-1">
                            Traders
                        </Badge>
                        <Badge pill color="indigo">
                            Hedge Funds
                        </Badge>
                    </div>
                    <div className="text-center mb-4">
                        <p className="mb-0">
                            A set of aggregate and granular indicators and signals to get an informed outlook of the current and upcoming market trends. Curated with macroeconomic and technical metrics.
                        </p>
                        <Button className="mt-3" color="info">Free Access</Button>             
                    </div>   
                </CardBody>
              </Card>

              <Card className="mb-3">
                <CardBody>
                    <div className="d-flex">
                        <Button color="link" size="sm" id="tooltipGridAddToFavorites">
                            <i className="fa fa-star-o"></i>
                        </Button>
                        <UncontrolledTooltip placement="top" target="tooltipGridAddToFavorites">
                            Add To Favorites
                        </UncontrolledTooltip>
                    </div>

                    <div className="mb-4 mt-3 text-center">
                        <a className="h3 text-decoration-none" href="#">
                            Insider Trends
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
                        <Badge pill color="info" className="mr-1">
                            Investors
                        </Badge>
                        <Badge pill color="indigo">
                            Hedge Funds
                        </Badge>
                    </div>
                    <div className="text-center mb-4">
                        <p className="mb-0">
                            The latest trends and insights from the corporate insider trading activity of US equities. An in-depth look at flows, momentum and changes coming from the most informed shareholders.
                        </p>
                        <Button className="mt-3" color="info">Free Access</Button>             
                    </div>   
                </CardBody>
              </Card>

              <Card className="mb-3">
                <CardBody>
                    <div className="d-flex">
                        <Button color="link" size="sm" id="tooltipGridAddToFavorites">
                            <i className="fa fa-star-o"></i>
                        </Button>
                        <UncontrolledTooltip placement="top" target="tooltipGridAddToFavorites">
                            Add To Favorites
                        </UncontrolledTooltip>
                    </div>

                    <div className="mb-4 mt-3 text-center">
                        <a className="h3 text-decoration-none" href="#">
                            ESG Lab
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
                        <Badge pill color="info" className="mr-1">
                            Investors
                        </Badge>
                        <Badge pill color="indigo">
                            Hedge Funds
                        </Badge>
                    </div>
                    <div className="text-center mb-4">
                        <p className="mb-0">
                            Unlock the return potential of many different ESG factors by gaining a privileged view of the ESG profile of US Equities.
                        </p>
                        <Button className="mt-3" color="info">Free Access</Button>             
                    </div>   
                </CardBody>
              </Card>

              <Card className="mb-3">
                <CardBody>
                    <div className="d-flex">
                        <Button color="link" size="sm" id="tooltipGridAddToFavorites">
                            <i className="fa fa-star-o"></i>
                        </Button>
                        <UncontrolledTooltip placement="top" target="tooltipGridAddToFavorites">
                            Add To Favorites
                        </UncontrolledTooltip>
                    </div>

                    <div className="mb-4 mt-3 text-center">
                        <a className="h3 text-decoration-none" href="#">
                            Carbon Leaders
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
                        <Badge pill color="info" className="mr-1">
                            Investors
                        </Badge>
                        <Badge pill color="warning" className="mr-1">
                            Traders
                        </Badge>
                        <Badge pill color="indigo">
                            Hedge Funds
                        </Badge>
                    </div>
                    <div className="text-center mb-4">
                        <p className="mb-0">
                            Discover how corporations are actually acting to reduce their environmental impact and empower your prediction of their future performance.
                        </p>
                        <Button className="mt-3" color="info">Free Access</Button>             
                    </div>   
                </CardBody>
              </Card>
              

              <Card className="mb-3">
                <CardBody>
                    <div className="d-flex">
                        <Button color="link" size="sm" id="tooltipGridAddToFavorites">
                            <i className="fa fa-star-o"></i>
                        </Button>
                        <UncontrolledTooltip placement="top" target="tooltipGridAddToFavorites">
                            Add To Favorites
                        </UncontrolledTooltip>
                    </div>

                    <div className="mb-4 mt-3 text-center">
                        <a className="h3 text-decoration-none" href="#">
                            Politicians Trading
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
                        <Badge pill color="info" className="mr-1">
                            Investors
                        </Badge>
                        <Badge pill color="warning" className="mr-1">
                            Traders
                        </Badge>
                        <Badge pill color="indigo">
                            Hedge Funds
                        </Badge>
                    </div>
                    <div className="text-center mb-4">
                        <p className="mb-0">
                            An updated set of actionable insights, metrics and KPIs from the trading and investing activity of the US Senate and House Members. 
                        </p>
                        <Button className="mt-3" color="info">Free Access</Button>             
                    </div>   
                </CardBody>
              </Card>

            </CardColumns>

          </Container>
    </Container>
    );
  } //render
}
export default Data
