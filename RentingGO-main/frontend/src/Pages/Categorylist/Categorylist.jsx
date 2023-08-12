import React from 'react';
import './Categorylist.css';
import Productcard from '../../components/Productcard/Productcard';
import Header from '../../components/Header/Header';

function Categorylist() {
  return (
    <div>
        <Header back='block' headTxt1='Na' headTxt2='me'/>
        <div className="mt-5 pt-5 container d-flex flex-wrap">
            <Productcard key='9' name='something' price='999'/>
            <Productcard key='9' name='something' price='999'/>
            <Productcard key='9' name='something' price='999'/>
            <Productcard key='9' name='something' price='999'/>
        </div>
    </div>
  )
}

export default Categorylist