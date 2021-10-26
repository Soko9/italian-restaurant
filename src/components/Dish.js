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
    ModalBody,
    ModalFooter
} from 'reactstrap';
import {
    LocalForm,
    Control,
    Errors
} from 'react-redux-form';
import { Link } from 'react-router-dom';

const DishCard = ({ dish }) => {
    return(
        <Card style={{width: '380px'}}>
            <CardImg src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

const DishDetails = ({ dish, comments }) => {
    const [modal, toggleModal] = useState(false);

    const isMax = len => val => !val || (val.length <= len);
    const isMin = len => val => val && (val.length >= len);

    const handleToggle = () => {
        toggleModal(!modal);
    }

    const handleSubmitEvent = values => {
        handleToggle()
        alert("Current State: " + JSON.stringify(values));
    }

    return(
        <>
            <h2>Comments</h2><br/>
            {comments.map(comment => {
                if(comment.dishId === dish.id) {
                    return (
                        <div key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author},&nbsp;
                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                            </p>
                        </div>
                    );
                }
                return (<div></div>);
            })}
            <br/>
            <Button outline onClick={handleToggle}>
                Add Comment
            </Button>
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

function Dish({ dish, comments }) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        
                        <BreadcrumbItem active>
                            {dish.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h2>{dish.name}</h2>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 col-md-5 m-1">
                        <DishCard dish={dish} />
                    </div>
                    <div className="col-6 col-md-5 m-1">
                        <DishDetails dish={dish} comments={comments} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dish;