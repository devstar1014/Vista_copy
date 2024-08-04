import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./meanmenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../assets/images/logo.png";

const MobileOffcanvas = ({ isOpen, onClose }) => {
  const [openSubmenus, setOpenSubmenus] = useState({});
  const navigate = useNavigate();

  const toggleSubmenu = (index) => {
    setOpenSubmenus((prevOpenSubmenus) => ({
      ...prevOpenSubmenus,
      [index]: !prevOpenSubmenus[index],
    }));
  };

  const handleMegaMenuClick = (path, sectionId) => {
    navigate(path, { state: { sectionId } });
  };

  return (
    <div
      className={`offcanvas offcanvas-start ${isOpen ? "open" : ""}`}
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
              Home
            </Link>
          </li>
          <li>
            <Link exact to="/About" className="offcanvas_link">
              About
            </Link>
          </li>
          <li>
            <Link className="offcanvas_link">Services</Link>
            <button className="toggle-button" onClick={() => toggleSubmenu(1)}>
              {openSubmenus[1] ? "-" : "+"}
            </button>
            <ul className={`submenu ${openSubmenus[1] ? "open" : ""}`}>
              <li className="border-0">
                <Link
                  exact
                  to="/DigitalEngineeringServiceList"
                  className="offcanvas_link">
                  Digital Engineering
                </Link>
                <button
                  className="toggle-button"
                  onClick={() => toggleSubmenu(2)}>
                  {openSubmenus[2] ? "-" : "+"}
                </button>
                <ul className={`submenu ${openSubmenus[2] ? "open" : ""}`}>
                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/DigitalEngineeringService",
                          "section1"
                        )
                      }
                      className="offcanvas_link">
                      Advanced FEA/CFD Simulation
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/DigitalEngineeringService",
                          "section2"
                        )
                      }
                      className="offcanvas_link">
                      Manufacturing Process Simulation
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/DigitalEngineeringService",
                          "section3"
                        )
                      }
                      className="offcanvas_link">
                      Infuse AI/ML into CAD/CAE Automation
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/DigitalEngineeringService",
                          "section4"
                        )
                      }
                      className="offcanvas_link">
                      Structural Engineering PE Stamping
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/DigitalEngineeringService",
                          "section5"
                        )
                      }
                      className="offcanvas_link">
                      Mechanical PE Stamping
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/DigitalEngineeringService",
                          "section6"
                        )
                      }
                      className="offcanvas_link">
                      Seismic PE stamping
                    </a>
                  </li>

                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/DigitalEngineeringService",
                          "section7"
                        )
                      }
                      className="offcanvas_link">
                      Product Design Engineering
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/DigitalEngineeringService",
                          "section8"
                        )
                      }
                      className="offcanvas_link">
                      Product Lifecyle Management
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/DigitalEngineeringService",
                          "section9"
                        )
                      }
                      className="offcanvas_link">
                      System Design and Engineering
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/DigitalEngineeringService",
                          "section10"
                        )
                      }
                      className="offcanvas_link">
                      CAD Migration Services
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/DigitalEngineeringService",
                          "section11"
                        )
                      }
                      className="offcanvas_link">
                      Manufacturing Engineering
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/DigitalEngineeringService",
                          "section12"
                        )
                      }
                      className="offcanvas_link">
                      Digital Transformation
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/DigitalEngineeringService",
                          "section13"
                        )
                      }
                      className="offcanvas_link">
                      Robotic Process Automation (RPA)
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/DigitalEngineeringService",
                          "section14"
                        )
                      }
                      className="offcanvas_link">
                      Augmented Reality and Virtual Reality
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/DigitalEngineeringService",
                          "section15"
                        )
                      }
                      className="offcanvas_link">
                      Cybersecurity
                    </a>
                  </li>
                </ul>
              </li>
              <li className="border-0">
                <Link
                  exact
                  to="/AIMLComputerVisionList"
                  className="offcanvas_link">
                  Ai/ml & Computer Vision
                </Link>
                <button
                  className="toggle-button"
                  onClick={() => toggleSubmenu(3)}>
                  {openSubmenus[3] ? "-" : "+"}
                </button>
                <ul className={`submenu ${openSubmenus[3] ? "open" : ""}`}>
                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/AIMLComputerVisionDetail",
                          "section1"
                        )
                      }
                      className="offcanvas_link">
                      Data Analytics and Machine Learning
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/AIMLComputerVisionDetail",
                          "section2"
                        )
                      }
                      className="offcanvas_link">
                      Predictive Analytics
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/AIMLComputerVisionDetail",
                          "section3"
                        )
                      }
                      className="offcanvas_link">
                      Big Data Solutions
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/AIMLComputerVisionDetail",
                          "section4"
                        )
                      }
                      className="offcanvas_link">
                      Data Preparation and Management
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/AIMLComputerVisionDetail",
                          "section5"
                        )
                      }
                      className="offcanvas_link">
                      NLP
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/AIMLComputerVisionDetail",
                          "section6"
                        )
                      }
                      className="offcanvas_link">
                      Computer Vision
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/AIMLComputerVisionDetail",
                          "section7"
                        )
                      }
                      className="offcanvas_link">
                      Automated Inspection
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/AIMLComputerVisionDetail",
                          "section8"
                        )
                      }
                      className="offcanvas_link">
                      Machine Vision
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/AIMLComputerVisionDetail",
                          "section9"
                        )
                      }
                      className="offcanvas_link">
                      Smart Camera Vision System
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/AIMLComputerVisionDetail",
                          "section10"
                        )
                      }
                      className="offcanvas_link">
                      PC Based Vision System
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/AIMLComputerVisionDetail",
                          "section11"
                        )
                      }
                      className="offcanvas_link">
                      Vision S/w Development
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/AIMLComputerVisionDetail",
                          "section12"
                        )
                      }
                      className="offcanvas_link">
                      Lighting and Optics Design
                    </a>
                  </li>
                </ul>
              </li>
              <li className="border-0">
                <Link exact to="/AIDataServicesList" className="offcanvas_link">
                  Ai Data Services
                </Link>
                <button
                  className="toggle-button"
                  onClick={() => toggleSubmenu(4)}>
                  {openSubmenus[4] ? "-" : "+"}
                </button>
                <ul className={`submenu ${openSubmenus[4] ? "open" : ""}`}>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/AIDataServicesList",
                          "serviceTab1"
                        )
                      }
                      className="offcanvas_link">
                      ADAS Data Annotation & Labeling
                    </a>
                  </li>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/AIDataServicesList",
                          "serviceTab2"
                        )
                      }
                      className="offcanvas_link">
                      Data Collection
                    </a>
                  </li>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/AIDataServicesList",
                          "serviceTab3"
                        )
                      }
                      className="offcanvas_link">
                      Data Anonymization
                    </a>
                  </li>
                </ul>
              </li>
              <li className="border-0">
                <Link exact to="/CloudServiceList" className="offcanvas_link">
                  Cloud Services
                </Link>
                <button
                  className="toggle-button"
                  onClick={() => toggleSubmenu(5)}>
                  {openSubmenus[5] ? "-" : "+"}
                </button>
                <ul className={`submenu ${openSubmenus[5] ? "open" : ""}`}>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick("/CloudServiceDetail", "section1")
                      }
                      className="offcanvas_link">
                      Platform as a Service (PaaS)
                    </a>
                  </li>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick("/CloudServiceDetail", "section2")
                      }
                      className="offcanvas_link">
                      Software as a Service (SaaS)
                    </a>
                  </li>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick("/CloudServiceDetail", "section3")
                      }
                      className="offcanvas_link">
                      Cloud Storage and Content Delivery
                    </a>
                  </li>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick("/CloudServiceDetail", "section4")
                      }
                      className="offcanvas_link">
                      Data Analytics
                    </a>
                  </li>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick("/CloudServiceDetail", "section5")
                      }
                      className="offcanvas_link">
                      Security and Identity Management
                    </a>
                  </li>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick("/CloudServiceDetail", "section6")
                      }
                      className="offcanvas_link">
                      Cloud Migration and Management
                    </a>
                  </li>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick("/CloudServiceDetail", "section7")
                      }
                      className="offcanvas_link">
                      Cloud Contact Center
                    </a>
                  </li>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick("/CloudServiceDetail", "section8")
                      }
                      className="offcanvas_link">
                      UX/UI Design
                    </a>
                  </li>
                </ul>
              </li>
              <li className="border-0">
                <Link exact to="/SapServiceList" className="offcanvas_link">
                  SAP Services
                </Link>
                <button
                  className="toggle-button"
                  onClick={() => toggleSubmenu(6)}>
                  {openSubmenus[6] ? "-" : "+"}
                </button>
                <ul className={`submenu ${openSubmenus[6] ? "open" : ""}`}>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick("/SapServiceDetail", "section1")
                      }
                      className="offcanvas_link">
                      SAP S/4HANA
                    </a>
                  </li>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick("/SapServiceDetail", "section2")
                      }
                      className="offcanvas_link">
                      SAP Business Technology Platform (BTP)
                    </a>
                  </li>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick("/SapServiceDetail", "section3")
                      }
                      className="offcanvas_link">
                      SAP Ariba
                    </a>
                  </li>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick("/SapServiceDetail", "section4")
                      }
                      className="offcanvas_link">
                      SAP Digital Supply Chain
                    </a>
                  </li>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick("/SapServiceDetail", "section5")
                      }
                      className="offcanvas_link">
                      SAP Financial Services
                    </a>
                  </li>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick("/SapServiceDetail", "section6")
                      }
                      className="offcanvas_link">
                      SAP Customer Experience (CX)
                    </a>
                  </li>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick("/SapServiceDetail", "section7")
                      }
                      className="offcanvas_link">
                      SAP Cloud Platform
                    </a>
                  </li>
                </ul>
              </li>
              <li className="border-0">
                <Link
                  exact
                  to="/ElectronicsEmbededList"
                  className="offcanvas_link">
                  Electronics & Embedded Design
                </Link>
                <button
                  className="toggle-button"
                  onClick={() => toggleSubmenu(7)}>
                  {openSubmenus[7] ? "-" : "+"}
                </button>
                <ul className={`submenu ${openSubmenus[7] ? "open" : ""}`}>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/ElectronicsEmbededDetail",
                          "section1"
                        )
                      }
                      className="offcanvas_link">
                      Firmware Design
                    </a>
                  </li>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/ElectronicsEmbededDetail",
                          "section2"
                        )
                      }
                      className="offcanvas_link">
                      Embedded Software Development
                    </a>
                  </li>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/ElectronicsEmbededDetail",
                          "section3"
                        )
                      }
                      className="offcanvas_link">
                      System Integration and Testing
                    </a>
                  </li>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/ElectronicsEmbededDetail",
                          "section4"
                        )
                      }
                      className="offcanvas_link">
                      HMI design
                    </a>
                  </li>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/ElectronicsEmbededDetail",
                          "section5"
                        )
                      }
                      className="offcanvas_link">
                      PCB Design
                    </a>
                  </li>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/ElectronicsEmbededDetail",
                          "section6"
                        )
                      }
                      className="offcanvas_link">
                      Antena Design
                    </a>
                  </li>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/ElectronicsEmbededDetail",
                          "section7"
                        )
                      }
                      className="offcanvas_link">
                      RF/Wireless Design
                    </a>
                  </li>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/ElectronicsEmbededDetail",
                          "section8"
                        )
                      }
                      className="offcanvas_link">
                      System Modeling
                    </a>
                  </li>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/ElectronicsEmbededDetail",
                          "section9"
                        )
                      }
                      className="offcanvas_link">
                      System Integration
                    </a>
                  </li>
                  <li class="mega-item">
                    <a
                      onClick={() =>
                        handleMegaMenuClick(
                          "/ElectronicsEmbededDetail",
                          "section10"
                        )
                      }
                      className="offcanvas_link">
                      Cable Harness
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link exact to="/Industry" className="offcanvas_link">
              Industry
            </Link>
          </li>
          <li>
            <Link exact to="/Insights" className="offcanvas_link">
              Insights
            </Link>
          </li>
          <li>
            <Link exact to="/Careers" className="offcanvas_link">
              Careers
            </Link>
          </li>
          <li>
            <Link exact to="/" className="offcanvas_link">
              Testimonial
            </Link>
          </li>
          <li>
            <Link exact to="/NewsList" className="offcanvas_link">
              News
            </Link>
          </li>
          <li>
            <Link exact to="/" className="offcanvas_link">
              Blog
            </Link>
          </li>
          <li>
            <Link exact to="/Contact" className="offcanvas_link">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileOffcanvas;
