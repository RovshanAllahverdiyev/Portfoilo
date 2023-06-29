import React from 'react'
import './footer.css'
import { AiFillLinkedin} from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      

      {/* <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul> */}

      {/* <div className="footer__socials">

        <a href="https://www.linkedin.com/in/rovshan-allakhverdiev-667803255/" target='_blank'><AiFillLinkedin /></a>
        <a href="https://www.instagram.com/allahverdiev.rovshan/" target='_blank'><FaInstagram /></a>
        <a href="https://github.com/RovshanAllahverdiyev" target='_blank'><AiFillGithub /></a>

      </div> */}

<div className="footer__copyright">
            <small>2023 Rovshan &copy; All Right Reserved</small>
        </div>

     
    </footer>
  )
}

export default Footer