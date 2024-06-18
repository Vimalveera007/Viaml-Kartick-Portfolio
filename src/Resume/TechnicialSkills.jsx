import React, { useEffect } from "react";
import "./Resume.css";
import html from "../image/html-5.png";
import css from "../image/css.png";
import js from "../image/js.png";
import react from "../image/physics.png";
import bootstarp from "../image/bootstrap.png";
import tailwind from "../image/tailwind css.jpg";
import firebase from "../image/server.png";
import github from "../image/github.png";
import arrow from "../image/arrows.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AOS from "aos";
import "aos/dist/aos.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};

const TechnicialSKills = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  const [htmlOpen, setHtmlOpen] = React.useState(false);
  const [cssOpen, setCssOpen] = React.useState(false);
  const [jsOpen, setJsOpen] = React.useState(false);
  const [reactOpen, setreactOpen] = React.useState(false);
  const [bootstrapOpen, setBootstrapOpen] = React.useState(false);
  const [tailwindOpen, setTailwindOpen] = React.useState(false);
  const [firebaseOpen, setFirebaseOpen] = React.useState(false);
  const [githubOpen, setGithubOpen] = React.useState(false);
  const handleHtmlOpen = () => setHtmlOpen(true);
  const handleHtmlClose = () => setHtmlOpen(false);

  const handleCssOpen = () => setCssOpen(true);
  const handleCssClose = () => setCssOpen(false);

  const handleJsOpen = () => setJsOpen(true);
  const handleJsClose = () => setJsOpen(false);

  const handleBootstrapOpen = () => setBootstrapOpen(true);
  const handleBootstrapClose = () => setBootstrapOpen(false);

  const handleTailwindOpen = () => setTailwindOpen(true);
  const handleTailwindClose = () => setTailwindOpen(false);

  const handleFirebaseOpen = () => setFirebaseOpen(true);
  const handleFirebaseClose = () => setFirebaseOpen(false);

  const handleGithubOpen = () => setGithubOpen(true);
  const handleGithubClose = () => setGithubOpen(false);

  const handleReactOpen = () => {
    setreactOpen(true);
  };
  const handleReactClose = () => {
    setreactOpen(false);
  };

  return (
    <div>
      <div className="container mt-5">
        <h1 className="skills">Skills</h1>
        <div className="row">
          <div className="col-lg-12 col-md-12 pt-5">
            <h3>Frontend Developer</h3>
            <ul className="pt-4 fs-4">
              <li>
                Passionate and detail-oriented front-end developer with
                expertise in HTML, CSS, and JavaScript. Dedicated to crafting
                seamless user interfaces.
              </li>
              <br />
              <li>
                Proficient in React.js for building dynamic and interactive
                client-side experiences. Focused on delivering responsive and
                user-friendly applications.
              </li>
              <br />
              <li>
                Committed to writing clean, maintainable code. Ensures
                high-quality development standards and best practices.
              </li>
              <br />
              <li>
                Skilled in innovative problem-solving and transforming concepts
                into engaging digital experiences. Adept at turning ideas into
                compelling web solutions.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <h1 className="text-center">
          Eager to dive into various technology stacks
        </h1>
        <div className="row g-5 mt-5">
          <div
            className="col-lg-6 col-md-12 tool d-flex flex-col justify-content-center aligns-items-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="html  d-flex aligns-items-center justify-content-center  gap-5">
              <img
                src={html}
                alt=""
                className="toolImg"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
              <p>
                Passionate about crafting elegant solutions that inspire
                impactful user experiences.
              </p>
              <img
                src={arrow}
                alt=""
                className="arrowImg"
                onClick={handleHtmlOpen}
              />
              {htmlOpen && <div className="backdrop"></div>}
              <Modal
                open={htmlOpen}
                onClose={handleHtmlClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title">
                    <img src={html} alt="" className="toolImg1" />
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <ul>
                      <li className="pb-2">
                        HTML usage forms the backbone of web development,
                        providing the structure and organization for content on
                        the internet.
                      </li>
                      <li className="pb-2">
                        With HTML usage, developers can create semantic markup,
                        ensuring accessibility.
                      </li>
                      <li className="pb-2">
                        HTML usage extends beyond static pages, as it's integral
                        to modern web applications.
                      </li>
                    </ul>
                  </Typography>
                </Box>
              </Modal>
            </div>
          </div>

          <div
            className="col-lg-6 col-md-12 tool d-flex  justify-content-center aligns-items-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="html  d-flex gap-5">
              <img
                src={css}
                alt=""
                className="toolImg"
                data-aos="zoom-in"
                data-aos-duration="3000"
              />
              <p>
                Transforming design concepts into interactive and responsive web
                experiences.
              </p>
              <img
                src={arrow}
                alt=""
                className="arrowImg"
                onClick={handleCssOpen}
              />
              {cssOpen && <div className="backdrop"></div>}
              <Modal
                open={cssOpen}
                onClose={handleCssClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title">
                    <img src={css} alt="" className="toolImg1" />
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <ul>
                      <li className="pb-2">
                        CSS styling enhances the visual appeal, responsiveness,
                        and consistency of web content.
                      </li>
                      <li className="pb-2">
                        It allows for the separation of content from
                        presentation, facilitating easier maintenance and
                        updates.
                      </li>
                      <li className="pb-2">
                        With CSS, developers can create intricate layouts and
                        design elements to meet specific project requirements.
                      </li>
                    </ul>
                  </Typography>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
        <div className="row g-5 mt-5">
          <div
            className="col-lg-6 col-md-12 tool d-flex  justify-content-center aligns-items-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="html  d-flex gap-5">
              <img
                src={js}
                alt=""
                className="toolImg"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
              <p>
                Mastering dynamic UI development, I specialize in crafting React
                components that elevate user experiences
              </p>
              <img
                src={arrow}
                alt=""
                className="arrowImg"
                onClick={handleJsOpen}
              />
              {jsOpen && <div className="backdrop"></div>}
              <Modal
                open={jsOpen}
                onClose={handleJsClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title">
                    <img src={js} alt="" className="toolImg1" />
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <ul>
                      <li className="pb-2">
                        JavaScript powers interactive and dynamic features,
                        enhancing user engagement and experience.
                      </li>
                      <li className="pb-2">
                        With JavaScript, developers can manipulate and interact
                        with HTML and CSS, enabling rich client-side
                        functionality.
                      </li>
                      <li className="pb-2">
                        JavaScript is versatile, extending its capabilities from
                        simple scripts to complex web applications and
                        server-side development.
                      </li>
                    </ul>
                  </Typography>
                </Box>
              </Modal>
            </div>
          </div>

          <div
            className="col-lg-6 col-md-12 d-flex  justify-content-center aligns-items-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="html  d-flex gap-5">
              <img
                src={react}
                alt=""
                className="toolImg"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
              <p>
                Developing passionate about crafting elegant solutions that
                inspire impactful user experiences.
              </p>
              <img
                src={arrow}
                alt=""
                className="arrowImg"
                onClick={handleReactOpen}
              />
              {reactOpen && <div className="backdrop"></div>}
              <Modal
                open={reactOpen}
                onClose={handleReactClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title">
                    <img src={react} alt="" className="toolImg1" />
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <ul>
                      <li className="pb-2">
                        Proficient in leveraging Bootstrap to build responsive
                        and mobile-first web applications.
                      </li>
                      <li className="pb-2">
                        Experienced in using Bootstrap's grid system and
                        components to create clean and modern layouts.
                      </li>
                      <li className="pb-2">
                        Skilled in customizing Bootstrap's styles to fit
                        specific project requirements.
                      </li>
                    </ul>
                  </Typography>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
        <div className="row g-5 mt-5">
          <div
            className="col-lg-6 col-md-12 d-flex  justify-content-center aligns-items-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="html  d-flex gap-5">
              <img
                src={bootstarp}
                alt=""
                className="toolImg"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
              <p>
                Leveraging the power of Bootstrap to create responsive and
                visually appealing web interfaces.
              </p>
              <img
                src={arrow}
                alt=""
                className="arrowImg"
                onClick={handleBootstrapOpen}
              />
              {bootstrapOpen && <div className="backdrop"></div>}
              <Modal
                open={bootstrapOpen}
                onClose={handleBootstrapClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title">
                    <img src={bootstarp} alt="" className="toolImg1" />
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <ul>
                      <li className="pb-2">
                        Proficient in utilizing React to develop scalable and
                        efficient web applications.
                      </li>
                      <li className="pb-2">
                        Experienced in crafting elegant and intuitive user
                        interfaces for enhanced user experiences.
                      </li>
                      <li className="pb-2">
                        Skilled in implementing React components to create
                        dynamic and interactive web solutions.
                      </li>
                    </ul>
                  </Typography>
                </Box>
              </Modal>
            </div>
          </div>

          <div
            className="col-lg-6 col-md-12 d-flex  justify-content-center aligns-items-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="html  d-flex gap-5">
              <img
                src={tailwind}
                alt=""
                className="toolImg"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
              <p>
                Optimizing development processes and enriching user interactions
                with intuitive design implementations.
              </p>
              <img
                src={arrow}
                alt=""
                className="arrowImg"
                onClick={handleTailwindOpen}
              />
              {tailwindOpen && <div className="backdrop"></div>}
              <Modal
                open={tailwindOpen}
                onClose={handleTailwindClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title">
                    <img src={react} alt="" className="toolImg1" />
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <ul>
                      <li className="pb-2">
                        Proficient in utilizing React to develop scalable and
                        efficient web applications.
                      </li>
                      <li className="pb-2">
                        Experienced in crafting elegant and intuitive user
                        interfaces for enhanced user experiences.
                      </li>
                      <li className="pb-2">
                        Skilled in implementing React components to create
                        dynamic and interactive web solutions.
                      </li>
                    </ul>
                  </Typography>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
        <div className="row g-5 mt-5">
          <div className="col-lg-6 col-md-12 d-flex  justify-content-center aligns-items-center">
            <div className="html  d-flex gap-5">
              <img
                src={firebase}
                alt=""
                className="toolImg"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
              <p>
                Mastering backend development, I specialize in leveraging
                Firebase to build robust and scalable applications.
              </p>
              <img
                src={arrow}
                alt=""
                className="arrowImg"
                onClick={handleFirebaseOpen}
              />
              {firebaseOpen && <div className="backdrop"></div>}
              <Modal
                open={firebaseOpen}
                onClose={handleFirebaseClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title">
                    <img src={firebase} alt="" className="toolImg1" />
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <ul>
                      <li className="pb-2">
                        Proficient in utilizing Firebase to develop scalable and
                        efficient backend solutions.
                      </li>
                      <li className="pb-2">
                        Experienced in integrating Firebase services for
                        seamless data management and real-time updates.
                      </li>
                      <li className="pb-2">
                        Skilled in leveraging Firebase to enhance application
                        performance and security.
                      </li>
                    </ul>
                  </Typography>
                </Box>
              </Modal>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 d-flex  justify-content-center aligns-items-center">
            <div className="html  d-flex gap-5">
              <img
                src={github}
                alt=""
                className="toolImg"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
              <p>
                Excelling in version control systems, I leverage GitHub to
                streamline collaborative development workflows and maintain
                project coherence.
              </p>
              <img
                src={arrow}
                alt=""
                className="arrowImg"
                onClick={handleGithubOpen}
              />
              {githubOpen && <div className="backdrop"></div>}
              <Modal
                open={githubOpen}
                onClose={handleGithubClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title">
                    <img src={react} alt="" className="toolImg1" />
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <ul>
                      <li className="pb-2">
                        Proficient in utilizing GitHub for version control.
                      </li>
                      <li className="pb-2">
                        Experienced in leveraging GitHub for collaboration.
                      </li>
                      <li className="pb-2">
                        Skilled in utilizing GitHub for project management in
                        development workflows.
                      </li>
                    </ul>
                  </Typography>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicialSKills;
