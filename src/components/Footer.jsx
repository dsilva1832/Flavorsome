import React from 'react'
import TextField from '@mui/material/TextField';
import './Footer.css'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg'>
      {/* <h3 className='text-center text-light'>Contact Us</h3> */}
      <div className='p-5 row align-items-center justify-content-center'>
       <div className='col-lg-6'>
        {/* <div className="col-lg-2"></div> */}
        {/* <div className='col-lg-8 mt-5'> */}
          <h4 className='text-light'>Signup to our Newsletter</h4>
          <TextField id="filled-basic1" label="email" variant="filled" />
          <button type='btn' className='btn btn-primary ms-2 py-3 px-3'>Sign in</button>
        {/* </div> */}
        {/* <div className="col-lg-2"></div> */}
       </div>

       <div className='col-lg-6 icon'>
        {/* <div className="col-lg-2"></div> */}
        {/* <div className='col-lg-8 mt-5'> */}
          <h3 className='text-light'>Follow Us</h3>
          <a href="https://www.youtube.com/" target="_blank" className='text-light'><FaYoutube className='me-5'/></a>
          <a href='https://www.instagram.com/' target='_blank' className='text-light'><FaInstagram className='me-5'/></a>
          <a href='https://www.facebook.com/' target='_blank' className='text-light'><FaFacebookF className='me-5'/></a>
          <a href='https://www.x.com/' target='_blank' className='text-light'><FaXTwitter /></a>
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