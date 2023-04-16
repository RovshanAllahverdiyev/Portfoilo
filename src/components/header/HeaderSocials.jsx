import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/rovshan-allakhverdiev-667803255/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/RovshanAllahverdiyev" target='_blank'><FaGithub /></a>
        <a href="https://www.instagram.com/allahverdiev.rovshan/" target='_blank'><BsInstagram /></a>
        
    </div>
  )
}

export default HeaderSocials