import React from 'react'
import "../scss/footer.css";

const Footer = () => {
  return (
    <div className='footer-div'>
      <div className='container'>
        <div className='row'>
            <div className='col-md-3 doc-logo'><h3>Doctor +</h3></div>
            <div className='col-md-3 footer-text'>Thank you for visiting my website, and I look forward to being a part of your wellness journey. Let's thrive together!</div>
            <div className='col-md-3 footer-text'> <p>+91-1234567890</p> <p className='footer-text'>contact@gmail.com</p> </div>
            <hr/>
            <div className='col-md-6 copyright-text'>
            © Copyright 2023. All Rights Reserved
            </div>
            <div className='col-md-6 footer-link'>
                <ul>
                  <li>Privacy Policy</li>
                  <li>Term of Service</li>
                  <li>Legal Info</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
