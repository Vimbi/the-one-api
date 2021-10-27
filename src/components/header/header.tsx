import React from "react";
import { NavLink } from "react-router-dom";
import './header.scss';

const Header = (): JSX.Element => (
  <header data-testid="test-header">
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="nav-link active"
              exact
              to="/">
                Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="nav-link active"
              to="/about">
                About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Header;