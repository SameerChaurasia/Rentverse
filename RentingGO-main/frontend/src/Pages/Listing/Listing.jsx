import React, { useEffect, useState } from 'react';
import './Listing.css';
import Header from '../../components/Header/Header';
import Data from '../../Data/Products.json';
import { useParams } from 'react-router-dom';
import Listingcard from '../../components/Listingcard/Listingcard';

function Listing() {

  const {mainProName} = useParams();
  const [listingData, setListingData] = useState(null);

  useEffect(()=>{
    const filteredData = Data.mainProducts.find((x)=> x.mainProName.toLowerCase().replace(' ', '') === mainProName.toLowerCase().replace(' ', ''));
    setListingData(filteredData);
  },[mainProName])

  return (
    <div className="container-fluid p-0">
      <Header headTxt2={mainProName}/>
      <div className=' d-flex flex-wrap mt-5 pt-5 justify-content-center'>
        
        {
          listingData && listingData.subProducts ? (
            listingData.subProducts.map((item)=>(
              <Listingcard key={item.id} name={item.subProName} price={item.price} id={item.id} img1='../images/airpuri.jpg' img2='../images/airpuri.jpg' img3='../images/airpuri.jpg'/>
            ))
          ) : (
            <p>Loading...</p>
          )
        }

      </div>
    </div>
  )
}

export default Listing;