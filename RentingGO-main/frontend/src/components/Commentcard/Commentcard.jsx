import React from 'react';
import './Commentcard.css';

function Commentcard(props) {
    return (
        <div>
            <div className="reviewCard">
                <div className="reviewName">
                    <p className="mb-0 fw-bold text-capitalize">{props.name}<span className="fw-normal"><i className="fas fa-star mx-1"></i>{props.stars}</span></p>
                </div>
                <div className="comment">
                    {props.comment}
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Commentcard