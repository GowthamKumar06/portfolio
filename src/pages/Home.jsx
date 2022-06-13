import React from "react";

// StyleSheet
import "../style/Home.scss";

//Image
import TestImg01 from "../images/Test-02.png";

// Icons

import { FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { BsMouse } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <div id="home-page">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="intro-title">
                <h1>Hello</h1>
                <h1>I'm</h1>
                <h1>Gowtham</h1>
              </div>
              <div className="role-title">
                <h1>
                  Front-End <br />
                  Developer
                </h1>
              </div>
            </div>
            <div className="col">
              <div className="developer-image">
                {/* <span></span> */}
                <img src={TestImg01} alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="social-media-icons">
                <a href="mailto:gowthamkumarkkp@gmail.com">
                  <h6>gowthamkumrkkp@gmail.com</h6>
                  <span>
                    <FaEnvelope />
                  </span>
                </a>
                <a href="https://github.com/GowthamKumar06">
                  <h6>github.com/GowthamKumar06</h6>
                  <span>
                    <FaGithub />
                  </span>
                </a>
                <a href="https://www.linkedin.com/in/gowtham-kumar-859514143/">
                  <h6>linkedin.com/in/gowtham-kumar-859514143</h6>
                  <span>
                    <FaLinkedinIn />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="know-more-btn">
            <span>
              <BsMouse />
            </span>
            <h6>Know More</h6>
          </div>
        </div>
      </div>
    </>
  );
}
