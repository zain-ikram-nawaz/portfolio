import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook,FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";

export default function Social() {
  return (
    <div className='social'>
        <h1>Find me on</h1>

        <div className='icons container mx-auto'>
      <i><FaFacebook /></i>  
       <i><BsLinkedin /></i> 
        <i><FaXTwitter /></i>
        <i><SiGmail /></i>
        <i><IoLogoWhatsapp /></i>
        </div>
        <div className='copyright'>
            <div><p>© Copyright 2014 <b>Your Website Link</b></p></div>
            <div><p>Theme by <b>Zain Ikram</b></p></div>
        </div>
    </div>
  )
}
