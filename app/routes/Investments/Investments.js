import React, {Component} from 'react';
import Chart from "react-apexcharts";
import faker from 'faker/locale/en_US';
import classes from './investments.scss';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { HeaderMain } from "../components/HeaderMain";

import { getQuote, getTrending, getMktnews, getSectors } from "../API/api.js";
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import Mktstatus from '../components/Mktstatus/Mktstatus';
import {
    SessionsByDevice
  } from "../components/Analytics/SessionsByDevice";
  
import {
    Container,
    Row,
    Card,
    CardBody,
    CardDeck,
    CardTitle,
    CardHeader,
    CardFooter,
    Col,
    Badge,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
    Table,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Media,
    Avatar,
    AvatarAddOn
} from '../../components'
import {
    ProfileOverviewCard
} from "../components/Profile/ProfileOverviewCard";
import {
    TinyAreaChart
} from "../components/Analytics/TinyAreaChart";

const payment = [
    "success",
    "danger",
    "warning",
    "secondary"
];

const offering = [
    "NOVA SOLAR FARM",
    "SPAIN ENERGY A",
    "NEW GREEN FUND A",
];

class Investments extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
      if (!this.state.yf_financialData_SP500) {
        return <div>Loading Data Engine <i className="fa fa-fw fa-spinner fa-spin text-info"></i></div>;
      }
    return (
        <Container>
            <Mktstatus/>

            <Container className="pl-0">
                <div className="d-flex mt-3 mb-5">
                    <div>
                        <HeaderMain 
                            title="Your Investments"
                            className=""
                        />
                        <div className="h3">
                            <span className="text-info mr-3">Overview of your investments</span>
                        </div>

                    </div>
                </div>
            </Container>
            

            <Col lg={ 12 } className="pl-0">
                    <Card className="mb-3">
                        <CardBody className="mb-0">
                            <CardTitle tag="h6">
                                Insider Transactions
                            </CardTitle>
                            <p className="mb-3">
                                <span className="text-success">Long</span> or <span className="text-danger">Short</span> insider transaction pressure in the last 6 months to date.
                            </p>
                            <Row className="justify-content-between">
                            <Col lg={4}>
                              <ProfileOverviewCard 
                                  title="INSIDER TREND"
                                  badgeTitle="LONG"
                                  badgeColor="info"
                                  value="LONG"
                                  valueTitle="Upgrade"
                                  footerTitle=""
                                  footerTitleClassName="text-info"
                                  footerValue=""
                                  footerIcon=""
                              />
                            </Col>
                            <Col lg={4}>
                              <Row>
                                <Col sm={ 6 }>
                                    <SessionsByDevice 
                                        title="Buy"
                                        valuePercent="60"
                                        valuePercentColor="text-success"
                                        value="2"
                                        valueColor="text-muted"
                                    />
                                </Col>
                                <Col sm={ 6 }>
                                    <SessionsByDevice 
                                        title="Sell"
                                        valuePercent="50"
                                        valuePercentColor="text-danger"
                                        value="2"
                                        valueColor="text-muted"
                                    />
                                </Col>
                              </Row>
                            </Col>

                            </Row>
                            
                            
                        </CardBody>
                    </Card>


                    <Card>
                        <CardBody>

                        <Table className="mb-0" hover responsive>
                            <thead>
                                <tr>
                                    <th className="bt-0 pr-5">Name</th>
                                    <th className="bt-0 pr-5">Originator</th>
                                    <th className="bt-0">Size</th>
                                    <th className="bt-0">Invested</th>
                                    <th className="bt-0">Total Return</th>
                                    <th className="bt-0">Fee</th>
                                    <th className="bt-0">Investment Date</th>
                                    <th className="bt-0">Asset Class</th>
                                    <th className="bt-0 text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <td className="align-middle text-inverse">
                                            <div>
                                            NOVA SOLAR FARM
                                            </div>
                                            <span className="text-muted">
                                                <i className="fa fa-fw fa-map-marker text-info text-left"></i> Spain
                                            </span>
                                        </td>
                                        <td className="align-middle">
                                            Intermoney
                                        </td>
                                        <td className="align-middle text-info">
                                            € 30,000,000
                                        </td>
                                        <td className="align-middle">
                                            € 200,000
                                        </td>
                                        <td className="align-middle text-info">
                                        { faker.company.companyName() }11.01%
                                        </td>
                                        <td className="align-middle">
                                            1.5%
                                        </td>
                                        <td className="align-middle">
                                            1-Mar-2021
                                        </td>
                                        <td className="align-middle">
                                            <Badge pill color="danger">
                                                EQUITY
                                            </Badge>
                                        </td>
                                        <td className="align-middle text-right">
                                            <Badge pill color="info">
                                                { faker.finance.transactionType() }
                                            </Badge>
                                        </td>
                                    </tr>
                            
                              </tbody>
                        </Table>

                        </CardBody>
                    </Card>
            </Col>


            
       
        

        
        

        </Container>
    );
  } //render
}
export default Investments
