import React from 'react';
import { Link } from 'react-router-dom';

import {
    Navbar,
    Nav,
    NavItem,
    SidebarTrigger
} from './../../components';

import { NavbarActivityFeed } from './NavbarActivityFeed';
import { NavbarMessages } from './NavbarMessages';
import { NavbarUser } from './NavbarUser';
import { NavbarProfile } from './NavbarProfile';
import { LogoThemed } from './../../routes/components/LogoThemed/LogoThemed';
import { NavbarSearch } from './NavbarSearch';

export const DefaultNavbar = () => (
    <Navbar light expand="xs" fluid>
        <Nav navbar>
            <NavItem className="mr-3">
                <SidebarTrigger/>
            </NavItem>
            <NavItem className="navbar-brand d-lg-none">
                <Link to="/">
                    <LogoThemed />
                </Link>
            </NavItem>
           
        </Nav>
        <Nav navbar className="ml-auto">
            <NavbarSearch className="mr-2" />
            <NavbarActivityFeed />
            <NavbarMessages className="ml-2" />
            <NavbarProfile className="ml-2" />
            <NavbarUser className="ml-2" />
        </Nav>
    </Navbar>
);
