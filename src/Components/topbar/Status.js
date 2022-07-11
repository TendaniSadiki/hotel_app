import OnlineNav from "./OnlineNav";
import OfflineNav from "./OfflineNav";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


const Status = () =>{
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
    

        return(
            <Router>
                {
                    loginState ?
                    <Routes>
                    <Route exact path="*" element={<OnlineNav/>}/>
                    </Routes>
                :
                    <Routes>
                        <Route exact path="*" element={<OfflineNav/>}/> 
                    </Routes>
    }
            </Router>
        )
    }
    
    export default Status;