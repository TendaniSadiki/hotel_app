import { useState } from "react";
import { getAuth } from "firebase/auth";


const Profile = () =>{
    const auth = getAuth();
const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.

  const email = user.email;
  


  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
}
    return(
        <div>
            <br></br>
            <br></br>
            <br></br>
            <p>Profile page</p>
                        <li>
                            <div>
                                <span> Email:{user.email}</span>
                                <span> uid:{user.uid}</span>
                            </div>
                        </li>
                        
                    
        </div>
    )
}

export default Profile;