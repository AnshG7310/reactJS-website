import React from 'react';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">

                <div className="col-6 col-lg-3">
                  <h2>Company</h2>
                  <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Service</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                  </ul>
                </div>
                
                <div className="col-6 col-lg-3">
                  <h2>Support</h2>
                  <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Service</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Services</h2>
                  <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Service</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">

                    <div className="col-3 mx-auto">
                      <a href="">
                        <i className='fa-brands fa-facebook fontawesome-style'></i>
                      </a>
                    </div>

                    <div className="col-3 mx-auto">
                      <a href="">
                        <i className='fa-brands fa-instagram fontawesome-style'></i>
                      </a>
                    </div>

                    <div className="col-3 mx-auto">
                      <a href="">
                        <i className='fa-brands fa-youtube fontawesome-style'></i>
                      </a>
                    </div>

                    <div className="col-3 mx-auto">
                      <a href="">
                        <i className='fa-brands fa-twitter fontawesome-style'></i>
                      </a>
                    </div>

                  </div>
                </div>

              </div>
              <hr />
              <div className="mt-5">
                <p className='main-hero-para text-center w-100'>Copyright @ 2022 GoyalPay. All Rights Reserved.</p>
              </div>

            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
