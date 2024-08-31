import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='container nav_bar'

      data-aos = "fade-down"
      data-aos-duration="1000"

      >
        <div className='left nav_iteam'>Portfolio</div>
        <div  className='right'>
          <a href="#home" className='nav_iteam'> Home</a>
          <a href="#experience" className='nav_iteam'>Experience</a>
          <a href="#skills" className='nav_iteam'> Skills</a>
          <a href="#projects" className='nav_iteam'>Project</a>
          <a href="#contact" className='nav_iteam'>Contact</a>
        </div>

      </div>
    </>
  )
}

export default Navbar