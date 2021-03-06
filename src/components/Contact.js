import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem
} from 'reactstrap';
import ContactForm from './ContactForm.js';
import { Link } from 'react-router-dom';

const Contact = ({ feedbacks, postFeedback, resetFeedback }) => {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem className="bread">
                        <Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem className="bread">
                        Contact Us
                    </BreadcrumbItem>
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
                <div className="col-12 col-sm-4">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        </address>
                </div>
                <div className="col-12 col-sm-6">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11">
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
                    <ContactForm feedbacks={feedbacks} postFeedback={postFeedback} resetFeedback={resetFeedback} />
                </div>
            </div>
        </div>
    );
}

export default Contact;