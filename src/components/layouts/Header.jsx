import React from "react";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="logo">
                <h1>Portfolio</h1>
              </div>
            </div>
            <div className="col-4">
              <div className="nav-bar">
                <ul>
                  <li>home</li>
                  <li>about</li>
                  <li>skills</li>
                  <li>contact</li>
                </ul>
              </div>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}
