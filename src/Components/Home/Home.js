import { useEffect, useState } from "react";
import "./home.css";

import { auth} from "../../firebase-config";

import headerImg from '../images/284680_110923172739440.jpg';
import seaView from '../images/sea-view-deluxe-suite.jpg';
import familRoom from '../images/familyroom.jpg'
import exclusiveRoom from '../images/exclusive-room.jpg'

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
    <div className="home">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className='bookButton'>
          <span className='bookNow'>Book now</span>
      </div>
      <div className="imgContent">
        <img className="headerImg" src={headerImg}></img>
        <h1>Welcome</h1>
      </div>
      <div className="viewRooms">
        <h1>View Rooms</h1>
        <div className="viewRoomsInfo">
          <img src={seaView} alt="Sea View" className="imgOne"></img>
          <div className="viewRoomBtns">
          <button>Book</button>
          <button>Discover</button>
          </div>
       
        </div>
        <div className="viewRoomsInfo">
        <img src={familRoom} alt="Sea View" className="imgTwo"></img>
          <div className="viewRoomBtns">
          <button>Book</button>
          <button>Discover</button>
          </div>
         
        </div>
        <div className="viewRoomsInfo">
        <img src={exclusiveRoom} alt="Sea View" className="imgThree"></img>
          <div className="viewRoomBtns">
          <button>Book</button>
          <button>Discover</button>
          </div>
          
        </div>
      </div>
      

    </div>
    );
}


