import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import CheckOut from './Pages/CheckOut';
import { useState, useEffect } from 'react';
import AbujaHouses from './Pages/Property/AbujaHouses';
import OyoHouses from './Pages/Property/OyoHouses';
import Locations from './Pages/Property/Locations';
import AllLocation from './Pages/AllLocation';
import LagosHouses from './Pages/Property/LagosHouses';
import PhHouses from './Pages/Property/PhHouses';
import OsunHouses from './Pages/Property/OsunHouses';
import KwaraHouses from './Pages/Property/KwaraHouses';
import { KanoHouses } from './Pages/Property/KanoHouses';
import OgunHouses from './Pages/Property/OgunHouses';
import Contact from './Pages/Contact';

function App() {
  const [selectedProperty, setselectedProperty] = useState(null);
  const [locations, setlocations_data] = useState([]);



  const handleSelectProperty = (property)=>{
      setselectedProperty(property)
  }



  return (
   <>
   
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Navigate to='/'/>}/>
      <Route path='/properties/*' element={<AllLocation/>}/>

      <Route path='/properties/locations' element={<Locations/>}>
        <Route path='lagos' element={<LagosHouses />}/>
        <Route path='abuja' element={<AbujaHouses />}/>
        <Route path='oyo' element={<OyoHouses />}/>
        <Route path='ph_city' element={<PhHouses/>}/>
        <Route path='osun' element={<OsunHouses/>}/>
        <Route path='kwara' element={<KwaraHouses/>}/>
        <Route path='kano' element={<KanoHouses/>}/>
        <Route path='ogun' element={<OgunHouses/>}/>

      </Route>

      {/* <Route path='/properties/*' element={<AllProperties location={location} onSelectProperty={handleSelectProperty}/>}>
        <Route path='oyo' element={<OyoHouses />}/>
      </Route> */}

      <Route path='/checkout/:index' element={ <CheckOut/>}/>

      <Route path='contact'  element={<Contact/>}/>

   </Routes>
   </>
  );
}

export default App;
