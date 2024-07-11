import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';
import img1 from '../Images/img1.jpg';
import playstore from '../Images/playStore (2).png'
import apple_logo from '../Images/apple_logo.jpg'
import iphone from '../Images/iphone.PNG'
import Fetch from '../JSON/Fetch';

const images = [
    { src: 'https://miro.medium.com/v2/resize:fit:1400/1*zurzWYgv6-4L123HBwzsKA.jpeg', property: '5 Properties',
    name: 'Image 1' },

    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIGJveXqHmpYlf07mFvWKzi2gEaXjLVbLTNQ&s',
    property: '5 Properties', 
    name: 'Image 2' },

    { src: 'https://miro.medium.com/v2/resize:fit:1400/1*zurzWYgv6-4L123HBwzsKA.jpeg', property: '5 Properties', 
    name: 'Image 3' },

    { src: 'https://miro.medium.com/v2/resize:fit:1400/1*zurzWYgv6-4L123HBwzsKA.jpeg', property: '5 Properties',
    name: 'Image 4' },

    { src: 'https://miro.medium.com/v2/resize:fit:1400/1*zurzWYgv6-4L123HBwzsKA.jpeg',property: '5 Properties', 
    name: 'Image 5' },

    { src: 'https://miro.medium.com/v2/resize:fit:1400/1*zurzWYgv6-4L123HBwzsKA.jpeg', 
      property: '5 Properties', name: 'Image 6' },
  ];

const Home = () => {

      const [startIndex, setStartIndex] = useState(0);
      const [fade, setFade] = useState(false);

      const handlePrevious = () => {
        if (startIndex > 0){

          setFade(true);

          setTimeout(() => {
          setStartIndex((prevIndex) => Math.max(prevIndex - 3, 0));
          setFade(false);

          }, 300);
        }

          
        };


      const handleNext = () => {

        if (startIndex < images.length - 3){
          setFade(true);
          setTimeout(() => {

            setStartIndex((prevIndex) => Math.min(prevIndex + 3, images.length - 3));
            setFade(false);
            
          }, 300);
        }


        
        };

        const visibleImages = images.slice(startIndex, startIndex + 3);

  return (
    <>

        <section className='section_one shadow'>

            <div className="sec1_col1">
                <h2>Find your Perfect Home</h2>
                <p>Discover the place where your dreams begin, where every corners hlds the promise of a new adventure, and where cherished memories take root and floursh</p>
                <button>Explore</button>
            </div>

            <div className="sec1_col2">
                <img src={img1} alt="" />
            </div>
        </section>

        <Fetch/>

        <section className="section_three">
            <div className="sect_three_col1">
                <h5>Meet Our Agents</h5>
            </div>

            <div className="sect_three_col2">

            <div className="image-gallery-container">
      <button className='btn_prev' onClick={handlePrevious} disabled={startIndex === 0}><i class="icofont-simple-left"></i></button>
      <div className={`image-gallery ${fade ? 'fade' : ''}`}>
        {visibleImages.map((image, index) => (
          <div className="image-card" key={index}>
            <img src={image.src} alt={image.name} />
            <div className="mini_card  shadow">
              <h6>{image.property}</h6>
            <p>{image.name}</p>
            </div>
          </div>
        ))}
      </div>
      <button className='btn_nxt' onClick={handleNext} disabled={startIndex >= images.length - 3}><i class="icofont-simple-right"></i>

      </button>
    </div>

            </div>
        </section>

        <section className="section_four">
          <div className="transparent_background">

            <div className="sec4_col1">
              <h3>Discover your <span>property</span> at your fingertips</h3>
              <h6>Download our mobile App</h6>

              <div className="apps">
                <div className="appstore">
                   <div className="appstore_col1">
                    <img src={apple_logo} alt="" />
                   </div>

                   <div className="appstore_col2">
                    <small>Download on the</small>
                    <h6>App store</h6>
                   </div>
                </div>

                <div className="appstore">
                   <div className="appstore_col1">
                    <img src={playstore} alt="" />
                   </div>

                   <div className="appstore_col2">
                    <small>Get it on</small>
                    <h6>Google Play</h6>
                   </div>
                </div>
              </div>
            </div>

            <div className="sec4_col2">
              <img src={iphone} alt="" />
            </div>

          </div>

        </section>

        <div className="news_letter">
          <form action="#">
          <h2>OUR NEWSLETTER</h2>
          <p>Be the first to hear our new updates</p>
          <input type="text" placeholder='Enter your email address'/>

          <div className='btn_newsletter'>
          <button>Subscribe</button>
          </div>
          </form>
        </div>

        <footer>
          <div className="footer_col1">
            <h3> HORIZON</h3>
          </div>

          <div className="footer_col2">
          <small>copyright 2024 HORIZON Real Estate</small>
          </div>

          <div className="footer_col3">
            <Link><i class="icofont-twitter"></i></Link>
            <Link><i className="icofont-facebook"></i></Link>
            <Link><i className="icofont-linkedin"></i></Link>
            <Link><i className="icofont-instagram"></i></Link>
            <Link><i className="icofont-youtube-play"></i></Link>
          </div>
        </footer>


    </>
  )
}

export default Home