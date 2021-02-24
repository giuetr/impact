import React from 'react';
import faker from 'faker/locale/en_US';
import { NavLink as RouterNavLink } from 'react-router-dom';

import { 
    Nav, 
    NavLink,
    NavItem,
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
    CustomInput,
    Badge
} from './../../../components';

const SearchResultsLeftNav = () => (
    <React.Fragment>
        { /* START Navigation */}
        <Nav vertical pills className="mb-3">
            <NavItem>
                <NavLink href="#" className="small d-flex px-1">
                    <span>
                        Asset Class
                    </span>
                    <i className="fa fa-angle-down align-self-center ml-auto"></i>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={ RouterNavLink } to="/apps/search-results" className="d-flex">
                    All Results
                    <Badge pill color="secondary" className="ml-auto align-self-center">
                        25
                    </Badge>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={ RouterNavLink } to="/apps/images-results" className="d-flex">
                    Equity
                    <Badge pill color="secondary" className="ml-auto align-self-center">
                        5
                    </Badge>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={ RouterNavLink } to="/apps/videos-results" className="d-flex">
                    Fixed Income
                    <Badge pill color="secondary" className="ml-auto align-self-center">
                        10
                    </Badge>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={ RouterNavLink } to="/apps/users-results" className="d-flex">
                    Commodity
                    <Badge pill color="secondary" className="ml-auto align-self-center">
                        2
                    </Badge>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={ RouterNavLink } to="/apps/users-results" className="d-flex">
                    Private Equity
                    <Badge pill color="secondary" className="ml-auto align-self-center">
                        3
                    </Badge>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={ RouterNavLink } to="/apps/users-results" className="d-flex">
                    Real Estate
                    <Badge pill color="secondary" className="ml-auto align-self-center">
                        2
                    </Badge>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={ RouterNavLink } to="/apps/users-results" className="d-flex">
                    Venture Capital
                    <Badge pill color="secondary" className="ml-auto align-self-center">
                        1
                    </Badge>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={ RouterNavLink } to="/apps/users-results" className="d-flex">
                    Cross-Asset
                    <Badge pill color="secondary" className="ml-auto align-self-center">
                        2
                    </Badge>
                </NavLink>
            </NavItem>
        </Nav>
        { /* END Navigation */}
        { /* START Category */}
        <Nav vertical className="mb-3">
            <NavItem>
                <NavLink href="#" className="small d-flex px-1">
                    <span>
                        Performance
                    </span>
                    <i className="fa fa-angle-down align-self-center ml-auto"></i>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" className="d-flex">
                    <span>
                        &#62; 30%
                    </span>
                    <span className="small ml-auto align-self-center text-body">
                        (11)
                    </span>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" className="d-flex">
                    <span>
                        &#62; 25%
                    </span>
                    <span className="small ml-auto align-self-center text-body">
                        (6)
                    </span>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" className="d-flex">
                    <span>
                        &#62; 15%
                    </span>
                    <span className="small ml-auto align-self-center text-body">
                        (4)
                    </span>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" className="d-flex">
                    <span>
                        &#62; 7%
                    </span>
                    <span className="small ml-auto align-self-center text-body">
                        (4)
                    </span>
                </NavLink>
            </NavItem>
        </Nav>
        { /* END Category */}
        { /* START Rating */}
        <Nav vertical className="mb-3">
            <NavItem className="mb-2">
                <NavLink href="#" className="small d-flex px-1">
                    <span>
                        ESG Risk
                    </span>
                    <i className="fa fa-angle-down align-self-center ml-auto"></i>
                </NavLink>
            </NavItem>
            <NavItem className="d-flex px-2 mb-2">
                <CustomInput type="radio" id="radio1" name="rating" label="Top Performer" inline defaultChecked />
                <span className="small ml-auto align-self-center">
                    (13)
                </span>
            </NavItem>
            <NavItem className="d-flex px-2 mb-2">
                <CustomInput type="radio" id="radio2" name="rating" label="Average Performer" inline />
                <span className="small ml-auto align-self-center">
                    (10)
                </span>
            </NavItem>
            <NavItem className="d-flex px-2 mb-2">
                <CustomInput type="radio" id="radio3" name="rating" label="Under performer" inline />
                <span className="small ml-auto align-self-center">
                    (2)
                </span>
            </NavItem>
        </Nav>
        { /* END Rating */}
        <Nav vertical className="mb-3">
            <NavItem className="mb-2">
                <NavLink href="#" className="small d-flex px-1">
                    <span>
                        Share Price
                    </span>
                    <i className="fa fa-angle-down align-self-center ml-auto"></i>
                </NavLink>
            </NavItem>
            <NavItem className="d-flex p-0">
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        $
                    </InputGroupAddon>
                    <Input placeholder="Min: 5M" className="bg-white" />
                    <Input placeholder="Max: 500M" className="bg-white" />
                    <InputGroupAddon addonType="append">
                        <Button color="secondary" outline>
                            <i className="fa fa-check"></i>
                        </Button>
                    </InputGroupAddon> 
                </InputGroup>
            </NavItem>
        </Nav>
        { /* START Price */}
        <Nav vertical className="mb-3">
            <NavItem className="mb-2">
                <NavLink href="#" className="small d-flex px-1">
                    <span>
                        NAV
                    </span>
                    <i className="fa fa-angle-down align-self-center ml-auto"></i>
                </NavLink>
            </NavItem>
            <NavItem className="d-flex p-0">
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        $
                    </InputGroupAddon>
                    <Input placeholder="Min: 5M" className="bg-white" />
                    <Input placeholder="Max: 500M" className="bg-white" />
                    <InputGroupAddon addonType="append">
                        <Button color="secondary" outline>
                            <i className="fa fa-check"></i>
                        </Button>
                    </InputGroupAddon> 
                </InputGroup>
            </NavItem>
        </Nav>
        { /* END Price */}
        { /* START Shipping */}
        <Nav vertical className="mb-3">
            <NavItem className="mb-2">
                <NavLink href="#" className="small d-flex px-1">
                    <span>
                        Fund Domicile
                    </span>
                    <i className="fa fa-angle-down align-self-center ml-auto"></i>
                </NavLink>
            </NavItem>
            <NavItem className="d-flex p-0">
                <CustomInput type="select" name="select" id="shipping">
                    <option>Spain</option>
                    <option>United States</option>
                    <option>UK</option>
                    <option>Australia</option>
                    <option>Other...</option>
                </CustomInput>
            </NavItem>
        </Nav>
        { /* END Shipping */}
        <Button color="info" block>
            Search
        </Button>
        <Button color="link" block>
            Reset to Default
        </Button>
    </React.Fragment>
)

export { SearchResultsLeftNav };
