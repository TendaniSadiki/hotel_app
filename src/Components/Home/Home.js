import { useEffect, useState } from "react";
import "./home.css";

import { auth} from "../../firebase-config";



export default function Home(){ 

    
    const [tempUidd, setTempUidd] = useState("");
  
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          // read
        
        } else if (!user) {
            window.location="/Login";
        }
      });
    }, []);
    
  
    // add
   
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


return(
    <div className="page">
      <br></br>
      <br></br>
      <br></br>
      <h1>Hotel app </h1>
    </div>
    );
}


