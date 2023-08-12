import React from 'react';
import { Link } from 'react-router-dom';
import './Productcard.css'

function Productcard(props) {
    return (
        <div>
            <div className="featItem border me-4 mt-4">
                <img src={props.img} alt="product" className="featImg img-fluid mb-2" />
                <div className="featData">
                    <div className="featNameWrap d-flex justify-content-between align-items-start">
                        <div className="featName">
                            <Link to={`/${props.name}`} className="nav-link fs-5 featNameLink">{props.name}</Link>
                            <p className="stars mb-0"><i className="fas fa-star me-1"></i><i className="fas fa-star me-1"></i><i className="fas fa-star me-1"></i><i className="fas fa-star me-1"></i><i className="fas fa-star me-1"></i></p>
                        </div>
                    </div>
                    <div className="featLocaWrap d-flex justify-content-between">
                        <div className="featLocation text-muted">
                            <p className="mb-0"><i className="fas fa-rupee-sign text-success brandcolor1"></i><span className='fs-6 fw-bold'> {props.price}</span>/Day
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productcard