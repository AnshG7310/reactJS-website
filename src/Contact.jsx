import React from 'react';

const Contact = () => {
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">

            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">

                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br /> Sales Team
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis placeat quo doloribus voluptate? Non ex distinctio ullam necessitatibus sint magnam!
                  </p>
                  <figure>
                    <img src="./images/hero1.jpg" alt="contactUsImage" className='img-fluid' />
                  </figure>
                </div>

                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">

                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input type="text" placeholder='First Name' className="form-control" />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input type="text" placeholder='Last Name' className="form-control" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input type="text" placeholder='Phone Number' className="form-control" />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input type="text" placeholder='Email ID' className="form-control" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input type="text" name="" id="" placeholder='Add Address' className="form-control" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <input type="text" name="" id="" placeholder='Enter Your Message' className="form-control" />
                      </div>
                    </div>

                    <div className="form-check form-checkbox-style">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                      <label className="form-check-label main-hero-para">
                        I agree that the Ansh Goyal may contact me at the Email Address or Phone Number above...
                      </label>
                    </div>

                    <button type="submit" className="btn btn-style w-100 mt-5">
                      Submit
                    </button>

                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
