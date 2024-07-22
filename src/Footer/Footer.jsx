import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>

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
          <div className="footer_row1">

            <div className="footer_col1">
            <h3> HORIZON</h3>
            </div>

            <div className="footer_col2">
            <Link><i class="icofont-twitter"></i></Link>
            <Link><i className="icofont-facebook"></i></Link>
            <Link><i className="icofont-linkedin"></i></Link>
            <Link><i className="icofont-instagram"></i></Link>
            <Link><i className="icofont-youtube-play"></i></Link>
            </div>

          </div>

          <div className="footer_row2">
          <small>copyright 2024 HORIZON Real Estate</small>
          </div>
        </footer>   
    </div>
  )
}

export default Footer