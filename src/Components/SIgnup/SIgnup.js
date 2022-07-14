import React, { useState } from "react";
import { createUserWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import { NavLink } from "react-router-dom";
import './signup.css';

import { auth } from "../../firebase-config";
import Loader from "../Loader/Loader";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false)
  const [loginState, setLoginState] = useState(false);
  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;
  let numbers = /[0-9]/g;

  onAuthStateChanged(auth,(currentUser) =>{
    setUser(currentUser)
  })

  const register = async  () => {
    setLoading(true)
    let userdDetails = {
      email: email,
      pass: password,
      login:loginState
      
    };
    if(userdDetails.email ==="" &&  userdDetails.pass === ""){
      alert("Please fill in all inputs")
    }
    else if(userdDetails.email === ""){
      alert("Enter Email")
    }
    else if(!userdDetails.email.includes("@")){
      alert("Email doesn't exist")
    }
    else if(userdDetails.pass === ""){
      alert("Enter Password")
    }
    else if(userdDetails.pass.length < 6){
      alert("password should be 6 characters")
    }
    else if(!userdDetails.pass.match(numbers)){
      alert('please add 1 number');
  
  }
  else if(!userdDetails.pass.match(upperCaseLetters)){
      alert('please add 1 uppercase letter');
  
  }
  else if(!userdDetails.pass.match(lowerCaseLetters)){
      alert('please add 1 lovercase letter');
  
  }
    
    else{
      try{
        const user = await createUserWithEmailAndPassword(
          auth,email,password).then(() =>{
            setLoading(false)
            window.location('./Login')
          }).catch((error) =>{
            console.log(error.message);
            if (error.message === 'Firebase: Error (auth/email-already-in-use).'){
              alert('email aready in use')
            }
          })
        
      
      }
      catch(error){
        setLoading(false)
      }
  };   setLoading(false)}


  return (
    <div>
     
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container">
   
        <div className="form-box">
       
          <div className="header-form">
          <Loader loading={loading} />
          <h1>Sign Up</h1>
          
            <h4 className="text-primary text-center">
              <i
                className="fa fa-user-circle"
                style={{ fontSize: "110px" }}
              ></i>
            </h4>
            <div className="image"></div>
          </div>
          <div className="body-form">
            <form>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-user"></i>
                    
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={(text) => {
                    setEmail(text.target.value);
                  }}
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  onChange={(text) => {
                    setPassword(text.target.value);
                  }}
                />
              </div>
              <button
                type="button"
                className="btn btn-secondary btn-block"
                onClick={register}
              >
                Sign Up
              </button>
              <div className="message"></div>
              <NavLink to="./Login" className="NavLink" exact>
                <span>
                  <i>Sign In</i>
                </span>
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;