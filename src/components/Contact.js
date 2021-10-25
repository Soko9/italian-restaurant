import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    Label,
    Button,
    Col,
    Row
} from 'reactstrap';
import {
    Control,
    LocalForm,
    Errors
} from 'react-redux-form';
import { Link } from 'react-router-dom';

const ContactForm = () => {
    const isRequired = val => val && val.length;
    const isMax = len => val => !val || (val.length <= len);
    const isMin = len => val => val && (val.length >= len);
    const isNumber = val => !isNaN(Number(val));
    const isEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

    const handleSubmitEvent = values => {
        alert("Current State: " + JSON.stringify(values));
    }

    return (
        <LocalForm onSubmit={(values) => handleSubmitEvent(values)}>
            <Row className="form-group">
                <Label md={3} htmlFor="firstName" className="fw-bold fs-6 text-center">First Name</Label>
                <Col md={9}>
                    <Control.text 
                        model=".firstName"
                        id="firstName" 
                        name="firstName"
                        className="form-control"
                        validators={{
                            isRequired,
                            isMin: isMin(3),
                            isMax: isMax(15)
                        }}
                        />
                         <Errors
                            className="text-danger"
                            model=".firstName"
                            show="touched"
                            messages={{
                                isRequired: " - Required",
                                isMin: " - First name must be more than 2 characters",
                                isMax: " - First name must be less than 16 characters"
                            }}
                         />
                </Col>
            </Row>
            <br/>
            <Row className="form-group">
                <Label md={3} htmlFor="lastName" className="fw-bold fs-6 text-center">Last Name</Label>
                <Col md={9}>
                    <Control.text 
                        model=".lastName" 
                        id="lastName" 
                        name="lastName" 
                        className="form-control"
                        validators={{
                            isRequired,
                            isMin: isMin(3),
                            isMax: isMax(15)
                        }}
                        />
                         <Errors
                            className="text-danger"
                            model=".lastName"
                            show="touched"
                            messages={{
                                isRequired: " - Required",
                                isMin: " - Last name must be more than 2 characters",
                                isMax: " - Last name must be less than 16 characters"
                            }}
                         />
                </Col>
            </Row>
            <br/>
            <Row className="form-group">
                <Label md={3} htmlFor="email" className="fw-bold fs-6 text-center">Email</Label>
                <Col md={9}>
                    <Control.text 
                        model=".email" 
                        id="email" 
                        name="email" 
                        className="form-control"
                        validators={{
                            isRequired,
                            isEmail: isEmail
                        }}
                        />
                        <Errors
                            className="text-danger"
                            model=".email"
                            show="touched"
                            messages={{
                                isRequired: " - Required",
                                isEmail: " - Email must contain '@' symbol and a domain"
                            }}
                        />
                </Col>
            </Row>
            <br/>
            <Row className="form-group">
                <Label md={3} htmlFor="telNum" className="fw-bold fs-6 text-center">Telephone</Label>
                <Col md={9}>
                    <Control.text 
                        model=".telNum" 
                        id="telNum" 
                        name="telNum" 
                        className="form-control"
                        validators={{
                            isRequired,
                            isMin: isMin(8),
                            isMix: isMax(20),
                            isNumber
                        }}
                        />
                        <Errors
                            className="text-danger"
                            model=".telNum"
                            show="touched"
                            messages={{
                                isRequired: " - Required",
                                isMin: " - Telephone must be more than 7 numbers",
                                isMix: " - Telephone must be less than 21 numbers",
                                isNumber: " - Telephone must be all numbers"
                            }}
                        />
                </Col>
            </Row>
            <br/>
            <Row className="form-group">
                <Col md={{size: 5, offset: 3}}>
                    <div className="form-check">
                        <Label check>
                            <Control.checkbox 
                                model=".agree"
                                name="agree" 
                                className="form-check-input" />{' '}
                            <strong>Do You Want Us To Contact You?</strong>
                        </Label>
                    </div>
                </Col>
                <Col md={{size: 4, offset: 0}}>
                    <Control.select 
                        model=".contactType" 
                        name="contactType" 
                        className="form-control">
                            <option>Telephone</option>
                            <option>Email</option>
                    </Control.select>
                </Col>
            </Row>
            <br/>
            <Row className="form-group">
                <Label md={3} htmlFor="message" className="fw-bold fs-6 text-center">Your Feedback</Label>
                <Col md={9}>
                    <Control.textarea 
                        model=".message" 
                        id="message" 
                        name="message" 
                        className="form-control"
                        rows="8" 
                        placeholder=". . ."
                        validators={{isRequired}}
                        />
                        <Errors
                            className="text-danger"
                            model=".message"
                            show="touched"
                            messages={{
                                isRequired: " - Required"
                            }}
                        />
                </Col>
            </Row>
            <br/>
            <Row className="form-group">
                <Col md={{size: 10, offset: 3}}>
                    <Button 
                        type="submit" 
                        color="primary">
                            Send Feedback
                    </Button>
                </Col>
            </Row>
        </LocalForm>
    );
}

const Contact = () => {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a href="tel:+85212345678" role="button" className="btn btn-primary"><i className="fa fa-phone"></i> Call</a>
                        <a href="/" role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a href="mailto:confusion@food.net" role="button" className="btn btn-success"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>

            <div className="row row-content">
                <div className="col-12">
                    <h3 className="fw-bold fs-2">Send Us Your Feedback</h3>
                </div>
                <div className="row"><div className="col-12"><br/><br/></div></div>
                <div className="col-12 col-md-9">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default Contact;