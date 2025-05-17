import { useState } from "react";
import { Link } from "react-router-dom";
export default function ReservationForm(props){
     const [fName, setFName] = useState("")
     const [LName, setLName] = useState("")
     const [email, setEmail] = useState("")
     const [tel, setTel] = useState("")
     const [people, setPeople] = useState(1)
     const [date, setDate] = useState("")
     const [occasion, setOccasion] = useState("")
     const [preferences, setPreferences] = useState("")
     const [comments, setComments] = useState("")

     const [finalTime, setFinalTime] = useState(
          props.availableTimes.map((times)=> <option>{times}</option>)
     );

     function handleDateChange(event){
          setDate(event.target.value);
          let stringify = event.target.value;
          const date = new Date(stringify)
          props.updateTimes(date);
          setFinalTime(props.availableTimes.map((times)=> <option>{times}</option>))
     }
     return(
          <form className="reservation-form">
               <div>
                    <label htmlFor="fName">First Name</label><br></br>
                    <input 
                    type="text"
                    id="fName"
                    placeholder="First Name"
                    required
                    minLength={2}
                    maxLength={50}
                    value={fName}
                    onChange={(event)=>setFName(event.target.value)}
                    ></input>
                    </div>

                    <div>
                    <label htmlFor="lName">Last Name</label><br></br>
                    <input 
                    type="text"
                    id="lName"
                    placeholder="Last Name"
                    required
                    minLength={2}
                    maxLength={50}
                    value={LName}
                    onChange={(event)=>setLName(event.target.value)}
                    ></input>
                    </div>
          </form>
          
     )
}