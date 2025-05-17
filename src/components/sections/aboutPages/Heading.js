import HeroImage from "../../../assets/food/food4.webp"
export default function Heading(){
   return ( <header className="reserve-table">
          <img 
          className="header-reserve"
          src={HeroImage}
          alt="Little Lemon Ingredients"
          />
          <div className="reserve-header-text">
               <h1>About US</h1>
          </div>
     </header>)
}