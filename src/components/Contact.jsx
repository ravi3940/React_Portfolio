import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";


function Contact() {
  return (
    <>
    <h2>Contact Me</h2>
    <div className="contact-icon" id="contact">
      <div className='items'>
        <a href="https://www.instagram.com/" target='_balnk'>        <FaInstagramSquare  className='icons'/>
        </a>
      </div>
      <div className='items'>
        <a href="https://www.facebook.com/" target='_balnk'>      <CiFacebook className='icons' />
        </a>
      </div>
      <div className='items'>
        <a href="https://www.linkedin.com/in/ravi-kumar-b2217a229/" target='_balnk'><CiLinkedin className='icons' />
        </a>
      </div>
      <div className='items'>
            <a href="https://github.com/ravi3940" target="_balnk"><FaGithubSquare className='icons'/></a>
      </div>
      <div className='items'>
        <a href="mailto:ravikumar013013@gmail.com" target='_balnk'><MdOutlineMail className='icons'/>
        </a>
      </div>

    </div>
    </>
  )
}

export default Contact