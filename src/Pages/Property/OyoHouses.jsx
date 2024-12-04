import '../Property/Location.css';
import { useState, useEffect } from 'react';

const OyoHouses = () => {

  const [locations, setlocations_data] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
    
      fetch('/locations.json')
      .then((response) => response.json())
      .then((locations) => setlocations_data(locations))
      .catch((error) => console.error('Error fetching data', error))

    }, [])
  return (
    <div>
        
        <div>
        <div className="open_house">
          <p>Open Houses in Oyo</p>
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
            {/* <button>Buy</button> */}
            </div>
          </div>
            
          </>
        ))
        }
          </div>
        </div>
    </div>
  )
}

export default OyoHouses