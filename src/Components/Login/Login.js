import React , { useState } from 'react'
import {NavLink} from 'react-router-dom';
import { async } from "@firebase/util";
import { auth } from "../../firebase-config";
import Loader from '../Loader/Loader';

import './LoginStyle.css';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;
  let numbers = /[0-9]/g;
  
 

  const signin = async () => {
setLoading(true);
    let getDetails = {
      email: email,
      pass: password,
      
    };
   
  if (getDetails.email ==="" && getDetails.pass ===""){
    alert("Please enter Email and Password")
  }
  else if(getDetails.email ===""){
    alert("Enter your Email")
  }
  else if(!getDetails.email.includes("@")){
    alert("Email doesn't exist")
  }
  else if(getDetails.pass ===""){
    alert("Enter your Password")
  }
  else if(!getDetails.pass.match(numbers)){
    alert('please add 1 number');

}
else if(!getDetails.pass.match(upperCaseLetters)){
    alert('please add 1 uppercase letter');

}
else if(!getDetails.pass.match(lowerCaseLetters)){
    alert('please add 1 lovercase letter');

}
  else{
   
    try{
      const user = await signInWithEmailAndPassword(
        auth,email,password);
      setLoading(false)
     
    }
    catch(error){
      console.log(error.message)
      setLoading(false)
    }
  }
  setLoading(false)
  };
  
    
    return(
        <div>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
            <div className="container">
              
        <div className="form-box">
          <div className="header-form">
          <h1>Sign In</h1>
          <Loader loading={loading}/>
            <div className="image">
            </div>
          </div>
          <div className="body-form">
           <form>
              <div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><i class="fa fa-user"></i></span>
  </div>
  <input type="email" className="form-control" placeholder="Email"
  autoComplete='on'
  value={email}
  onChange={(text) => {
    setEmail(text.target.value);
  }}
  />
</div>
 <div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><i class="fa fa-lock"></i></span>
  </div>
  <input type="password" className="form-control" placeholder="Password" 
   autoComplete='on'
  value={password}
  onChange={(text) => {
    setPassword(text.target.value);
  }}
  />
</div>
 <button type="button" className="btn btn-secondary btn-block" onClick={signin}>Log In</button>
 <br></br>
 
 <NavLink to="/SIGNUP" className="NavLink" exact ><span><i>Sign Up</i></span>
</NavLink>  
   </form>  
          </div>
        </div>
       </div>   
        </div>
    )
}

export default Login;