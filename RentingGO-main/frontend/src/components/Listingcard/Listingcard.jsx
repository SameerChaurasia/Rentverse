import React from 'react';
import { Link } from 'react-router-dom';
import './Listingcard.css';
// import Carousel from '../Carousel/carousel';

function Listingcard(props) {
  return (
    <div className='listingCardMain mt-2 pt-0 mx-2 bg-light rounded-3'>
      <div className="listingcardImg">
        {/* <Carousel carouselid={props.id} img1={props.img1} img2={props.img2} img3={props.img3}/> */}
        <img src="../images/airpuri.jpg" className='img-fluid rounded-top-3' alt="product" />
      </div>
      <div className="listingcardTxt px-2 pb-1">
        <Link to={`/${props.name}`} className="nav-link mb-0 listingcardName fw-bold fs-4 mt-1">{props.name}</Link>
        <p className="mb-0 listingcardStars"><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i></p>
        <p className="mb-0 listingcardPrice">&#8377; <span className='fs-5 fw-bold text-success'>{props.price}</span>/Day</p>
      </div>
    </div>
  )
}

export default Listingcard;