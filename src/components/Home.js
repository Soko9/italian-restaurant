import React from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText
} from 'reactstrap';
import Loader from './Loader.js';

const RenderCard = ({ item, isLoading, errMsg }) => {
    if (isLoading)
        return (<Loader/>);
    else if (errMsg)
        return (<h3>{errMsg}</h3>);
    else
        return (
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation
                    ? <CardSubtitle>{item.designation}</CardSubtitle>
                    : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
}

function Home({ dish, isLoading, errMsg, promotion, leader}) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={dish} isLoading={isLoading} errMsg={errMsg} />
                </div>

                <div className="col-12 col-md m-1">
                    <RenderCard item={promotion} />
                </div>

                <div className="col-12 col-md m-1">
                    <RenderCard item={leader} />
                </div>
            </div>
        </div>
    )
}

export default Home