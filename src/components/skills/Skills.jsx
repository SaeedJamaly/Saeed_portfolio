import React from 'react'
import './skills.css'


const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="container skills__container">

        <div>
          <h4>Languages</h4>
          <div className="skill__card">
            <a href="">Java</a>
            <a href="">Python</a>
            <a href="">C</a>
            <a href="">JavaScript</a>
            <a href="">SQL</a>
            <a href="">CSS</a>
            <a href="">Matlab</a>
          </div>
        </div>

        <div>
          <h4>Libraries</h4>
          <div className="skill__card">
            <a href="">Scikit-learn</a>
            <a href="">Numpy</a>
            <a href="">NLTK</a>
            <a href="">Keras</a>
            <a href="">Tribuo</a>
          </div>
        </div>

        <div>
          <h4>Tools & Frameworks</h4>
          <div className="skill__card">
            <a href="">Kubernetes</a>
            <a href="">Elasticsearch</a>
            <a href="">Kibana</a>
            <a href="">Logstash</a>
            <a href="">NodeJS</a>
            <a href="">React</a>
            <a href="">Git</a>
          </div>
        </div>

        <div>
          <h4>Report Writing</h4>
          <div className="skill__card">
            <a href="">Microsoft Office</a>
            <a href="">LaTex</a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills