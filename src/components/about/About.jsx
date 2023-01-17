import React from 'react'
import './about.css'

const about = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      
      <div className="container about__container">
        
        <div className="card">
          <h3>Introduction</h3>
          <p>
            Computer Science student at 
            Concordia University (Graduation in April 2023).
            Seeking a starting position in an organization that passion, motivation,
             leading-edge skills, professional team-work communication, and serious
              dedication in projects would be an asset to the company.         
          </p>
        </div>

        <div className="card">
          <h3>Interests</h3>
          <p>
            My interest includes Machine Learning, Python programming, Java programming, 
            distributed systems and technologies like Elasticsearch and kubernetes, and Mathematics.
          </p>
        </div>
        
      </div>
    </section>
  )
}

export default about