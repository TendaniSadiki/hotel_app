
import './topbar.css';
import { signOut, onAuthStateChanged } from "firebase/auth";
import {getAuth} from 'firebase/auth';
import React, { useState } from "react";

/*Online Nav Bar*/
//Topbar Icons
import {NavLink} from 'react-router-dom';
import {CgHome} from "react-icons/cg";
import {CgUser} from "react-icons/cg";

import {CgLogOff} from "react-icons/cg";
function OnlineNav(props) {
    const [loginState, setLoginState] = useState(null);
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setLoginState(true)
        // ...
      } 
      else{
          setLoginState(false)
      }
    });
    
const logout = async () =>{
    await signOut(auth);
    setLoginState(false);
    window.location="/Login";

}
    //Topbar navlinks Online
    return (
        <div>
            
            <div className="linksContainer">  
                    <NavLink to="*" activestyle={{color: 'black'}} exact onClick={() => props.isMobile && props.closeMobileMenu()}><span></span>
                    </NavLink>
                    <NavLink to="./Home"  activestyle={{color: 'black'}} exact onClick={() => {props.isMobile && props.closeMobileMenu(); window.location="/Home"}}><span><i><CgHome/>Home</i></span>
                    </NavLink>
                    <NavLink to="./Profile" activestyle={{color: 'black'}} exact onClick={() =>{ props.isMobile && props.closeMobileMenu(); window.location="/Profile"}} ><span><i ><CgUser/>Profile</i></span>
                    </NavLink>
                    <NavLink to="./Login" activestyle={{color: 'black'}} exact onClick={logout} ><span className="signout"><i><CgLogOff />Log Out</i></span>
                    </NavLink>
                    </div>
        </div>
    )
}

export default OnlineNav
