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
     )
}