import React, { useEffect } from "react";
import "./Home.css";
import Typewriter from "typewriter-effect/dist/core";
import deve from "../image/dveloepr.svg";
import hand from "../image/hello.png";
import github from "../image/github.png";
import linkedin from "../image/linkedin.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  useEffect(() => {
    new Typewriter("#typewriter", {
      strings: [
        "FRONTEND DEVELOPER",
        "SOFTWARE DEVELOPER",
        "REACT JS DEVELOPER",
      ],
      autoStart: true,
      loop: true,
    });
  }, []);

  return (
    <div>
      <div className="container name">
        <div className="row pt-5">
          <div className="Heading col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="d-flex gap-4">
              <h1 className="pb-3">Hi There</h1>
              <img src={hand} alt="" className=" handImg" />
            </div>

            <h1 className="pb-3">I'M Vimal Karthick</h1>
            <h1 id="typewriter"></h1>
            <div className="d-flex gap-4 pt-5  ">
              <Link to="https://github.com/Vimalveera007" target="_blank">
                <img src={github} alt="GitHub" className="gitImg img-fluid" data-aos="zoom-in"
                data-aos-duration="3000"/>
              </Link>

              <Link
                to="https://linkedin.com/in/vimal-karthick-sambasivam-870b7723a"
                target="_blank"
              >
                <img src={linkedin} alt="GitHub" className="gitImg img-fluid" data-aos="zoom-in"
                data-aos-duration="3000"/>
              </Link>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12   pt-5">
            <img src={deve} alt="" className="img-fluid homeImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
