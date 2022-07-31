import React from "react";
import { Link } from "react-router-dom";

import "../style/About.scss";

import { BsArrowUpCircle } from "react-icons/bs";

export default function About() {
  return (
    <>
      <div id="about-page">
        <Link className="go-back" to="/">
          <h6>Go Back</h6>
          <span>
            <BsArrowUpCircle />
          </span>
        </Link>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="description-box">
                <p>
                  Hi, I'm Gowtham Kumar Thangaraj, a Web Developer developer
                  from India, currently working at
                  <a href="byzerotechnologies.com"> Byzero Technologies</a> ,
                  Erode as a Junior Web Developer.
                </p>
              </div>
              <div className="education-box">
                <div className="title">
                  <h3>Education 🎓</h3>
                </div>
                <div className="block">
                  <h6 className="duration">2017 - 2022</h6>
                  <h6 className="institution">
                    K.S.Rangasamy College of Arts and Sciencr, Tiruchengode
                  </h6>
                  <h6 className="type">B.sc,.(Computer Science)</h6>
                  <h6 className="score">60%</h6>
                </div>
                <div className="block">
                  <h6 className="duration">2016 - 2017</h6>
                  <h6 className="institution">
                    Sindhu Matric Hr. Sec. School, Dharapuram
                  </h6>
                  <h6 className="type">H.S.L.C</h6>
                  <h6 className="score">60%</h6>
                </div>
                <div className="block">
                  <h6 className="duration">2014 - 2015</h6>
                  <h6 className="institution">
                    Sindhu Matric Hr. Sec. School, Dharapuram
                  </h6>
                  <h6 className="type">S.S.L.C</h6>
                  <h6 className="score">83%</h6>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="tech-knowledge-box">
                <div className="title">
                  <h3>Skill's 😜</h3>
                </div>
                <ul>
                  <li>
                    Working On
                    <ul>
                      <li>React Js</li>
                      <li>WordPress</li>
                      <li>Boot Strap</li>
                      <li>Scss</li>
                    </ul>
                  </li>
                  <li>
                    Knowledge In
                    <ul>
                      <li>Node Js</li>
                      <li>Mango DB</li>
                      <li>Git Hub</li>
                    </ul>
                  </li>
                  <li>
                    Intrested In
                    <ul>
                      <li>MERN</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="work-experiance">
                <div className="title">
                  <h3>Experiance ⚒️</h3>
                </div>
                <div className="box">
                  <h6 className="company">Byzero Technologies, Erode</h6>
                  <h6 className="role">Junior Web Developer</h6>
                  <h6 className="duration">Dec 2021 - Present</h6>
                </div>
                <div className="box">
                  <h6 className="company">Branding Beez, Coimbatore</h6>
                  <h6 className="role">Web Developer (Intern)</h6>
                  <h6 className="duration">Feb 2021 - May 2021</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
