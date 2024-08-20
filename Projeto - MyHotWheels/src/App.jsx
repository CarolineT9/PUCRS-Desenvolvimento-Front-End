import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
return(
  <div className="Container">
    <NavBar/>
    <Outlet/>
  </div>
  
)

 
 
  
}



export default App;
