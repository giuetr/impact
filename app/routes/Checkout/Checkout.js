import React from 'react';

import { 
    Container,
    Row,
    Col,
    Input,
    Card,
    Button,
    Badge,
    CardBody,
    CardFooter,
    CardTitle,
    CustomInput,
    Label,
    Media,
    FormGroup,
    Form,
    Link,
    Nav,
    NavItem,
    UncontrolledTabs,
    TabPane,
} from '../../components';

import { HeaderMain } from "../components/HeaderMain";
import { ProfileLeftNav } from "../components/Profile/ProfileLeftNav";
import { ProfileHeader } from "../components/Profile/ProfileHeader";

const Checkout = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Access the Premium Platform"
                className="mb-5 mt-4"
            />
            { /* START Content */}

            <Row>
                <Col lg={ 8 }>
                    <Card>
                                    <CardBody>
                                        <div className="d-flex mb-4">
                                        <CardTitle tag="h6">
                                                Settings
                                        </CardTitle>
                                            <span className="ml-auto align-self-start small">
                                                Fields mark as <span className="text-danger">*</span> is required.
                                            </span>
                                        </div>
                                        <Form>
                                            <div className="small mt-4 mb-3">
                                                Your info
                                            </div>
                                            { /* START Input */}
                                            <FormGroup row>
                                                <Label for="firstName" sm={3} className="text-right">
                                                    <span className="text-danger">*</span> First Name
                                                </Label>
                                                <Col sm={8}>
                                                    <Input 
                                                        type="text" 
                                                        name="" 
                                                        id="firstName" 
                                                        placeholder="First Name..." 
                                                    />
                                                </Col>
                                            </FormGroup>
                                            { /* END Input */}
                                            { /* START Input */}
                                            <FormGroup row>
                                                <Label for="lastName" sm={3} className="text-right">
                                                    <span className="text-danger">*</span> Last Name
                                                </Label>
                                                <Col sm={8}>
                                                    <Input 
                                                        type="text" 
                                                        name="text" 
                                                        id="lastName" 
                                                        placeholder="Last Name..." 
                                                    />
                                                </Col>
                                            </FormGroup>
                                            { /* END Input */}
                                            { /* START Select */}
                                            <FormGroup row>
                                                <Label for="jobType" sm={3} className="text-right">
                                                    Job Type
                                                </Label>
                                                <Col sm={8}>
                                                    <CustomInput 
                                                        type="select" 
                                                        name="customSelect" 
                                                        id="jobType"  
                                                    >
                                                        <option value="">Select...</option>
                                                        <option>Portfolio Manager </option>
                                                        <option>Trader</option>
                                                        <option>Investor</option>
                                                        <option>Executive</option>
                                                    </CustomInput>
                                                </Col>
                                            </FormGroup>
                                            <div className="small mt-4 mb-3">
                                                Your email
                                            </div>
                                            { /* START Input */}
                                            <FormGroup row>
                                                <Label for="firstName" sm={3} className="text-right">
                                                    Your email
                                                </Label>
                                                <Col sm={8}>
                                                    <Input 
                                                        type="text" 
                                                        name="" 
                                                        id="email" 
                                                        placeholder="jane@test.com" 
                                                        disabled
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label for="firstName" sm={3} className="text-right">
                                                    New email
                                                </Label>
                                                <Col sm={8}>
                                                    <Input 
                                                        type="text" 
                                                        name="" 
                                                        id="newEmail" 
                                                        placeholder="New email" 
                                                    />
                                                </Col>
                                            </FormGroup>
                                            { /* END Textarea */}
                                        </Form>
                                        { /* END Form */}
                                    </CardBody>
                                    <CardFooter className="text-right">
                                        <Button color="primary">
                                            Update Profile
                                        </Button>
                                    </CardFooter>
                                </Card>
                                <Card className="mb-3 mt-3">
                                    <CardBody>
                                        <div className="d-flex mb-4">
                                        <CardTitle tag="h6">
                                                Your Account
                                        </CardTitle>
                                            <span className="ml-auto align-self-start small">
                                                Fields mark as <span className="text-danger">*</span> is required.
                                            </span>
                                        </div>
                                        <Form>
                                            { /* START Input */}
                                            <FormGroup row>
                                                <Label for="oldPassword" sm={3} className="text-right">
                                                    <span className="text-danger">*</span> Old Password
                                                </Label>
                                                <Col sm={8}>
                                                    <Input 
                                                        type="password" 
                                                        name="password" 
                                                        id="oldPassword" 
                                                        defaultValue="********"
                                                    />
                                                </Col>
                                            </FormGroup>
                                            { /* END Input */}
                                            { /* START Input */}
                                            <FormGroup row>
                                                <Label for="newPassword" sm={3} className="text-right">
                                                    <span className="text-danger">*</span> New Password
                                                </Label>
                                                <Col sm={8}>
                                                    <Input 
                                                        type="password" 
                                                        name="password" 
                                                        id="newPassword" 
                                                        defaultValue="********"
                                                    />
                                                </Col>
                                            </FormGroup>
                                            { /* END Input */}
                                            { /* START Input */}
                                            <FormGroup row className="mb-0">
                                                <Label for="confirmNewPassword" sm={3} className="text-right">
                                                    <span className="text-danger">*</span> Confirm New Password
                                                </Label>
                                                <Col sm={8}>
                                                    <Input 
                                                        type="password" 
                                                        name="password" 
                                                        id="confirmNewPassword" 
                                                        defaultValue="********"
                                                    />
                                                </Col>
                                            </FormGroup>
                                            { /* END Input */}
                                            { /* START Input */}
                                            <FormGroup row className="mt-3">
                                                <Label sm={3} >
                                                
                                                </Label>
                                                <Col sm={8}>
                                                    <Button color="primary">
                                                        Update Profile
                                                    </Button>
                                                    <Button color="link">
                                                        Forgot Password
                                                    </Button>
                                                </Col>
                                            </FormGroup>
                                            { /* END Input */}
                                        </Form>
                                        { /* END Form */}
                                    </CardBody>
                                    <CardFooter className="small">
                                        <i className="fa fa-fw fa-support text-muted mr-2"></i>
                                        If you have trouble with the configuration, you can <a href="#">contact us</a>.
                                    </CardFooter>
                                </Card>
                                <Card className="mb-3 b-danger">
                                    <CardBody>
                                    <CardTitle tag="h6" className="text-danger">
                                            Delete Account
                                    </CardTitle>
                                        <p>
                                        Are you sure you want to delete your <strong>DataSpark</strong> account? All your data will be lost.
                                        </p>
                                        <Button color="danger" outline>
                                            Yes, Delete
                                        </Button>
                                    </CardBody>
                                    <CardFooter className="small">
                                        <i className="fa fa-fw fa-support text-muted mr-2"></i>
                                        All your personal settings and dashboards will be deleted. We will be unable to recover your data if choose to delete your account.
                                    </CardFooter>
                                </Card>
                </Col>
                <Col>
                <Card className="mb-3">
                    <CardBody>
                        <div className="d-flex">
                            <i className="fa fa-diamond m-2"></i>
                        </div>

                        <div className="mb-4 mt-3 text-center">
                            <a className="h3 text-decoration-none" href="#">
                                Mega<span className="fw-600">Trends</span>
                            </a>
                            <div className="text-center mt-2">
                                Frequency: <span className="text-info">Weekly</span>
                            </div>
                            <div className="text-center">
                                <i className="fa fa-map-marker mr-1"></i>
                                EQUITY
                            </div>
                        </div>
                        
                        <div className="text-center mb-4">
                            <div className="mb-2">
                                <span className="small">
                                    Top users:
                                </span>
                            </div>
                            <Badge pill color="primary" className="mr-1">
                                Investors
                            </Badge>
                            <Badge pill color="warning" className="mr-1">
                                Banks
                            </Badge>
                            <Badge pill color="pink">
                                Hedge Funds
                            </Badge>
                        </div>
                        <div className="text-center mb-4">
                            <p className="mb-0">
                                The companies leading the shift towards a sustainable future, organized by sector of innovation. Discover tomorrow's leaders.
                            </p>
                            <Button className="mt-3" color="primary">Free Access</Button>
                                        
                        </div>   
                    </CardBody>
                </Card>

                </Col>
            </Row>

            { /* END Content */}

        </Container>
    </React.Fragment>
);

export default Checkout;