import React from 'react'
import "./topbar.css";
/*Offline Nav Bar*/
import {NavLink} from 'react-router-dom';
function OfflineNav(props) {
    return (
        <div className="linksContainer">  
                    <div className='leftNavContent'>
                    <h1 >Logo</h1>
                    </div>
                    <div className="rightNavContent">
                    <NavLink to="*" activestyle={{color: 'black'}} exact onClick={() => props.isMobile && props.closeMobileMenu()}><span></span>
                    </NavLink>
                    <NavLink to="./"  activestyle={{color: 'black'}} exact onClick={() => {props.isMobile && props.closeMobileMenu(); window.location="/Home"}}><span><i>Home</i></span>
                    </NavLink>
                    <NavLink to="./" activestyle={{color: 'black'}} exact onClick={() =>{ props.isMobile && props.closeMobileMenu(); window.location="/Login"}} ><span><i >Login</i></span>
                    </NavLink>
                    
                    </div>
                   
            </div>
    )
}

export default OfflineNav
