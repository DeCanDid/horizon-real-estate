import React from 'react';
import { Link } from 'react-router-dom';
import '../Pages/properties.css';

const Notfound = () => {
  return (
    <>
        <div className="notFound_wrap mb-5">

            <div className="notFound_msg">
                <h1>404</h1>
                <p>We're sorry, but the page you are looking for does not exist.</p>
                <p>Please continue to our home page, or start a search to find your new home.</p>
            </div>

            <div className="redirect_links">
                <div>
                    <button>
                        <Link to='/'>Homepage</Link>
                    </button>
                </div>

                <div>
                    <button>
                        <Link to='properties'>Find Property for Sale</Link>
                    </button>
                </div>

                <div>
                    <button>
                        <Link to='properties'>Find Property for Rent</Link>
                    </button>
                </div>
            </div>


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
        </div>
    </>
  )
}

export default Notfound