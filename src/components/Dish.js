import React from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Breadcrumb,
    BreadcrumbItem
} from 'reactstrap';
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