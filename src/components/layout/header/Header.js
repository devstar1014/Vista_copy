import React, { useEffect, useState } from "react";
import { TopHeader } from "./TopHeader";
import logo from "../../../assets/images/logo.png";
import { Link, useLocation, navigate, useNavigate } from "react-router-dom";
import Offcanvas from "./Offcanvas";
import MobileOffcanvas from "./MobileOffcanvas";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isSticky, setSticky] = useState(false);
  const [isDivActive, setIsDivActive] = useState(false);

  setTimeout(() => {
    setIsDivActive(false);
  }, 2000); // Adjust the time in milliseconds as needed

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isOffMobilecanvasOpen, setIsOffMobilecanvasOpen] = useState(false);

  const openMobileOffcanvas = () => {
    setIsOffMobilecanvasOpen(true);
  };

  const closeMobileOffcanvas = () => {
    setIsOffMobilecanvasOpen(false);
  };

  const openOffcanvas = () => {
    setIsOffcanvasOpen(true);
  };

  const closeOffcanvas = () => {
    setIsOffcanvasOpen(false);
  };
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const isServiceRouteActive = () => {
    return [
      "/DigitalEngineeringServiceList",
      "/DigitalEngineeringService",
      "/AIMLComputerVisionList",
      "/AIMLComputerVisionDetail",
      "/AIDataServicesList",
      "/DataAnnotationDetail",
      "/DataAnonymizationDetail",
      "/DataCollectionDetail",
      "/ElectronicsEmbededList",
      "/ElectronicsEmbededDetail",
      "/CloudServiceList",
      "/CloudServiceDetail",
      "/SapServiceList",
      "/SapServiceDetail",
    ].includes(location.pathname);
  };

  const handleMegaMenuClick = (path, sectionId) => {
    navigate(path, { state: { sectionId } });
    setIsDivActive(true);
  };

  return (
    <>
      <Offcanvas isOpen={isOffcanvasOpen} onClose={closeOffcanvas} />
      <TopHeader />
      <header className="main_header web-view">
        <nav class="navbar navbar-expand-lg ">
          <div class="container">
            <Link exact to="/" className="navbar-brand">
              <img src={logo} alt="" />
            </Link>
            <a class="navbar-brand" href="#"></a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link
                    exact
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                    className={isActive("/") ? "nav-link active" : "nav-link"}>
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    exact
                    to="/About"
                    onClick={() => window.scrollTo(0, 0)}
                    className={
                      isActive("/About") ? "nav-link active" : "nav-link"
                    }>
                    About Us
                  </Link>
                </li>
                <li class="nav-item dropdown mega-down">
                  <a
                    className={`nav-item ${
                      isServiceRouteActive()
                        ? "nav-link dropdown-toggle active"
                        : "nav-link dropdown-toggle "
                    }`}
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Services
                  </a>
                  <ul
                    className={`dropdown-menu mega-menu ${
                      isDivActive ? "active" : ""
                    }`}>
                    <div class="row row-cols-5">
                      <div class="col">
                        <h5 class="mega-title">
                          <Link
                            to="/DigitalEngineeringServiceList"
                            className={({ isActive }) =>
                              isActive ? "mega-link active" : "mega-link"
                            }
                            onClick={() => window.scrollTo(0, 0)}>
                            Digital Engineering
                          </Link>
                        </h5>
                        <ul class="mega-list">
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/DigitalEngineeringService",
                                  "section1"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Advanced FEA/CFD Simulation
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/DigitalEngineeringService",
                                  "section2"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Manufacturing Process Simulation
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/DigitalEngineeringService",
                                  "section3"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Infuse AI/ML into CAD/CAE Automation
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/DigitalEngineeringService",
                                  "section4"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Structural Engineering PE Stamping
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/DigitalEngineeringService",
                                  "section5"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Mechanical PE Stamping
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/DigitalEngineeringService",
                                  "section6"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Seismic PE stamping
                            </a>
                          </li>

                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/DigitalEngineeringService",
                                  "section7"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Product Design Engineering
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/DigitalEngineeringService",
                                  "section8"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Product Lifecyle Management
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/DigitalEngineeringService",
                                  "section9"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              System Design and Engineering
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/DigitalEngineeringService",
                                  "section10"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              CAD Migration Services
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/DigitalEngineeringService",
                                  "section11"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Manufacturing Engineering
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/DigitalEngineeringService",
                                  "section12"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Digital Transformation
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/DigitalEngineeringService",
                                  "section13"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Robotic Process Automation
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/DigitalEngineeringService",
                                  "section14"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Augmented Reality and Virtual Reality
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/DigitalEngineeringService",
                                  "section15"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Cybersecurity
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col">
                        <h5 class="mega-title">
                          <Link
                            to="/AIMLComputerVisionList"
                            className={({ isActive }) =>
                              isActive ? "mega-link active" : "mega-link"
                            }
                            onClick={() => window.scrollTo(0, 0)}>
                            AI/ML & COMPUTER VISION
                          </Link>
                        </h5>
                        <ul class="mega-list">
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/AIMLComputerVisionDetail",
                                  "section1"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Data Analytics and Machine Learning
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/AIMLComputerVisionDetail",
                                  "section2"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Predictive Analytics
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/AIMLComputerVisionDetail",
                                  "section3"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Big Data Solutions
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/AIMLComputerVisionDetail",
                                  "section4"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Data Preparation and Management
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/AIMLComputerVisionDetail",
                                  "section5"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              NLP
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/AIMLComputerVisionDetail",
                                  "section6"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Computer Vision
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/AIMLComputerVisionDetail",
                                  "section7"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Automated Inspection
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/AIMLComputerVisionDetail",
                                  "section8"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Machine Vision
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/AIMLComputerVisionDetail",
                                  "section9"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Smart Camera Vision System
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/AIMLComputerVisionDetail",
                                  "section10"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              PC Based Vision System
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/AIMLComputerVisionDetail",
                                  "section11"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Vision S/w Development
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/AIMLComputerVisionDetail",
                                  "section12"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Lighting and Optics Design
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div class="col">
                        <h5 class="mega-title">
                          <Link
                            to="/AIDataServicesList"
                            className={({ isActive }) =>
                              isActive ? "mega-link active" : "mega-link"
                            }
                            onClick={() => window.scrollTo(0, 0)}>
                            AI DATA Services
                          </Link>
                        </h5>
                        <ul class="mega-list">
                          <li class="mega-item">
                            <Link
                              to="/AIDataServicesList"
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }
                              onClick={() => window.scrollTo(0, 0)}>
                              ADAS Data Annotation & Labelin
                            </Link>
                          </li>
                          <li class="mega-item">
                            <Link
                              to="/AIDataServicesList"
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }
                              onClick={() => window.scrollTo(0, 0)}>
                              Data Collection
                            </Link>
                          </li>
                          <li class="mega-item">
                            <Link
                              to="/AIDataServicesList"
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }
                              onClick={() => window.scrollTo(0, 0)}>
                              Data Anonymization
                            </Link>
                          </li>
                        </ul>
                        <h5 class="mega-title mt-4">
                          <Link
                            to="/CloudServiceList"
                            className={({ isActive }) =>
                              isActive ? "mega-link active" : "mega-link"
                            }
                            onClick={() => window.scrollTo(0, 0)}>
                            CLOUD SERVICES
                          </Link>
                        </h5>
                        <ul class="mega-list">
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/CloudServiceDetail",
                                  "section1"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Platform as a Service (PaaS)
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/CloudServiceDetail",
                                  "section2"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Software as a Service (SaaS)
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/CloudServiceDetail",
                                  "section3"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Cloud Storage and Content Delivery
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/CloudServiceDetail",
                                  "section4"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Data Analytics
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/CloudServiceDetail",
                                  "section5"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Security and Identity Management
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/CloudServiceDetail",
                                  "section6"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Cloud Migration and Management
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/CloudServiceDetail",
                                  "section7"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Cloud Contact Center
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/CloudServiceDetail",
                                  "section8"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              UX/UI Design
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col">
                        <h5 class="mega-title">
                          <Link
                            to="/SapServiceList"
                            className={({ isActive }) =>
                              isActive ? "mega-link active" : "mega-link"
                            }
                            onClick={() => window.scrollTo(0, 0)}>
                            SAP Services
                          </Link>
                        </h5>
                        <ul class="mega-list">
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/SapServiceDetail",
                                  "section1"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              SAP S/4HANA
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/SapServiceDetail",
                                  "section2"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              SAP Business Technology Platform (BTP)
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/SapServiceDetail",
                                  "section3"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              SAP Ariba
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/SapServiceDetail",
                                  "section4"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              SAP Digital Supply Chain
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/SapServiceDetail",
                                  "section5"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              SAP Financial Services
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/SapServiceDetail",
                                  "section6"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              SAP Customer Experience (CX)
                            </a>
                          </li>
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/SapServiceDetail",
                                  "section7"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              SAP Cloud Platform
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col">
                        <h5 class="mega-title">
                          <Link
                            to="/ElectronicsEmbededList"
                            className={({ isActive }) =>
                              isActive ? "mega-link active" : "mega-link"
                            }
                            onClick={() => window.scrollTo(0, 0)}>
                            ELECTRONICS & EMBEDDED DESIGN
                          </Link>
                        </h5>
                        <ul class="mega-list">
                          <li class="mega-item">
                            <a
                              onClick={() =>
                                handleMegaMenuClick(
                                  "/ElectronicsEmbededDetail",
                                  "section1"
                                )
                              }
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
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
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
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
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
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
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
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
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
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
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
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
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
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
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
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
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
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
                              className={({ isActive }) =>
                                isActive ? "mega-link active" : "mega-link"
                              }>
                              Cable Harness
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </li>
                <li class="nav-item">
                  <Link
                    exact
                    to="/Industry"
                    className={
                      isActive("/Industry") ? "nav-link active" : "nav-link"
                    }>
                    Industries
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    exact
                    to="/Insights"
                    onClick={() => window.scrollTo(0, 0)}
                    className={
                      isActive("/Insights") ? "nav-link active" : "nav-link"
                    }>
                    Insights
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    exact
                    to="/Careers"
                    onClick={() => window.scrollTo(0, 0)}
                    className={
                      isActive("/Careers") ? "nav-link active" : "nav-link"
                    }>
                    Careers
                  </Link>
                </li>
              </ul>
              <div className="d-flex">
                <Link
                  exact
                  to="/Contact"
                  onClick={() => window.scrollTo(0, 0)}
                  className={
                    isActive("/Contact") ? "header_btn" : "header_btn"
                  }>
                  <span>Contact Us</span>
                </Link>
                <button onClick={openOffcanvas} className="text-link grid_btn">
                  <i class="bi bi-grid"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <MobileOffcanvas
        isOpen={isOffMobilecanvasOpen}
        onClose={closeMobileOffcanvas}
      />

      <div
        className={
          isSticky
            ? "mobile_header mobile-view sticky"
            : "mobile_header mobile-view"
        }>
        <div className="container">
          <div className="row">
            <div className="col-9 col-md-10">
              <div className="logo_left">
                <Link exact to="/" className="logo">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-3 col-md-2">
              <button onClick={openMobileOffcanvas} className="toggle_button">
                <i class="bi bi-list"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
