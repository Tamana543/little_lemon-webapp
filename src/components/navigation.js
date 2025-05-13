import React from "react";
import {Link} from "react-router-dom"
export default function Navigation(){
return (
     <div class="container">
     <Link to="/">
               <img
                 src={require("../assets/nav-logo.png")}
                 alt="Little Lemon logo"
                 className="nav-image"
               ></img>
             </Link>
     <nav class="navbar">
          <ul>
               <li><a href="#">Home</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Menu</a></li>
               <li><a href="#">Reservations</a></li>
               <li><a href="#">Order</a></li>
               <li><a href="#">Login</a></li>
          </ul>
     </nav>
</div>
)
}