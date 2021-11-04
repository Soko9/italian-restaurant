import React from 'react';
import {
    Label,
    Button,
    Row,
    Col
} from 'reactstrap';
import {
    Control,
    Form,
    Errors
} from 'react-redux-form';

const ContactForm = ({ feedbacks, postFeedback, resetFeedback }) => {
    const isRequired = val => val && val.length;
    const isMax = len => val => !val || (val.length <= len);
    const isMin = len => val => val && (val.length >= len);
    const isNumber = val => !isNaN(Number(val));
    const isEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

    const handleSubmitEvent = values => {
        postFeedback(values.firstName, values.lastName, values.email, values.telNum, values.agree, values.contactType, values.message);
        resetFeedback();
    }

    return (
        <Form model="feedback" onSubmit={(values) => handleSubmitEvent(values)}>
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
        </Form>
    );
}

export default ContactForm;