import "./topbar.css";
import Navigation from "./Navigation";
import MobileTopBar from './MobileTopBar';
export default function Topbar(){
// Desktop and Mobile NavBar
    return(
      <nav className='Topbar'>
           <Navigation/>
           <MobileTopBar/>
      </nav>
    );
}