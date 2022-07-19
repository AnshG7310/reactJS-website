import React, { useState } from 'react';
import WorkAPI from './API/WorkAPI';

const HowItWorks = () => {

  const [workData, setworkData] = useState(WorkAPI);

  return (
    <>
      <section>
        <div className="work-container container">
          <h1 className='main-heading text-center'>How Does It Work</h1>
          <div className="row">
            {
              workData.map((curElem, index) => {

                const {id, logo, title, info} = curElem;

                return (
                  <>
                    <div className="col-12 col-lg-4 text-center work-container-subdiv">
                      <i class={`fontawesome-style ${logo}`}></i>
                      <h2 className="sub-heading">{title}</h2>
                      <p className="main-hero-para">{info}</p>
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

export default HowItWorks;
