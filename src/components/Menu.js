import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        const menu = this.props.dishes.map(dish => {
            return(
                <div key={dish.id} style={{width: '320px', cursor: 'pointer'}} className="col-12 col-md-5 m-1">
                    <Link to={`/menu/${dish.id}`}>
                        <Card>
                            <CardImg height="310" src={dish.image} alt={dish.name} className="opacity-25"/>
                            <CardImgOverlay>
                                <CardTitle className="fs-2 fw-bold text-muted text-center opacity-75 p-3">{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </Link>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        
                        <BreadcrumbItem active>
                            Menu
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h2>Menu</h2>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;