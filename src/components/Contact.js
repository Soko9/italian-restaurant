import React, { useState } from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    Form,
    Input,
    Label,
    Button,
    FormGroup,
    Col
} from 'reactstrap';
import { Link } from 'react-router-dom';

const ContactForm = () => {
    const [form, updateForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        telNum: '',
        agree: false,
        contactType: 'Telephone',
        message: ''
    });

    const handleChangeEvent = event => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        updateForm({...form, [name]:value});
    }

    const handleSubmitEvent = event => {
        event.preventDefault();
        alert("Current State: " + JSON.stringify(form));
    }

    return (
        <Form onSubmit={handleSubmitEvent}>
            <FormGroup row>
                <Label md={3} htmlFor="firstName" className="fw-bold fs-6 text-center">First Name</Label>
                <Col md={9}>
                    <Input type="text" id="firstName" name="firstName" value={form.firstName} onChange={handleChangeEvent} />
                </Col>
            </FormGroup>
            <br/>
            <FormGroup row>
                <Label md={3} htmlFor="lastName" className="fw-bold fs-6 text-center">Last Name</Label>
                <Col md={9}>
                    <Input type="text" id="lastName" name="lastName" value={form.lastName} onChange={handleChangeEvent} />
                </Col>
            </FormGroup>
            <br/>
            <FormGroup row>
                <Label md={3} htmlFor="email" className="fw-bold fs-6 text-center">Email</Label>
                <Col md={9}>
                    <Input type="email" id="email" name="email" value={form.email} onChange={handleChangeEvent} />
                </Col>
            </FormGroup>
            <br/>
            <FormGroup row>
                <Label md={3} htmlFor="telNum" className="fw-bold fs-6 text-center">Telephone</Label>
                <Col md={9}>
                    <Input type="tel" id="telNum" name="telNum" value={form.telNum} onChange={handleChangeEvent} />
                </Col>
            </FormGroup>
            <br/>
            <FormGroup row>
                <Col md={{size: 5, offset: 3}}>
                    <FormGroup check className="py-2">
                        <Label check>
                            <Input name="agree" type="checkbox"
                            checked={form.agree}
                            onChange={handleChangeEvent} />{' '}
                            <strong>Do You Want Us To Contact You?</strong>
                        </Label>
                    </FormGroup>
                </Col>
                <Col md={{size: 4, offset: 0}}>
                    <Input type="select" name="contactType" value={form.contactType} onChange={handleChangeEvent}>
                        <option>Telephone</option>
                        <option>Email</option>
                    </Input>
                </Col>
            </FormGroup>
            <br/>
            <FormGroup row>
                <Label md={3} htmlFor="message" className="fw-bold fs-6 text-center">Your Feedback</Label>
                <Col md={9}>
                    <Input type="textarea" id="message" name="message" value={form.message} onChange={handleChangeEvent} rows="8" placeholder="Message goes here . . ."/>
                </Col>
            </FormGroup>
            <br/>
            <FormGroup row>
                <Col md={{size: 10, offset: 3}}>
                    <Button type="submit" color="primary">Send Feedback</Button>
                </Col>
            </FormGroup>
        </Form>
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