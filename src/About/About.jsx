import React, { useEffect } from "react";
import "./About.css";
import deve from "../image/deve.jpg";
import web from "../image/webdesign.png";
import development from "../image/developement.png";
import market from "../image/maeketing.png";
import start from "../image/startegy.png";
import support from "../image/suppport.png";
import experience from "../image/experienced.png";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <h1 className="about">About</h1>

        <div className="row mt-5">
          <div className="col-lg-6 col-md-12">
            <img src={deve} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6 col-md-12 ">
            <div className="d-flex justify-content-center aligns-items-center mt-5">
              <p className="fs-5 ">
                <li className="pb-3">
                  Hello! I’m Vimal Karthick, an enthusiastic Frontend Developer
                  with a keen eye for detail and a passion for creating engaging
                  user experiences.
                </li>
                <li className="pb-3">
                  As a recent graduate with a degree in Information Technology,
                  I am eager to leverage my skills and bring innovative ideas to
                  the world of web development.
                </li>
                <li className="pb-3">
                  Driven by a curiosity for emerging trends in web development,
                  I am committed to continuous learning and staying updated with
                  industry advancements.
                </li>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <h3>Internship</h3>
          <p className="fs-5 pt-3">
            Currently, I am interning as a Frontend Developer at iNetz
            Technologies Pvt Ltd, Vadapalani, Chennai, for six months. In this
            role, I am involved in a Learning Management System (LMS) project.
            My responsibilities include creating responsive and engaging user
            interfaces, integrating with backend systems, and ensuring the
            application's visual consistency. I collaborate with the backend
            team to deliver a cohesive user experience and optimize the
            application for speed and efficiency. This internship is providing
            me with valuable hands-on experience in frontend development,
            enhancing my ability to build dynamic and user-friendly web
            applications.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h3>Course</h3>
          <p className="fs-5 pt-3">
            I have completed a Frontend Development course at iNetz
            Technologies, Chennai. This course provided me with in-depth
            knowledge of HTML, CSS, JavaScript, and modern frameworks like React
            . I gained practical experience in designing responsive and
            interactive user interfaces. The hands-on projects helped me develop
            skills in creating visually appealing and user-friendly web
            applications. This training has significantly enhanced my expertise
            in frontend development.
          </p>
        </div>
      </div>

      <div className="develop">
        <div className="container mt-5 pt-5 pb-5">
          <h3 className="mb-4 head">What I'm Doing</h3>
          <p className="textpara pb-3">
            I love what I do. I take great pride in what I do.
          </p>

          <div className="row g-4 mb-5">
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-12">
              <div
                className="cardContent"
                data-aos="zoom-in"
                data-aos-delay="500"
                data-aos-duration="3000"
              >
                <img src={web} alt="" className="img-fluid proImg mb-3" />
                <h5 className="pb-2">Web Design</h5>
                <p>
                  I have experience in web design, specializing in creating
                  visually appealing and user-friendly websites. My skills
                  include HTML, CSS, JavaScript, and responsive design
                  principles.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12  col-12">
              <div
                className="cardContent"
                data-aos="zoom-in"
                data-aos-delay="500"
                data-aos-duration="3000"
              >
                <img
                  src={development}
                  alt=""
                  className="img-fluid proImg mb-3"
                />
                <h5 className="pb-2">Development</h5>
                <p>
                  My expertise lies in utilizing advanced frameworks such as
                  React and Redux to create responsive and interactive web
                  applications. I ensure seamless user experiences and robust
                  performance.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-12">
              <div
                className="cardContent"
                data-aos="zoom-in"
                data-aos-delay="500"
                data-aos-duration="3000"
              >
                <img src={market} alt="" className="img-fluid proImg mb-3" />
                <h5 className="pb-2">Marketing</h5>
                <p>
                  Presence with my proficiency in cutting-edge frameworks,
                  crafting captivating and responsive web experiences that
                  resonate with your audience and drive meaningful engagement.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-12">
              <div
                className="cardContent"
                data-aos="zoom-in"
                data-aos-duration="3000"
                data-aos-delay="500"
              >
                <img src={start} alt="" className="img-fluid proImg mb-3" />
                <h5 className="pb-2">Startegy</h5>
                <p>
                  Leverage my proficiency in cutting-edge frameworks to craft
                  captivating and responsive web experiences. My strategic
                  approach ensures your digital presence resonates with your
                  drives meaningful engagement.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12  col-12">
              <div
                className="cardContent"
                data-aos="zoom-in"
                data-aos-duration="3000"
                data-aos-delay="500"
              >
                <img src={support} alt="" className="img-fluid proImg mb-3" />
                <h5 className="pb-2">Support</h5>
                <p>
                  My expertise lies in supporting advanced frameworks like React
                  and Redux to develop responsive and interactive web
                  applications. I ensure seamless user experiences and robust
                  performance by providing comprehensive development.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-12">
              <div
                className="cardContent"
                data-aos="zoom-in"
                data-aos-duration="3000"
                data-aos-delay="500"
              >
                <img
                  src={experience}
                  alt=""
                  className="img-fluid proImg mb-3"
                />
                <h5 className="pb-2">Experience</h5>
                <p>
                  With my experience as a frontend developer, I utilize
                  cutting-edge frameworks to create captivating and responsive
                  web experiences. My projects resonate with audiences and drive
                  meaningful engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <h3 className="pb-4">What Makes Me Unique ?</h3>
          <p className="fs-5">
            Beyond my technical skills, my defining trait is my dedication to
            delivering high-quality solutions. I have a keen eye for detail, a
            passion for problem-solving, and an unwavering commitment to staying
            updated with the latest industry trends.
          </p>
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <h3>Personal Growth and Self-Improvement</h3>
        <div className="row mt-5">
          <div className="col-xxl-6 col-xl-6 col-lg-6  col-md-12 col-sm-12" >
            <div className="cardDispaly"  data-aos="fade-up"
            data-aos-duration="1500">
              <h5 className="pb-2 pt-2">
                Learning from Failures and Iterations
              </h5>
              <p>
                In the ever-evolving tech landscape, I maintain a mindset of
                continuous learning. Every project presents a chance to gain new
                skills and enhance current ones, ensuring that my work stays at
                the forefront of innovation.
              </p>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6  col-md-12 col-sm-12">
            <div className="cardDispaly"  data-aos="fade-up"
            data-aos-duration="1500">
              <h5 className="pb-2 pt-2">
                User-Centered Design and Development
              </h5>
              <p>
                Focuses on strategies and practices aimed at improving and
                optimizing user experience in design and development processes,
                ensuring that solutions are intuitive, efficient, and meet user
                expectations effectively.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-xxl-6 col-xl-6 col-lg-6  col-md-12 col-sm-12">
            <div className="cardDispaly"  data-aos="fade-up"
            data-aos-duration="2500">
              <h5 className="pb-2 pt-2">
                Innovative Problem-Solving Approaches
              </h5>
              <p>
                Encompasses the strategies and approaches used to address
                challenges and obstacles in a way that fosters innovation and
                creativity, emphasizing the importance of viewing problems as
                opportunities for growth and improvement.
              </p>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6  col-md-12 col-sm-12">
            <div className="cardDispaly"  data-aos="fade-up"
            data-aos-duration="2500">
              <h5 className="pb-2 pt-2">Crafting Elegant and Efficient Code</h5>
              <p>
                This topic explores the pursuit of creating elegant and
                efficient code through effective practices and methodologies. It
                emphasizes the importance of readability, maintainability, and
                collaboration in achieving high-quality software solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-xxl-6 col-xl-6 col-lg-6  col-md-12 col-sm-12">
            <div className="cardDispaly"  data-aos="fade-up"
            data-aos-duration="3000">
              <h5 className="pb-2 pt-2">Adaptation Strategies for Success</h5>
              <p>
                In the ever-changing landscape of technology, adaptability is
                key. I approach new challenges with a flexible mindset,
                welcoming change as a pathway to innovation and improvement.
              </p>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6  col-md-12 col-sm-12">
            <div className="cardDispaly"  data-aos="fade-up"
            data-aos-duration="3000">
              <h5 className="pb-2 pt-2">
                Ensuring Excellence in Software Solutions
              </h5>
              <p>
                To maintaining high standards of quality in developing software
                solutions. It encompasses aspects such as performance,
                usability, reliability, and exceeding expectations in delivering
                superior products or services.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default About;
