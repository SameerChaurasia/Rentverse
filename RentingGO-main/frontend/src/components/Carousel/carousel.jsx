import React from 'react';
import './carousel.css';

function carousel(props) {
  return (
    <div>
      <div id={props.carouselid} className="carousel slide mt-3" >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" >
            <img src={props.img1} className="d-block w-100 rounded-3" alt="..." />
          </div>
          <div className="carousel-item" >
            <img src={props.img2} className="d-block w-100 rounded-3" alt="..." />
          </div>
          <div className="carousel-item" >
            <img src={props.img3} className="d-block w-100 rounded-3" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={'#' + props.carouselid} data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-black rounded-circle" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`#${props.carouselid}`} data-bs-slide="next">
          <span className="carousel-control-next-icon bg-black rounded-circle" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
};

export default carousel;