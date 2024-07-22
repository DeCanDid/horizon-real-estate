import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Property/Location.css'
import img1 from '../../Images/img2.jpg';

const Locations = () => {

    const [locations, setlocations_data] = useState([]);

    useEffect(() => {
    
      fetch('locations.json')
      .then((response) => response.json())
      .then((locations) => setlocations_data(locations))
      .catch((error) => console.error('Error fetching data', error))

    }, [])
    
    
  return (
    <>

    <div className="banner">
      <div className="video_wrapper">

        <video src="https://cdn.pixabay.com/video/2023/04/22/160032-820167242_tiny.mp4" autoPlay controls></video>
        {/* <iframe src="https://cdn.pixabay.com/video/2023/04/22/160032-820167242_tiny.mp4" frameborder="0" allowFullScreen loop></iframe> */}
      </div>
    </div>

    <div className="location">
        <div className='location_heading'>
            <h3>Locations</h3>
        </div>
        <div className="location_routes shadow">
            <Link to=''>Lagos</Link>
            <Link to=''>Abuja</Link>
            <Link to=''>Port Harcourt</Link>
            <Link to=''>Ibadan</Link>
            <Link to=''>Lagos</Link>
            <Link to=''>Lagos</Link>
            <Link to=''>Lagos</Link>
            <Link to=''>Lagos</Link>
        </div>

        <div>
        <h1>Data from JSON API</h1>
        { locations.map((item, index) =>(
          <>
            <li>{item.details}</li>
            <li>{item.price}</li>
            <li>{item.area}</li>
          </>
        ))
        }
        </div>
    </div>
    </>
  )
}

export default Locations