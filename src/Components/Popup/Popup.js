import React from 'react';
import Popup from 'reactjs-popup';
import { db } from "../../firebase-config";
import { set,  ref } from "firebase/database";
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
    const [checkInDate, setcheckInDate] = useState("");
    const [checkOutDate, setExDate] = useState("");
    const [adults, setAdult] = useState("");
    const [children, setChildren] = useState("");
    const [dateDate, setDate] = useState("");

    const writeToDatabase = () => {
       
        setDate("");
        set(ref(db, `BookInfo`), {

          checkInDate: checkInDate,
          checkOutDate: checkOutDate,
          adults: adults,
          children: children
        });
      };

    return(
    <Popup trigger={<span className='bookNow' >Book now</span>} position="right center">
      <div>
        <label>Check In</label>
        <input type="date"  min={today}
            id="date"
            value={checkInDate}
            onChange={(text) => {
              setcheckInDate(text.target.value);
            }}></input>
        <label>Check Out</label>
        <input type="date"  id="date"
        min={checkInDate}
          value={checkOutDate}
          onChange={(text) => {
            setExDate(text.target.value);
          }}></input>
        <label>Adults</label>
        <input type="number" min={1} value={adults}
         
          onChange={(text) => {
            setAdult(text.target.value);
          }}></input>
        <label>Children</label>
        <input type="number" min={0} value={children}
          onChange={(text) => {
            setChildren(text.target.value);
          }}></input>
        <button onChange={(e) => setDate(e.target.value)}
        onClick={writeToDatabase} >Check for Rooms</button>
      </div>
    </Popup>
  )}

  export default PopUp;