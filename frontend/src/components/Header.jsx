import React from "react";
import { Link } from "react-router-dom";
import { Container, Image, Nav } from "react-bootstrap";

import Logo from "../assets/logo.png";

const Header = () => {
  const menu = document.querySelector(".res-menu");
  var open = false;

  const menu_handler = () => {
    if (!open) {
      menu.style.maxHeight = "300px";
      menu.style.display = "block";
    } else {
      menu.style.maxHeight = "0px";
    }

    open = !open;
  };

  return (
    <header>
      <Container className="my-2">
        <div className="d-flex justify-content-between">
          <div>
            <i className="fas fa-street-view"></i> Lorem ipsum dolor sit amet.
          </div>
          <div className="my-auto">
            <Link to="#" className="mx-1">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link to="#" className="mx-1">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="#" className="mx-1">
              <i className="fab fa-reddit"></i>
            </Link>
            <Link to="#" className="mx-1">
              <i className="fab fa-youtube"></i>
            </Link>
            <Link to="#" className="mx-1">
              <i className="fab fa-twitter"></i>
            </Link>
          </div>
        </div>
      </Container>

      <Container className="my-2">
        <div className="logo-addvertise-1">
          <div>
            <Link to="/" className="d-flex" style={{ textDecoration: "none" }}>
              <Image src={Logo} alt="Logo" fluid />
              <span className="logo-text my-auto">Himel</span>
            </Link>
          </div>

          <div className="advertise-1">
            <Image src="https://via.placeholder.com/600x100" alt="" fluid />
          </div>
        </div>
      </Container>

      <Nav>
        <Container className="bg-default py-4 my-3">
          <button
            className="only-mobile mobile-menu btn-df"
            onClick={menu_handler}
          >
            <i className="fas fa-bars"></i> Menu
          </button>

          <ul className="m-0 p-0 res-menu">
            <li>
              <Link to="/">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fas fa-tag"></i> category{" "}
              </Link>
              <div>
                <ul>
                  <li>
                    <Link to="#">sdsd</Link>
                  </li>
                  <li>
                    <Link to="#">sdsd</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/post">
                <i className="fas fa-address-card"></i> about
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fas fa-phone-square-alt"></i> contact
              </Link>
            </li>
          </ul>
        </Container>
      </Nav>
    </header>
  );
};

export default Header;
