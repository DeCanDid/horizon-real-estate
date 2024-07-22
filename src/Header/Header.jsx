import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
<nav id='main_nav' class="navbar py-3 navbar-expand-lg px-5 shadow">

    <div class="container-fluid">
    <Link to='/' className="navbar-brand horizon" href="#">HORIZON</Link>


    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">HORIZON</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <Link to='/home' id='nav_link' class="nav-link mx-lg-2 active" aria-current="page" >Home</Link>
          </li>

          <li class="nav-item">
            <Link to='' id='nav_link' class="nav-link mx-lg-2" href="#">Properties</Link>
          </li>

          <li class="nav-item">
            {/* <Link to='About_Us' id='nav_link' class="nav-link mx-lg-2" href="#">About Us</Link> */}
          </li>

          <li class="nav-item">
            <a id='nav_link' class="nav-link mx-lg-2" href="#">Contact Us</a>
          </li>
          
          <li class="nav-item">
            <a id='nav_link contact_us' class="nav-link mx-lg-2 contact_us" href="#" >Contact Us</a>
          </li>
          
        </ul>
       
      </div>
    </div>


    <button id='navbar_toggler' className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
    </>
  )
}

export default Header