import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedDish:null
        }
    }
    renderComments(comments) {
        const cmnts = comments.map((comments) => {
            return (
               
                    <li key="comments.id">
                        <p>{comments.comment}</p>
                        <p>-- {comments.author}, {comments.date}</p>

                    </li>

            );
        })
        if (comments!= null) {
            return(
                <div className='col-12 col-md-5 m-1'>
                    <h4> Comments </h4>
                    <ul className='list-unstyled'>
                    {cmnts}
                    </ul>
                </div> 
            );
        }
        else {
        return(<div></div>);
        }
    }
    renderDish(dish) {
        if (dish != null) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return(
                <div></div>
            )
        }
        
    }
    render()
    {   
        const dish = this.props.dish;        
        if (dish!=null) {
            const dishes = this.renderDish(dish);
            const commentList = this.renderComments(dish.comments);
            return(
                    <div className="row">
                        {dishes}
                        {commentList}
                    </div>
            );
        }
        else {
            return(<div></div>)
        }
        
    }
}

export default Dishdetail;