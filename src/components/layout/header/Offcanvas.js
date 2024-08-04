import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./meanmenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../assets/images/logo.png";

const Offcanvas = ({ isOpen, onClose }) => {
  return (
    <div
      className={`offcanvas offcanvas-end ${isOpen ? "open" : ""}`}
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">
          <Link exact to="/" className="offcanvas_logo">
            <img src={logo} alt="" />
          </Link>
        </h5>
        <button
          type="button"
          class="btn-close btn-close-white"
          onClick={onClose}
          data-bs-dismiss="offcanvas"
          aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul className="offcanvas_list">
          <li>
            <Link exact to="/" className="offcanvas_link">
              Testimonial
            </Link>
          </li>
          <li>
            <Link exact to="/News" className="offcanvas_link">
              News
            </Link>
          </li>
          <li>
            <Link exact to="/" className="offcanvas_link">
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <div className="offcanvas_footer">
        <div class="social_icon">
          <ul>
            <li>
              <a href="#">
                <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
              </a>
            </li>

            <li>
              <a href="#">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon="fa-brands fa-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Offcanvas;
