import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
    NavItem,
    NavLink,
    Form, 
    FormGroup, 
    Input,
    Col,
    row,
    InputGroup,
    InputGroupAddon,
    Button
} from './../../components';

const NavbarSearch = (props) => (
    <FormGroup { ...props } row>
        <Col sm={12}>
            <InputGroup>
                <Input placeholder="Search" style={{background: "#ffff"}}/>
                <InputGroupAddon addonType="append">
                    <Button color="info">
                        <i className="fa fa-search" />
                    </Button>
                </InputGroupAddon>
            </InputGroup>
        </Col>
    </FormGroup>
);
NavbarSearch.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

export { NavbarSearch };

