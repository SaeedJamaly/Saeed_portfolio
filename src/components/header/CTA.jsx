// Call to Action (for the buttons)

import React from 'react'
import CV from '../../assets/SaeedJamali_CV.pdf'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsStackOverflow} from 'react-icons/bs'

const CTA = () => {
  return (
    <div className = "cta">
        <a href="https://linkedin.com/in/saeed-jamali-fashi" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/SaeedJamaly" target="_blank"><FaGithub/></a>
        <a href="https://stackoverflow.com/users/20287773/saeedjamaly" target="_blank"><BsStackOverflow/></a>
        <a href={CV} download className='cv'>Download CV</a>
    </div>
  )
}

export default CTA