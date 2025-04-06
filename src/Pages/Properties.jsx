import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './properties.css';

const Properties = ( { content, PropertyL, settings }) => {

    const sliderRef = useRef(null);

    const defaultSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        ...settings,

        responsive: [
          {
            breakpoint: 1024,  //for tablet and small desktop
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },

          {
            breakpoint: 768, //for mobile landscape//
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },

          {
            breakpoint: 480, //for mobile protrait//
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          }
           
        ]
      };

  return (
    <>
    <div>
    <div className="slider_container">
            <div className="image-slider shadow fw-bold">
          
                <Slider ref={sliderRef} {...defaultSettings}>
                {PropertyL.map(image => (
                <div className='mini' key={image.id}>
                <img src={image.url} alt={image.alt} title={image.title}/>
                <div>
                  <span>{image.price}</span>&nbsp;&nbsp;
                  <span>{image.details}</span>
                  <p>{image.area}</p>
                </div>
          </div>
        ))}
      </Slider>
      <button
        onClick={() => sliderRef.current.slickPrev()}
        style={{
          position: 'absolute',
          top: '40%',
          left: '20px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.2)',
          borderRadius: '100%',
          width: '40px',
          height: '40px',
          border: 'none',
          outline: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer',
          color: 'grey'
        }}
      >
        <i className="icofont-simple-left"></i>
      </button>

      <button
        onClick={() => sliderRef.current.slickNext()}
        style={{
          position: 'absolute',
          top: '40%',
          right: '20px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.2)',
          borderRadius: '100%',
          width: '40px',
          height: '40px',
          border: 'none',
          outline: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer',
          color: 'grey'
          
        }}
      >
                <i className="icofont-simple-right"></i>
      </button>

            </div >

        <div className='col-lg-3 col-md-12 mx-auto'>
        <Link to='locations' className='d-flex justify-content-center align-items-center w-50'>See More 
        <i className="icofont-long-arrow-right"></i>
        </Link>
        </div>
        
    </div>
    </div>


    </>
  );
};

export default Properties;