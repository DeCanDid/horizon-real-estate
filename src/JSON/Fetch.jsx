import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../JSON/Json.css'

const Fetch = () => {
    const [Pr_card, setPr_card] = useState([]);

    useEffect(() => {

      fetch('card.json')
      .then((response) => response.json())
      .then((Pr_card) => setPr_card(Pr_card))
      .catch((error) => console.error('Error fetching data', error))
    
    }, [])
    
  return (
    <>
      <section id='section_two'>
         <div className="ppty_card_wrap">

         {/* <Link> */}
            {Pr_card.map((item) =>(
            
            <div className="ppty_card shadow">

                <div className="ppty_img">
                    <img src={item.img} alt="" />
                </div>

                <div className="ppty_descriptn">
                   <b className='txt shadow'>{item.res_name}</b> 
                   <p>{item.desc}</p>
                   <Link><button>{item.see_more}</button></Link>
                </div>

            </div>

            ))}
         {/* </Link> */}
         </div>
      </section>
    </>
  )
}

export default Fetch