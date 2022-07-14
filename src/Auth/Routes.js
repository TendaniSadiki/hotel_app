import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


//components
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import Profile from '../Components/Profile/Profile';
import SIgnup from '../Components/SIgnup/SIgnup';
import Book from '../Components/Book/Book';
import SeaView from '../Components/Discover/SeaView/SeaView';
import FamilyDeluxe from '../Components/Discover/FamilyDeluxe/FamilyDeluxe';
import Exclusive from '../Components/Discover/Exclusive/Exclusive';



const AuthRoutes = () =>{
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
//Router
        <Router>
            {
            loginState ?
            //Online Handler
                <Routes>
                <Route exact path="*" element={<Home/>}/>
                <Route exact path="/Home" element={<Home/>}/>
                <Route exact path="/Profile" element={<Profile/>}/>
                <Route exact path="/Book" element={<Book/>}/>
                {
                //Offline Handler
                }
                <Route exact path="/SeaView" element={<SeaView/>}/>
                <Route exact path="/FamilyDeluxe" element={<FamilyDeluxe/>}/>
                <Route exact path="/Exclusive" element={<Exclusive/>}/>
                </Routes>
            :
            //Offline Handler
                <Routes>
                    <Route exact path="*" element={<Login/>}/>
                    <Route exact path="/Signup" element={<SIgnup/>}/>
                    <Route exact path="/Login" element={<Login/>}/>
                </Routes>
            }
        </Router>
    )
}

export default AuthRoutes;
    