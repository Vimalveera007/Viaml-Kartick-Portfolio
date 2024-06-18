import React, { useEffect, useRef } from "react";
import "./Project.css";
import ecome from "../image/Project1 e-commerce.mp4";
import html from "../image/html-5.png";
import css from "../image/css.png";
import js from "../image/js.png";
import react from "../image/physics.png";
// import random from "../image/random.png";
// import quiz from "../image/quiz.png";
// import form from "../image/form validation.png";
// import ecom from "../image/ecommerce.png";
import quiz from "../image/Quiz App.mp4";
import form from "../image/form validation.mp4";
import food from "../image/food ecommerce.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
const Project = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div>

      <div className="container mt-5">
        <h1 className="project">Project</h1>
        <div>
          <p className="row pt-5 fs-5">
            These projects demonstrate my expertise with practical examples of
            some of my work, including brief descriptions and links to code
            repositories and live demos. They showcase my ability to tackle
            intricate challenges, adapt to various technologies, and efficiently
            projects.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row mt-5 projectFirst">
          <div className="col-lg-4 col-md-12 d-flex  justify-content-center aligns-items-center">
            <div>
              <h5 className="pb-3">SHOPPING E-COMMERCE</h5>
              <video
                src={ecome}
                loop
                muted
                autoPlay
                className="img-fluid"
                data-aos="zoom-in"
                data-aos-duration="1500"
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-12 para pt-3">
            <p className="fs-5">
              Developed e-commerce websites from scratch using modern web
              technologies such as HTML5, CSS3 and JavaScript ensuring
              cross-browser compatibility and mobile responsiveness.
            </p>
            <div className="d-flex justify-content-center aligns-items-center gap-5">
              <img
                src={html}
                alt=""
                className="img-fluid toolImg1"
                data-aos="zoom-in"
                data-aos-duration="1500"
              />
              <img
                src={css}
                alt=""
                className="img-fluid toolImg1"
                data-aos="zoom-in"
                data-aos-duration="1500"
              />
              <img
                src={js}
                alt=""
                className="img-fluid toolImg1"
                data-aos="zoom-in"
                data-aos-duration="1500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row projectFirst">
          <div className="col-lg-4 col-md-12 d-flex  justify-content-center aligns-items-center">
            <div>
              <h5 className="pb-3">QUIZ APP</h5>
              <video
                src={quiz}
                loop
                muted
                autoPlay
                className="img-fluid"
                data-aos="zoom-in"
                data-aos-duration="1500"
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-12 para pt-3">
            <p className="fs-5">
              Creating a quiz app can be a rewarding experience, but it also
              comes with its own set of challenges and considerations. Here's an
              overview of what developing a quiz app might entail, along with
              some potential experience.
            </p>
            <div className="d-flex justify-content-center aligns-items-center gap-5">
              <img
                src={html}
                alt=""
                className="img-fluid toolImg1"
                data-aos="zoom-in"
                data-aos-duration="1500"
              />
              <img
                src={css}
                alt=""
                className="img-fluid toolImg1"
                data-aos="zoom-in"
                data-aos-duration="1500"
              />
              <img
                src={js}
                alt=""
                className="img-fluid toolImg1"
                data-aos="zoom-in"
                data-aos-duration="1500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row projectFirst">
          <div className="col-lg-4 col-md-12 d-flex  justify-content-center aligns-items-center">
            <div>
              <h5 className="pb-3">FORM VALIDATION</h5>
              <video
                src={form}
                loop
                muted
                autoPlay
                className="img-fluid"
                data-aos="zoom-in"
                data-aos-duration="1500"
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-12 para pt-3">
            <p className="fs-5">
              Form validation is the process of ensuring that data submitted
              through a web form meets specific criteria or requirements before
              it is processed or stored. It's a critical aspect of web
              development that helps maintain data integrity, improve user
              experience, and prevent security vulnerabilities.
            </p>
            <div className="d-flex justify-content-center aligns-items-center gap-5">
              <img
                src={html}
                alt=""
                className="img-fluid toolImg1"
                data-aos="zoom-in"
                data-aos-duration="1500"
              />
              <img
                src={css}
                alt=""
                className="img-fluid toolImg1"
                data-aos="zoom-in"
                data-aos-duration="1500"
              />
              <img
                src={js}
                alt=""
                className="img-fluid toolImg1"
                data-aos="zoom-in"
                data-aos-duration="1500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <div className="row projectFirst">
          <div className="col-lg-4 col-md-12 d-flex  justify-content-center aligns-items-center">
            <div>
              <h5 className="pb-3">Food E-COMMERCE</h5>
              <video
                src={food}
                loop
                muted
                autoPlay
                className="img-fluid"
                data-aos="zoom-in"
                data-aos-duration="1500"
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-12 para pt-3">
            <p className="fs-5">
              My experience with building a food e-commerce website using
              React.js allowed me to create a dynamic platform that seamlessly
              integrates intuitive user interfaces with robust functionality,
              facilitating smooth navigation, interactive product displays, and
              secure transactions, resulting in an immersive and satisfying
              online shopping experience for customers.
            </p>
            <div className="d-flex justify-content-center aligns-items-center gap-5">
              <img
                src={html}
                alt=""
                className="img-fluid toolImg1"
                data-aos="zoom-in"
                data-aos-duration="1500"
              />
              <img
                src={css}
                alt=""
                className="img-fluid toolImg1"
                data-aos="zoom-in"
                data-aos-duration="1500"
              />
              <img
                src={js}
                alt=""
                className="img-fluid toolImg1"
                data-aos="zoom-in"
                data-aos-duration="1500"
              />
              <img
                src={react}
                alt=""
                className="img-fluid toolImg1"
                data-aos="zoom-in"
                data-aos-duration="1500"
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Project;
