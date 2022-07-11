import Topbar from './Components/topbar/Topbar';
import './App.css';
import AuthRoutes from './Auth/Routes';


//functional programing
function App() {
    
  return (
    <div>
    <AuthRoutes/>
    <Topbar/>
    </div>
  );
}

export default App;
