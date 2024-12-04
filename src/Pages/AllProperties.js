import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AllLocation from './AllLocation';
import Locations from './Property/Locations';
import AbujaHouses from './Property/AbujaHouses';
import OyoHouses from './Property/OyoHouses';

const AllProperties = () => {
  return (
    <>
        <Routes>
            {/* <Route path='/' element={<AllLocation/>}/> */}
            {/* <Route path='/each_location/*' element={<Locations/>}> */}
              
            {/* </Route> */}

              {/* <Route path='/each_location/lagos' element={<Locations/>}/>
              <Route path='/each_location/abuja' element={<AbujaHouses/>}/>
              <Route path='/oyo' element={<OyoHouses/>}/> */}
            
        </Routes>
    </>
  )
}

export default AllProperties