import React, { useEffect, useState } from "react";
import { Header } from "../components/layout/header/Header";
import Banner from "../components/layout/banner/Banner";
import aboutImg from "../assets/images/about.png";
import robotImg from "../assets/images/about_robot.png";
import whiteArrow from "../assets/images/white-right-arrow.svg";
import mainArrow from "../assets/images/grey-arrow.svg";
import blackArrow from "../assets/images/right-arrow.svg";

import digitalCardImg1 from "../assets/images/digital-img-1.svg";
import digitalCardImg2 from "../assets/images/digital-img-2.svg";
import digitalCardImg3 from "../assets/images/digital-img-3.svg";
import digitalCardImg4 from "../assets/images/digital-img-4.svg";
import arrowImg from "../assets/images/white-arrow.svg";
import digitalRobotImg from "../assets/images/digital-eng-robot.png";
import adasImg from "../assets/images/adas-img.png";

import commitImg1 from "../assets/images/digital-engineering.svg";
import commitImg2 from "../assets/images/ai-data-service.svg";
import commitImg3 from "../assets/images/ai-ml-computer-vision.svg";
import commitImg4 from "../assets/images/electronics-embeded.svg";
import commitImg5 from "../assets/images/cloud-services.svg";
import commitImg6 from "../assets/images/sap.svg";

import insightImg1 from "../assets/images/insights/ai-manufacturing.webp";
import insightImg2 from "../assets/images/insights/oil-gas.webp";
import insightImg3 from "../assets/images/insights/digital-transformation-helthcare.webp";
import insightImg4 from "../assets/images/insights/semiconductor.webp";
import insightImg5 from "../assets/images/insights/digital-engineering.webp";
import insightImg6 from "../assets/images/insights/smart-transportion.webp";

import dataServiceImg1 from "../assets/images/adas-data-annotation.webp";
import dataServiceImg2 from "../assets/images/data-collection.webp";
import dataServiceImg3 from "../assets/images/data-anoym.webp";

import computerVisionImg1 from "../assets/images/computer-vision1.png";
import computerVisionImg2 from "../assets/images/computer-vision2.png";
import computerVisionImg3 from "../assets/images/computer-vision3.png";

import insightImg from "../assets/images/insights.png";
import { Footer } from "../components/layout/footer/Footer";

import { Link, useNavigate } from "react-router-dom";

import MainSlider from "../components/layout/banner/MainSlider";
import ThumbnailSlider from "../components/layout/banner/ThumbnailSlider";

import Aos from "aos";
import "aos/dist/aos.css";

export const Home = () => {
  const [toggle, settoggle] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(function () {
    Aos.init({ duration: 1100, delay: 100 });
  }, []);

  function toggleTab(index) {
    settoggle(index);
  }

  const navigate = useNavigate();

  const handleLearnMore = (section) => {
    navigate(`/AIMLComputerVisionDetail#${section}`);
  };

  const thumbnaiContent = [
    "Aerospace and Defense Engineering",
    " Embedded Design",
    "AI Data Services",
    "Digital Engineering ",
    "Structural PE Stamping",
    "Offshore Wind Energy",
  ];

  const updateMainSlider = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Header />
      {/* <Banner /> */}

      <MainSlider activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <ThumbnailSlider
        contentItem={thumbnaiContent}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        updateMainSlider={updateMainSlider}
      />

      {/* About  Vista */}

      <section className="about_detail">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-4 col-md-3 order-1 order-md-0">
            <div className="about_left">
              <img
                src={aboutImg}
                alt=""
                className="about_bg_img"
                data-aos="fade-up"
              />
              {/* <div className="robot_mask " data-aos="fade-up">
                <img src={robotImg} alt="" />
              </div> */}
            </div>
          </div>
          <div className="col-lg-8 col-md-9 order-0 order-md-1">
            <div className="about_right">
              <h2 className="about_title" data-aos="fade-up">
                Welcome to VISTA Group of Companies!
              </h2>
              <h5 className="about_subtitle" data-aos="fade-up">
                A Journey has many Milestones.
              </h5>
              <p className="about_text" data-aos="fade-up">
                Founded in 2011, VISTA is a Global Engineering and Technology
                Solutions Company specialized in AI/ML, Digital Engineering,
                ADAS/ Annotation & Data Engineering services, Failure analysis
                using advanced FEA/CFD Simulations, CAD/CAE customization.
              </p>
              <p className="about_text" data-aos="fade-up">
                Structural Engineering and PE stamping, Manufacturing Process
                Simulation, Product Life Cycle Management, SAP implementation
                Services, Electronics and Embedded Firmware Design Services,
                Robotic Automation, Cybersecurity Services.
              </p>
              <div
                className="mt-4 d-flex align-items-center flex-wrap"
                data-aos="fade-up">
                <div className="exp_box">
                  <span>14</span>+ &nbsp; Years Of Experince
                </div>
                <div className="ms-lg-3 mt-3 mt-md-0">
                  <Link
                    to="/About"
                    onClick={() => window.scrollTo(0, 0)}
                    className="btn main_btn">
                    See More <img src={whiteArrow} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* specs Detail Vista */}

      <section className="spec_detail">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="spec_content" data-aos="zoom-in">
                <h2 className="spec_title">06</h2>
                <p className="spec_text">Locations</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="spec_content" data-aos="zoom-in">
                <h2 className="spec_title">1200+</h2>
                <p className="spec_text">
                  Engineers and Data Labelists located globally
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="spec_content" data-aos="zoom-in">
                <h2 className="spec_title">50+</h2>
                <p className="spec_text">
                  Structural PEs Licensed to all 50 States in USA
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="spec_content" data-aos="zoom-in">
                <h2 className="spec_title">16+</h2>
                <p className="spec_text">
                  Country specific Structural Engineering PE stamping projects
                  completed.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="spec_content" data-aos="zoom-in">
                <h2 className="spec_title">5+</h2>
                <p className="spec_text">Offshore Development Centers (ODC)</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="spec_content" data-aos="zoom-in">
                <h2 className="spec_title">120+</h2>
                <p className="spec_text">ADAS Functions Delivered</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="spec_content" data-aos="zoom-in">
                <h2 className="spec_title">1.8 Bn+</h2>
                <p className="spec_text">
                  Eq.Labels delivered since 2014 with average accuracy of code
                  98.6%
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="spec_content" data-aos="zoom-in">
                <h2 className="spec_title">12+</h2>
                <p className="spec_text">Data Engineering tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* recognitions & commitment Detail */}

      <section className="commitment_detail">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h2 className="commitment_title" data-aos="fade-up">
                Our Recognitions and Commitments
              </h2>
              <p className="commitment_text" data-aos="fade-up">
                VISTA has recognized for its quality commitment and data-driven
                practices, sustainability, and corporate ownership in every
                business model we deliver.
              </p>
            </div>
          </div>
        </div>
        <div className="commitment_list">
          <div className="container">
            <div className="row gy-4 ">
              <div className="col-lg-4 col-md-6">
                <div className="card commitment_box" data-aos="fade-up">
                  <div className="icon">
                    <img src={commitImg1} alt="" />
                  </div>
                  <h5 className="card_title">Digital Engineering</h5>
                  <p className="card_text">
                    A key component of contemporary engineering methods is
                    digital engineering, which facilitates the design process
                    and raises the caliber of the final product.
                  </p>
                  <Link
                    to="/DigitalEngineeringServiceList"
                    className="card_link"
                    onClick={() => window.scrollTo(0, 0)}>
                    Read More <i class="bi bi-chevron-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card commitment_box" data-aos="fade-up">
                  <div className="icon">
                    <img src={commitImg2} alt="" />
                  </div>
                  <h5 className="card_title">AI Data Services</h5>
                  <p className="card_text">
                    AI data services are essential for increasing productivity,
                    accuracy, and efficiency across a range of industries.
                  </p>
                  <Link
                    to="/AIDataServicesList"
                    onClick={() => window.scrollTo(0, 0)}
                    className="card_link">
                    Read More <i class="bi bi-chevron-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card commitment_box" data-aos="fade-up">
                  <div className="icon">
                    <img src={commitImg3} alt="" />
                  </div>
                  <h5 className="card_title"> AI/ML & Computer Vision </h5>
                  <p className="card_text">
                    Through the use of algorithms and deep learning techniques,
                    computer vision allows machines to analyze and make sense of
                    images and videos.
                  </p>
                  <Link
                    to="/AIMLComputerVisionList"
                    onClick={() => window.scrollTo(0, 0)}
                    className="card_link">
                    Read More <i class="bi bi-chevron-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card commitment_box" data-aos="fade-up">
                  <div className="icon">
                    <img src={commitImg4} alt="" />
                  </div>
                  <h5 className="card_title">Electronics & Embedded Design</h5>
                  <p className="card_text">
                    We power everything from computers and cellphones to
                    automobiles and medical equipment, and we thereby shape the
                    modern world.
                  </p>
                  <Link
                    to="/ElectronicsEmbededList"
                    onClick={() => window.scrollTo(0, 0)}
                    className="card_link">
                    Read More <i class="bi bi-chevron-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card commitment_box" data-aos="fade-up">
                  <div className="icon">
                    <img src={commitImg5} alt="" />
                  </div>
                  <h5 className="card_title">Cloud Services</h5>
                  <p className="card_text">
                    Users can scale their resources up or down depending on
                    their needs, making it a flexible and cost-effective
                    solution for various applications.
                  </p>
                  <Link
                    to="/CloudServiceList"
                    onClick={() => window.scrollTo(0, 0)}
                    className="card_link">
                    Read More <i class="bi bi-chevron-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card commitment_box" data-aos="fade-up">
                  <div className="icon">
                    <img src={commitImg6} alt="" />
                  </div>
                  <h5 className="card_title">SAP Services</h5>
                  <p className="card_text">
                    It is intended to increase productivity, enhance
                    decision-making, and streamline procedures inside
                    businesses.
                  </p>
                  <Link
                    to="/SapServiceList"
                    onClick={() => window.scrollTo(0, 0)}
                    className="card_link">
                    Read More <i class="bi bi-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Engineering Detail */}

      <section className="digital_engineering">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h2 className="digital_title" data-aos="fade-up">
                Digital Engineering
              </h2>
              <p className="digital_text" data-aos="fade-up">
                A key component of contemporary engineering methods is digital
                engineering, which facilitates the design process and raises the
                caliber of the final product.
              </p>
            </div>
          </div>
          <div className="mt-5">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-8">
                <div className="card_list">
                  <div className="row gy-4">
                    <div className="col-lg-6 col-md-6">
                      <div className="card service_box" data-aos="fade-up">
                        <div className="icon">
                          <img src={digitalCardImg1} alt="" />
                        </div>
                        <h5 className="card_title">
                          Advanced FEA/CFD Simulation
                        </h5>
                        <p className="card_text">
                          Highly detailed, numerical analysis using Finite
                          Element and Computational Fluid Dynamics to simulate
                          complex structural and fluid behavior.
                        </p>
                        <div className="card_link">
                          <Link
                            to="/DigitalEngineeringService"
                            state={{ sectionId: "section1" }}
                            className="btn card_link_btn">
                            <img src={arrowImg} alt="" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="card service_box" data-aos="fade-up">
                        <div className="icon">
                          <img src={digitalCardImg2} alt="" />
                        </div>
                        <h5 className="card_title">CAD/CAE Customization</h5>
                        <p className="card_text">
                          Tailoring computer-aided design and engineering
                          software to meet specific user needs, enhancing
                          workflow efficiency and productivity.
                        </p>
                        <div className="card_link">
                          <Link
                            to="/DigitalEngineeringService"
                            state={{ sectionId: "section3" }}
                            className="btn card_link_btn">
                            <img src={arrowImg} alt="" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="card service_box" data-aos="fade-up">
                        <div className="icon">
                          <img src={digitalCardImg3} alt="" />
                        </div>
                        <h5 className="card_title">
                          Structural Engineering PE stamping
                        </h5>
                        <p className="card_text">
                          Licensed Professional Engineer (PE) approval stamp on
                          structural plans, verifying compliance with building
                          codes and safety standards.
                        </p>
                        <div className="card_link">
                          <Link
                            to="/DigitalEngineeringService"
                            state={{ sectionId: "section4" }}
                            className="btn card_link_btn">
                            <img src={arrowImg} alt="" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="card service_box" data-aos="fade-up">
                        <div className="icon">
                          <img src={digitalCardImg4} alt="" />
                        </div>
                        <h5 className="card_title">
                          Manufacturing Process Simulation
                        </h5>
                        <p className="card_text">
                          Virtual modeling and analysis of production processes
                          to optimize efficiency, reduce costs, and improve
                          product quality before physical prototyping.
                        </p>
                        <div className="card_link">
                          <Link
                            to="/DigitalEngineeringService"
                            state={{ sectionId: "section2" }}
                            className="btn card_link_btn">
                            <img src={arrowImg} alt="" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="digital_engineering_right">
                  <div className="img_box" data-aos="fade-up">
                    <img src={digitalRobotImg} alt="" />
                    <div className="content_box">
                      <Link
                        className="service_btn"
                        to="/DigitalEngineeringServiceList"
                        onClick={() => window.scrollTo(0, 0)}>
                        See More Services
                        <span className="arrow">
                          <img src={blackArrow} alt="" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Data Services */}

      <section className="ai_data_service_detail">
        <div className="container">
          <h2 className="data_service_title" data-aos="fade-up">
            AI Data Services
          </h2>
          <p className="data_service_text" data-aos="fade-up">
            AI data services are essential for increasing productivity,
            accuracy, and efficiency across a range of industries.
          </p>
          <div className="data_service_list">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6">
                <div className="card data_service_box" data-aos="fade-up">
                  <div className="card_img">
                    <img src={dataServiceImg1} alt="" />
                  </div>
                  <div className="card_body">
                    <h5 className="card_title">
                      ADAS Data Annotation & Labeling
                    </h5>
                    <p className="card_text">
                      Manual or automated labeling of sensor data (e.g., lidar,
                      camera) for Autonomous Driving Systems (ADAS) to enable
                      machine learning model training.
                    </p>
                    <Link
                      to="/AIDataServicesList"
                      onClick={() => window.scrollTo(0, 0)}
                      className="card_link">
                      Read More <i class="bi bi-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card data_service_box" data-aos="fade-up">
                  <div className="card_img">
                    <img src={dataServiceImg2} alt="" />
                  </div>
                  <div className="card_body">
                    <h5 className="card_title">Data Collection</h5>
                    <p className="card_text">
                      The systematic gathering and storage of information from
                      various sources, such as sensors, surveys, or databases,
                      for analysis and insight generation.
                    </p>
                    <Link
                      to="/AIDataServicesList"
                      onClick={() => window.scrollTo(0, 0)}
                      className="card_link">
                      Read More <i class="bi bi-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card data_service_box" data-aos="fade-up">
                  <div className="card_img">
                    <img src={dataServiceImg3} alt="" />
                  </div>
                  <div className="card_body">
                    <h5 className="card_title">Data Anonymization</h5>
                    <p className="card_text">
                      Techniques used to de-identify personal data, making it
                      impossible to link to an individual, while maintaining
                      data utility.
                    </p>
                    <Link
                      to="/AIDataServicesList"
                      onClick={() => window.scrollTo(0, 0)}
                      className="card_link">
                      Read More <i class="bi bi-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADAS Detail */}

      <section className="advanced_system_detail">
        <div className="container">
          <h2 className="system_title" data-aos="fade-up">
            Advanced Driver-Assistance Systems (ADAS)
          </h2>
          <p className="system_text" data-aos="fade-up">
            Advanced Driver-Assistance Systems (ADAS) are vehicle technologies
            that enhance safety, convenience, and driving experience through
            features like lane detection, adaptive cruise control, collision
            avoidance, and autonomous driving capabilities.
          </p>
          <img src={adasImg} className="system_img" data-aos="zoom-in" alt="" />
        </div>
      </section>

      {/* Data Annotation */}

      {/* <section className="data_annotation_services">
        <div className="container">
          <div className="row gy-3 align-items-center">
            <div className="col-lg-9 col-md-8">
              <h5 className="data_subtitle">Services</h5>
              <h2 className="data_title">Data Annotation</h2>
            </div>
            <div className="col-lg-3 col-md-4">
              <p className="mb-0 text-end">
                <a href="#" className="btn main_btn">
                  See More <img src={whiteArrow} alt="" />
                </a>
              </p>
            </div>
          </div>
          <div className="data_annotation_list">
            <div className="row gy-4">
              <div className="col-lg-5">
                <div className="card annotation_service_box">
                  <div className="row gx-2 gy-3 align-items-center">
                    <div className=" col-md-8">
                      <div className="card_body">
                        <h5 className="card_title">ADAS Annotation</h5>
                        <p className="card_text">
                          Listen to Questions for now, a TELUS International
                          podcast, to hear big thinkers discuss today's big
                          questions in digital CX.
                        </p>
                        <a href="#" className="card_link">
                          Read More <i class="bi bi-chevron-right"></i>
                        </a>
                      </div>
                    </div>
                    <div className=" col-md-4">
                      <div className="card_img">
                        <img src={adasAnnotation} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="card annotation_service_box">
                  <div className="row gx-2 gy-3 align-items-center">
                    <div className="col-md-8">
                      <div className="card_body">
                        <h5 className="card_title">Data Annotation</h5>
                        <p className="card_text">
                          Listen to Questions for now, a TELUS International
                          podcast, to hear big thinkers discuss today's big
                          questions in digital CX.Listen to Questions for now, a
                          TELUS International podcast, to hear big thinkers
                          discuss today's big questions in digital CX.
                        </p>
                        <a href="#" className="card_link">
                          Read More <i class="bi bi-chevron-right"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card_img">
                        <img src={dataAnnotation} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* AI/ML  & Computer Vision */}

      <section className="computer_vision_detail">
        <div className="container">
          <h2 className="computer_vision_title" data-aos="fade-up">
            AI/ML  & Computer Vision
          </h2>
          <p className="computer_vision_text" data-aos="fade-up">
            Through the use of algorithms and deep learning techniques, computer
            vision allows machines to analyze and make sense of images and
            videos
          </p>
          <div className="computer_vision_list">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6">
                <div className="card vision_service_box" data-aos="fade-up">
                  <div className="card_img">
                    <img src={computerVisionImg1} alt="" />
                  </div>
                  <div className="card_body">
                    <h5 className="card_title">
                      Data Analytics and Machine Learning
                    </h5>
                    <p className="card_text">
                      Uncovering patterns and insights to train predictive
                      models and drive decision-making.
                    </p>

                    <Link
                      to="/AIMLComputerVisionDetail"
                      state={{ sectionId: "section1" }}
                      className="card_link">
                      Read More <i class="bi bi-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card vision_service_box" data-aos="fade-up">
                  <div className="card_img">
                    <img src={computerVisionImg2} alt="" />
                  </div>
                  <div className="card_body">
                    <h5 className="card_title">Predictive Analytics</h5>
                    <p className="card_text">
                      Using data, statistics, and machine learning to forecast
                      future events, behaviors, or outcomes, enabling proactive
                      decision-making and strategic planning.
                    </p>
                    <Link
                      to="/AIMLComputerVisionDetail"
                      state={{ sectionId: "section2" }}
                      className="card_link">
                      Read More <i class="bi bi-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card vision_service_box" data-aos="fade-up">
                  <div className="card_img">
                    <img src={computerVisionImg3} alt="" />
                  </div>
                  <div className="card_body">
                    <h5 className="card_title">Big Data Solutions</h5>
                    <p className="card_text">
                      Scalable technologies and processes to capture, store,
                      analyze, and visualize large datasets, revealing hidden
                      patterns and insights.
                    </p>
                    <Link
                      to="/AIMLComputerVisionDetail"
                      state={{ sectionId: "section3" }}
                      className="card_link">
                      Read More <i class="bi bi-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-5 text-center">
            <Link
              to="/AIMLComputerVisionList"
              onClick={() => window.scrollTo(0, 0)}
              className="btn main_btn">
              See More <img src={whiteArrow} alt="" />
            </Link>
          </p>
        </div>
      </section>

      {/*  Insights & Resources */}

      <section className="insights_detail">
        <div className="container">
          <h5 className="insights_subtitle">Insights</h5>
          <h2 className="insights_title">Insights & Resources</h2>
          <div className="insight_list">
            <div className="row gy-4">
              <div className="col-lg-6">
                <div
                  class="nav flex-column nav-pills me-3"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical">
                  <button
                    class={toggle === 1 ? "nav-link active" : "nav-link"}
                    onClick={() => {
                      toggleTab(1);
                    }}>
                    The Future of AI in Manufacturing{" "}
                    <img src={mainArrow} className="arrow_img" alt="" />
                  </button>
                  <button
                    class={toggle === 2 ? "nav-link active" : "nav-link"}
                    onClick={() => {
                      toggleTab(2);
                    }}>
                    Sustainable Practices in the Oil & Gas Industry{" "}
                    <img src={mainArrow} className="arrow_img" alt="" />
                  </button>
                  <button
                    class={toggle === 3 ? "nav-link active" : "nav-link"}
                    onClick={() => {
                      toggleTab(3);
                    }}>
                    Digital Transformation in Healthcare:{" "}
                    <img src={mainArrow} className="arrow_img" alt="" />
                  </button>
                  <button
                    class={toggle === 4 ? "nav-link active" : "nav-link"}
                    onClick={() => {
                      toggleTab(4);
                    }}>
                    Advancements in Semiconductor Technology{" "}
                    <img src={mainArrow} className="arrow_img" alt="" />
                  </button>
                  <button
                    class={toggle === 5 ? "nav-link active" : "nav-link"}
                    onClick={() => {
                      toggleTab(5);
                    }}>
                    Digital Engineering{" "}
                    <img src={mainArrow} className="arrow_img" alt="" />
                  </button>
                  <button
                    class={toggle === 6 ? "nav-link active" : "nav-link"}
                    onClick={() => {
                      toggleTab(6);
                    }}>
                    The Role of IoT in Smart Transportation{" "}
                    <img src={mainArrow} className="arrow_img" alt="" />
                  </button>
                </div>
                <div className="mt-3">
                  <Link
                    to="/Insights"
                    className="btn main_btn"
                    onClick={() => window.scrollTo(0, 0)}>
                    View More <img src={whiteArrow} alt="" />
                  </Link>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="insight_list_body">
                  <div
                    class={toggle === 1 ? "tab-content active" : "tab-content"}>
                    <div
                      className="card insights_box_content"
                      data-aos="zoom-in">
                      <div className="card_img">
                        <img src={insightImg1} alt="" />
                      </div>
                      <div className="card_body">
                        <h5 className="card_title">
                          The Future of AI in Manufacturing
                        </h5>
                        <p className="card_text">
                          AI in manufacturing promises increased efficiency and
                          innovation through smart automation and predictive
                          maintenance, revolutionizing production processes and
                          reducing costs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class={toggle === 2 ? "tab-content active" : "tab-content"}>
                    <div className="card insights_box_content">
                      <div className="card_img">
                        <img src={insightImg2} alt="" />
                      </div>
                      <div className="card_body">
                        <h5 className="card_title">
                          Sustainable Practices in the Oil & Gas Industry
                        </h5>
                        <p className="card_text">
                          Adopting sustainable practices in the oil and gas
                          industry minimizes environmental impact and promotes
                          long-term resource efficiency through innovative
                          technologies and strategies.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class={toggle === 3 ? "tab-content active" : "tab-content"}>
                    <div className="card insights_box_content">
                      <div className="card_img">
                        <img src={insightImg3} alt="" />
                      </div>
                      <div className="card_body">
                        <h5 className="card_title">
                          Digital Transformation in Healthcare
                        </h5>
                        <p className="card_text">
                          Digital transformation in healthcare improves patient
                          care by utilizing advanced technologies to enhance
                          efficiency and outcomes. Embracing digital tools
                          allows healthcare providers to offer more personalized
                          and timely services.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class={toggle === 4 ? "tab-content active" : "tab-content"}>
                    <div className="card insights_box_content">
                      <div className="card_img">
                        <img src={insightImg4} alt="" />
                      </div>
                      <div className="card_body">
                        <h5 className="card_title">
                          Advancements in Semiconductor Technology
                        </h5>
                        <p className="card_text">
                          Advancements in semiconductor technology are driving
                          greater processing power and energy efficiency, paving
                          the way for more powerful and sustainable electronic
                          devices.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class={toggle === 5 ? "tab-content active" : "tab-content"}>
                    <div className="card insights_box_content">
                      <div className="card_img">
                        <img src={insightImg5} alt="" />
                      </div>
                      <div className="card_body">
                        <h5 className="card_title">Digital Engineering</h5>
                        <p className="card_text">
                          Digital engineering uses advanced technologies to
                          optimize design, simulation, and manufacturing
                          processes, driving innovation and efficiency while
                          streamlining development and improving product
                          performance.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class={toggle === 6 ? "tab-content active" : "tab-content"}>
                    <div className="card insights_box_content">
                      <div className="card_img">
                        <img src={insightImg6} alt="" />
                      </div>
                      <div className="card_body">
                        <h5 className="card_title">
                          The Role of IoT in Smart Transportation
                        </h5>
                        <p className="card_text">
                          IoT transforms transportation by enabling real-time
                          data collection and analysis, improving traffic
                          management, and enhancing vehicle safety while
                          reducing congestion and streamlining road operations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  footer */}

      <Footer />
    </>
  );
};
