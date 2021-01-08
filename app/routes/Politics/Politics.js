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
  

class Politics extends Component {
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
                      title="Politicians Trading"
                      className=""
                  />
                  <div className="h3">
                    <span className="text-info mr-3">Explore our data assets</span>
                  </div>

              </div>
            </div>

            <CardDeck>
                <Card className="mb-3">
                    <CardBody className="pb-0">
                        <div className="d-flex mb-4 justify-content-center">
                            <CardTitle tag="h5">
                                Total Value Traded
                            </CardTitle>
                        </div>
                        <div className="text-center mb-4">
                            <h2>
                               $2,890.12
                            </h2>
                            <div className="mb-1 text-success">
                                <i className="fa mr-1 fa-caret-up"></i>
                                23.34%
                            </div>
                            <div>
                                Month: <span className="text-info">December 2020</span>
                            </div>
                        </div>
                    </CardBody>
                    <CardBody className="p-0">
                        <TinyAreaChart />
                    </CardBody>
                </Card>
            </CardDeck>
            
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

            </CardColumns>

          </Container>
    </Container>
    );
  } //render
}
export default Politics
