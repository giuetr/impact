import React from 'react';
import classes from './profilenew.scss';

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
    Nav,
    NavItem,
    UncontrolledTabs,
    TabPane,
} from '../../components';

import { HeaderMain } from "../components/HeaderMain";
import { ProfileLeftNav } from "../components/Profile/ProfileLeftNav";
import { ProfileHeader } from "../components/Profile/ProfileHeader";

const ProfileNew = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="My Profile"
                className="mb-5 mt-4"
            />
            { /* START Content */}

            <Row>
                <Col lg={ 8 }>
                    <Media className="mb-3">
                        <Media body>
                            <h5 className="mb-1 mt-0">
                                Jane Williams
                                <span className="text-muted mx-1"> / </span> Profile Info
                            </h5>
                            <Badge color="primary" pill className="mr-2">Free</Badge> 
                        </Media>
                    </Media>
                </Col>
                <Col lg={ 8 }>
                    <UncontrolledTabs initialActiveTabId="profile">
                        { /* START Pills Nav */}
                        <Nav pills className="mb-4 flex-column flex-md-row mt-4 mt-lg-0">
                            <NavItem>
                                <UncontrolledTabs.NavLink tabId="profile">
                                    Your Profile
                                </UncontrolledTabs.NavLink>
                            </NavItem>
                            <NavItem>
                                <UncontrolledTabs.NavLink tabId="settings">
                                    Settings
                                </UncontrolledTabs.NavLink>
                            </NavItem>
                            <NavItem>
                                <UncontrolledTabs.NavLink tabId="terms">
                                    Terms &amp; Conditions
                                </UncontrolledTabs.NavLink>
                            </NavItem>
                            <NavItem>
                                <UncontrolledTabs.NavLink tabId="privacy">
                                    Privacy Policy
                                </UncontrolledTabs.NavLink>
                            </NavItem>
                        </Nav>
                        { /* END Pills Nav */}
                            
                        <UncontrolledTabs.TabContent>
                            <TabPane tabId="profile">
                                <Card>
                                    <CardBody>
                                        <div className="d-flex mb-4">
                                            <CardTitle tag="h6">
                                                Profile
                                            </CardTitle>
                                        </div>
                                        <Form>
                                            <div className="small mt-4 mb-3">
                                                Your info
                                            </div>
                                            { /* START Input */}
                                            <FormGroup row>
                                                <Label sm={3} className="text-right">
                                                    Name
                                                </Label>
                                                <Label for="name" sm={3} className="text-info">
                                                    Jane Wilson
                                                </Label>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label sm={3} className="text-right">
                                                    Email
                                                </Label>
                                                <Label for="email" sm={3} className="text-info">
                                                    janewilson@test.com
                                                </Label>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label sm={3} className="text-right">
                                                    Role
                                                </Label>
                                                <Label for="role" sm={3} className="text-info">
                                                    Portfolio Manager
                                                </Label>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Label sm={3} className="text-right">
                                                    DataSpark Plan
                                                </Label>
                                                <Label for="plan" sm={3}>
                                                    <Badge color="primary" pill className="mr-2">Free</Badge>
                                                </Label>
                                            </FormGroup>
                                            { /* END Input */}
                                            { /* START Select */}

                                          
                                            
                                            { /* END Textarea */}
                                        </Form>
                                        { /* END Form */}
                                    </CardBody>
                                    <CardFooter className="text-right">
                                        <Button color="primary">
                                            Upgrade
                                        </Button>
                                    </CardFooter>
                                </Card>

                            </TabPane>
                            <TabPane tabId="settings">
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
                            </TabPane>
                            <TabPane tabId="terms">
                                <Card>
                                    <CardBody className={ classes['table-scroll-wrap'] }>
                                        <div className="d-flex mb-4 mt-3">
                                            <CardTitle tag="h3">
                                                Terms &amp; Conditions
                                            </CardTitle>
                                        </div>

                                        <div>
                                            <p>
                                            DataSpark is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained in this Subscriber Agreement ("Agreement"). Your use of DataSpark and your receipt of any subscription-based services and information made available through DataSpark (the "Information" and the "Service" or "Services") constitutes (i) your agreement to all such terms, conditions and notices; (ii) your agreement to be bound by and comply with this Agreement; and (iii) your consent to the collection, use and disclosure of personal information as described in the Privacy Statement. If you do not so agree and consent, you are not authorized to visit DataSpark or use DataSpark’s Information or Services. Please read the terms and conditions of this Agreement carefully; they impose obligations on you and govern your relationship with DataSpark. By accessing any of the Information or Services, you are acknowledging that you have read and understood the terms and conditions of this Agreement, and agree without limitation or qualification, to be legally bound by, and to comply with them.
                                            </p>

                                        </div>
                                        <div>
                                            <h4>1. SYSTEM </h4>
                                            <p>
                                            You shall be responsible for obtaining the requisite communication lines and internet connections to interface with DataSpark. You understand and agree that nothing in this Agreement shall be deemed to constitute an undertaking by DataSpark to continue to disseminate the Information in its present form or configuration. DataSpark, in its sole discretion may, from time to time, make modifications to the Information and Service, irrespective of whether such modifications would require changes to be made by you to any device or equipment which receives the Service from DataSpark. You shall bear all risks of failing to make concurrent modifications to your devices and equipment and you acknowledge and agree that neither DataSpark nor its Information Providers (defined as the source from which DataSpark receives the Information made available through the Service) shall be responsible if such changes affect your access to or use of the Service in any way.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>2. APP OWNERSHIP </h4>
                                            <p>
                                            Software included as part of the Service contains software proprietary to DataSpark and/or to third parties ("Third Party Suppliers") and licensed to DataSpark ("DataSpark Software"). DataSpark and Third Party Suppliers retain title and ownership to the DataSpark Software and all copyright and other intellectual property rights therein. Your receipt of the Service does not constitute a sale of the DataSpark Software or any copy. You agree not to alter, decompile, scan, or disassemble the DataSpark Software.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>3. CORPORATE RIGHTS AND NAMES</h4>
                                            <p>
                                            You understand and agree that DataSpark and the Information Providers have proprietary rights in certain trademarks, service marks, trade names, corporate names and in the Information that originates on or derives from markets regulated or operated by the Information Providers and in the compilation of Information gathered from other sources (the "Intellectual Property"). You agree not to use such Intellectual Property in any way which would infringe upon the rights of DataSpark and the Information Providers. You agree not to alter, remove, or obscure any copyright notices or other proprietary notices on and in any part of the Service.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>4. THIRD PARTIES</h4>
                                            <p>
                                            You agree that the Information Providers have the right to enforce the terms of this Agreement and are specifically intended to be third party beneficiaries hereof.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>5. USE OF INFORMATION</h4>
                                            <p>
                                            You are authorized to receive and use the Information solely in accordance with this Agreement. Any other use of the Information by you, including, but not limited to, retransmission or reprocessing, in whole or in part, is prohibited and you agree not to transmit, divulge, or publish any part of the content or substance or in any way provide the Information, or any part thereof, to any other Person, which shall be defined as any natural person, proprietorship, corporation, partnership, or other entity whatsoever. You acknowledge and agree that as a condition of continued receipt of Information from DataSpark, its suppliers or any of their affiliates or agents, you shall not create, sponsor or permit the trading of financial instruments or investment products (including, without limitation, derivatives, structured products, investment funds, exchange-traded funds or derivatives based on exchange-traded funds where the price, return and/or performance of such instrument or product is based on, related to, or intended to track, any index published by any of DataSpark’s suppliers or financial instrument or investment product linked to an index published by any DataSpark supplier without a separate written agreement with the applicable DataSpark supplier for such purpose. You shall be solely responsible for maintaining the confidentiality of your password. You shall immediately notify DataSpark of any known or suspected unauthorized use(s) of your account, or any known or suspected breach of security, including loss, theft, or unauthorized disclosure of your username, password or credit card information. You are fully responsible for all usage and activity on your account, including, but not limited to, use of the account by any third party authorized by you to use your username and password. If the computer system on which you accessed the Service is sold or transferred to another party, you warrant and represent that you will delete all cookies and software files obtained by or through use of the Service.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>6. USER STATUS</h4>
                                            <p>
                                            When signing up as a Subscriber, you may be asked, and you must represent, whether you are subscribing under Professional or Non-Professional Status. To qualify as a Non-Professional, you must warrant that you: i) are an individual neither (A) acting as a broker or dealer in the purchase or sale of negotiable financial instruments for third parties or registered or qualified in any capacity under any national or provincial securities or commodities trading law, rule or regulation, or the rules or regulations of any securities or commodities exchange, market or association; nor (B) engaged as an "investment advisor" or "investment banker" as defined in the Investment Advisors Act of 1940 of the United States (whether or not registered or qualified under that Act); nor (C) employed by a bank or other organization exempt from registration under federal, state or provincial securities laws to perform functions that would require registration or qualification if such functions were performed for an organization not so exempt; ii) shall use the Information solely in connection with your own individual, personal investment activities and not in connection with any trade or business activities; iii) are over eighteen (18) years of age; and iv) are a party to this Agreement in your own capacity and not on behalf of a firm, corporation, partnership, trust or association. You acknowledge and agree that if your status with respect to any of the foregoing statements is affected or changed in anyway, you shall promptly contact contact@dataspark.org. If any of the above do not apply but you are a professional broker, dealer or trader or employed by or conducting business in the securities industry, you will be designated as a Professional and you must agree to be bound by certain exchange agreements before utilizing the Services for commercial purposes. If you are such a professional, you must complete and submit the appropriate agreements as available and as directed when signing up as a Subscriber and accept and agree to the terms therein. DataSpark reserves the right to deny Service to any Subscriber who, in DataSpark’s determination, misrepresents its non-professional status. If it is determined by DataSpark, or through any third-party audit by any of the Information Providers, that you have misrepresented your status as a non-professional, you accept and agree that DataSpark reserves the right to debit your credit card or invoice you for the difference in any non-professional exchange fees remitted by you over the period of any third-party or internal audit and the amount of professional exchange fees which should have been remitted under professional status. DataSpark remit the full amount of the exchange fees paid by you directly to the Information Provider.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>7. INFORMATION FROM SUBSCRIBERS</h4>
                                            <p>
                                            All information provided by you pursuant to this Agreement is being provided at the request of you and the Information Providers. DataSpark shall request any additional information from you required by any Information Providers or their auditors. Failure to promptly provide the requested information shall result in termination of access to the Service until such time as the request is complied with.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>8. ACCOUNT USE</h4>
                                            <p>
                                            You may not share your DataSpark username and/or password with any third party. We reserve the right to limit access to the Services to one user at a time. DataSpark reserves the right to cancel or deny access to any subscriber who shares their account or, in its sole discretion, to any user without notice.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>9. FEES</h4>
                                            <p>
                                            The subscription fees for DataSpark are set forth on DataSpark’s website and may be amended at DataSpark’s sole discretion from time to time without notice and are payable monthly or annually in advance. Payment shall be accepted by credit card, wire or other payment services for monthly and annual subscriptions. A portion of your subscription fee may include an exchange fee that is paid to the securities exchanges by DataSpark on a monthly basis. These exchange fees are non-refundable. If a trial period is offered, subscriptions are billed upon completion of the trial offer. You must cancel before your trial period has expired in order to prevent automatic and recurring billing of your subscription. If no trial period is offered, you will be billed upon signup and automatically each month or year, as selected, until you cancel. There is a limit of one trial offer per customer. You agree to provide DataSpark with the right to debit your credit card monthly or annually in advance for all Services provided to you. You may cancel at any time; however monthly subscriptions are subject to a 60-day cancellation policy. Both monthly and annual customers requesting cancellation must submit a cancellation request in writing via email to contact@dataspark.org prior to your re-bill date. No refunds are permitted for annual subscriptions.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>10. TAXES</h4>
                                            <p>
                                            You shall be solely responsible for the payment of any taxes, charges or assessments imposed on you or DataSpark, and any penalties or interest thereon, relating to the provision of the Service (except for any income taxes, if any, imposed on DataSpark).
                                            </p>
                                        </div>
                                        <div>
                                            <h4>11. USER CODE OF CONDUCT</h4>
                                            <p>
                                            When you register as a Subscriber, you gain access to the Services which may include the ability to participate in chat rooms, exchange messages, and share files. You may use the Service for lawful purposes only. You agree not to post, upload, e-mail, transmit, distribute, or otherwise make available through the Service any of the following: (i) any material that violates any applicable laws; (ii) any material that restricts or inhibits any other user from using the Service; (iii) any material that is unlawful, threatening, abusive, harassing, defamatory, obscene, offensive, harmful, obnoxious, pornographic, profane, or indecent, or encouraging conduct that would constitute a criminal offense or give rise to civil liability; (iv) any material that contains viruses or any other element or component that has a capacity or potential to interrupt, permit the unauthorized use of, or limit the functionality of any software or hardware, any telecommunications equipment, or any communications network; (v) any material that violates or infringes the rights of others; rights of privacy or publicity; rights under defamation law; or rights under securities or other applicable law; or (vi) any material that contains any other harmful or illegal component. You further agree that you will not: (i) alter, damage or delete any material appearing on DataSpark; (ii) disrupt the normal flow of communication on DataSpark; (iii) claim a relationship with or speak for any business, organization, or person for which you are not authorized to claim such a relationship; or (iv) violate any operating rule, policy or guideline of your Internet access provider or online service. DataSpark reserves the right (but does not have any obligation) to prohibit or restrict conduct on the DataSpark websites and to edit, block, or remove any content, in whole or in part, which in our sole discretion we believe violates our Subscriber Code of Conduct, or is otherwise objectionable. If you believe that material has been posted that violates any of these prohibitions, or that should otherwise be removed, please contact contact@dataspark.org.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>12. RECIPIENTS OF DATA</h4>
                                            <p>
                                            By executing this Agreement, You, (known as “Subscriber” in the DataSpark Subscriber Agreement known as “Subscriber Agreement”) agree that: a. you have read and agree to be bound by the Agreement set by DataSpark and the conditions of use by Verizon Media; b. the Data Recipient/Vendor (i) is not authorized to add to or delete any terms of provisions from the Subscriber Agreement; and (ii) is not authorized to modify any Subscriber Agreement; and c. no provision has been added to or deleted from the Subscriber Agreement and that no modifications have been made to it. Both the Subscriber and the person executing on behalf of the Subscriber warrant that the Subscriber is legally able to undertake the obligations set forth in and the signatory is duly authorized to bind the Subscriber to the Subscriber Agreement.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>13. TERM</h4>
                                            <p>
                                            The initial term of this Agreement shall be the date of acceptance by you of this Agreement as evidenced by your clicking the "Agree" button on DataSpark website, or the date you actually use the Service, whichever date occurs first, and shall continue until the end of your selected subscription term. Subsequent to the initial term, the term of this Agreement shall automatically be extended for successive additional subscription terms unless terminated by a party hereto or effected by Subscriber cancellation.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>14. COMPLIANCE WITH LAWS</h4>
                                            <p>
                                            You represent and warrant that you are not engaged in, and agree not to engage in, any unlawful transaction or business, and/or will not use or knowingly permit anyone to use the Information and/or the Service for: i) any purpose or in any manner not authorized by this Agreement, or ii) for any unlawful purpose or in any manner not in compliance with the statutes, rules and regulations referenced in Section 5.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>15. NO ENDORSEMENT</h4>
                                            <p>
                                            You understand that neither DataSpark, nor any part of the Service, or any equipment utilized by DataSpark is sponsored or endorsed by any of the Information Providers. DataSpark may contain links to websites operated by parties other than DataSpark. Such links are provided for your convenience only. DataSpark does not control such websites, and is not responsible for their contents. DataSpark’s inclusion of links to such websites does not imply any endorsement of the material on such websites or any association with their operators.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>16. NO ADVICE</h4>
                                            <p>
                                            The Information and Services are for informational purposes only and should not be used or construed as an offer to sell, a solicitation of an offer to buy, or an endorsement, recommendation or sponsorship of any company or security by DataSpark, its affiliates, officers, directors, employees or agents. You acknowledge and agree that neither the Information nor any of the Services is intended to supply investment or financial advice. DataSpark offers no advice regarding the nature, potential value, or suitability of any particular security, transaction, investment or investment strategy. You acknowledge and agree that the use of the Information and Services, and any decisions made in reliance upon the Information and Services, are made at your own risk.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>17. NO WARRANTIES</h4>
                                            <p>
                                            DataSpark shall furnish the Service and the Information to you as promptly and accurately as is reasonably practicable, but neither DataSpark nor the Information Providers, their respective affiliates, agents and licensors warrant or guarantee the timeliness, sequence, accuracy or completeness of the Information. FURTHER, WITH RESPECT TO THE INFORMATION AND THE SERVICE, THERE ARE NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE OF THE INFORMATION OR SERVICES AVAILABLE THROUGH THE SERVICE. NEITHER DATASPARK, THE INFORMATION PROVIDERS NOR THEIR THIRD-PARTY INFORMATION PROVIDERS AND THEIR RESPECTIVE AFFILIATES, AGENTS OR LICENSORS SHALL BE LIABLE TO YOU OR ANYONE ELSE FOR ANY LOSS OR INJURY CAUSED IN WHOLE OR IN PART BY THEIR NEGLIGENCE OR CONTINGENCIES BEYOND THEIR CONTROL IN PROCURING, COMPILING, INTERPRETING, REPORTING OR DELIVERING ANY INFORMATION OR SERVICE OR BY ANY DELAYS, INACCURACIES, ERRORS IN OR OMISSIONS OF ANY OF THE INFORMATION OR THE TRANSMISSION THEREOF OR IN THE PROVISION OF THE SERVICE. IN NO EVENT WILL DATASPARK, THE INFORMATION PROVIDERS, THEIR THIRD-PARTY INFORMATION PROVIDERS, AND THEIR RESPECTIVE AFFILIATES, AGENTS OR LICENSORS BE LIABLE TO YOU OR ANYONE ELSE FOR ANY DECISION MADE OR ACTION TAKEN BY YOU IN RELIANCE UPON SUCH INFORMATION OR SERVICE.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>18. LIMITATION OF LIABILITY</h4>
                                            <p>
                                            Neither DataSpark nor the Information Providers and their respective affiliates, agents or licensors, shall be liable to you, or any other person, regardless of the cause (unless resulting from the gross negligence or willful misconduct of DataSpark or the Information Providers) or duration, for any errors, inaccuracies, omissions, or other defects in, or untimeliness or unauthenticity of, the Service or Information, or for any delay or interruption in the transmission thereof to you, or for any Claims or Losses (as defined below) arising therefrom or occasioned thereby. "Claims or Losses" shall be defined as any and all liabilities, obligations, losses, damages, penalties, claims, actions, suits, costs, judgments, settlements, and expenses of whatever nature, including, without limitation, i) direct, indirect, punitive, special, consequential and incidental damages, and ii) administrative costs, litigation costs, and attorneys' and auditors' fees and disbursements. Neither DataSpark nor the Information Providers and their respective affiliates, agents or licensors shall be liable to you or to any other person for indirect, punitive, special, consequential or incidental damages (including, but not limited to, trading losses, loss of profits or anticipated profits, loss by reason of shutdown in operation or increased expenses of operation, cost of cover or other indirect loss or damage) of any nature arising from any cause whatsoever, even if DataSpark, the Information Providers, or their respective affiliates, agents or licensors have been advised of the possibility of such damages. If any or all of DataSpark, the Information Providers and their respective affiliates, agents or licensors are for any reason held liable to you or to any person, the liability of DataSpark, the Information Providers and their respective affiliates, agents or licensors and any other person claiming through, on behalf of, or as harmed by you, is limited to: i) if you continue to receive the Information, a month's credit of any monies paid to DataSpark by you for the period at issue; or ii) if you no longer receive the Information, a refund of any monies due to DataSpark from you for the period at issue.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>19. INDEMNIFICATION OF DATASPARK</h4>
                                            <p>
                                            You shall indemnify DataSpark, the Information Providers and each of their respective officers, directors, partners, holding companies, employees and agents (the "Indemnified Parties") against, and hold the Indemnified Parties harmless from, any and all Claims or Losses imposed on, incurred by, or asserted against the Indemnified Parties as a result of or relating to your non-compliance with any of the terms and conditions of this Agreement and your breach of any of your representations and warranties in this Agreement.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>20. DEFAULT BY SUBSCRIBER</h4>
                                            <p>
                                            If DataSpark determines, in its sole discretion, that i) you are not in compliance with any of the conditions, terms or provisions of this Agreement; ii) any of your representations in this Agreement are untrue; or iii) a petition or other proceeding in bankruptcy, insolvency, or for the appointment of a receiver is filed by or against you, then DataSpark shall have the immediate right, in its sole discretion, to take one or more of the following actions: x) to terminate this Agreement without notice; or y) to pursue such other remedies as it may be entitled to by virtue of or under this Agreement, or at law or in equity.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>21. DEFAULT BY DATASPARK</h4>
                                            <p>
                                            If DataSpark has breached or is in default under this Agreement, and such breach or default continues un-remedied for fifteen (15) days after you have given written notice to DataSpark, you shall have the right to take one or more of the following actions; provided, however, that if such breach cannot be remedied by DataSpark in good faith and with due diligence within fifteen (15) days and the failure to so remedy within fifteen (15) days does not cause you to be in violation of applicable laws or regulations or to otherwise materially injure you, then DataSpark shall not be considered to be in default for so long as DataSpark commences such actions as are necessary to remedy such breach within such fifteen (15) day period and thereafter diligently pursues such actions to remedy such breach or default: i) terminate this Agreement; or ii) to pursue such other remedies, as you may be entitled to by virtue of or under this Agreement or at law or in equity.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>22. THIRD-PARTY RIGHTS</h4>
                                            <p>
                                            This Agreement shall be binding upon and inure to the benefit of the parties and their permitted successors and assigns. You shall not assign this Agreement or any of your rights and obligations hereunder without the prior written consent of DataSpark, which shall not be unreasonably withheld. DataSpark may assign this Agreement and all of DataSpark’s rights and obligations hereunder to an affiliate or subsidiary or to the surviving entity in the case of a merger or sale of all or substantially all of the assets of DataSpark, provided however, that such assignment shall not relieve DataSpark of its obligations hereunder.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>23. AMENDMENT</h4>
                                            <p>
                                            No amendment shall be binding on DataSpark unless provided in an instrument duly executed by an authorized officer of DataSpark.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>24. WAIVER: GOOD FAITH</h4>
                                            <p>
                                            No failure on the part of DataSpark or you to exercise, or delay in exercising, any right, power or privilege, and no course of dealing with respect to any right, power or privilege under this Agreement shall operate as a waiver thereof, nor shall any single or partial exercise of any such right, power or privilege preclude any other or further exercise thereof or the exercise of any other right, power or privilege under this Agreement. The parties hereto shall act in good faith in the performance of their respective obligations under this Agreement and shall act as promptly as is reasonably practicable under the circumstances in granting or denying any consent or approval required hereunder.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>25. ENTIRE AGREEMENT</h4>
                                            <p>
                                            This Agreement constitutes the entire agreement between you and DataSpark with respect to the subject matter hereof, and supersedes all prior negotiations, communications, understandings and agreements with respect thereto.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>26. CONFLICT RESOLUTION</h4>
                                            <p>
                                            This Agreement and the relationship between you and us will be governed by the laws of Italy without regard to its conflict of law provisions. You agree to submit to the personal and exclusive arbitration of any disputes relating to your use of the Service under the rules of the Italian jurisdiction. Any such arbitration, to the extent necessary, will be conducted in the city of Milan, Italy. You agree to submit to the exclusive jurisdiction of arbiters in this forum, and agree to waive all claims of personal or subject matter jurisdiction, to the extent permissible. You also acknowledge and understand that, with respect to any dispute arising out of or relating to your use of the Service: YOU AGREE TO ARBITRATION YOU ARE GIVING UP YOUR RIGHT TO HAVE A TRIAL BY JURY YOU ARE GIVING UP YOUR RIGHT TO SERVE AS A REPRESENTATIVE, AS A PRIVATE ATTORNEY GENERAL, OR IN ANY OTHER REPRESENTATIVE CAPACITY, OR TO PARTICIPATE AS A MEMBER OF A CLASS OF CLAIMANTS, IN ANY LAWSUIT INVOLVING ANY SUCH DISPUTE; AND YOU MUST FILE ANY CLAIM WITHIN ONE (1) YEAR AFTER SUCH CLAIM AROSE OR IT IS FOREVER BARRED.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>27. NOTICE</h4>
                                            <p>
                                            All notices, approvals, proposals and other communications required or permitted to be given under this Agreement shall be delivered in writing either by personal delivery, e-mail or other similar telecommunications device, or mailed to the appropriate address as described below. Either party may change its address for service or specify a different contact person for purposes of this section by giving notice as provided hereunder. Notices to DataSpark must be sent to: contact@dataspark.org. Notices to Subscriber will be sent to the e-mail address provided by Subscriber during DataSpark’s sign-up process.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>28. SEVERABILITY</h4>
                                            <p>
                                            Any section, subsection or other subdivision of this Agreement or any provision of this Agreement which is, or becomes, illegal, invalid or unenforceable shall be severed here from and shall be ineffective to the extent of such illegality, invalidity or unenforceability and shall not affect or impair the remaining provisions of this Agreement.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>29. FORZA MAGGIORE</h4>
                                            <p>
                                            In addition to the provisions of Sections 17 and 18, neither you nor DataSpark shall be liable for delay or failure in performance of any of the acts required by this Agreement when such delay or failure arises from circumstances beyond the reasonable control and without the gross negligence or willful misconduct of you or DataSpark, respectively. Such causes may include, without limitation, acts of God, acts of government in its sovereign or contractual capacity, acts of public enemy, acts of civil or military authority, war, riots, civil strife, terrorism, blockades, sabotage, rationing, embargoes, epidemics, earthquakes, fire, flood, quarantine restrictions, power shortages or failures, utility or communication failure or delays, labor disputes, strikes, or shortages, supply shortages, equipment failures, or software malfunctions. The time for performance of any act delayed by such events may be postponed for a period equal to the period of the delay.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>30. SURVIVAL</h4>
                                            <p>
                                            The provisions of Sections 2, 3, 6, 7, 14, 16, 17, 18, 19, 24, 25, 26, 27, 28 and 29 shall survive the completion of performance or any termination of this Agreement.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>31. CHANGE OF AGREEMENT TERMS BY DATASPARK</h4>
                                            <p>
                                            DataSpark reserves the right to change the terms of this Agreement, including the associated Subscriber fees, without notice to you.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>32. DATE OF EFFECT</h4>
                                            <p>
                                            The effective date of this Agreement shall be the date of acceptance by you of this Agreement as evidence by you clicking the "Agree" button on the website, or the date you actually use the Service, whichever occurs first.
                                            </p>
                                        </div>



                                    </CardBody>
                                    <CardFooter className="text-right">
                                    </CardFooter>
                                </Card>


                            </TabPane>
                            <TabPane tabId="privacy">
                                <Card>
                                    <CardBody className={ classes['table-scroll-wrap'] }>
                                        <div className="d-flex mb-4 mt-3">
                                            <CardTitle tag="h3">
                                                Privacy Policy
                                            </CardTitle>
                                        </div>

                                        <div>
                                            <p>
                                            We value your privacy and we don’t sell your personal data to third parties for advertising or to market services. DataSpark may in some circumstances share your personal data with our data providers who may require this data to verify usage. We will make every effort not to needlessly share your information unless absolutely necessary to comply with our data providers policies and terms of use.
                                            </p>

                                        </div>
                                        <div>
                                            <h4>About Us </h4>
                                            <p>
                                            DataSpark (“DataSpark” or “We” or “Us”) is the sole owner of dataspark.org website (“Website”) and all of the information collected on it. DataSpark collects information from users in several ways through the Website. The following Privacy Policy discloses how we collect, process, store and share information including the following:
                                            <ul>
                                                <li>Personal information being collected via Website by DataSpark</li>
                                                <li>Personal information being collected via Website by third parties</li>
                                                <li>How we use the personal information collected</li>
                                                <li>Who we can share this information with</li>
                                                <li>Security procedures we use to protect our users' personal information</li>
                                                <li>How we give rights to users in respect of the personal data</li>
                                            </ul>
                                            By using our Website, you consent to our Website’s Privacy Policy. We always ask users for a permission to collect and use personal data for purposes that are not listed in this Privacy Policy.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>Children’s privacy rights</h4>
                                            <p>
                                            We do not knowingly contact or collect personal information from children below the age of 16 years. If you believe we have inadvertently collected such information, please email us contact@dataspark.org so that we can either obtain parental consent or delete the information.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>Online Privacy Policy Only</h4>
                                            <p>
                                            This Policy applies only to information collected through our Website and is not related to any information collected offline.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>Policy Updates</h4>
                                            <p>
                                            We may update this Policy at our discretion from time to time by posting a new version on our Website. You should check our Website occasionally to ensure any changes made are suitable for you. You will be informed of any significant changes made to the Privacy Policy. Current version of our Privacy Policy was modified on February 11, 2021.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>Personal data that we collect</h4>
                                            <p>
                                            There is no need to create an account and give consent to personal data processing when viewing the home page. To access the rest of the website, an account is required. If you decided to create an account then you have to share some personal data with us so that we can provide you with access to our services. During registration you will be required to provide us with either:
                                            <ul>
                                                <li>your email address, First Name, Last Name, professional investor certification</li>
                                            </ul>
                                            We use your contact details such as name and email address authenticate your account, ensure its security along with the security of our services and to prevent spam, fraud and abuse. Users registered for premium account (“Paid Users”) must provide payment information (name, credit card information or Payment Service account information). This information is used for billing purposes only and is processed by Payment Providers. When you are making a payment, we do not have access to your personal and credit card information. Should we have any issues with processing an order, the provided email address is used to contact you.
                                            </p>
                                        </div>
                                        <div>
                                            <h3>How Information is collected</h3>
                                        </div>
                                        <div>
                                            <h4>Profile</h4>
                                            <p>
                                            A profile is a set of information for each individual user that details his/her viewing preferences. We do not use stored user settings for marketing purposes. User settings (chart settings, series settings, buttons, colors, etc.) are kept solely for the purpose of customizing user experience when using Website. We do not share your private profile settings with any third parties.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>Cookies</h4>
                                            <p>
                                            We collect cookie files to gather and analyze statistical information as well as to ensure security and to fight spam. You have the ability to accept or decline cookies by modifying the settings in your browser. However, you may not be able to use all the interactive features of the Website nor will you be able to access the paid areas if cookies are disabled.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>Log Files</h4>
                                            <p>
                                            Like most websites, We use web server log files. Records in our log files include internet protocol (IP) addresses, browser types, internet service providers (ISP's), referring pages, exit pages, platform types, and date/time stamps. We use web server log files to administer the site, to provide broad traffic information for site planning purposes, and to ensure that our terms of service agreement are being adhered to. IP addresses are not tied to personally identifiable information in our web server log files.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>Device information</h4>
                                            <p>
                                            We collect the following information about the devices that you use to visit the site: IP-address of the device, operating system and browser version. We are collecting this information to prevent spam and abuse of our services.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>Web beacon</h4>
                                            <p>
                                            Web beacons are tiny graphics with a unique identifier that allow us to track usage patterns, count users who have visited a particular page, etc. Web beacons only collect limited information, including a cookie number, time and date of a page view, and a description of the page on which the web beacon resides. These beacons do not carry any personally identifiable information and are only used to track the effectiveness of Website. We use web beacons in connection with Google Analytics and Mixpanel service. The information generated related to our Website is used to create reports about the use of the Website. We use this information to develop, test and improve our services further.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>Links to other sites</h4>
                                            <p>
                                            At our discretion we can add links (web links) to other websites from our Website. These websites can be run by third parties with separate and independent privacy policies. We, therefore, have no responsibility or liability for the content, activities or privacy policies of those linked sites. We suggest you read the privacy policy of each and every site that you visit. We remind you that this Privacy Policy applies only to information collected by our Website.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>Advertising</h4>
                                            <p>
                                            We may in the future display advertising on the website but will not give our advertisers any personal information (email, name) about you.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>Security</h4>
                                            <p>
                                            YWe use Secure Socket Layer (SSL) encryption technology in order to protect certain information that you submit. This type of technology protects you from having your information intercepted by anyone while it is being transmitted to TradingView or Payment Service Providers . While on a secure page, such as our order form, the “lock” icon in the browser window is displayed, confirming that a secure, encrypted connection has been established with the Website. We work hard to ensure that our Website is secure and that we meet industry standards. We also use other safeguards, such as firewalls, authentication systems (e.g., passwords and personal identification numbers), and access control mechanisms to control unauthorized access to systems and data. We are constantly improving the ways we collect, store and process data which including physical security measures that help us counter unauthorized access to our systems. We also do our best to protect user information offline. All of our users' personal information is restricted to our offices. Only employees who need to see the information to perform their jobs are allowed to access it. The servers that store personally identifiable information are located in a secure environment in a locked facility.
                                            </p>
                                        </div>
                                        <div>
                                            <h3>How Information is used</h3>
                                        </div>
                                        <div>
                                            <h4>Account Administration</h4>
                                            <p>
                                            We send all new users a welcome activation email to verify their email address. Paid Users will also receive a notification email from thr Payment Service Provider if there are any issues with billing their cards for monthly auto-renew subscriptions. Users cannot opt-out of these messages, though they can deactivate their account.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>Announcements and Newsletters</h4>
                                            <p>
                                            On rare occasions it is necessary to send out service-related announcements or important newsletters. For instance, if our service is interrupted for a prolonged period or major functionality upgrade is released, we might send all users an email message. Also, we can sometimes use your email address to send marketing messages. Users can refuse to receive such messages in the future by clicking unsubscribe in one of the emails.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>Legal requirements</h4>
                                            <p>
                                            We can store and disclose your information to law enforcement authorities, state or government agencies if we establish that such disclosure is necessary to comply with the law. This includes responses to court orders or subpoenas, as well as other judicial or regulatory processes.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>User rights</h4>
                                            <p>
                                            In accordance with the General Data Protection Regulation (GDPR), you have the right to access, correct, transfer and delete your data. You also have the right to object to certain ways your data is processed and to restrict such processing. This includes your right to: object to our processing of your data for the purposes of direct marketing. This can be done by clicking the unsubscribe button in marketing emails.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>Deleting data</h4>
                                            <p>
                                            You have the right to refuse to use our website and to delete your account. To delete your account, please email contact@dataspark.org.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>Contact Information</h4>
                                            <p>
                                            If DataSpark determines, in its sole discretion, that i) you are not in compliance with any of the conditions, terms or provisions of this Agreement; ii) any of your representations in this Agreement are untrue; or iii) a petition or other proceeding in bankruptcy, insolvency, or for the appointment of a receiver is filed by or against you, then DataSpark shall have the immediate right, in its sole discretion, to take one or more of the following actions: x) to terminate this Agreement without notice; or y) to pursue such other remedies as it may be entitled to by virtue of or under this Agreement, or at law or in equity.
                                            </p>
                                        </div>
                                        <div>
                                            <h3>DataSpark</h3>
                                        </div>
                                    </CardBody>
                                    <CardFooter className="text-right">
                                    </CardFooter>
                                </Card>
                            </TabPane>
                        </UncontrolledTabs.TabContent>
                    </UncontrolledTabs>
                </Col>
            </Row>

            { /* END Content */}

        </Container>
    </React.Fragment>
);

export default ProfileNew;