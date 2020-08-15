import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';


function RenderMenuItem ({dish,onClick}) {
    
    return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
        <Card onClick={(props) => props.onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay> 
        </Card>
      </div>
    );

}

const Menu = (props) => {

    const menu = props.dishes.map((dish) => {
        return(
            <div className="container">
                <div className="row">
                    <RenderMenuItem dish={dish} onClick={props.onClick}></RenderMenuItem>
                </div>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    )
}

export default Menu;