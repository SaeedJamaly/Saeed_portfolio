import React from 'react'
import './header.css'
import ME from '../../assets/pic_circle.png'
import CTA from './CTA'


const header = () => {
  return (
    <header>
      <div className="container header__container">

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <div className="container name__cta">

          <div className="name">
            <h1>Saeed Jamali</h1>
          </div>

          <div className="cta">
            <CTA />
          </div>
          
        </div>

        <a href="#contact" className='scroll__down_header'>Scroll Down</a>

      </div>
    </header>
  )
}

export default header