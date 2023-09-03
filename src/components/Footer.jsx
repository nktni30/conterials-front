import React from 'react';
import Logo from '../img/logo-white.png';
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const footer = () => {
  return (
    <footer>
      <div className='container-fluid bg-blue-grad'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-3 my-5'>
              <Link to={"/"}>
              <img className='img-fluid px-5' src={Logo} alt='footer-logo' />
              </Link>
            </div>
            <div className='col-lg-4 col-md-3 my-lg-5 '>
              <div className='row text-center text-lg-start text-white'>
                <div className='h5 my-4 footer-heading'>QUICK LINKS</div>
              <ul className='footer-links'>
                <li><Link to={"/About"} className='con-footer-link'>About Us</Link></li>
                <li><Link to={"/Contact"} className='con-footer-link'>Contact Us</Link></li>
                <li><Link to={"/TermsCondition"} className='con-footer-link'>Terms & Condition</Link></li>
                <li><Link to={"/PrivacyPolicy"} className='con-footer-link'>Privacy Policy</Link></li>
                <li><Link to={"/ReturnPolicy"} className='con-footer-link'>Return Policy</Link></li>
                <li><Link to={"/Store Locator"} className='con-footer-link'>Store Locator</Link></li>
                <li><Link to={"/FAQs"} className='con-footer-link'>FAQs</Link></li>
                <li><Link to={"/Career"} className='con-footer-link'>Career</Link></li>
              </ul>
              </div>
            </div>
            <div className='col-lg-4 col-md-3 col-sm-12'>
            <div className='row'>
                <div className='footer-icons d-flex justify-content-evenly'>
                  <span>
                    <BsFacebook/>
                  </span>
                  <span>
                    <BsLinkedin/>
                  </span>
                  <span>
                    <BsTwitter/>
                  </span>
                </div>
              </div>
            </div>
            <hr className='footer-hr mt-4'></hr>
          </div>
          <div className='row text-center'>
            <div className='my-3 text-white'>2023 Conterials.com | All Rights Reserved</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer;