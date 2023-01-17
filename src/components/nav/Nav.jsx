import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { FaUniversity } from 'react-icons/fa'
import { GiBrainFreeze } from 'react-icons/gi'
import {AiOutlineProject} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [showText, setShowText] = useState(false)
  const handleMouseEnter = e => {
    setShowText(true)
  }
  const handleMouseLeave = e => {
    setShowText(false)
  }
  return (
    <nav>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {showText && <p className="message">Home</p>}
        <a href="#"><AiOutlineHome /></a>
      </div>

      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {showText && <p className="message">About</p>}
        <a href="#about"><AiOutlineUser /></a>
      </div>

      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {showText && <p className="message">Edu</p>}
        <a href="#education"><FaUniversity /></a>
      </div>

      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {showText && <p className="message">Skills</p>}
        <a href="#skills"><GiBrainFreeze /></a>
      </div>

      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {showText && <p className="message">Proj</p>}
        <a href="#projects"><AiOutlineProject /></a>
      </div>

      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {showText && <p className="message">Exp</p>}
        <a href="#experience"><BiBook /></a>
      </div>
    </nav>
  )
}

export default Nav