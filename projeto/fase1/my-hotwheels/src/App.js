import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import Home from './Components/Home/Home';
import About from "./Components/About/About";
import CarForm from "./Components/CarForm/CarForm";
import CarList from "./Components/CarList/CarList";

function App() {
  return (
    
     <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/car-form' element={<CarForm/>} />
        <Route path='/car-list' element={<CarList/>} />
      </Routes>
     </Router>
  );
}

export default App;
