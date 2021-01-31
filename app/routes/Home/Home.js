import React, {Component} from 'react';
import Chart from "react-apexcharts";
import faker from 'faker/locale/en_US';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import classes from './home.scss';

import { getQuote, getTrending, getMktnews, getSectors } from "../API/api.js";
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

import {
    Container,
    Row,
    Card,
    CardBody,
    CardDeck,
    CardHeader,
    CardFooter,
    Col,
    Badge,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
    Table,
    Media
} from './../../components'
import {
    ProfileOverviewCard
} from "../components/Profile/ProfileOverviewCard";
import {
    TinyAreaChart
} from "../components/Analytics/TinyAreaChart";


class Home extends Component {
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
      if (!this.state.yf_financialData_SP500 || !this.state.yf_trend || !this.state.yf_mktnws) {
        return <div>Loading Data Engine <i className="fa fa-fw fa-leaf text-info"></i></div>;
      }
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
       
        { /* START Section 1 */}
        <CardDeck>
            { /* START Card Widget */}
            <Card className="mb-3">
                <CardBody>
                    <ProfileOverviewCard 
                        title="Dow Jones Industrial"
                        badgeTitle="DJI"
                        badgeColor="primary"
                        value={this.state.yf_financialData_djones.regularMarketPrice}
                        valueTitle={"vs "+this.state.yf_financialData_djones.regularMarketPreviousClose+" prev."}
                        footerTitle="Change:"
                        footerTitleClassName={Math.sign(this.state.yf_financialData_djones.regularMarketChangePercent) > 0 ? "text-success" : "text-danger"}
                        footerValue={this.state.yf_financialData_djones.regularMarketChangePercent.toFixed(2)+"%"}
                        footerIcon={Math.sign(this.state.yf_financialData_djones.regularMarketChangePercent) > 0 ? "caret-up" : "caret-down"}

                    />
                </CardBody>
            </Card>
            { /* START Card Widget */}
            { /* START Card Widget */}
            <Card className="mb-3">
                <CardBody>
                    <ProfileOverviewCard 
                        title="S&amp;P 500"
                        badgeTitle="SPX"
                        badgeColor="danger"
                        value={this.state.yf_financialData_SP500.regularMarketPrice}
                        valueTitle={"vs "+this.state.yf_financialData_SP500.regularMarketPreviousClose+" prev."}
                        footerTitle="Change:"
                        footerTitleClassName={Math.sign(this.state.yf_financialData_SP500.regularMarketChangePercent) > 0 ? "text-success" : "text-danger"}
                        footerValue={this.state.yf_financialData_SP500.regularMarketChangePercent.toFixed(2)+"%"}
                        footerIcon={Math.sign(this.state.yf_financialData_SP500.regularMarketChangePercent) > 0 ? "caret-up" : "caret-down"}
                    />
                </CardBody>
            </Card>
            { /* START Card Widget */}
            { /* START Card Widget */}
            <Card className="mb-3">
                <CardBody>
                    <ProfileOverviewCard 
                        title="NASDAQ 100"
                        badgeTitle="NDX"
                        badgeColor="secondary"
                        value={this.state.yf_financialData_nasdaq.regularMarketPrice}
                        valueTitle={"vs "+this.state.yf_financialData_nasdaq.regularMarketPreviousClose+" prev."}
                        footerTitle="Change:"
                        footerTitleClassName={Math.sign(this.state.yf_financialData_nasdaq.regularMarketChangePercent) > 0 ? "text-success" : "text-danger"}
                        footerValue={this.state.yf_financialData_nasdaq.regularMarketChangePercent.toFixed(2)+"%"}
                        footerIcon={Math.sign(this.state.yf_financialData_nasdaq.regularMarketChangePercent) > 0 ? "caret-up" : "caret-down"}
                    />
                </CardBody>
            </Card>
            { /* START Card Widget */}
            { /* START Card Widget */}
            <Card type="border" color="success" className="mb-3">
                <CardBody className="table-success">
                    <ProfileOverviewCard 
                        title="MARKET BIAS"
                        badgeTitle="Real time"
                        badgeColor="success"
                        value="87%"
                        valueTitle="BULLISH"
                        footerTitle="Previous:"
                        footerTitleClassName="text-success"
                        footerValue="8%"
                        footerIcon="caret-up"
                    />
                </CardBody>
            </Card>
            { /* START Card Widget */}
        </CardDeck>
        { /* START Section 1 */}

        <Row>
            <Col lg={ 7 }>
                <Card className="mb-3">
                    <CardBody>
                    <div>
                        <TradingViewWidget
                            symbol="SPY"
                            theme={Themes.LIGHT}
                            locale="en"
                            interval= "D"
                            allow_symbol_change={false} 
                            height={370}
                            width="auto"
                            save_image= {false}
                          />
                        </div>

                    </CardBody>
                </Card>
            </Col>

            <Col lg={ 5 }>
              <CardDeck>
              <Card className="d-flex flex-column" height="336px">
                <CardHeader className="bb-0 pt-3 bg-none" tag="h5">
                    US Sectors
                </CardHeader>
                <div className={ classes['table-scroll-wrap'] }>
                <Table responsive hover className="table mb-0 table-striped" height="336px">
                    <tbody>
                        <tr>
                            <td className="align-middle text-inverse">
                            Energy
                            </td>
                            <td className={Math.sign(this.state.yf_sectors[8].regularMarketChangePercent) > 0 ? "text-info" : "text-danger"} >
                            {this.state.yf_sectors[8].regularMarketChangePercent.toFixed(2)} %
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Materials
                            </td>
                            <td className={Math.sign(this.state.yf_sectors[10].regularMarketChangePercent) > 0 ? "text-info" : "text-danger"} >
                            {this.state.yf_sectors[10].regularMarketChangePercent.toFixed(2)} %
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Industrials
                            </td>
                            <td className={Math.sign(this.state.yf_sectors[9].regularMarketChangePercent) > 0 ? "text-info" : "text-danger"} >
                            {this.state.yf_sectors[9].regularMarketChangePercent.toFixed(2)} %
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Financials
                            </td>
                            <td className={Math.sign(this.state.yf_sectors[7].regularMarketChangePercent) > 0 ? "text-info" : "text-danger"} >
                            {this.state.yf_sectors[7].regularMarketChangePercent.toFixed(2)} %
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Real Estate
                            </td>
                            <td className={Math.sign(this.state.yf_sectors[1].regularMarketChangePercent) > 0 ? "text-info" : "text-danger"} >
                            {this.state.yf_sectors[1].regularMarketChangePercent.toFixed(2)} %
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Technology
                            </td>
                            <td className={Math.sign(this.state.yf_sectors[3].regularMarketChangePercent) > 0 ? "text-info" : "text-danger"} >
                            {this.state.yf_sectors[3].regularMarketChangePercent.toFixed(2)} %
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Health Care
                            </td>
                            <td className={Math.sign(this.state.yf_sectors[5].regularMarketChangePercent) > 0 ? "text-info" : "text-danger"} >
                            {this.state.yf_sectors[5].regularMarketChangePercent.toFixed(2)} %
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Utilities
                            </td>
                            <td className={Math.sign(this.state.yf_sectors[2].regularMarketChangePercent) > 0 ? "text-info" : "text-danger"} >
                            {this.state.yf_sectors[2].regularMarketChangePercent.toFixed(2)} %
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Cons. Staples
                            </td>
                            <td className={Math.sign(this.state.yf_sectors[4].regularMarketChangePercent) > 0 ? "text-info" : "text-danger"} >
                            {this.state.yf_sectors[4].regularMarketChangePercent.toFixed(2)} %
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Communication
                            </td>
                            <td className={Math.sign(this.state.yf_sectors[6].regularMarketChangePercent) > 0 ? "text-info" : "text-danger"} >
                            {this.state.yf_sectors[6].regularMarketChangePercent.toFixed(2)} %
                            </td>
                        </tr>
                    </tbody>
                </Table>

                </div>
                
                </Card>

                <Card className="d-flex flex-column">
                <CardHeader className="bb-0 pt-3 bg-none" tag="h5">
                    Most Active
                </CardHeader>
                {this.state.yf_trend.map((i) => {
                  return (
                    <ListGroup className="text-center">
                            <ListGroupItem tag="a" href="#" action><Badge color="info">{i.symbol}</Badge></ListGroupItem>
                    </ListGroup>
                  );
                })}
                </Card>
              </CardDeck>
              </Col>  
        </Row>

        <Row>
            <Col  lg={ 7 }>
            <div className="mb-5 mt-5">
                        <ListGroup>
                            <ListGroupItem active>
                                <ListGroupItemHeading className="h4 mt-2">
                                    Newsfeed
                                </ListGroupItemHeading>
                            </ListGroupItem>

                            <div  className={ classes['table-scroll-wrap2'] }>
                              {this.state.yf_mktnws.slice(0, 20).map((i) =>{
                                  return  (

                                    <ListGroupItem tag="a" href={i.url} action target="_blank">
                                    <Badge className="mt-2" color={i.category == "top news" ? "red" : "primary"}>{i.category}</Badge>
                                    <span className="mt-3 d-flex h6 mb-2 text-info">
                                        <span className="text-info">
                                          {i.source}
                                        </span>
                                        <span className="ml-auto small text-muted">
                                            06:09 PM
                                        </span>

                                    </span>
                                    <ListGroupItemHeading className="fw-600 h5">
                                      {i.headline}
                                    </ListGroupItemHeading>
                                    <ListGroupItemText className="mb-2">
                                      {i.summary}
                                    </ListGroupItemText>
                                    
                                </ListGroupItem>


                                  );
                                })}

                            </div>

                            
                        </ListGroup>
                    </div>
            </Col>
            <Col lg={5}>
            <Card className="d-flex flex-column mt-5">
                <CardHeader className="bb-0 pt-3 bg-none" tag="h5">
                    Macro Outlook
                </CardHeader>
                <Table responsive hover className="table mb-0">
                    <thead>
                        <tr>
                            <th scope="col" className="bt-0">Indicator</th>
                            <th scope="col" className="bt-0">Last</th>
                            <th scope="col" className="bt-0">Period</th>
                            <th scope="col" className="text-right bt-0">Prev</th>
                            <th scope="col" className="bt-0 text-right">Range</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="align-middle text-inverse">
                            GDP Growth Rate<span className="small ml-1 text-muted">%</span>
                            </td>
                            <td className="align-middle">
                              33.4
                            </td>
                            <td className="align-middle">
                              Sep20
                            </td>
                            <td className="align-middle text-right">
                              -31.4
                            <i className="fa fa-caret-down text-danger ml-1"></i>
                            </td>
                            <td className="text-right align-right">
                              <span className="text-warning">-31.4</span>
                              <span className="text-muted"> - </span>
                              <span className="text-info">33.4</span>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                


                
                </Card>
                
            </Col>
        </Row>

        
        

    </Container>
    );
  } //render
}
export default Home
