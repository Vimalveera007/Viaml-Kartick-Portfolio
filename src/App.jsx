
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar"
import  { Contact } from "./Contact/Contact"
import TechnicialSKills from "./Resume/TechnicialSkills";
import Home from "./Home/Home"
import Project from "./Project/Project"
import About from "./About/About";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/project" element={<Project />} />
          <Route path="/technicial" element={<TechnicialSKills/>} />
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
