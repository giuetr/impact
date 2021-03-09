import React from 'react';
import faker from 'faker/locale/en_US';

import { 
    Card,
    Badge,
    CardBody,
} from './../../../components';
import {Link} from 'react-router-dom'

import { randomArray } from './../../../utilities';

const stars = [
    <span key="stars5">
        <i className="fa fa-fw fa-star text-warning" />
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star text-warning"></i>
    </span>,
    <span key="stars4">
        <i className="fa fa-fw fa-star text-warning" />
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star-o"></i>
    </span>,
    <span key="stars4">
        <i className="fa fa-fw fa-star text-warning" />
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star-o"></i>
        <i className="fa fa-fw fa-star-o"></i>
    </span>,
    <span key="stars2">
        <i className="fa fa-fw fa-star text-warning" />
        <i className="fa fa-fw fa-star text-warning"></i>
        <i className="fa fa-fw fa-star-o"></i>
        <i className="fa fa-fw fa-star-o"></i>
        <i className="fa fa-fw fa-star-o"></i>
    </span>,
    <span key="stars1">
        <i className="fa fa-fw fa-star text-warning" />
        <i className="fa fa-fw fa-star-o"></i>
        <i className="fa fa-fw fa-star-o"></i>
        <i className="fa fa-fw fa-star-o"></i>
        <i className="fa fa-fw fa-star-o"></i>
    </span>,
];

const SearchResultsCard = () => (
    <React.Fragment>
        <Card className="mb-3">
            <CardBody>
                <Link className="h4 text-decoration-none" to="/Leaders/AI">XTech Tracker Equity US</Link>
                <br />
                <div className="mb-3 mt-2">
                    <span className="fw-600 text-primary">
                        EUR { faker.commerce.price() }
                    </span>
                    <span className="mx-2">·</span>
                    <span className="fw-600 text-info">
                        16 % YTD
                    </span>
                    <span className="mx-2">·</span>
                    <span>
                        NAV: <span className="fw-600 text-muted">EUR { faker.commerce.price() }M</span>
                    </span>
                </div>
                <div className="mb-2">
                    <Badge pill color="warning">
                        Equity
                    </Badge>
                    <span className="mx-2">·</span>
                    <span>
                        ESG Risk: <span className="fw-600 text-info">31/100</span>
                    </span>
                    <span className="mx-2">·</span>
                    { randomArray(stars) }
                    
                </div>
                <p className="mb-0">
                    The fund aims to outperform the US Equity broad market performance by offering exposure to a selected set of equities among the largest and most traded listed on the NYSE.
                </p>
            </CardBody>
        </Card>
    </React.Fragment>
)

export { SearchResultsCard };
