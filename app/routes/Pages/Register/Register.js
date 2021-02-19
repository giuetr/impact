import React from 'react';
import { Link } from 'react-router-dom';

import {
    Form,
    FormGroup,
    FormText,
    Input,
    CustomInput,
    Button,
    Label,
    EmptyLayout,
    ThemeConsumer
} from './../../../components';

import { HeaderAuth } from "../../components/Pages/HeaderAuth";
import { FooterAuth } from "../../components/Pages/FooterAuth";

const Register = () => (
    <EmptyLayout>
        <EmptyLayout.Section center width={ 480 }>
            { /* START Header */}
            <HeaderAuth 
                title="Create Account"
            />
            { /* END Header */}
            { /* START Form */}
            <Form className="mb-3">
                <FormGroup>
                    <Label for="username">
                        First Name
                    </Label>
                    <Input type="text" name="text" id="username" placeholder="Enter your first name..." className="bg-white" />
                </FormGroup>
                <FormGroup>
                    <Label for="username">
                        Last Name
                    </Label>
                    <Input type="text" name="text" id="username" placeholder="Enter your last name..." className="bg-white" />
                </FormGroup>
                <FormGroup>
                    <Label for="jobType">
                        Job Type
                    </Label>
                        <CustomInput 
                            type="select" 
                            name="customSelect" 
                            id="jobType"
                            className="bg-white"
                        >
                            <option value="">Select...</option>
                            <option>Individual Investor</option>
                            <option>Trader</option>
                            <option>Financial Advisor</option>
                            <option>Asset Manager</option>
                            <option>Investment Banking / Private Equity</option>
                            <option>Academy</option>
                            <option>Other</option>
                        </CustomInput>
                </FormGroup>
                <FormGroup>
                    <Label for="emailAdress">
                        Email Adress
                    </Label>
                    <Input type="email" name="email" id="emailAdress" placeholder="Enter email..." className="bg-white" />
                </FormGroup>
                <FormGroup>
                    <Label for="password">
                        Password
                    </Label>
                    <Input type="password" name="password" id="password" placeholder="Password..." className="bg-white" />
                </FormGroup>
                <FormGroup>
                    <Label for="repeatPassword">
                        Repeat Password
                    </Label>
                    <Input type="password" name="password" id="repeatPassword" placeholder="Password..." className="bg-white" />
                </FormGroup>
                
                <FormGroup>
                    <CustomInput type="checkbox" id="acceptTerms" label="Accept Terms and Privacy Policy" inline />
                </FormGroup>
                <ThemeConsumer>
                {
                    ({ color }) => (
                        <Button color={ color } block tag={ Link } to="/">
                            Create Account
                        </Button>
                    )
                }
                </ThemeConsumer>
            </Form>
            { /* END Form */}
            { /* START Bottom Links */}
            <div className="d-flex mb-3">
                <Link to="/pages/forgot-password" className="text-decoration-none">
                    Forgot Password
                </Link>
                <Link to="/pages/login" className="ml-auto text-decoration-none">
                    Login
                </Link>
            </div>
            { /* END Bottom Links */}
            { /* START Footer */}
            <FooterAuth />
            { /* END Footer */}
        </EmptyLayout.Section>
    </EmptyLayout>
);

export default Register;
