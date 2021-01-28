import React, {Component} from 'react';
import Chart from "react-apexcharts";
import faker from 'faker/locale/en_US';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import classes from './security.scss';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import {getAll, getPeers, getChart, getSent} from '../API/api.js'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';


import {
    Container,
    Row,
    Card,
    CardBody,
    CardDeck,
    CardHeader,
    CardFooter,
    CardTitle,
    Progress,
    Col,
    Badge,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
    Table,
    Media
} from '../../components'
import {
    ProfileOverviewCard
} from "../components/Profile/ProfileOverviewCard";
import {
    TinyAreaChart
} from "../components/Analytics/TinyAreaChart";
import { HeaderMain } from "../components/HeaderMain";
import {
  TinyDonutChart
} from "../components/Monitor/TinyDonutChart"
import {
  SessionsByDevice
} from "../components/Analytics/SessionsByDevice";


class Security extends Component {
    constructor(props) {
        super(props);

        this.state = {

        //stato per stock sent
            fh_sent: null,

          //stati relativi al risultato dei metodi in API
            yf_all: null,
            yf_peers: null,
            yf_chart: null,
          //stati campi
          shortName: null,
          shortName:null,
          symbol:null,
          regularMarket_raw:null,
          regularMarketChangePercent_raw:null,
          regularMarketChangePercent_fmt:null,
          industry:null,
          sector:null,
          website:null,
          fullTimeEmployees:null,
          targetMeanraw:null,
          targetLowraw:null,
          targetMedianraw:null,
          targetHighraw:null,
          recommendationKey:null,
          numberOfAnalystOpinions_fmt:null,
          symbol:null,
          marketCap_fmt:null,
          totalRevenue_fmt:null,
          grossMargins_fmt:null,
          ebitda_fmt:null,
          totalCash_fmt:null,
          totalDebt_fmt:null,
          freeCashflow_fmt:null,
          revenueGrowth_raw:null,
          operatingMargins_raw:null,
          operatingMargins_fmt:null,
          returnOnEquity_raw:null,
          returnOnEquity_fmt:null,
          returnOnAssets_raw:null,
          returnOnAssets_fmt:null,
          currentRatio_fmt:null,
          forwardPE_fmt:null,
          forwardEps_fmt:null,
          enterpriseToEbitda_fmt:null,
          beta_fmt:null,
          fiftyDayAverage_fmt:null,
          twoHundredDayAverage_fmt:null,
          fiftyTwoWeekHigh_fmt:null,
          fiftyTwoWeekLow_fmt:null,
          volume_fmt:null,
          averageVolume10days_fmt:null,
          sharesShort_fmt:null,
          sharesShortPriorMonth_fmt:null,
          shortPercentOfFloat_fmt:null,
          overallRisk:null,
          auditRisk:null,
          boardRisk:null,
          compensationRisk:null,
          shareHolderRightsRisk:null,
          netSharePurchaseActivity_buyInfoShares_fmt:null,
          netSharePurchaseActivity_sellInfoShares_fmt:null,
          majorHoldersBreakdown_insidersPercentHeld_fmt:null,
          majorHoldersBreakdown_institutionsPercentHeld_fmt:null,
          majorHoldersBreakdown_institutionsCount_raw:null,

            date: new Date(),
        };
    }

    gainTarget() {
      const price = this.state.yf_all.price.regularMarketPrice.raw;
      const target = this.state.targetMean_raw;
      const result = ((target / price)-1)*100;
      
      return result;
   }

    async componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
      const ticker = 'JNJ'
      await getAll(ticker)
      .then(data => this.setState({ 
        yf_all: data.quoteSummary.result[0]})   
      ).then(data => this.setState({ 
        shortName: this.state.yf_all.quoteType.shortName,
        symbol: this.state.yf_all.quoteType.symbol,
        regularMarket_raw: this.state.yf_all.price.regularMarketPrice.raw,
        regularMarketChangePercent_raw: this.state.yf_all.price.regularMarketChangePercent.raw,
        regularMarketChangePercent_fmt: this.state.yf_all.price.regularMarketChangePercent.fmt,
        industry: this.state.yf_all.assetProfile.industry,
        sector: this.state.yf_all.assetProfile.sector,
        website: this.state.yf_all.assetProfile.website,
        fullTimeEmployees: this.state.yf_all.assetProfile.fullTimeEmployees,
        targetMean_raw: this.state.yf_all.financialData.targetMeanPrice.raw,
        targetLow_raw: this.state.yf_all.financialData.targetLowPrice.raw,
        targetMedian_raw: this.state.yf_all.financialData.targetMedianPrice.raw,
        targetHigh_raw: this.state.yf_all.financialData.targetHighPrice.raw,
        recommendationKey: this.state.yf_all.financialData.recommendationKey,
        numberOfAnalystOpinions_fmt: this.state.yf_all.financialData.numberOfAnalystOpinions.fmt,
        marketCap_fmt: this.state.yf_all.summaryDetail.marketCap.fmt,
        totalRevenue_fmt: this.state.yf_all.financialData.totalRevenue.fmt,
        grossMargins_fmt: this.state.yf_all.financialData.grossMargins.fmt,
        ebitda_fmt: this.state.yf_all.financialData.ebitda.fmt,
        totalCash_fmt: this.state.yf_all.financialData.totalCash.fmt,
        totalDebt_fmt: this.state.yf_all.financialData.totalDebt.fmt,
        freeCashflow_fmt: this.state.yf_all.financialData.freeCashflow.fmt,
        revenueGrowth_raw: this.state.yf_all.financialData.revenueGrowth.raw,
        operatingMargins_raw: this.state.yf_all.financialData.operatingMargins.raw,
        operatingMargins_fmt: this.state.yf_all.financialData.operatingMargins.fmt,
        returnOnEquity_raw: this.state.yf_all.financialData.returnOnEquity.raw,
        returnOnEquity_fmt: this.state.yf_all.financialData.returnOnEquity.fmt,
        returnOnAssets_raw: this.state.yf_all.financialData.returnOnAssets.raw,
        returnOnAssets_fmt: this.state.yf_all.financialData.returnOnAssets.fmt,
        currentRatio_fmt: this.state.yf_all.financialData.currentRatio.fmt,
        forwardPE_fmt: this.state.yf_all.defaultKeyStatistics.forwardPE.fmt,
        forwardEps_fmt: this.state.yf_all.defaultKeyStatistics.forwardEps.fmt,
        enterpriseToEbitda_fmt: this.state.yf_all.defaultKeyStatistics.enterpriseToEbitda.fmt,
        beta_fmt: this.state.yf_all.summaryDetail.beta.fmt,
        fiftyDayAverage_fmt: this.state.yf_all.summaryDetail.fiftyDayAverage.fmt,
        twoHundredDayAverage_fmt: this.state.yf_all.summaryDetail.twoHundredDayAverage.fmt,
        fiftyTwoWeekHigh_fmt: this.state.yf_all.summaryDetail.fiftyTwoWeekHigh.fmt,
        fiftyTwoWeekLow_fmt: this.state.yf_all.summaryDetail.fiftyTwoWeekLow.fmt,
        volume_fmt: this.state.yf_all.summaryDetail.volume.fmt,
        averageVolume10days_fmt: this.state.yf_all.summaryDetail.averageVolume10days.fmt,
        sharesShort_fmt: this.state.yf_all.defaultKeyStatistics.sharesShort.fmt,
        sharesShortPriorMonth_fmt: this.state.yf_all.defaultKeyStatistics.sharesShortPriorMonth.fmt,
        shortPercentOfFloat_fmt: this.state.yf_all.defaultKeyStatistics.shortPercentOfFloat.fmt,
        overallRisk: this.state.yf_all.assetProfile.overallRisk,
        auditRisk: this.state.yf_all.assetProfile.auditRisk,
        boardRisk: this.state.yf_all.assetProfile.boardRisk,
        compensationRisk: this.state.yf_all.assetProfile.compensationRisk,
        shareHolderRightsRisk: this.state.yf_all.assetProfile.shareHolderRightsRisk,
        buyInfoShares_fmt: this.state.yf_all.netSharePurchaseActivity.buyInfoShares.fmt,
        sellInfoShares_fmt: this.state.yf_all.netSharePurchaseActivity.sellInfoShares.fmt,
        insidersPercentHeld_fmt: this.state.yf_all.majorHoldersBreakdown.insidersPercentHeld.fmt,
        institutionsPercentHeld_fmt: this.state.yf_all.majorHoldersBreakdown.institutionsPercentHeld.fmt,
        institutionsCount_raw: this.state.yf_all.majorHoldersBreakdown.institutionsCount.raw
      })   
      )

      
      await getPeers(ticker)
      .then(data => this.setState({ 
        yf_peers: data.finance.result[0].recommendedSymbols})   
      )
      await getChart(ticker)
      .then(data => this.setState({ 
        yf_chart: data.chart.result[0]})   
      )
    }

    tick() {
      this.setState({
        date: new Date()
      });
    }  


    
render() {
  if (!this.state.yf_all || !this.state.yf_peers) {
    return <div>didn't get summary detail</div>;
  }


    return (
        <Container>
          <Row className="mb-3">
            <Col lg={ 12 }>
                <h5 className="mb-0">
                <span>{this.state.date.toDateString()} </span>
                <span className="text-info">{this.state.date.toLocaleTimeString()}</span>
                <span className="small text-muted"> CET</span>
                </h5>
                <Badge color="info">MARKET OPEN</Badge>
            </Col>
          </Row>
          <Container className="pl-0">

          <div className="d-flex mt-3 mb-5">
            <div>
                <HeaderMain 
                    title={this.state.shortName}
                    className=""
                />
                <div className="h3">
                  <span className="text-info mr-3">{this.state.symbol}</span>
                  <span>{this.state.regularMarket_raw}</span>
                  <span className="small mr-3">USD</span>
                  <span style={{color: Math.sign(this.state.regularMarketChangePercent_raw) > 0 ? "#1BB934" : "red"}}>{this.state.regularMarketChangePercent_fmt}</span>
                </div>
            </div>

                

                
                <div className="d-flex ml-auto align-self-start">
                  <div className="d-flex flex-column">
                    <div color="link" className="text-left pl-0 text-decoration-none mb-2 mr-5">
                      Industry: <span className="text-muted">{this.state.industry}</span>
                    </div>
                    <div color="link" className="text-left pl-0 text-decoration-none mb-2 mr-5">
                      Sector: <span className="text-muted">{this.state.sector}</span>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <div color="link" className="text-left pl-0 text-decoration-none mb-2 mr-5">
                      <i className="fa fa-globe text-body mr-2"></i>
                      <a href="#" target="_blank" className="text-info">{this.state.website}</a>
                    </div>
                    <div color="link" className="text-left pl-0 text-decoration-none mb-2 mr-5">
                      <i className="fa fa-child text-body mr-2"></i>
                      Employees: <span className="text-muted">{this.state.fullTimeEmployees}</span>
                    </div>
                  </div>
                </div>


          </div>
          </Container>

       
        { /* START Section 1 */}
        <CardDeck>
            { /* START Card Widget */}
            <Card className="mb-3">
                    <CardBody>
                        <div>
                            <div>
                                <h6 className="mb-1 text-info">ESG</h6>
                                <p>Real Time Sustainability Profile</p>
                            </div>
                            <div className="mb-3 d-flex">
                                <TinyDonutChart />
                                <div className="ml-2 align-self-center">
                                    <span>ESG Score</span>
                                    <h2 className="mb-0">
                                    {this.state.yf_all.hasOwnProperty('esgScores')&&this.state.yf_all.esgScores.hasOwnProperty('totalEsg') ? this.state.yf_all.esgScores.totalEsg.fmt : ''}
                                      </h2>
                                    <span>Peer avg: <span className="text-info">
                                    {this.state.yf_all.hasOwnProperty('esgScores')&&this.state.yf_all.esgScores.hasOwnProperty('peerEsgScorePerformance') ? this.state.yf_all.esgScores.peerEsgScorePerformance.avg.toFixed(0) : ''}
                                    </span></span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-info"></i> Environmental
                                    </div>
                                    <h6 className="mb-0">
                                    {this.state.yf_all.hasOwnProperty('esgScores')&&this.state.yf_all.esgScores.hasOwnProperty('environmentScore') ? this.state.yf_all.esgScores.environmentScore.fmt : ''}
                                     </h6>
                                </div>
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-primary"></i> Social
                                    </div>
                                    <h6 className="mb-0">
                                    {this.state.yf_all.hasOwnProperty('esgScores')&&this.state.yf_all.esgScores.hasOwnProperty('socialScore') ? this.state.yf_all.esgScores.socialScore.fmt : ''}
                                      </h6>
                                </div>
                                <div className="text-left">
                                    <div className="small mb-2">
                                        <i className="fa fa-circle fa-fw text-gray-300"></i> Governance
                                    </div>
                                    <h6 className="mb-0">
                                    {this.state.yf_all.hasOwnProperty('esgScores')&&this.state.yf_all.esgScores.hasOwnProperty('governanceScore') ? this.state.yf_all.esgScores.governanceScore.fmt : ''}
                                     </h6>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            { /* START Card Widget */}
            { /* START Card Widget */}
            <Card className="mb-3">
                <CardBody>
                    <ProfileOverviewCard 
                        title="PRICE TARGET"
                        badgeTitle="Real Time"
                        badgeColor="primary"
                        value={this.state.targetMean_raw}
                        valueTitle=""
                        footerClassName="h5"
                        footerTitle="Potential Return:"
                        footerTitleClassName={Math.sign(this.gainTarget()) > 0 ? "text-info h5" : "text-danger h5"}
                        footerValue={this.gainTarget().toFixed(2)+"%"}
                        footerIcon={Math.sign(this.gainTarget()) > 0 ? "caret-up" : "caret-down"}
                    />
                    <div className="d-flex justify-content-between mt-3">
                                <div className="text-center">
                                    <h6 className="mb-0">{this.state.targetLow_raw}</h6>
                                    <span>Min</span>
                                </div>
                                <div className="text-center">
                                    <h6 className="mb-0">{this.state.targetMedian_raw}</h6>
                                    <span>Avg</span>
                                </div>
                                <div className="text-center">
                                    <h6 className="mb-0">{this.state.targetHigh_raw}</h6>
                                    <span>Max</span>
                                </div>
                            </div>     
                    
                </CardBody>
            </Card>
            { /* START Card Widget */}
            { /* START Card Widget */}
            <Card className="mb-3">
                <CardBody>
                    <ProfileOverviewCard 
                        title="RECOMMENDATIONS"
                        badgeTitle={this.state.recommendationKey}
                        badgeColor="info"
                        value={this.state.recommendationKey}
                        valueTitle="STRONG"
                        footerTitle="Analysts:"
                        footerTitleClassName="text-INFO"
                        footerValue={this.state.numberOfAnalystOpinions_fmt}
                        footerIcon=""
                    />
                    <div className="d-flex justify-content-between mt-3">
                                <div className="text-center">
                                    <h6 className="mb-0 text-danger">SELL</h6>
                                    <span>3</span>
                                </div>
                                <div className="text-center">
                                    <h6 className="mb-0 text-secondary">HOLD</h6>
                                    <span>10</span>
                                </div>
                                <div className="text-center">
                                    <h6 className="mb-0 text-info">BUY</h6>
                                    <span>17</span>
                                </div>
                            </div> 
                </CardBody>
            </Card>
            { /* START Card Widget */}
            { /* START Card Widget */}
            <Card type="border" color="success" className="mb-3">
                <CardBody className="table-success">
                    <ProfileOverviewCard 
                        title="SENTIMENT"
                        badgeTitle="Real time"
                        badgeColor="primary"
                        value="87%"
                        valueTitle="BULLISH"
                        footerTitle="Trend:"
                        footerTitleClassName="text-success"
                        footerValue="8%"
                        footerIcon="caret-up"
                    />
                    <div className="d-flex justify-content-between mt-3">
                                <div className="text-center">
                                    <h6 className="mb-0 text-danger">SELL</h6>
                                    <span>3</span>
                                </div>
                                <div className="text-center">
                                    <h6 className="mb-0 text-secondary">HOLD</h6>
                                    <span>10</span>
                                </div>
                                <div className="text-center">
                                    <h6 className="mb-0 text-info">BUY</h6>
                                    <span>17</span>
                                </div>
                            </div> 
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
                            symbol={this.state.symbol}
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
              
                <Card className="d-flex flex-column">
                <CardHeader className="bb-0 pt-3 bg-none" tag="h6">
                    Key Financials
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
                            Market Cap
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.marketCap_fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Revenue
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.totalRevenue_fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Gross Margin
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.grossMargins_fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            EBITDA
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.ebitda_fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Cash
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.totalCash_fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Debt
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.totalDebt_fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Cash Flow
                            </td>
                            <td className="align-middle text-right text-info">
                          {this.state.freeCashflow_fmt}
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </Card>

                <Card className="d-flex flex-column">
                <CardHeader className="bb-0 pt-3 bg-none" tag="h6">
                    Top Peers
                </CardHeader>
                <Table responsive hover className="table mb-0">
                    <thead>
                        <tr>
                            <th scope="col" className="bt-0">Ticker</th>
                            <th scope="col" className="text-right bt-0">Similarity Score</th>
                        </tr>
                    </thead>
                    <tbody>
                      {this.state.yf_peers.map((i) => {
                        return (
                          <tr>
                            <td className="align-middle">
                            <Badge color="info">{i.symbol}</Badge>
                            </td>
                            <td className="align-middle text-inverse text-right">
                            {i.score.toFixed(3)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                </Table>
                </Card>

              </CardDeck>
                
                </Col>  
        </Row>

        <Row>
        <Col lg={ 12 }>
              <CardDeck>
              
                <Card className="d-flex flex-column">
                <CardHeader className="bb-0 pt-3 bg-none" tag="h6">
                    Key Valuation
                </CardHeader>
                <Table responsive hover className="table mb-0">
                    <thead>
                        <tr>
                            <th scope="col" className="bt-0">Indicator</th>
                            <th scope="col" className="text-right bt-0">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="align-middle text-inverse">
                            Revenue Growth
                            </td>
                            <td className="align-middle text-right" style={{color: Math.sign(this.state.revenueGrowth_raw) > 0 ? "#33AE9A" : "red"}}>
                            <i className={Math.sign(this.state.revenueGrowth_raw) > 0 ? "fa fa-caret-up mr-2" : "fa fa-caret-down mr-2"}></i>
                            {this.state.yf_all.financialData.revenueGrowth.fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Earnings Growth
                            </td>
                            <td className="align-middle text-right" style={{color: Math.sign(this.state.operatingMargins_raw) > 0 ? "#33AE9A" : "red"}}>
                            <i className={Math.sign(this.state.operatingMargins_raw) > 0 ? "fa fa-caret-up mr-2" : "fa fa-caret-down mr-2"}></i>
                            {this.state.operatingMargins_fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Operating Margins
                            </td>
                            <td className="align-middle text-right" style={{color: Math.sign(this.state.operatingMargins_raw) > 0 ? "#33AE9A" : "red"}}>
                            <i className={Math.sign(this.state.operatingMargins_raw) > 0 ? "fa fa-caret-up mr-2" : "fa fa-caret-down mr-2"}></i>
                            {this.state.operatingMargins_fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Return on Equity
                            </td>
                            <td className="align-middle text-right" style={{color: Math.sign(this.state.returnOnEquity_raw) > 0 ? "#33AE9A" : "red"}}>
                            <i className={Math.sign(this.state.returnOnEquity_raw) > 0 ? "fa fa-caret-up mr-2" : "fa fa-caret-down mr-2"}></i>
                            {this.state.returnOnEquity_fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Return on Assets
                            </td>
                            <td className="align-middle text-right" style={{color: Math.sign(this.state.returnOnAssets_raw) > 0 ? "#33AE9A" : "red"}}>
                            <i className={Math.sign(this.state.returnOnAssets_raw) > 0 ? "fa fa-caret-up mr-2" : "fa fa-caret-down mr-2"}></i>
                            {this.state.returnOnAssets_fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Current Ratio
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.currentRatio_fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Forward PE
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.forwardPE_fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Forward EPS
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.forwardEps_fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Enterprise to EBITDA
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.enterpriseToEbitda_fmt}
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <CardFooter className="mt-auto flex-grow-0">
                    <Media className="small">
                        <Media left>
                            <i className="fa fa-fw fa-info-circle mr-2"></i>
                        </Media>
                        <Media body>
                            How do your users (visitors), sessions (visits) and pageviews 
                            metrics for <abbr title="attribute" className="text-dark">www.webkom.com</abbr> compare to your targets over the last 30 days?
                        </Media>
                    </Media>
                </CardFooter>
                </Card>

                <Card className="d-flex flex-column">
                <CardHeader className="bb-0 pt-3 bg-none" tag="h6">
                    Key Technicals
                </CardHeader>
                <Table responsive hover className="table mb-0">
                    <thead>
                        <tr>
                            <th scope="col" className="bt-0">Indicator</th>
                            <th scope="col" className="text-right bt-0">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="align-middle text-inverse">
                            Beta
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.beta_fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            50 Days Average
                            </td>
                            <td className="align-middle text-right text-info">
                            $ {this.state.fiftyDayAverage_fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                              200 Days Average
                            </td>
                            <td className="align-middle text-right text-info">
                            $ {this.state.twoHundredDayAverage_fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            52 Weeks High
                            </td>
                            <td className="align-middle text-right text-info">
                            $ {this.state.fiftyTwoWeekHigh_fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            52 Weeks Low
                            </td>
                            <td className="align-middle text-right text-info">
                            $ {this.state.fiftyTwoWeekLow_fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Volume
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.volume_fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Avg. Volume Last 10 Days
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.averageVolume10days_fmt}
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Shorted Shares
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.sharesShort_fmt} <span className="text-muted">vs. {this.state.sharesShortPriorMonth_fmt} MoM</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle text-inverse">
                            Short % of Float
                            </td>
                            <td className="align-middle text-right text-info">
                            {this.state.shortPercentOfFloat_fmt}
                            </td>
                        </tr>
                        
                    </tbody>
                </Table>
                </Card>

              </CardDeck>
                
                </Col>  
        </Row>

        <Row className="mt-3">
                <Col lg={ 12 }>
                    <Card className="mb-3">
                        <CardBody className="pb-0">
                            <CardTitle tag="h6">
                                Governance Risk and Executives Pay
                            </CardTitle>
                            <p className="mb-4">
                                A measure of the company Governance risk and the breakdown of high-level corporate salaries, including stock options compensation.
                            </p>
                            <Row>
                              <Col sm={ 4 }>
                              <ProfileOverviewCard 
                                  title="OVERALL GOVERNANCE RISK"
                                  badgeTitle="HIGH RISK"
                                  badgeColor="danger"
                                  value={this.state.overallRisk}
                                  valueTitle="Vs. Sector Average: 7"
                                  footerTitle=""
                                  footerTitleClassName="text-info"
                                  footerValue=""
                                  footerIcon=""
                              />
                                  
                              </Col>
                              <Col sm={ 4 }>
                              <ProfileOverviewCard 
                                  title="EXEC. PAY"
                                  badgeTitle="TOP PERFORMER"
                                  badgeColor="info"
                                  value="-55%"
                                  valueTitle="lower than market average"
                                  footerTitle=""
                                  footerTitleClassName="text-info"
                                  footerValue=""
                                  footerIcon=""
                              />
                                  
                              </Col>
                              <Col sm={ 4 }>
                              <Table size="sm">
                                  <tbody>
                                      <tr>
                                          <td className="text-inverse bt-0">Audit Risk</td>
                                          <td className="text-right bt-0">
                                              <Badge color="success" pill>{this.state.auditRisk}</Badge>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="text-inverse">Board Risk</td>
                                          <td className="text-right">
                                              <Badge color="primary" pill>{this.state.boardRisk}</Badge>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="text-inverse">Compensantion Risk</td>
                                          <td className="text-right">
                                              <Badge color="info" pill>{this.state.compensationRisk}</Badge>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="text-inverse">Shareholders Rights Risk</td>
                                          <td className="text-right">
                                              <Badge color="secondary" pill>{this.state.shareHolderRightsRisk}</Badge>
                                          </td>
                                      </tr>
                                  </tbody>
                              </Table>
                              </Col>
                              
                            </Row>
                        </CardBody>
                        { /* START Table */}
                        <Table className="mb-0" hover responsive>
                            <thead>
                                <tr>
                                    <th className="bt-0">Name</th>
                                    <th className="bt-0">Role</th>
                                    <th className="bt-0">Pay</th>
                                    <th className="text-right bt-0">
                                        Age
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                              <tr>
                                  <td className="align-middle text-inverse">
                                  {this.state.yf_all.assetProfile.companyOfficers[0].name}
                                  </td>
                                  <td className="align-middle">
                                  {this.state.yf_all.assetProfile.companyOfficers[0].title}
                                  </td>
                                  <td className="text-info">
                                  $ {this.state.yf_all.assetProfile.companyOfficers[0].totalPay.longFmt}
                                  </td>
                                  <td className="align-middle text-right text-primary">
                                  {this.state.yf_all.assetProfile.companyOfficers[0].age}
                                  </td>
                              </tr>
                              <tr>
                                  <td className="align-middle text-inverse">
                                  {this.state.yf_all.assetProfile.companyOfficers[1].name}
                                  </td>
                                  <td className="align-middle">
                                  {this.state.yf_all.assetProfile.companyOfficers[1].title}
                                  </td>
                                  <td className="text-info">
                                  $ {this.state.yf_all.assetProfile.companyOfficers[1].totalPay.longFmt}
                                  </td>
                                  <td className="align-middle text-right text-primary">
                                  {this.state.yf_all.assetProfile.companyOfficers[1].age}
                                  </td>
                              </tr>
                              <tr>
                                  <td className="align-middle text-inverse">
                                  {this.state.yf_all.assetProfile.companyOfficers[2].name}
                                  </td>
                                  <td className="align-middle">
                                  {this.state.yf_all.assetProfile.companyOfficers[2].title}
                                  </td>
                                  <td className="text-info">
                                  $ {this.state.yf_all.assetProfile.companyOfficers[2].totalPay.longFmt}
                                  </td>
                                  <td className="align-middle text-right text-primary">
                                  {this.state.yf_all.assetProfile.companyOfficers[2].age}
                                  </td>
                              </tr>
                            
                              
                            </tbody>
                        </Table>
                        { /* END Table */}
                    </Card>
                </Col>
                <Col lg={ 12 }>
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
                                        value={this.state.buyInfoShares_fmt}
                                        valueColor="text-muted"
                                    />
                                </Col>
                                <Col sm={ 6 }>
                                    <SessionsByDevice 
                                        title="Sell"
                                        valuePercent="50"
                                        valuePercentColor="text-danger"
                                        value={this.state.sellInfoShares_fmt}
                                        valueColor="text-muted"
                                    />
                                </Col>
                              </Row>
                              <Progress multi className="mb-2" style={{height: "5px"}}>
                                  <Progress animated bar color="success" value="60" />
                                  <Progress animated bar color="danger" value="50" />
                              </Progress>
                            </Col>
                            <Col sm={ 4 }>
                              <Table size="sm">
                                  <tbody>
                                      <tr className="table-info">
                                          <td className="text-inverse bt-0">Shareholders</td>
                                          <td className="bt-0"></td>

                                      </tr>
                                      <tr>
                                          <td className="text-inverse bt-0">Insider Shares %</td>
                                          <td className="text-right text-info bt-0">
                                              {this.state.insidersPercentHeld_fmt}
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="text-inverse">Institutions Shares %</td>
                                          <td className="text-right text-info">
                                              {this.state.institutionsPercentHeld_fmt}
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="text-inverse">Institutional owners</td>
                                          <td className="text-right text-info">
                                              {this.state.institutionsCount_raw}
                                          </td>
                                      </tr>
                                  </tbody>
                              </Table>
                            </Col>

                            </Row>
                            
                            
                        </CardBody>
                        { /* START Table */}
                        
                        <Table className="mb-0">
                            <thead>
                                <tr>
                                    <th className="bt-0 pr-5">Insider</th>
                                    <th className="bt-0 pr-5">Transaction</th>
                                    <th className="bt-0">Quantity</th>
                                    <th className="bt-0">Value</th>
                                    <th className="bt-0">Date</th>
                                </tr>
                            </thead>
                        </Table>

                        <div className={ classes['table-scroll-wrap'] }>
                          <Table className="mb-0" hover responsive>
                              <tbody>
                                {this.state.yf_all.insiderTransactions.transactions.slice(0, 10).map((i) => {
                                  return (
                                    <tr>
                                    <td className="align-middle text-inverse">
                                    <div>
                                    {i.hasOwnProperty('filerName') ? i.filerName : ''}                                    
                                    </div>
                                    <span className="text-info">
                                    {i.hasOwnProperty('filerRelation') ? i.filerRelation : ''}
                                    </span>
                                    </td>
                                    <td className="align-middle">
                                    {i.hasOwnProperty('transactionText') ? i.transactionText : ''}                 
                                    </td>
                                    <td className="align-middle">
                                    {i.hasOwnProperty('shares') ? i.shares.raw : ''}
                                    </td>
                                    <td className="align-middle text-info">
                                    {i.hasOwnProperty('value') ? i.value.raw : ''}
                                    </td>
                                    <td className="align-middle">
                                    {i.hasOwnProperty('startDate') ? i.startDate.fmt : ''}
                                    </td>
                                    <td className="align-middle text-right">
                                    <Badge color="danger">SHORT</Badge>
                                    </td>
                                </tr>
                                  );
                                })}
                              </tbody>
                          </Table>
                        </div>
                        
                        
                        { /* END Table */}
                    </Card>
                </Col>
        </Row>

        <Row>
            <Col  lg={ 12 }>
            <div className="mb-5 mt-5">
                        <ListGroup>
                            <ListGroupItem active>
                                <ListGroupItemHeading className="h4 mt-2">
                                    Newsfeed
                                </ListGroupItemHeading>
                            </ListGroupItem>
                            <ListGroupItem tag="a" href="#" action>
                                <span className="mt-2 d-flex h6 mb-1 text-info">
                                    <span className="text-info">
                                        { faker.name.firstName() }
                                    </span>
                                    <span className="ml-auto small text-muted">
                                        06:09 PM
                                    </span>

                                </span>
                                <ListGroupItemHeading className="h5">
                                    List group item heading
                                </ListGroupItemHeading>
                                <ListGroupItemText className="mb-2">
                                    { faker.lorem.sentence() }
                                </ListGroupItemText>
                                
                            </ListGroupItem>

                            <ListGroupItem tag="a" href="#" action>
                                <span className="mt-2 d-flex h6 mb-1 text-info">
                                    <span className="text-info">
                                        { faker.name.firstName() }
                                    </span>
                                    <span className="ml-auto small text-muted">
                                        06:09 PM
                                    </span>

                                </span>
                                <ListGroupItemHeading className="h5">
                                    List group item heading
                                </ListGroupItemHeading>
                                <ListGroupItemText className="mb-2">
                                    { faker.lorem.sentence() }
                                </ListGroupItemText>
                                
                            </ListGroupItem>

                            <ListGroupItem tag="a" href="#" action>
                                <span className="mt-2 d-flex h6 mb-1 text-info">
                                    <span className="text-info">
                                        { faker.name.firstName() }
                                    </span>
                                    <span className="ml-auto small text-muted">
                                        06:09 PM
                                    </span>

                                </span>
                                <ListGroupItemHeading className="h5">
                                    List group item heading
                                </ListGroupItemHeading>
                                <ListGroupItemText className="mb-2">
                                    { faker.lorem.sentence() }
                                </ListGroupItemText>
                                
                            </ListGroupItem>

                            <ListGroupItem tag="a" href="#" action>
                                <span className="mt-2 d-flex h6 mb-1 text-info">
                                    <span className="text-info">
                                        { faker.name.firstName() }
                                    </span>
                                    <span className="ml-auto small text-muted">
                                        06:09 PM
                                    </span>

                                </span>
                                <ListGroupItemHeading className="h5">
                                    List group item heading
                                </ListGroupItemHeading>
                                <ListGroupItemText className="mb-2">
                                    { faker.lorem.sentence() }
                                </ListGroupItemText>
                                
                            </ListGroupItem>


                        </ListGroup>
                    </div>
            </Col>
        </Row>

        
        

    </Container>
    );
  } //render
}
export default Security
