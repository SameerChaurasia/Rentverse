import React from 'react';
import './Morecard.css';

function Morecard() {
  return (
    <div className='morecard mt-4 p-2 rounded-3 me-2'>
       <div className="moreImg w-25">
            <img src="./images/qualityIcon.png" alt="fine quality icon" className='img-fluid'/>
       </div>
       <div className="moreTxt">
            <p className="fw-bold fs-5 mb-0">Finest Quality Products</p>
            <p className="text-muted fs-6 mb-0">
                Quality matters to you, and us! That's why we do a strict quality-check for every product.
            </p>
       </div>
    </div>
  )
}

export default Morecard