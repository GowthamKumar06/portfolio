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
            <div className="col-6">
              <div className="main-title">
                <div className="name">
                  <h1>
                    <span>H</span>
                    <span>e</span>
                    <span>l</span>
                    <span>l</span>
                    <span>o</span>
                  </h1>

                  <h1>
                    <span>I</span>
                    <span>'</span>
                    <span>m</span>
                  </h1>
                  <h1>
                    <span>G</span>
                    <span>o</span>
                    <span>w</span>
                    <span>t</span>
                    <span>h</span>
                    <span>a</span>
                    <span>m</span>
                  </h1>
                </div>
                <div className="desigination">
                  <h1>
                    Web Developer
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="developer-image">
                <img src={TestImg01} alt="" />
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
              <div className="know-more-btn">
                <span>
                  <BsMouse />
                </span>
                <h6>Know More</h6>
              </div>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}
