import React, { useState , useEffect} from "react";
import "./Navbar.css";
import github from "../image/github.png";
import { Link } from "react-router-dom";
import linkedin from "../image/linkedin.png";

const Navbar = () => {

 
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="navbar-brand">
          <h1>VK.</h1>
        </div>
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <span className="navbar-toggler-icon">&#9776;</span>
        </button>
        <div className={`nav-links ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technicial">
                SKILLS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/project">
                PROJECT
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                CONTACT
              </Link>
            </li>
            <div className="d-flex gap-5">
              <Link
                target="_blank"
                to="https://drive.google.com/file/d/1Nu_OAE0QSIp0kZMDrX2Dq16mfh5g-Gqc/view?usp=sharing"
              >
                <button className="btn btn-primary">RESUME</button>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
