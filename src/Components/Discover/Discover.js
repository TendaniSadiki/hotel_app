
import { NavLink } from "react-router-dom";

import Room1 from '../images/room1.jpg';
import seaView from '../images/sea-view-deluxe-suite.jpg';
import familRoom from '../images/familyroom.jpg'
import exclusiveRoom from '../images/exclusive-room.jpg'




import bar from '../images/bar.jpg'


function SeaView() {
  return (
    <div className="home">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
    
    <div className="imgContent">
      <img className="headerImg" src={Room1}></img>
      
    </div>
    
    <div className="viewRooms">
      <br></br>

      <h1>Sea View</h1>
      <br></br>
      <br></br>
      
      <div className="viewRoomsInfo">
        <img src={seaView} alt="Sea View" className="imgOne"></img>
        
     
      </div>
      <div className="viewRoomsInfo">
      <img src={familRoom} alt="Sea View" className="imgTwo"></img>
      
       
      </div>
      <div className="viewRoomsInfo">
      <img src={exclusiveRoom} alt="Sea View" className="imgThree"></img>
       
        
      </div>
      <div>
        <h1>DELUXE SEA VIEW ROOMS: SEE THE MEDITERRANEAN SEA AND FEEL GOOD.</h1>
      </div>
      <div>
      Blue, beige, liberty, pink - the delicate colors of the silk wall coverings make them true "bijou rooms", Richly decorated, some say they are the quintessence of "French taste".
       The deluxe sea view rooms at the Negresco seduce with their impression of comfort and the magnificent view they have of the Mediterranean.
      </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
   
  
   
    

  </div>
  )
}

export default SeaView