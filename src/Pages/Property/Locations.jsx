import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../Property/Location.css'


import AbujaHouses from './AbujaHouses';

const Locations = ({location, onSelectProperty}) => {

    const [locations, setlocations_data] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
    
      fetch('/locations.json')
      .then((response) => response.json())
      .then((locations) => setlocations_data(locations))
      .catch((error) => console.error('Error fetching data', error))

    }, [])


    
    
  return (
    <>

    <div className="banner">
      <div className="video_wrapper">

        <video id='backgroundVideo' src="https://cdn.pixabay.com/video/2023/04/22/160032-820167242_tiny.mp4" autoPlay controls>
        </video>
      </div>
    </div>

    <div className="location">
        <div className='location_heading'>
            <h3>Select Your Prefered Locations</h3>
        </div>
        <div className="location_routes shadow">
            <Link to='lagos'>Lagos</Link>
            <Link to='abuja'>Abuja</Link>
            <Link to='ph_city'>Port Harcourt</Link>
            <Link to='oyo'>Oyo</Link>
            <Link to='osun'>Osun</Link>
            <Link to='kwara'>Kwara</Link>
            <Link to='kano'>Kano</Link>
            <Link to='ogun'>Ogun</Link>
        </div>

        <Outlet />


        <div className="blocks_wrap">

      <div className="contents">
      <h2>Trusted By 100 Million Buyers</h2>
      <p>Only Horizon.com connects you directly to the person that knows the most about a property for sale, the listing agent.</p>
      </div>

      <div className="blocks">

        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
      </div>
    </div>

        {/* <div>
        <div className="open_house">
          <p>Open Houses</p>
        </div>
          <div className="box_wrapper">

          { locations.map((item, index) =>(
          <>

          <div className="box shadow" key={index}>
            <img src={item.src} title={item.title} alt={item.title} />

            <div className="details">
            <li>{item.price}</li>
            <li>{item.details}</li>
            <li>{item.address}</li>
            <li>{item.area}</li>
            <button>Buy</button>
            </div>
          </div>
            
          </>
        ))
        }
          </div>
        </div> */}
    </div>
    </>
  )
}

export default Locations