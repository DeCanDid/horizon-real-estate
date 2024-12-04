import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Pages/properties.css';
import img from '../Images/playstore.png'

const CheckOut = () => {
    const {index} = useParams() //to extract the index from the route paramters inside the app.js
    const [locations, setlocations_data] = useState([]); 
    const [loading, setLoading] = useState(true); 
    // const [property, setproperty] = useState(null);

    useEffect(() => {
    
        fetch('/locations.json')
        .then((response) => response.json())
        .then((locations) => {
         setlocations_data(locations);
         setLoading(false);
        })
        .catch((error) => console.error('Error fetching data', error))
  
      }, [index])

      const property = locations[parseInt(index)];
      if (!property) return <p>Loading property details....</p>
  return (
    <>

    <div className='checkOut my-3'>

      <div className='firstChild_img'>
        <img src={property.src} alt={property.title} />
      </div>

      <div className='checkOut_col2'>

        <div>
          <img src={property.exterior} alt={property.title} />
          <img src={property.kitchen} alt={property.title} />
        </div>

        <div className='checkOut_col2_col2 border-danger'>
          <img src={property.sorround} alt={property.title} />  
          <img src={property.sorround} alt={property.title} />  
        </div>

      </div>

    </div>

     <div className='details_checkout'>
     {/* <h1>Selected Index Property</h1> */}
      <p> <b>{property.price}</b></p>
      <p> {property.details}</p>
      <p> {property.address}</p>
      <p> {property.area}</p>
      <br /><br />
      <p> <b>{property.view}</b></p>
      
     </div>

     <div className='map_agent my-3'>

        <div className="map rounded-2"> 
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3496089614077!2d3.588980773729463!3d6.477327423700797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf9f986d9ffad%3A0xe9eed330907a0ade!2sPhase%202%20Lekki%20Gardens!5e0!3m2!1sen!2sng!4v1733144242612!5m2!1sen!2sng" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="agent_box shadow">
          <form className='text-center'>
            <div>
              <div>
                <img src={img} alt="listing_agent" />
              </div>
              
              {/* <a href="">+2349033179950</a> */}
            </div>

            <div className='my-2 col-9 mx-auto'>
              <textarea className='form-control' name="" id=""placeholder='Hi Ola, I would like to know more about this listing.' rows='5'></textarea>
              
            </div>

            <div>
              <button className='btn'>Send a Message</button>
            </div>
          </form>

        </div>

     </div>

    </>
  )
}

export default CheckOut;