import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


function Navbar() {
    let Navigate = useNavigate();


  return (
    <>
     <div>
    
        <nav className="navbar navbar-expand-lg navbar-light bg-warning ">
          <h1 className='fw-bold text-warning-emphasis fst-italic text-decoration-underline'>&#10224;Shopiy</h1>
            <div className="container px-4 px-lg-5">
            <button className='nav-link d-flex me-2 text-dark' onClick={() => Navigate(-1)}><h1>&#8592;</h1></button>
            <button className='nav-link d-flex me-2 text-dark' onClick={() => Navigate(+1)}><h1>&#x2192;</h1></button>
            
                <NavLink className="navbar-brand" to="/allProduct">Start Shiping </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        
                    <h1 className='bg-success p-2 text-info '>Shopiy Website In Fashion Desine</h1>
                    </ul>
                    <NavLink className="nav-link d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>&#x1F6D2; cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </NavLink>
                </div>
            </div>
        </nav>
    </div>

   
    </>
  )
}

export default Navbar