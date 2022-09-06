import { useEffect, useState } from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
import { auth, db} from "../../firebase-config";
import { getDatabase, ref, child, get } from "firebase/database";

import PopUp from "../Popup/Popup";

import headerImg from '../images/284680_110923172739440.jpg';
import roundHouse from '../images/LaRotonde_Site_Actu_248x248-VCC_5.jpg'
import lobby from '../images/LeNegresco-LeChantecler_5.jpg'
import bathImg from '../images/LeNegresco_JuniorSuiteVueMer_2.jpg'
import bar from '../images/bar.jpg'

export default function Home(){ 

    
   
    const [ojbHandler, setObjHandler] = useState([]);
    const arrObj = [];
  
    useEffect(() => {
      
          // read
      const dbRef = ref(getDatabase());
      get(child(dbRef, `Hotels`)).then((snapshot) => {
     if (snapshot.exists()) {
      console.log(snapshot.val());
      let keys = Object.keys(snapshot.val())
      const Key = snapshot.key;
      const Data = snapshot.val();

      let arr = []
      for (var x = 0; x < keys.length; x++){
        arr.push(Data[keys[x]])
      }
      console.log(arr)
      setObjHandler(arr);

    //   snapshot.forEach((Data) => {
    //   const childDatas = Data.val();
    //   let results =  childDatas;
    //   let arr = [];
    //   const obj  = results;
    //   arrObj.push(arr)
    //   console.log(arrObj);

    //   console.log(arr);

    //   // Data.forEach((childDatas) =>{
    //   //   const Datas = childDatas.key;
    //   //   const Keys = childDatas.val();
     
       
    //   // })

      

    // })
     
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
        
        
      },[]);
      
    
  
    // add
   



return(
    <div className="home">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className='bookButton' >
          
          <PopUp/>

      </div>
      
      <div className="imgContent">
        <img className="headerImg" src={headerImg} alt="image"></img>
        <h1>Welcome</h1>
      </div>
      
      <div className="viewRooms">
        <br></br>

        <h1>View Rooms</h1>
        <br></br>
        <br></br>
        {ojbHandler.map((room, inx)=>(
        <div className="viewRoomsInfo" key={inx}>
          <img src={room.image} alt="Room images" className="imgOne"></img>
          <div className="viewRoomBtns">
            
          <button>Book</button>
          <br></br>
          <NavLink to="/" onClick={() =>{window.location="/Discover"}} >
          <button >Discover</button>
              </NavLink>
            <br></br>
            
            <h3>{room.name}</h3>
          <hr></hr>
          </div>
       
        </div>
       
       ))}
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
          <img src={bathImg}></img>
        </div>
        <div className="roomRight">
          <h1>In Your Room</h1>
          <ul>
           <li> Non-smoking </li>
           <li> Air-conditioning </li>
           <li> Desk</li>
           <li> Direct telephone</li>
           <li> Free high speed wireless internet access (Wifi)</li>
           <li> Flat screen television</li>
           <li> Mini bar</li>
           <li> Safe</li>
           <li> Hospitality tray with coffee and tea</li>
           <li> Maximum number of people in room: 2 adults and 1 child under 12</li>  
            </ul>
        </div>
      </div>
      <div className="roomInfoSec">
      <div className="roomRightSec">
          <h1>IN YOUR BATHROOM</h1>
          <ul>
           <li> Shower and/or bathtub</li>
           <li> Separate toilet </li>
           <li> Hair dryer</li>
           <li> Hospitality</li>
           <li> Products</li>
           <li> Bathrobe and soft</li>
           <li> Slippers</li>
           
            </ul>
        </div>
        <div className="roomLeftSec">
          <img src={bathImg}></img>
        </div>
       
      </div>
      

    </div>
    );
}
