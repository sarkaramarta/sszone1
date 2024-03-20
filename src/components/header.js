import React from 'react';
import '../scss/header.css';

function Header() {
    return (
        <div className='NavBar'>
            <nav className="navbar navbar-expand-lg ">
                <div className="container flex">
                    <a className="navbar-brand doctor_text" href="">Doctor+ 
                     </a>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse flex custom_nav_link" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                        <form className="d-inline-flex ms-lg-auto" role="search">
                    <button className="btn nav-search-icon" type="submit"><i className="bi bi-search"></i></button>
                            <input className="form-control search_custom" type="search" placeholder="Search Doctor" aria-label="Search"/>
                        </form>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Register</a>
                            </li>
                            <li className="nav-item ">
                                <button className="center" aria-current="page" href="#">Login</button>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header
