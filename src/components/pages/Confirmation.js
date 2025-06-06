import HeroImg from "../../assets/food/food5.jpeg"
import { Link } from "react-router-dom"
export default function Confirmation(){
     return(
          <header className="confirmation-header">
               <img
                className="confirmatio-image"
                src={HeroImg}
                alt="Ingredients Image"
                ></img>
                <section className="reserve-header-text">
                    <h1>Your Reservation is Confirmed!</h1>
                    <h4>A confirmation message has been sent to your email.</h4>
                    <h4>Thanks for dining with us!</h4>
                </section>
                <section className="redirect-buttons">
                    <a 
                    className="redirect-button"
                    href={require("../../assets/menu.webp")}
                    target="_blanke"
                    rel="noreferrer"
                    >
                         Browse Now
                    </a>
                    <Link className="redirect-button" to="/order">Order Online</Link>
                    <Link className="redirect-button" to="#">Home Page
                    </Link>
                </section>
          </header>
     )
}