import React from 'react'
import TextField from '@mui/material/TextField';
import './Footer.css'
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg'>
      {/* <h3 className='text-center text-light'>Contact Us</h3> */}
      <div className='p-5 row align-items-center justify-content-center'>
       <div className='col-lg-6 text-center Fcol'>
        {/* <div className="col-lg-2"></div> */}
        {/* <div className='col-lg-8 mt-5'> */}
        <a href='/'>
          <img src="/flavorsome-noBG-white-logo.png" alt="" style={{width:'200px',height:'200px'}}/>
        </a>
       
          <h4 className='text-light'>Signup to our Newsletter</h4>
          <TextField id="filled-basic1" label="email" variant="filled" />
          <button type='button' className='btn btn-primary ms-2 py-3 px-3 '>Sign in</button>
        {/* </div> */}
        {/* <div className="col-lg-2"></div> */}
       </div>

       <div className='col-lg-6 icon text-center'>
        {/* <div className="col-lg-2"></div> */}
        {/* <div className='col-lg-8 mt-5'> */}
        <h3>Contact Us</h3>
              <h5 className=''>
                <MdOutlineEmail className='fs-4' /> flavorsome@gmail.com
              </h5>
              <h5 className='mb-5'> 
                <FaMobileAlt className='fs-4' />9587411258
              </h5>
          <h3 className='text-light'>Follow Us</h3>
          <a href="https://www.youtube.com/" target="_blank" className='text-light '><FaYoutube className='me-5 icon1'/></a>
          <a href='https://www.instagram.com/' target='_blank' className='text-light'><FaInstagram className='me-5 icon1'/></a>
          <a href='https://www.facebook.com/' target='_blank' className='text-light'><FaFacebookF className='me-5 icon1'/></a>
          <a href='https://www.x.com/' target='_blank' className='text-light'><FaXTwitter className='icon1' /></a>
        {/* </div> */}
        {/* <div className="col-lg-2"></div> */}
       </div>
      </div>
      <p className='text-center text-light mb-0 mt-5' id="footer">&copy;Flavorsome-August 2025, All Rights Reserved to &reg;Alwin Joseph Dsilva</p>
      <p className='text-center text-light mb-0 mt-2'>Build with ❤️ using React</p>    
    </div>
  )
}

export default Footer