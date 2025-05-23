import '../Property/Location.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const AbujaHouses = () => {

  const [locations, setlocations_data] = useState([]);
    const [loading, setloading] = useState(true);
    let navigate = useNavigate();


    useEffect(() => {
    
      fetch('/locations.json')
      .then((response) => response.json())
      .then((locations) => setlocations_data(locations))
      .catch((error) => console.error('Error fetching data', error))

    }, [])

    const handleBuy = (index) =>{
      console.log("Property Index:", index);
      console.log("Selected Property:", locations[index]);
      navigate(`/checkout/${index}`)
 
    }
  return (
    <>

<div>
        <div className="open_house">
          <p>Open Houses in Abuja</p>
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
            <button className='rounded-2 mt-4' onClick={()=> handleBuy(index)}>View</button>
            </div>
          </div>
            
          </>
        ))
        }
          </div>
        </div>
    </>
  )
}

export default AbujaHouses