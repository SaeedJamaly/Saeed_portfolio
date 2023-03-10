import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Education />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
    <Footer />
    </>
  )
}

export default App