import React from "react";

import "./contact.css";
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import rosa from "../../img/pig-workout.gif";

const contact = () => {
  return (
    <div className="cover">
      <Header />
      <div className="contactContain">
        <div className="row">
          <div className="col l-5 " style={{ margin: "auto" }}>
            <div className="well shadow up-hover color-hover ">
              <img src={rosa} alt="Project IMG" className="ava" />
              <h2>Hard worker</h2>
            </div>
          </div>
          <div className="col l-7">
            {" "}
            <h1 style={{ color: "#c15b22" }}>Get in touch</h1>
            <h4 style={{ color: "#050801", marginBottom: "30px" }}>
              Don't hesitate if you have any opportunities or advice for me.{" "}
            </h4>
            <form
              className="contactForm"
              action="https://formsubmit.co/d631cd29843c2d5e7f48c6fd18cd00af"
              method="POST"
            >
              <input
                type="text"
                name="Name"
                placeholder="Full Name"
                required
              ></input>
              <input
                type="email"
                name="Email"
                placeholder="Email"
                required
              ></input>
              <textarea
                name="Message"
                placeholder="Message"
                required
              ></textarea>
              <div className="submitBtn">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default contact;
