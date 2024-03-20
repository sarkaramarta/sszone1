import React from 'react'
import doc1 from "../images/doc1.png"
import doc2 from "../images/doc2.png"
import doc3 from "../images/doc3.png"
import doc4 from "../images/doc4.png"
import doc5 from "../images/doc5.png"
import doc6 from "../images/doc6.png"
import "../scss/doctors.css"

const Doctors = () => {
    return (
        <div className='doctor-container'>
            <div className='container'>
                <h3 className='doctor-head'>
                    Variouse specialist are here you to take care of your Health
                </h3>
                <h5>
                    Doctors are available at any time to care your health
                </h5>
                <div className='doctor-card row justify-content-between'>
                    <div className=" col-lg-4 col-md-6 mt-3 ">

                        <div className='card card-custom color1'>
                            <img src={doc1} className="card-img-top rotate" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">ENT <br /> Specialist</h5>
                                <p className="card-text">treating disorders and other issues related to the ear, nose, throat, and related head and neck</p>
                                <a href="#" className="custom-btn">Read More</a>
                            </div>
                        </div>

                    </div>
                    <div className=" col-lg-4 col-md-6 mt-3 ">

                        <div className='card card-custom color2'>
                            <img src={doc2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Specialist <br /> Endocrinologis</h5>
                                <p className="card-text">Patients with <br /> diabetes and <br /> thyroid issues are <br /> treated <br /><br /><br /> </p>
                                <a href="#" className="custom-btn">Read More</a>
                            </div>
                        </div>

                    </div>
                    <div className=" col-lg-4 col-md-6 mt-3 ">

                        <div className='card card-custom color3'>
                            <img src={doc3} className="card-img-top doc-big" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Specialist <br /> Oncologists</h5>
                                <p className="card-text">examine, diagnose, <br />
                                    and treat cancer</p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <a href="#" className="custom-btn">Read More</a>
                            </div>
                        </div>

                    </div>
                    <div className=" col-lg-4 col-md-6 mt-3 ">

                        <div className='card card-custom color2'>
                            <img src={doc4} className="card-img-top doc-small" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Specialist <br /> Pulmonologist</h5>
                                <p className="card-text">treating diseases of<br /> the respiratory <br />system in both <br />men and women <br /><br /><br /></p>
                                <a href="#" className="custom-btn">Read More</a>
                            </div>
                        </div>

                    </div>
                    <div className=" col-lg-4 col-md-6 mt-3 ">

                        <div className='card card-custom color3'>
                            <img src={doc5} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Specialist<br /> Veterinarian</h5>
                                <p className="card-text">reats diseases, <br />problems, and <br />injuries in humans.</p>
                                <br />
                                <br /><br />
                                <a href="#" className="custom-btn">Read More</a>
                            </div>
                        </div>

                    </div>
                    <div className=" col-lg-4 col-md-6 mt-3 ">

                        <div className='card card-custom color1'>
                            <img src={doc6} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Specialist <br /> Radiologist</h5>
                                <p className="card-text">treat diseases in <br />both humans</p><br /><br /> <br /> <br />
                                <a href="#" className="custom-btn">Read More</a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Doctors 
