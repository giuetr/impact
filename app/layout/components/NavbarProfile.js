import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
    NavItem,
    NavLink
} from '../../components';

const NavbarProfile = (props) => (
    <NavItem { ...props }>
        <NavLink tag={ Link } to="/ProfileNew">
            <i className="fa fa-th"></i>
        </NavLink>
    </NavItem>
);
NavbarProfile.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

export { NavbarProfile };
