import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import contact from "../image/contact.jpg";
import ddd from "../image/ddd.png"
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      if (!name || !email || !phone || !message) {
        throw new Error("Please fill out all required fields.");
      }

      const data = {
        records: [
          {
            fields: {
              Name: name,
              Email: email,
              Number: phone,
              Message: message,
            },
          },
        ],
      };

      console.log("Data:", data);

      const response = await axios.post(
        "https://api.airtable.com/v0/appqxYFBJqkWqhLPY/tblCD84axZK00ZXsH",
        data,
        {
          headers: {
            Authorization:
              "Bearer patdGJyCQAhmYxYTB.4358c63b7a8e4df2e45b18cc9dd0b62c575331ba07660bf2444b108fe8ff10c8",
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response);

      if (response.status === 200) {
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        }, 2000);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="contact">Contact</h1>
      <div className="row mt-5">
        <div
          className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 formdetails "
          data-aos="zoom-in"
          data-aos-offset="500"
          data-aos-duration="600"
          data-aos-delay="500"
        >
          <form className="form" onSubmit={submitForm}>
            <h3 className="form-title text-center">CONTACT ME</h3>

            <div className="input-container">
              <label htmlFor="name">Name</label>
              <br />
              <input
                id="name"
                name="name"
                placeholder="Enter Name"
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <br />
              <input
                id="email"
                name="email"
                placeholder="Enter email"
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-container mb-3">
              <label htmlFor="phone">Phone Number</label>
              <br />
              <input
                id="phone"
                name="phone"
                placeholder="Enter number"
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="input-container mb-3">
              <label htmlFor="message">Message</label>
              <br />
              <textarea
                id="message"
                name="message"
                placeholder="Enter message"
                rows="6"
                cols="50"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          {showSuccess && (
            <div className="success-message">Form submitted successfully!</div>
          )}
        </div>
        <div
          className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mt-5 text-center"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="500"
          
        >
          {/* <h3 className="pb-2">Let's Connect</h3>
          <p><span className="fw-bold">Email :</span>  vimalkarthick999@gmail.com</p>
          <p><span className="fw-bold">Phone :</span> +91 6383483213</p> */}
          <img src={ddd} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};
