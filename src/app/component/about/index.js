import React from 'react'
import { BsFillTelephoneFill,BsEnvelopeAtFill,BsGeoAltFill  } from "react-icons/bs";

export default function About() {
  return (
    <div className='about-bg'>
    <div className='about container mx-auto'>
        <div>
            <h1>Hey!!!</h1>
        </div>
        <div className='lg:grid grid-cols-2 gap-8'>
            <div className='more-about col-span-1'>
                <h2>More About me</h2>
                <p>"Web developer with a creative edge and a knack for turning ideas into engaging online experiences. Proficient in HTML, CSS, and JavaScript,Nextjs,MngoDB I blend technical expertise with a keen eye for design. Specialized in crafting responsive and intuitive websites, I am committed to delivering top-notch solutions that seamlessly bridge form and function. With a passion for continuous learning, I stay ahead in the dynamic world of web development to bring innovation and excellence to every project."</p>
                <p ><i className='w-2'><BsGeoAltFill/></i>P-425 Block "S" North Nazimabad Karachi sindh, Pakistan</p>
               
                <p>  <i className='w-2'><BsEnvelopeAtFill
                /></i>zainikram704@gmail.com</p>
               
                <p>  <i className='w-2'><BsFillTelephoneFill /></i>0330-3042267</p>
            </div>
            <div className='drop  col-span-1'>
                <h2>Drop us a line</h2>
                <form action="mailto:zainikram704@gmail.com" method="POST">
                   <label>
                   <input type="text"  placeholder='Enter your name'/>
                   </label>
                   <label>
                   <input type="email" placeholder='Enter your email'/>
                   </label>
                   <label>
                   <textarea name="" id="" cols="40" rows="5" placeholder='Enter your message'>

</textarea>
                   </label>
                   
                    <button type='submit'> Let us know</button>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}
