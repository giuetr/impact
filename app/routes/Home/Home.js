import React, {Component} from 'react';


import {
    Container,
    Card,
    CardBody,
    CardDeck
} from './../../components'
import {
    ProfileOverviewCard
} from "../components/Profile/ProfileOverviewCard";


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPrice: null
        };
    }

    async componentDidMount() {
        const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
        const API = PROXY_URL +`https://query2.finance.yahoo.com/v10/finance/quoteSummary/NDAQ?modules=financialData`;
        const response = await fetch(API);
        const data = await response.json();
        console.log(data.result.O.financialData)
        this.setState({ currentPrice: data.result.financialData.currentPrice })
    }

render() {
    return (
        <Container>
       
        { /* START Section 1 */}
        <CardDeck>
            { /* START Card Widget */}
            <Card className="mb-3">
                <CardBody>
                    <ProfileOverviewCard 
                        title="Total Views"
                        badgeTitle="Monthly"
                        badgeColor="primary"
                        value="6.200"
                        valueTitle="vs 4.891 prev."
                        footerTitle="Prev"
                        footerTitleClassName="text-success"
                        footerValue="23%"
                        footerIcon="caret-up"
                    />
                </CardBody>
            </Card>
            { /* START Card Widget */}
            { /* START Card Widget */}
            <Card className="mb-3">
                <CardBody>
                    <ProfileOverviewCard 
                        title="Total Orders"
                        badgeTitle="Annual"
                        badgeColor="info"
                        value="75.938"
                        valueTitle="vs 55.002 prev."
                        footerTitle="Prev"
                        footerTitleClassName="text-danger"
                        footerValue="12%"
                        footerIcon="caret-down"
                    />
                </CardBody>
            </Card>
            { /* START Card Widget */}
            { /* START Card Widget */}
            <Card className="mb-3">
                <CardBody>
                    <ProfileOverviewCard 
                        title="Total Visits"
                        badgeTitle="Daily"
                        badgeColor="secondary"
                        value="456"
                        valueTitle="vs 231 prev."
                        footerTitle="Prev"
                        footerTitleClassName="text-success"
                        footerValue="67%"
                        footerIcon="caret-up"
                    />
                </CardBody>
            </Card>
            { /* START Card Widget */}
            { /* START Card Widget */}
            <Card className="mb-3">
                <CardBody>
                    <ProfileOverviewCard 
                        title="Total Bounces"
                        badgeTitle="Reatime"
                        badgeColor="warning"
                        value="91"
                        valueTitle="vs 87 prev."
                        footerTitle="Prev"
                        footerTitleClassName="text-success"
                        footerValue="8%"
                        footerIcon="caret-up"
                    />
                </CardBody>
            </Card>
            { /* START Card Widget */}
        </CardDeck>
        { /* START Section 1 */}

    </Container>
    );
  } //render
}
export default Home
