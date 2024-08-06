import React from "react";
import vistaWhiteLogo from "../../../assets/images/vista-white-logo.png";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleMegaMenuClick = (path, sectionId) => {
    navigate(path, { state: { sectionId } });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer_top">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-4 col-md-6">
                <Link exact to="/" onClick={() => window.scrollTo(0, 0)}>
                  <img src={vistaWhiteLogo} alt="" className="footer_logo" />
                </Link>
                <div className="social_icon">
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
              <div className="col-lg-4 col-md-6">
                <div className="footer_center">
                  <h5 className="footer_title">Get the latest information</h5>
                  <div class="input-group mt-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <span class="input-group-text" id="basic-addon2">
                      <i class="bi bi-send-fill"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <h5 className="footer_title">Our Location</h5>
                <div class="hstack gap-2">
                  <div class="footer_text">USA</div>
                  <div class="vr"></div>
                  <div class="footer_text">Germany</div>
                  <div class="vr"></div>
                  <div class="footer_text">India </div>
                  <div class="vr"></div>
                  <div class="footer_text"> AUS</div>
                  <div class="vr"></div>
                  <div class="footer_text">UK </div>
                  <div class="vr"></div>
                  <div class="footer_text">Norway </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_middle">
          <div className="container">
            <div className="row row-cols-1 row-cols-lg-3 row-cols-xl-4 row-cols-md-2 gy-4">
              <div className="col">
                <h5 className="footer_title">Useful Links</h5>
                <ul className="footer_list">
                  <li>
                    <Link
                      exact
                      to="/About"
                      className="footer_link"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      exact
                      to="/Careers"
                      className="footer_link"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      exact
                      to="/News"
                      className="footer_link"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      News
                    </Link>
                  </li>
                  <li>
                    <Link
                      exact
                      to="/"
                      className="footer_link"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Testimonial
                    </Link>
                  </li>
                  <li>
                    <Link
                      exact
                      to="/"
                      className="footer_link"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      exact
                      to="/Contact"
                      className="footer_link"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col">
                <h5 className="footer_title">Services</h5>
                <ul className="footer_list">
                  <li>
                    <Link
                      to="/DigitalEngineeringServiceList"
                      className="footer_link"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Digital Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/AIDataServicesList"
                      className="footer_link"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      AI Data Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/AIMLComputerVisionList"
                      className="footer_link"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      AI/ML & Computer Vision
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/ElectronicsEmbededList"
                      className="footer_link"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Electronics & Embedded Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/CloudServiceList"
                      className="footer_link"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Cloud Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/SapServiceList"
                      className="footer_link"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      SAP Services
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h5 className="footer_title">Industry</h5>
                <ul className="footer_list">
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={() =>
                        handleMegaMenuClick("/Industry", "section1")
                      }
                      className="footer_link"
                    >
                      Aerospace And Defense
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={() =>
                        handleMegaMenuClick("/Industry", "section2")
                      }
                      className="footer_link"
                    >
                      Automotive
                    </a>
                  </li>

                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={() =>
                        handleMegaMenuClick("/Industry", "section4")
                      }
                      className="footer_link"
                    >
                      Semiconductor
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={() =>
                        handleMegaMenuClick("/Industry", "section5")
                      }
                      className="footer_link"
                    >
                      Medical Devices & Healthcare
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={() =>
                        handleMegaMenuClick("/Industry", "section6")
                      }
                      className="footer_link"
                    >
                      Oil & Gas
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={() =>
                        handleMegaMenuClick("/Industry", "section7")
                      }
                      className="footer_link"
                    >
                      Paper & Pulp
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={() =>
                        handleMegaMenuClick("/Industry", "section9")
                      }
                      className="footer_link"
                    >
                      Industrial and Heavy Equipment
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={() =>
                        handleMegaMenuClick("/Industry", "section3")
                      }
                      className="footer_link"
                    >
                      Rail Transportation
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div className="col">
                <h5 className="footer_title">Insights</h5>
                <ul className="footer_list">
                  <li>
                    <a href="#" className="footer_link">
                      Seismic Anchor Design
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer_link">
                      Structural Analysis For Seismic Loads
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer_link">
                      Corporate Social Responsibility
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer_link">
                      Sustainability
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer_link">
                      Workplace
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer_link">
                      Society
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer_link">
                      Financials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer_link">
                      News
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer_link">
                      Events
                    </a>
                  </li>
                </ul>
              </div> */}
              <div className="col">
                <h5 className="footer_title">Contact Us</h5>
                <ul className="footer_address_list">
                  <li className="ps-2">
                    <a href="#" className="contact_link">
                      +1 (866) 898-9971
                      <br />
                      +1 (408) 625-7226
                      <br />
                      +91 95858 88855
                    </a>
                  </li>
                  <li className="ps-2">
                    <a href="#" className="mail_link">
                      mercurys1030@gmail.com
                      <br />
                      ru.evil.ca3233@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer_link">
                      Vendor Enrolment Form
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer_link">
                      AI Data Services Input Form
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer_link">
                      Structural PE Input Form
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_bottom">
              <div className="row gy-4">
                <div className="col-lg-6 col-md-12">
                  <p className="copyright_text text-center text-lg-start">
                    Copyright © 2024 VISTA Engineering Solutions Inc.
                  </p>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div class="hstack gap-2 justify-content-center justify-content-md-end">
                    <div class="footer_text">Terms of use</div>
                    <div class="vr"></div>
                    <div class="footer_text"> Privacy</div>
                    <div class="vr"></div>
                    <div class="footer_text"> Policy </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
