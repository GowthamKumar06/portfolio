import React from "react";

// StyleSheet
import "../style/Home.scss";

//Image
import Developer from "../images/Test-03.png";

// Icons

import { FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { BsMouse } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div id="home-page">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="main-title">
                <div className="name">
                  <h1>
                    Hello <br />
                    I'm <br />
                    Gowtham
                  </h1>
                </div>
                <div className="desigination">
                  <h1>
                    <span>W</span>
                    <span>e</span>
                    <span>b</span>
                    <br />
                    <span>D</span>
                    <span>e</span>
                    <span>v</span>
                    <span>e</span>
                    <span>l</span>
                    <span>o</span>
                    <span>p</span>
                    <span>e</span>
                    <span>r</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="developer-image">
                <img src={Developer} alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
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
            <div className="col-4">
              <Link className="know-more-btn" to="/about">
                <span>
                  <BsMouse />
                </span>
                <h6>Know More</h6>
              </Link>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}
