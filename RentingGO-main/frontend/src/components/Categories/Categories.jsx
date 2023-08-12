import React from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';

function Categories(props) {

    const colors = [
        '#fff0f0',
        '#ebf9ff',
        '#ffffe4',
        '#fff1d7',
        '#ffdfff'
    ];
    const colorIndex = props.index % colors.length;
    const backgroundColor = colors[colorIndex];
    const categoryStyle = {
        backgroundColor: backgroundColor,
    };

  return (
    <div>
        <div className="main mt-2">
            <Link to={`/listing/${props.txt}`} className="nav-link categorycard rounded-3 text-center p-2 me-2" style={categoryStyle}>
                <div className="categoryimg p-3 py-1">
                    <img src={props.img} alt="package icon" className='img-fluid' />
                </div>
                <div className="categoryTxt">
                   {props.txt}
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Categories