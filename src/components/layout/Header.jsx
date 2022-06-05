import React from "react";
import { NavLink } from "react-router-dom";

// Style
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  margin: 0 10rem;
  align-items: center;
  justify-content: space-between;
  height: 10rem;
  .logo {
    a {
      font-size: 40px;
      display: flex;
      flex-direction: column;
      text-decoration: none;
      color: var(--dark);
      font-family: var(--font-1);
      font-weight: var(--bold);
      span {
        &:nth-child(1) {
          letter-spacing: 6px;
          color: var(--green);
        }
      }
    }
  }
  .nav-link {
    ul {
      display: flex;
      align-items: center;
      justify-content: space-around;
      list-style: none;
      gap: 40px;
      li {
        a {
          text-transform: uppercase;
          font-weight: var(--semi-bold);
          letter-spacing: 2px;
          color: var(--dark);
          text-decoration: none;
          font-family: var(--font-2);
        }
      }
    }
  }
`;

export default function Header() {
  return (
    <>
      <StyledHeader>
        <div className="logo">
          <NavLink exact to="/">
            <span>PORT</span>
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
      </StyledHeader>
    </>
  );
}
