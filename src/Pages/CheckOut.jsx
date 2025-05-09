import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import '../Pages/properties.css';
import img from '../Images/playstore.png';
import { useForm, ValidationError } from '@formspree/react';

const CheckOut = () => {
  const [locations, setlocations_data] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [showmessage, setshowmessage] = useState(false);
  const [state, handleSubmit] = useForm('xqakogak');


  const {index} = useParams() //to extract the index from the route paramters inside the app.js

    // const nameReference = useRef(null);
    // const messageReference = useRef(null);

    useEffect(() => {
      if(state.succeeded){
        setshowmessage(true);
         const timer = setTimeout(() => {
           setshowmessage(false)
         }, 3000);
 
         return () => {
           clearTimeout(timer)
         }
      }
       
     }, [state.succeeded])

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

      // const handleSubmitEmail = ()=>{
      //   const name = nameReference.current.value;
      //   const message = messageReference.current.value;

      //   if (!name || !message){
      //     alert('Please fill out all the fields.');
      //     return;
      //   }

      //   // construct the mailto link
      //   const subject = encodeURIComponent('Inquiry about listing');
      //   const body = encodeURIComponent(`Hi Ola, \n\n${message}\n\n${name}`);
      //   const mailtoLink = `mailto:olacandid@gmail.com?subject=${subject}&body=${body}`;

      //   window.location.href = mailtoLink;
      // }

         // formspreee form validation


    

    // if(state.succeeded){
    //     return returnMessage;
    // }
  return (
    <>

    <div className='checkOut my-3'>

      <div className='firstChild_img' id='firstchild_img'>
        <div>
          <img src={property.src} alt={property.title} />
        </div>

        <div className='hidden'>
          <img src={property.sorround} alt={property.title} />  
        </div>
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
          <form className='text-center' onSubmit={handleSubmit}>
            <div>
              <div>
                <img src={img} alt="listing_agent" style={
                  {width: '150px'}
                } />
              </div>

            {
              showmessage && (
              <div className='rounded-2 py-3 mx-auto w-75 bg-success'>
                <p style={{color:'#fff'}}> 
                  Thanks for your message, we will get back to you shortly
                </p>
              </div>
       
              ) 
            }
              
              
            </div>

            <div className='my-2 col-9 mx-auto msg'>
              <input  type="text" placeholder='Your Name' className='form-control my-2' name='name' required/>
              <ValidationError prefix='name' field='name' errors={state.errors}/>

              <textarea className='form-control' name="message" id=""placeholder='Hi Ola, I would like to know more about this listing.' rows='5' required></textarea>
              <ValidationError prefix='message' field='message' errors={state.errors} />
              
            </div>

            <div>
              <button type='submit' disabled={state.submitting} className='btn'>Send a Message</button>
            </div>
          </form>

        </div>

     </div>

    </>
  )
}

export default CheckOut;