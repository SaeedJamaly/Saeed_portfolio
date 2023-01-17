import React from 'react'
import './experience.css'

const experience = () => {
  return (
    <section id='experience'>
      <h2>Experiences</h2>
      <div className="container exp__container">

        <div className="exp__card">

          <div className="job">

            <h4>Software engineer</h4>
            <div className="job_list">
              <h4>Image processing-based polyethylene pipe corrosion detection</h4>
              <h5>Technical investigation and document preparation reported to senior managers</h5>
              <h5>Contributed to the software developement team to improve the accuracy</h5>
            </div>
            <div className="job_date">
              <h6>Semra Ltd</h6>
              <h6>Famagusta, TRNC</h6>
              <h6>Oct 2016 - Jun 2019</h6>
            </div>

          </div>

        </div>


        <div className="exp__card">
          <div className="job">
            <h4>C developer</h4>
            <div className="job_list">
              <h4>Embedded system implementation using C</h4>
              <h5>Wrote instructions received via USART connection</h5>
              <h5>Optimized the memory usage of the flash program by decreasing dependencies on global variables, stack, and the heap</h5>
            </div>
            <div className="job_date">
              <h6>IKIU University</h6>
              <h6>Qazvin Iran</h6>
              <h6>Jul 2013 - Sept 2014</h6>
            </div>
          </div>
        </div>


        <div className="exp__card">
          <div className="job">
            <h4>Embedded system engineer</h4>
            <div className="job_list">
              <h4>Distributed sensor network</h4>
              <h5>Deployed and installed humidity and temperature sensors inside flour silos at the site</h5>
              <h5>Wrote instructions to connect sensors to the master system via RS-485 using C</h5>
            </div>
            <div className="job_date">
              <h6>Tak Flour Co</h6>
              <h6>Tehran, Iran</h6>
              <h6>Apr 2012 - Jul 2013</h6>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default experience