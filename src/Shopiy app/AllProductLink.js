import React from 'react'
import { NavLink } from 'react-router-dom'

function AllProductLink() {
  return (
    <>
    <div className="navbar navbar-expand-lg ">
   <NavLink className="nav-link btn-outline-info d-flex me-2 ms-lg-4" to="/"><h1>HOME</h1></NavLink>
   <NavLink className="nav-link btn-outline-info d-flex me-2 ms-lg-4" to="/male">Male-Cloth</NavLink>
   <NavLink className="nav-link btn-outline-info d-flex me-2 ms-lg-4" to="/boy">Boy-Cloth</NavLink>
   <NavLink className="nav-link btn-outline-info d-flex me-2 ms-lg-4" to="/girl">Girl-Cloth</NavLink>
   <NavLink className="nav-link btn-outline-info d-flex me-2 ms-lg-4" to="/kids">Kids-Cloth</NavLink>
   <NavLink className="nav-link btn-outline-info d-flex me-2 ms-lg-4" to="/footwearshoes and ">Shoes & Footwear</NavLink>
   <NavLink className="nav-link btn-outline-info d-flex me-2 ms-lg-4" to="/beauty & health">Beauty & Health</NavLink>
   <NavLink className="nav-link btn-outline-info d-flex me-2 ms-lg-4" to="/homekitchen">Home & Kitchen</NavLink>
   <NavLink className="nav-link btn-outline-info d-flex me-2 ms-lg-4" to="/bags">Bags</NavLink>
    </div>
    </>
  )
}

export default AllProductLink