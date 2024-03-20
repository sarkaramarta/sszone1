import React from 'react'
import book_left_img from "../images/4_copy.png";
import "../scss/book_appointment.css";

const Book_appointment = () => {
  return (
    <div className='book-appointment'>
      <div className='container'>
      <div className='row'>
        <div className='col-md-5'>
            <div className='book-leftcontainer'>
                <div className='book-inner-logo-div'>
                <img className='book-lady-doc' src={book_left_img}/>
                </div>
                
            </div>
        </div>
        <div className='col-md-7'>
            <div className='book-rightcontainer'>
                <h3 className='book-head'>Experienced doctor analyse the patient giving them aproper treatment</h3>
                <a href=''>Doctor avaiablilty</a>
                <a href=''>Treatment & Consulting</a>
                <a href=''>Top Specialist doctor</a>
                <a href=''>Apply coupon for treatment</a>
                <button>Book Appointment</button>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Book_appointment
