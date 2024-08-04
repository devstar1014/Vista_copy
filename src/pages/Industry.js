import React, { useEffect, useState, useRef } from "react";
import leftArrow from "../assets/images/left-arrow.svg";
import rightArrow from "../assets/images/right-arrow.svg";
import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/footer/Footer";
import whiteArrow from "../assets/images/white-arrow.svg";
import "../assets/css/style.css";

import industryImg1 from "../assets/images/industry/aerospace-defense.webp";
import industryImg2 from "../assets/images/industry/automative.webp";
import industryImg3 from "../assets/images/industry/rail-transportion.webp";
import industryImg4 from "../assets/images/industry/semiconductor.webp";
import industryImg5 from "../assets/images/industry/medical-equipment.webp";
import industryImg6 from "../assets/images/industry/oil-gas.webp";
import industryImg7 from "../assets/images/industry/paper-pulp.webp";
import industryImg8 from "../assets/images/industry/mining.webp";
import industryImg9 from "../assets/images/industry/industrial-heavy-equipment.webp";
import industryImg10 from "../assets/images/industry/power-generation.webp";
import industryImg11 from "../assets/images/industry/energy.webp";
import industryImg12 from "../assets/images/industry/retail.webp";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const sections = [
  { id: "section1", label: "Aerospace And Defense" },
  { id: "section2", label: "Automotive" },
  { id: "section3", label: "Rail Transportation" },
  { id: "section4", label: "Semiconductor" },
  { id: "section5", label: "Medical Devices & Healthcare" },
  { id: "section6", label: "Oil & Gas" },
  { id: "section7", label: "Paper & Pulp" },
  { id: "section8", label: "Mining" },
  { id: "section9", label: "Industrial and Heavy Equipment" },
  { id: "section10", label: "Power Generation" },
  { id: "section11", label: "Energy" },
  { id: "section12", label: "Retail" },
];

const Industry = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (location.state?.sectionId) {
      scroller.scrollTo(location.state.sectionId, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -170,
      });
    }
  }, [location]);

  const handleScroll = () => {
    const sectionPositions = sections.map(
      (section) => document.getElementById(section.id).offsetTop
    );
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    const currentSectionIndex = sectionPositions.findIndex(
      (position, index) =>
        scrollPosition >= position &&
        (index === sectionPositions.length - 1 ||
          scrollPosition < sectionPositions[index + 1])
    );

    if (currentSectionIndex !== -1) {
      setActiveSection(sections[currentSectionIndex].id);
    }
  };

  const scrollMenuToActiveItem = () => {
    const activeMenuItem = document.querySelector(".menu-item.active");
    if (activeMenuItem && menuRef.current) {
      const menuRect = menuRef.current.getBoundingClientRect();
      const itemRect = activeMenuItem.getBoundingClientRect();
      if (itemRect.left < menuRect.left || itemRect.right > menuRect.right) {
        menuRef.current.scrollLeft +=
          itemRect.left -
          menuRect.left -
          menuRef.current.clientWidth / 2 +
          itemRect.width / 2;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    scrollMenuToActiveItem();
  }, [activeSection]);

  const scrollMenu = (direction) => {
    if (menuRef.current) {
      menuRef.current.scrollBy({ left: direction * 200, behavior: "smooth" });
    }
  };

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div>
      <Header />

      {/* Sub banner */}
      <div className="sub_banner">
        <div className="container">
          <div className="banner_content_desc">
            <h5 className="banner_subtitle">Industries</h5>
            <h1 className="banner_title">
              Tailored Solutions for Every Sector
            </h1>
            <div className="breadcrumb_detail">
              <div className="breadcrumb_box">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Industries
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="horizontal-menu-container">
        <button onClick={() => scrollMenu(-1)} className="arrow_left">
          <img src={leftArrow} alt="" />
        </button>
        <div className="horizontal-menu" ref={menuRef}>
          {sections.map((section) => (
            <div
              key={section.id}
              className={`menu-item ${
                activeSection === section.id ? "active" : ""
              }`}
              onClick={() => scrollToSection(section.id)}>
              {section.label}
            </div>
          ))}
        </div>
        <button onClick={() => scrollMenu(1)} className="arrow_right">
          <img src={rightArrow} alt="" />
        </button>
      </div>

      <div className="digital_engineering_services">
        <section className="service_section service_section_1" id="section1">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-5 order-1 order-lg-0">
                <div className="img_box">
                  <img src={industryImg1} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Aerospace And Defense</h2>
                  <p className="sec_text">
                    We provide advanced engineering solutions for the aerospace
                    and defense industries, specializing in AI, IoT, and
                    Industry 4.0 technologies. Our services include CAD/CAE
                    customization, FEA/CFD analysis, and rapid prototyping,
                    ensuring precision and reliability in your critical
                    projects. Partner with us to enhance innovation, safety, and
                    performance in aerospace and defense applications.
                  </p>
                  <div className="mt-3">
                    <Link
                      to="/Contact"
                      className="btn main_btn"
                      onClick={() => window.scrollTo(0, 0)}>
                      Talk to our expert <img src={whiteArrow} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service_section service_section_2" id="section2">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-7">
                <div className="sec_content right">
                  <h2 className="sec_title">Automotive</h2>
                  <p className="sec_text">
                    Our expertise in the automotive sector includes AI-driven
                    design, CAD/CAM engineering, and virtual manufacturing
                    simulations. We help automotive companies innovate and
                    improve efficiency through advanced data analytics,
                    structural analysis, and rapid prototyping. Transform your
                    automotive projects with our cutting-edge solutions and
                    achieve superior performance and sustainability.
                  </p>
                  <div className="mt-3">
                    <Link
                      to="/Contact"
                      className="btn main_btn"
                      onClick={() => window.scrollTo(0, 0)}>
                      Talk to our expert <img src={whiteArrow} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="img_box">
                  <img src={industryImg2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service_section service_section_3" id="section3">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-5 order-1 order-lg-0">
                <div className="img_box">
                  <img src={industryImg3} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Rail Transportation</h2>
                  <p className="sec_text">
                    We offer comprehensive engineering services for the rail
                    transportation industry, including structural analysis, CAD
                    customization, and reliability engineering. Our solutions
                    enhance safety, efficiency, and operational performance,
                    ensuring robust and reliable rail systems. Leverage our
                    expertise to drive innovation and excellence in rail
                    transportation.
                  </p>
                  <div className="mt-3">
                    <Link
                      to="/Contact"
                      className="btn main_btn"
                      onClick={() => window.scrollTo(0, 0)}>
                      Talk to our expert <img src={whiteArrow} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service_section service_section_2" id="section4">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-7">
                <div className="sec_content right">
                  <h2 className="sec_title">Semiconductor</h2>
                  <p className="sec_text">
                    Our semiconductor solutions encompass AI, ML, and data
                    annotation to optimize design and manufacturing processes.
                    We provide detailed FEA/CFD analysis, CAD customization, and
                    reverse engineering to improve precision and efficiency.
                    Enhance your semiconductor projects with our innovative
                    engineering and technology solutions.
                  </p>
                  <div className="mt-3">
                    <Link
                      to="/Contact"
                      className="btn main_btn"
                      onClick={() => window.scrollTo(0, 0)}>
                      Talk to our expert <img src={whiteArrow} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="img_box">
                  <img src={industryImg4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service_section service_section_1" id="section5">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-5 order-1 order-lg-0">
                <div className="img_box">
                  <img src={industryImg5} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Medical Devices & Healthcare</h2>
                  <p className="sec_text">
                    We deliver specialized engineering services for the medical
                    devices and healthcare industries, focusing on AI-driven
                    innovation and regulatory compliance. Our offerings include
                    CAD/CAE customization, data annotation, and rapid
                    prototyping, ensuring high-quality, reliable medical
                    solutions. Partner with us to advance healthcare technology
                    and improve patient outcomes.
                  </p>
                  <div className="mt-3">
                    <Link
                      to="/Contact"
                      className="btn main_btn"
                      onClick={() => window.scrollTo(0, 0)}>
                      Talk to our expert <img src={whiteArrow} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service_section service_section_2" id="section6">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-7">
                <div className="sec_content right">
                  <h2 className="sec_title">Oil & Gas</h2>
                  <p className="sec_text">
                    Our engineering solutions for the oil and gas industry
                    include seismic analysis, structural engineering, and
                    CAD/CAM engineering. We leverage AI and IoT technologies to
                    optimize exploration, production, and maintenance processes.
                    Enhance operational efficiency and safety in your oil and
                    gas projects with our advanced engineering services.
                  </p>
                  <div className="mt-3">
                    <Link
                      to="/Contact"
                      className="btn main_btn"
                      onClick={() => window.scrollTo(0, 0)}>
                      Talk to our expert <img src={whiteArrow} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="img_box">
                  <img src={industryImg6} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service_section service_section_4" id="section7">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-5 order-1 order-lg-0">
                <div className="img_box">
                  <img src={industryImg7} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Paper & Pulp</h2>
                  <p className="sec_text">
                    We provide innovative engineering solutions for the paper
                    and pulp industry, focusing on process optimization and
                    efficiency. Our services include CAD/CAE customization,
                    structural analysis, and virtual manufacturing simulations.
                    Improve productivity and sustainability in your paper and
                    pulp operations with our expert solutions.
                  </p>
                  <div className="mt-3">
                    <Link
                      to="/Contact"
                      className="btn main_btn"
                      onClick={() => window.scrollTo(0, 0)}>
                      Talk to our expert <img src={whiteArrow} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service_section service_section_2" id="section8">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-7">
                <div className="sec_content right">
                  <h2 className="sec_title">Mining</h2>
                  <p className="sec_text">
                    Our mining engineering services include structural analysis,
                    reliability engineering, and CAD customization. We use
                    advanced technologies like AI and IoT to enhance safety,
                    efficiency, and operational performance. Partner with us to
                    drive innovation and excellence in your mining projects.
                  </p>
                  <div className="mt-3">
                    <Link
                      to="/Contact"
                      className="btn main_btn"
                      onClick={() => window.scrollTo(0, 0)}>
                      Talk to our expert <img src={whiteArrow} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="img_box">
                  <img src={industryImg8} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service_section service_section_1" id="section9">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-5 order-1 order-lg-0">
                <div className="img_box">
                  <img src={industryImg9} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Industrial and Heavy Equipment</h2>
                  <p className="sec_text">
                    We offer comprehensive engineering solutions for industrial
                    and heavy equipment sectors, including FEA/CFD analysis, CAD
                    customization, and rapid prototyping. Our services improve
                    design accuracy, reliability, and performance, ensuring
                    robust and efficient equipment. Enhance your industrial
                    projects with our cutting-edge engineering expertise.
                  </p>
                  <div className="mt-3">
                    <Link
                      to="/Contact"
                      className="btn main_btn"
                      onClick={() => window.scrollTo(0, 0)}>
                      Talk to our expert <img src={whiteArrow} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service_section service_section_2" id="section10">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-7">
                <div className="sec_content right">
                  <h2 className="sec_title">Power Generation</h2>
                  <p className="sec_text">
                    Our power generation solutions encompass structural
                    analysis, seismic analysis, and CAD/CAE customization. We
                    leverage AI and IoT technologies to optimize performance and
                    efficiency in power generation projects. Partner with us to
                    drive innovation and ensure reliable, sustainable power
                    solutions.
                  </p>
                  <div className="mt-3">
                    <Link
                      to="/Contact"
                      className="btn main_btn"
                      onClick={() => window.scrollTo(0, 0)}>
                      Talk to our expert <img src={whiteArrow} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="img_box">
                  <img src={industryImg10} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service_section service_section_3" id="section11">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-5 order-1 order-lg-0">
                <div className="img_box">
                  <img src={industryImg11} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Energy</h2>
                  <p className="sec_text">
                    We provide advanced engineering services for the energy
                    sector, including AI-driven data analytics, structural
                    engineering, and CAD customization. Our solutions enhance
                    efficiency, reliability, and sustainability in energy
                    projects. Transform your energy operations with our
                    innovative engineering expertise.
                  </p>
                  <div className="mt-3">
                    <Link
                      to="/Contact"
                      className="btn main_btn"
                      onClick={() => window.scrollTo(0, 0)}>
                      Talk to our expert <img src={whiteArrow} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service_section service_section_2" id="section12">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-7">
                <div className="sec_content left">
                  <h2 className="sec_title">Retail</h2>
                  <p className="sec_text">
                    Our retail solutions leverage AI, ML, and IoT technologies
                    to optimize operations and improve customer experience. We
                    offer data analytics, CAD customization, and rapid
                    prototyping services to drive innovation and efficiency in
                    retail projects. Enhance your retail operations with our
                    cutting-edge engineering and technology solutions.
                  </p>
                  <div className="mt-3">
                    <Link
                      to="/Contact"
                      className="btn main_btn"
                      onClick={() => window.scrollTo(0, 0)}>
                      Talk to our expert <img src={whiteArrow} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="img_box">
                  <img src={industryImg12} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Industry;
