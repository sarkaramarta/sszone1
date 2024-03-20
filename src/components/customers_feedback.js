import React from 'react'
import customer1 from "../images/customer1.png";
import customer2 from "../images/customer2.png";
import customer3 from "../images/customer3.png";
import "../scss/customer_feedback.css";

function Customers_feedback() {
    return (
        <div className='customer-div'>
            <div className='container'>
                <h3 className='cutomer-head'>Customers Feedback</h3>
                <p className='customer-para'>Our users share stories of satisfaction, trust, and exceptional experiences. Explore now</p>
                <div id="carouselExampleControlsNoTouching2" className="carousel slide" data-bs-touch="false">

                    <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='doctor-card row justify-content-between'>
                                    <div className=" col-lg-4 mt-3 custom-cutomer-div">
                                    <div className='image-div'>
                                    <img className='customer-img' src={customer1}/>
                                        </div>
                                      
                                      <h3 className='customer-name'>Natalie Summers</h3>
                                      <p className='customer-review'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s</p>
                                      <div className='review-star'> <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></div>
                                    </div>
                                    <div className=" col-lg-4 mt-3 custom-cutomer-div hidden">
                                    <div className='image-div'>
                                      <img className='customer-img' src={customer2}/>
                                      </div>
                                      <h3 className='customer-name'>Owen Evans</h3>
                                      <p className='customer-review'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s</p>
                                      <div className='review-star'> <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></div>
                                    </div>
                                    <div className=" col-lg-4 mt-3 custom-cutomer-div hidden">
                                    <div className='image-div'>
                                      <img className='customer-img' src={customer3}/>
                                      </div>
                                      <h3 className='customer-name'>Alex Turner</h3>
                                      <p className='customer-review'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s</p>
                                       <div className='review-star'> <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></div>
                                    </div>

                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='doctor-card row justify-content-between'>
                                    <div className=" col-lg-4 mt-3 custom-cutomer-div hidden">
                                    <div className='image-div'>
                                    <img className='customer-img' src={customer1}/>
                                        </div>
                                      
                                      <h3 className='customer-name'>Natalie Summers</h3>
                                      <p className='customer-review'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s</p>
                                      <div className='review-star'> <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></div>
                                    </div>
                                    <div className=" col-lg-4 mt-3 custom-cutomer-div">
                                    <div className='image-div'>
                                      <img className='customer-img' src={customer2}/>
                                      </div>
                                      <h3 className='customer-name'>Owen Evans</h3>
                                      <p className='customer-review'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s</p>
                                      <div className='review-star'> <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></div>
                                    </div>
                                    <div className=" col-lg-4 mt-3 custom-cutomer-div hidden">
                                    <div className='image-div'>
                                      <img className='customer-img' src={customer3}/>
                                      </div>
                                      <h3 className='customer-name'>Alex Turner</h3>
                                      <p className='customer-review'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s</p>
                                       <div className='review-star'> <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></div>
                                    </div>

                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='doctor-card row justify-content-between'>
                                    <div className=" col-lg-4 mt-3 custom-cutomer-div hidden">
                                    <div className='image-div'>
                                    <img className='customer-img' src={customer1}/>
                                        </div>
                                      
                                      <h3 className='customer-name'>Natalie Summers</h3>
                                      <p className='customer-review'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s</p>
                                      <div className='review-star'> <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></div>
                                    </div>
                                    <div className=" col-lg-4 mt-3 custom-cutomer-div hidden">
                                    <div className='image-div'>
                                      <img className='customer-img' src={customer2}/>
                                      </div>
                                      <h3 className='customer-name'>Owen Evans</h3>
                                      <p className='customer-review'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s</p>
                                      <div className='review-star'> <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></div>
                                    </div>
                                    <div className=" col-lg-4 mt-3 custom-cutomer-div">
                                    <div className='image-div'>
                                      <img className='customer-img' src={customer3}/>
                                      </div>
                                      <h3 className='customer-name'>Alex Turner</h3>
                                      <p className='customer-review'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s</p>
                                       <div className='review-star'> <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></div>
                                    </div>

                                </div>
                            </div>
                        
                    </div>

                    <button className="carousel-control-prev carousel-custom" type="button" data-bs-target="#carouselExampleControlsNoTouching2" data-bs-slide="prev">

                        <span className="arrow arrow-prev">Prev</span>
                    </button>
                    <button className="carousel-control-next carousel-custom" type="button" data-bs-target="#carouselExampleControlsNoTouching2" data-bs-slide="next">

                        <span className="arrow arrow-next">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Customers_feedback
