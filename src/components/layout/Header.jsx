import React from "react";
import { NavLink } from "react-router-dom";

// Style
import "../../style/Layout.scss";

export default function Header() {
  return (
    <>
      <div className="header">
        <nav>
          <div className="logo">
            <NavLink exact to="/">
              <span>PORT</span>
              <br />
              <span>FOLIO</span>
            </NavLink>
          </div>
          <div className="nav-link">
            <ul>
              <li>
                <NavLink exact to="/projects">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
