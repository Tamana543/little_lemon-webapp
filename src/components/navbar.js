import { useState } from "react";
import Navigation from "./navigation";
import Hamburger from "../assets/hamburger.png";
import close from "../assets/close.png"
export default function Navbar(){
    const [navbarOpen, setNavbarOpen] = useState(false);
    function handleToggle() {
        setNavbarOpen(!navbarOpen)
    }
     return(
 <nav>
    <div className="burger">
       <img src={require("../assets/nav-logo.png")}
       alt="Logo"
       className="nav-image">
       </img>

       <button className="burger-icon" onClick={handleToggle}>
        <img src={navbarOpen ? close : Hamburger} alt="Navigation bar image"/>
       </button>
    </div>
     <Navigation device="desktop"/>
     {navbarOpen ? <Navigation device="mobile"/> : ""}
 </nav>
     )
}