import React from 'react'
import banner_doc from "../images/banner-image.png";
import banner_img from "../images/banner-background.png";
import banner_small from "../images/banner-small.png";
import banner_small2 from "../images/banner-small2.png";
import "../scss/find_doctor.css"

function Find_doctor() {
  return (
    <div className='banner'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h2 className='banner-heading'>
            Find your near by doctor <br/>
            & book your appointment <br/>
            & get treatment fast <br/>
            </h2>
            <div className='banner-form'>
              <h4 className='banner-form-head'>Let's Find Your Perfect Doctor</h4>
              <form>
              <label className='banner-form-para'>
                Appointment Type
              </label>
              <select>
                <option >All Types</option>
              </select>
              <label className='banner-form-para'>
                Appointment Type
              </label>
              <input type='text' placeholder='Enter patient name'></input>
              <button type='submit'>Booking Now <i className="bi bi-arrow-down-right-square"></i></button>
              </form>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='banner-image-div'>
              <img className='banner-doc-img' src={banner_doc}/>
              <div className='happy_patient'> 
                <div className='circle'>
                  <div className='inner-circle-text'>
                    <h5>3.5k+ Plus</h5>
                    <p>Happy Patient</p>
                  </div>
                  <img className='banner-patient1' src={banner_small}/>
                  <img className='banner-patient2' src={banner_small}/>
                  <img className='banner-patient3' src={banner_small2}/>
                  <img className='banner-patient4' src={banner_small2}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Find_doctor

//#276a7b