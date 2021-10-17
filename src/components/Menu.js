import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelected(dish) {
        this.setState({ selectedDish: dish });
    }

    renderDishWithDetails(dish) {
        if(dish != null) {
            return(
                <>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg height="310px" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h2>Comments</h2><br/>
                        {this.state.selectedDish.comments.map(comment => {
                            return(
                                <div key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author},&nbsp;
                                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </>
            );
        } else {
            return(<div></div>);
        }
    }

    render() {
        const menu = this.props.dishes.map(dish => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelected(dish)}>
                        <CardImg height="310px" src={dish.image} alt={dish.name} className="opacity-25"/>
                        <CardImgOverlay>
                            <CardTitle className="display-6 fw-bold text-warning text-center p-3">{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDishWithDetails(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;