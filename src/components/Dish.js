import React, { useState } from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Label,
    Row,
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap';
import {
    LocalForm,
    Control,
    Errors
} from 'react-redux-form';
import { Link } from 'react-router-dom';
import Loader from './Loader.js';
import { url } from '../shared/connection.js';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const DishCard = ({ dish }) => {
    return(
        <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
            <Card style={{width: '380px'}}>
                <CardImg src={`${url}/${dish.image}`} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </FadeTransform>
    );
}

const DishDetails = ({ dish, comments, postComment, dishId }) => {
    const [modal, toggleModal] = useState(false);

    const isMax = len => val => !val || (val.length <= len);
    const isMin = len => val => val && (val.length >= len);

    const handleToggle = () => {
        toggleModal(!modal);
    }

    const handleSubmitEvent = values => {
        handleToggle()
        postComment(dishId, values.rating, values.author, values.comment);
    }

    return(
        <>
            <div className="wrapper">
                <h2>Comments</h2>
                <Button className="btn-add" color="primary" onClick={handleToggle}>
                    <span className="fa fa-plus fa-lg"></span>
                </Button>
            </div>
            <br/>
            {comments.map(comment => {
                if(comment.dishId === dish.id) {
                    return (
                        <div key={comment.id}>
                            <Fade in>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author},&nbsp;
                                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                                </p>
                            </Fade>
                        </div>
                    );
                }
                return (<div></div>);
            })}
            <Modal isOpen={modal} toggle={handleToggle}>
                <ModalHeader closeButton>Comment</ModalHeader>
                <ModalBody>
                    <LocalForm className="p-2" onSubmit={(values) => handleSubmitEvent(values)}>
                        <Row className="form-group">
                            <Label htmlFor="rating">Username</Label>
                            <Control.select 
                                model=".rating" 
                                name="rating" 
                                className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                            </Control.select>
                        </Row>
                        <br />
                        <Row className="form-group">
                            <Label htmlFor="author">Author</Label>
                            <Control.text
                                id="author"
                                name="author"
                                model=".author"
                                className="form-control"
                                validators={{
                                    isMin: isMin(3),
                                    isMax: isMax(15)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".author"
                                show="touched"
                                messages={{
                                    isMin: "Minimum 3 Characters",
                                    isMax: "Maximum 15 Characters"
                                }}
                            />
                        </Row>
                        <br />
                        <Row className="form-group" >
                            <Label htmlFor="comment">Author</Label>
                            <Control.textarea 
                                model=".comment" 
                                id="comment" 
                                name="comment" 
                                className="form-control"
                                rows="6" 
                                placeholder=". . ."
                            />
                        </Row>
                        <br/>
                        <Button type="submit" className="w-4" color="primary">Submit</Button>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </>
    );
}

function Dish({ dish, isLoading, errMsg, comments, errMsgComments, postComment }) {
    if (isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loader/>
                </div>
            </div>
        );
    }
    else if (errMsg) {
        return (
            <div className="container">
                <div className="row">
                    <h3>{errMsg}</h3>
                </div>
            </div>
        );
    } else if (errMsgComments) {
        return (
            <div className="container">
                <div className="row">
                    <h3>{errMsgComments}</h3>
                </div>
            </div>
        );
    }
    else if (dish != null) {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem className="bread">
                                <Link to="/home">Home</Link>
                            </BreadcrumbItem>
    
                            <BreadcrumbItem className="bread">
                                <Link to="/menu">Menu</Link>
                            </BreadcrumbItem>
                            
                            <BreadcrumbItem className="bread">
                                {dish.name}
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h2>{dish.name}</h2>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 col-md-2">
                            <DishCard dish={dish} />
                        </div>
                        <div className="col-6 col-md-5 offset-5">
                            <Stagger in>
                                <DishDetails dish={dish} comments={comments} postComment={postComment} dishId={dish.id} />
                            </Stagger>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Dish;