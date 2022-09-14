import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Card from "./components/Card";

function App() {
 
  return (
    <BrowserRouter> 
      <div className="App">
      <NavBar />
          <Routes>
           
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/:user" element={<Card />}/>
            
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
