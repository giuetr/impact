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
                      title="ESG Leaders"
                      className=""
                  />
                  <div className="h3">
                    <span className="text-info mr-3">The Top Performers in the ESG Space</span>
                  </div>

              </div>
            </div>
            
            <CardColumns>
              <Card className="mb-3">
                <CardBody className="pb-0">
                    <div className="d-flex">
                        <Button color="link" size="sm" id="tooltipGridAddToFavorites">
                            <i className="fa fa-star-o"></i>
                        </Button>
                        <UncontrolledTooltip placement="top" target="tooltipGridAddToFavorites">
                            Add To Favorites
                        </UncontrolledTooltip>
                    </div>

                    <div className="mb-4 mt-3 text-left">
                        <a className="h3 text-decoration-none" href="#">
                            Green Energy
                        </a>
                        <div className="text-left mt-2">
                            Number of companies: <span className="text-info">13</span>
                        </div>
                    </div>
                    
                    <div className="text-left mb-4">
                        <div className="mb-2">
                            <span className="small">
                                Top companies:
                            </span>
                        </div>
                        <Badge pill color="primary" className="mr-1">
                            PLUG
                        </Badge>
                        <Badge pill color="primary" className="mr-1">
                            ENPH
                        </Badge>
                        <Badge pill color="primary">
                            FCEL
                        </Badge>
                    </div>
                    <div className="text-left mb-4">
                        <p className="mb-0">
                            Companies active in the renewable and clean energy space
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
                        <Button color="link" size="sm" id="tooltipGridAddToFavorites">
                            <i className="fa fa-star-o"></i>
                        </Button>
                        <UncontrolledTooltip placement="top" target="tooltipGridAddToFavorites">
                            Add To Favorites
                        </UncontrolledTooltip>
                    </div>

                    <div className="mb-4 mt-3 text-left">
                        <a className="h3 text-decoration-none" href="#">
                            Smart Buildings
                        </a>
                        <div className="text-left mt-2">
                            Number of companies: <span className="text-info">7</span>
                        </div>
                    </div>
                    
                    <div className="text-left mb-4">
                        <div className="mb-2">
                            <span className="small">
                                Top companies:
                            </span>
                        </div>
                        <Badge pill color="primary" className="mr-1">
                            PLUG
                        </Badge>
                        <Badge pill color="primary" className="mr-1">
                            ENPH
                        </Badge>
                        <Badge pill color="primary">
                            FCEL
                        </Badge>
                    </div>
                    <div className="text-left mb-4">
                        <p className="mb-0">
                            Companies active in the renewable and clean energy space
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
