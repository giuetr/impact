import React from 'react';

import { 
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
} from './../../../components';

const SearchResultsHeader = () => (
    <React.Fragment>
        <div className="mb-4">
            <InputGroup>
                <Input placeholder="Search for companies, portfolios, funds..." className="bg-white" />
                <InputGroupAddon addonType="append">
                    <Button color="info">
                        <i className="fa fa-search"></i>
                    </Button>
                </InputGroupAddon>
            </InputGroup>
        </div>
    </React.Fragment>
)

export { SearchResultsHeader };
