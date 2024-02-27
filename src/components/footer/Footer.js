import React from 'react'
import logo from '../../images/footer_logo.png'
import { FooterDiv } from './Style'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
      <FooterDiv className='pb-3'>
                <div className='container'>
                    <div className="row pt-5">
                        <div className="col-lg-4 col-md-6 col-sm-12  text-start">
                            <img src={logo} alt="" />
                            <p className='footer-text mt-4'>Lorem ipsum dolor sit amet consectetur. Sit mi dolor nullam faucibus molestie. Quis mauris at eget risus mattis ornare. Nec lorem in et sapien tristique neque vivamus. Egestas tempus facilisis in habitant vitae.</p>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-6 offset-lg-2 offset-0 text-start">
                         <p className='footer-heading'>About</p>
                            <p className='footer-para'>How It Works<br />Terms and Condition<br />Privacy & Policy<br />About Us</p>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-6 text-start">
                            <p className='footer-heading'>Important Links</p>
                          <Link to='/VehicleListing'  className='nav-link'> <p className='footer-para'>Vehicle Listing</p></Link>
                          <Link to='/contact-us' className='nav-link'>  <p className='footer-paras'>Contact Us</p></Link> 
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-6 text-start">
                            <p className='footer-heading'>Socials</p>
                            <p className='footer-para'>Instagram<br />Twitter<br />Facebook</p>
                        </div>
                    </div>
                    <div className=''>
                        <hr className='text-white' />
                    </div>
                    <div className='mt-2'>
                        <p className='last-text'>©2023 CharterCar. All rights reserved</p>
                    </div>
                </div>
            </FooterDiv>
    </>
  )
}

export default Footer