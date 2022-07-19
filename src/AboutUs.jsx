import React from 'react';
import howToUseApp from './API/howToUse';

const AboutUs = () => {

  const [aboutData, setaboutData] = React.useState(howToUseApp);

  return (
    <>
      {/* First Section of About Us Page */}

      <section className="common-section our-services">
        <div className='container mb-5'>
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img src="./images/hero3.jpg" alt="aboutUsImages" />
            </div>
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
              </h3>
              <h1 className='main-heading'>How to use the App?</h1>
              {
                aboutData.map((curElem) => {

                  const { id, title, info } = curElem;

                  return (
                    <>
                      <div className="row our-services-info">
                        <div className="col-1 our-services-number">
                          {id}
                        </div>
                        <div className="col-10 our-services-data">
                          <h2>
                            {title}
                          </h2>
                          <p className="main-hero-para">
                            {info}
                          </p>
                        </div>
                      </div>
                    </>
                  )
                })
              }
              <br />
              <button className="btn-style btn-style-border">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section of About Us Page */}

      <section className="common-section our-services our-services-rightside">
        <div className='container mb-5'>
          <div className="row">
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">
                -- SUPPORT IN ANY LANGUAGES
              </h3>
              <h1 className='main-heading'>World Class Support is <br /> available 24/7 </h1>
              {
                aboutData.map((curElem) => {

                  const { id, title, info } = curElem;

                  return (
                    <>
                      <div className="row our-services-info">
                        <div className="col-1 our-services-number">
                          {id}
                        </div>
                        <div className="col-10 our-services-data">
                          <h2>
                            {title}
                          </h2>
                          <p className="main-hero-para">
                            {info}
                          </p>
                        </div>
                      </div>
                    </>
                  )
                })
              }
              <br />
              <button className="btn-style btn-style-border">Learn More</button>
            </div>
            <div className="col-12 col-lg-5 our-service-rightside-img">
              <img src="./images/callcenter.jpg" alt="aboutUsImages" className="second-image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
