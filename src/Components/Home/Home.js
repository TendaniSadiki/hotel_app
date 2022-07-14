import { useEffect, useState } from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
import { auth} from "../../firebase-config";

import headerImg from '../images/284680_110923172739440.jpg';
import seaView from '../images/sea-view-deluxe-suite.jpg';
import familRoom from '../images/familyroom.jpg'
import exclusiveRoom from '../images/exclusive-room.jpg'
import roundHouse from '../images/LaRotonde_Site_Actu_248x248-VCC_5.jpg'
import lobby from '../images/LeNegresco-LeChantecler_5.jpg'

import bar from '../images/bar.jpg'

export default function Home(props){ 

    
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
      <div className='bookButton' >
          <span className='bookNow' >Book now</span>
      </div>
      <div className="imgContent">
        <img className="headerImg" src={headerImg}></img>
        <h1>Welcome</h1>
      </div>
      <div className="viewRooms">
        <br></br>

        <h1>View Rooms</h1>
        <br></br>
        <br></br>
        <div className="viewRoomsInfo">
          <img src={seaView} alt="Sea View" className="imgOne"></img>
          <div className="viewRoomBtns">
          <button>Book</button>
          <br></br>
          <NavLink to="/" onClick={() =>{window.location="/Seaview"}} >
          <button>Discover</button>
              </NavLink>
         
          <hr></hr>
          </div>
       
        </div>
        <div className="viewRoomsInfo">
        <img src={familRoom} alt="Sea View" className="imgTwo"></img>
          <div className="viewRoomBtns">
          <button>Book</button>
          <br></br>
          <NavLink to="/" onClick={() =>{window.location="/FamilyDeluxe"}} >
          <button>Discover</button>
              </NavLink>

          <hr></hr>
          </div>
         
        </div>
        <div className="viewRoomsInfo">
        <img src={exclusiveRoom} alt="Sea View" className="imgThree"></img>
          < div className="viewRoomBtns">
          <button>Book</button>
          <br></br>
          <NavLink to="/" onClick={() =>{window.location="/Exclusive"}} >
          <button>Discover</button>
              </NavLink>
          <hr></hr>
          </div>
          
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="viewRooms">
        <br></br>

        <h1 className="ourServices">Our Services</h1>
        <br></br>
        <br></br>
        <div className="viewRoomsInfo">
          <img src={bar} alt="Sea View" className="imgOne"></img>
          <div className="viewRoomBtns">
          <button>Discover</button>
          <br></br>
          <span>The Bar</span>
          <hr></hr>
          </div>
       
        </div>
        <div className="viewRoomsInfo">
        <img src={roundHouse} alt="Sea View" className="imgTwo"></img>
          <div className="viewRoomBtns">
          <button>Discover</button>
          <br></br>
          <span>Round House</span>
          <hr></hr>
          </div>
         
        </div>
        <div className="viewRoomsInfo">
        <img src={lobby} alt="Sea View" className="imgThree"></img>
          < div className="viewRoomBtns">
          <button>Discover</button>
          <br></br>
          <span>Lobby</span>
          <br></br>
          <hr></hr>
          </div>
          
        </div>
      </div>
      <div className="roomInfo">
        <div className="roomLeft">
          <h1>Left</h1>
        </div>
        <div className="roomRight">
          <h1>Right</h1>
        </div>
      </div>
      

    </div>
    );
}


