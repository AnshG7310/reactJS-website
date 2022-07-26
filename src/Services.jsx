import React from 'react';
import serviceApi from './API/serviceApi';

const Services = () => {

  const [serviceData, setserviceData] = React.useState(serviceApi);

  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            How To Send Money
          </h1>
          <div className='row'>
            {
              serviceData.map((curElem, index) => {

                const { id, logo, title, info } = curElem;

                return (
                  <>
                    <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv" key={id}>
                      <i className={`fontawesome-style ${logo}`}></i>
                      <h2 className="sub-heading">
                        {title}
                      </h2>
                      <p className="main-hero-para">
                        {info}
                      </p>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
