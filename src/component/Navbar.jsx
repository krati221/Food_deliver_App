import React from "react"
import { Link } from "react-router-dom";


const Navbar = () => {

    return (


<header>
<div>
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
    
   <div class="container-fluid">
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
       <div>  <img src="/images/DeliDash-modified.png" alt="Homepage" style={{ width: "80px", height: "auto" }}   /> </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
          <li className ="nav-link mx-4" >
          <Link to = "/Home" style={{ textDecoration: "none", color: "black" }}>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         </li>
         <li className ="nav-link mx-4">
          <Link to="/Login" style={{ textDecoration: "none", color: "black" }}> Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </li>

          <li className="nav-link mx-4">
           <Link to= "/Register" style={{ textDecoration: "none", color: "black" }}>Register</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         </li>
       </ul>
       <form class="d-flex" role="search">
         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>         <button class="btn btn-outline-success" type="submit">Search</button>
       </form>
     </div>
   </div>
 </nav>
         </div>
         </header>
  )
}

export default Navbar
