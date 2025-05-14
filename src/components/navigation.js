import React from "react";
import {Link} from "react-router-dom"
export default function Navigation(){
return (
     <div class="container">
     <Link to="/">
               <img
                 src="../assets/nav-logo.png"
                 alt="Little Lemon logo"
                 className="nav-image"
               ></img>
             </Link>
     
          <ul>
               <li>
               <Link className="hover-effect" to="/">
                       <h3>Home</h3>
                     </Link>
                     </li>
               <li><Link to="/"><h3>About</h3></Link></li>
               <li><Link to="/"><h3>Menu</h3></Link></li>
               <li><Link to="/"><h3>Reservations</h3></Link></li>
               <li><Link to="/"><h3>Order</h3></Link></li>
               <li><Link to="/"><h3>Login</h3></Link></li>
             
          </ul>
     
</div>
)
}