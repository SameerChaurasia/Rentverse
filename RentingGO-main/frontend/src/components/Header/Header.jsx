import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header(props) {
  const navigate = useNavigate()
  return (
    <div className=' headerMain bg-white'>
        <div className="container-fluid d-flex justify-content-between p-3 align-items-center shadow">
            <div className="leftHead d-flex align-items-center">
              <div className={`d-${props.back}`}>
              <div className="backBtnWrap">
                <button className='btn p-0 m-0' onClick={()=>navigate(-1)}><i className="fas fa-chevron-left rounded-circle me-1 fs-4 p-2 pe-2 text-dark"></i></button>
              </div>
              </div>
              <h3 className="mb-0">{props.headTxt1}<span className='text-primary fw-bold'>{props.headTxt2}</span></h3>
            </div>
            <a href='tel:+91 9076472920' className="btn btn-primary">Contact Us</a>
        </div>
    </div>
  )
}

Header.defaultProps = {
  back: 'block',
};

export default Header;