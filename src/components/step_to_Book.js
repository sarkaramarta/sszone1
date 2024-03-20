import React from 'react'
import "../scss/step_to_book.css"

function Step_to_Book() {
  return (
    <div className='easy-steps-div'>
      <div className='container'>
      <div className='background-grad'>
        <div className='easy-step-head'>
            <h3>Easy steps to book your Appointment</h3>
            
        </div>
        <div className='feature-div'>
        <div className='feature'>
                <div className='number-div div-1'>
                <p>1</p>
                </div>
                <i className="bi bi-geo-alt-fill logo-1"></i>
                <p className='feature-logo '>Select the location and search near by doctor</p>
            </div>
            <div className='feature'>
                <div className='number-div div-2'>
                <p>2</p>
                </div>
                <i className="bi bi-clock logo-2"></i>
                <p className='feature-logo '>Schedule and Book your date and time for appointment</p>
            </div>
            <div className='feature'>
                <div className='number-div div-3'>
                <p>3</p>
                </div>
                <i className="bi bi-credit-card logo-3"></i>
                <p className='feature-logo'>Easy way to make payment in multiple getway</p>
            </div>
        </div>
        
      </div>
      </div>
    </div>
  )
}

export default Step_to_Book;
