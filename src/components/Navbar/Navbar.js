import React from "react";
import "./Navbar.css";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <img src={logo} alt="Chegg" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  FREE SKILLS PROGRAMS
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  BROWSE
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Summer Internships
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Remote Internships
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      High School Internships
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Accounting Internships
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Engineering Internships
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Marketing Internships
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Paid Internships
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CAREER ADVISE
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      COVID Support
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Find Your Fit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Discover Options
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EMPLOYERS
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  SIGN IN
                </a>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <div className="searchbox">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Find Internships"
                  aria-label="Search"
                />
                <button className="search-button">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>

                      
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
