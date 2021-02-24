import React from 'react';

import { 
    Container,
    Row,
    Col
} from './../../../components';
import { HeaderMain } from "../../components/HeaderMain";
import { SearchResultsLeftNav } from
    "../../components/SearchResults/SearchResultsLeftNav";
import { SearchResultsHeader } from
    "../../components/SearchResults/SearchResultsHeader";
import { SearchResultsCard } from
    "../../components/SearchResults/SearchResultsCard";
import { SearchResultsCard2 } from
    "../../components/SearchResults/SearchResultsCard2";
import { SearchResultsCard3 } from
    "../../components/SearchResults/SearchResultsCard3";
import { Paginations } from "../../components/Paginations";

const SearchResults = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Funds Search"
                className="mb-5 mt-4"
            />
            { /* START Content */}
            <Row>
                <Col lg={ 3 }>
                    <SearchResultsLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <SearchResultsHeader />
                    <SearchResultsCard />
                    <SearchResultsCard2 />
                    <SearchResultsCard3 />
                    <SearchResultsCard />
                    <SearchResultsCard />
                    <SearchResultsCard />
                    <SearchResultsCard />
                    <div className="d-flex justify-content-center">
                        <Paginations />
                    </div>
                </Col>
            </Row>
            { /* END Content */}
        </Container>
    </React.Fragment>
);

export default SearchResults;
