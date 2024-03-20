import React from 'react'
import Header from '../components/header'
import Find_doctor from '../components/find_doctor'
import Step_to_Book from '../components/step_to_Book'
import Book_appointment from '../components/book_appointment'
import Doctors from '../components/doctors'
import Top_doctors from '../components/top_doctors'
import Customers_feedback from '../components/customers_feedback'
import Footer from '../components/footer'


function LandingPage() {
  return (
    <div>
      <Header />
      <Find_doctor />
      <Step_to_Book />
      <Book_appointment />
      <Doctors />
      <Top_doctors />
      <Customers_feedback />
      <Footer />
    </div>
  )
}

export default LandingPage
