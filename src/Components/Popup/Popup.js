import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import { useState } from "react";
const PopUp = () =>{
var today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
let yyyy = today.getFullYear();
if(dd<10){
  dd='0'+dd
} 
if(mm<10){
  mm='0'+mm
} 
today = yyyy+'-'+mm+'-'+dd;
    const [startDate, setStartDate] = useState("");
    const [expireDate, setExDate] = useState("");
    const [dateDate, setDate] = useState("");

    const writeToDatabase = () => {
       
        
        setDate("");
       
      };

    return(
    <Popup trigger={<span className='bookNow' >Book now</span>} position="right center">
      <div>
        <label>Check In</label>
        <input type="date"  min={today}
            id="date"
            value={startDate}
            onChange={(text) => {
              setStartDate(text.target.value);
            }}></input>
        <label>Check Out</label>
        <input type="date"  id="date"
        min={startDate}
          value={expireDate}
          onChange={(text) => {
            setExDate(text.target.value);
          }}></input>
        <label>Adults</label>
        <input type="number" min={1}></input>
        <label>Children</label>
        <input type="number" min={0}></input>
        <button onChange={(e) => setDate(e.target.value)}
        onClick={writeToDatabase} >Check for Rooms</button>
      </div>
    </Popup>
  )}

  export default PopUp;