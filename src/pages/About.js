import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/footer/Footer";

import aboutImg from "../assets/images/about.png";
import robotImg from "../assets/images/about_robot.png";

import collabrationImg from "../assets/images/about-us/collaborate.svg";
import innovationImg from "../assets/images/about-us/innovation.svg";
import performImg from "../assets/images/about-us/performance.svg";
import trustImg from "../assets/images/about-us/trust.svg";
import reliabilityImg from "../assets/images/about-us/reliability.svg";
import missionImg from "../assets/images/about-us/mission.png";
import visionImg from "../assets/images/about-us/vision.svg";
import informationImg from "../assets/images/about-us/information-security.png";
import corporateImg from "../assets/images/about-us/corporate-img.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const About = () => {
  const [toggle, settoggle] = useState(1);

  function toggleTab(index) {
    settoggle(index);
  }

  const navigate = useNavigate("/");

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div>
      <Header />

      <div className="sub_banner">
        <div className="container">
          <div className="banner_content_desc">
            <h5 className="banner_subtitle">About Us</h5>
            <h1 className="banner_title">Company Overview</h1>
            <div className="breadcrumb_detail">
              <div className="breadcrumb_box">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      About Us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About  Vista */}

      <section className="about_inner_detail">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-4 col-md-3 order-1 order-md-0">
            <div className="about_left">
              <img src={aboutImg} alt="" className="about_bg_img" />
              {/* <div className="robot_mask">
                <img src={robotImg} alt="" />
              </div> */}
            </div>
          </div>
          <div className="col-lg-8 col-md-9 order-0 order-md-1">
            <div className="about_right">
              <h5 className="about_desctitle">About Us</h5>
              <h2 className="about_title">About VISTA</h2>

              <p className="about_text">
                Founded in 2011, VISTA is a Global Engineering and Technology
                Solutions Company specialized in AI/ML, Digital Engineering,
                ADAS/ Annotation & Data Engineering services, Failure analysis
                using advanced FEA/CFD Simulations, CAD/CAE customization,
                Structural Engineering and PE stamping, Manufacturing Process
                Simulation, Product Life Cycle Management, SAP implementation
                Services, Electronics and Embedded Firmware Design Services,
                Robotic Automation, Cybersecurity Services.
              </p>
              <p className="about_text">
                Headquartered in USA, with prominent global presence including
                Germany, Norway, Australia, UK and state-of-the-art Offshore
                Delivery Centers (ODC) in India.
              </p>
              <p className="about_text">
                We support businesses in focused verticals of Transportation &
                Mobility, Off highway vehicles, Avionics, Airborne Systems and
                Equipment, Semiconductor, Electronics and PCB Board, Medical
                Devices, Healthcare, Industrial Equipment & Heavy Machinery,
                Railways, Energy, Oil and Gas, Paper & Pulp.
              </p>
              <p className="about_text">
                With a scalable outsourcing/offshore model across 6 countries, a
                fast-growing team of 1200+ employees, and long-term customer
                associations, we accelerate innovation and maximize ROI on R&D
                investments for our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* specs Detail Vista */}

      <section className="spec_detail">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="spec_content">
                <h2 className="spec_title">06</h2>
                <p className="spec_text">Locations</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="spec_content">
                <h2 className="spec_title">1200+</h2>
                <p className="spec_text">
                  Engineers and Data Labelists located globally
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="spec_content">
                <h2 className="spec_title">50+</h2>
                <p className="spec_text">
                  Structural PEs Licensed to all 50 States in USA
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="spec_content">
                <h2 className="spec_title">16+</h2>
                <p className="spec_text">
                  Country specific Structural Engineering PE stamping projects
                  completed.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="spec_content">
                <h2 className="spec_title">5+</h2>
                <p className="spec_text">Offshore Development Centers (ODC)</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="spec_content">
                <h2 className="spec_title">120+</h2>
                <p className="spec_text">ADAS Functions Delivered</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="spec_content">
                <h2 className="spec_title">1.8 Bn+</h2>
                <p className="spec_text">
                  Eq.Labels delivered since 2014 with average accuracy of code
                  98.6%
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="spec_content">
                <h2 className="spec_title">12+</h2>
                <p className="spec_text">Data Engineering tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Core Values */}

      <section className="core_values">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="core_title">Core Values</h2>
              <p className="core_text">
                The following core values guide VISTA's approach to delivering
                innovative services, fostering a culture of trust, teamwork, and
                excellence.
              </p>
            </div>
          </div>
          <div className="core_list">
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4 col-xxl-3 col-md-6">
                <div className="core_box card">
                  <div className="icon">
                    <img src={trustImg} alt="" />
                  </div>
                  <h5 className="card_title">Trust</h5>
                  <p className="card_text">
                    Building strong relationships with clients and partners
                    through transparency and integrity.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-xxl-3 col-md-6">
                <div className="core_box card">
                  <div className="icon">
                    <img src={collabrationImg} alt="" />
                  </div>
                  <h5 className="card_title">Collaboration</h5>
                  <p className="card_text">
                    Working together as a team to achieve common goals and share
                    knowledge.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-xxl-3 col-md-6">
                <div className="core_box card">
                  <div className="icon">
                    <img src={performImg} alt="" />
                  </div>
                  <h5 className="card_title">Performance</h5>
                  <p className="card_text">
                    Delivering high-quality results and continuously improving
                    services.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-xxl-3 col-md-6">
                <div className="core_box card">
                  <div className="icon">
                    <img src={reliabilityImg} alt="" />
                  </div>
                  <h5 className="card_title">Reliable</h5>
                  <p className="card_text">
                    Providing consistent and dependable support, ensuring client
                    satisfaction.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-xxl-3 col-md-6">
                <div className="core_box card">
                  <div className="icon">
                    <img src={innovationImg} alt="" />
                  </div>
                  <h5 className="card_title">Innovation</h5>
                  <p className="card_text">
                    Embracing creativity and innovation to stay ahead in the
                    industry and offer cutting-edge solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Aspirations & Commitments */}

      <div className="aspiration_detail">
        <div className="container">
          <div className="row justify-content-center align-items-center gy-4">
            <div className="col-lg-5">
              <h2 className="aspiration_title">
                Our Aspirations and Commitments
              </h2>
            </div>
            <div className="col-lg-7">
              <p className="aspiration_text">
                Our company is dedicated to fostering innovation, delivering
                exceptional digital solutions, and actively shaping the future
                of technology and engineering on a global scale. We uphold a
                commitment to excellence, integrity, and sustainable growth,
                striving to exceed client expectations and foster long-term
                partnerships.
              </p>
            </div>
          </div>
          <div className="aspiration_list">
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="service_box">
                  <div className="card_body">
                    <div className="icon">
                      <img src={visionImg} style={{ width: "70px" }} alt="" />
                    </div>
                    <h2 className="card_title">Our Vision</h2>
                    <p className="card_text">
                      To become a leader in Computer Aided Engineering, Computer
                      Vision, Artificial Intelligence and Machine Learning
                      platform by uniting latest Technology and Engineering
                      trends.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service_box">
                  <div className="card_body">
                    <div className="icon">
                      <img src={missionImg} alt="" />
                    </div>
                    <h2 className="card_title">Our Mission</h2>
                    <p className="card_text">
                      To deliver value added innovative solutions – faster,
                      better in the field of Digital Engineering
                      &Transformation, Manufacturing Engineering, Cloud
                      Solutions, Technology Staffing and Software industries
                      through our multi domain and cross-industry capabilities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service_box">
                  <div className="card_body">
                    <h2 className="card_title">Quality Policy</h2>
                    <p className="card_text">
                      Commit to deliver consistent and reliable on-time, cost
                      effective, Qualitative value-added solutions, to satisfy
                      global Clients, in line with industrial and applicable
                      quality standards.
                    </p>
                    <div className=" h-stack iso_list" gap={3}>
                      <div className="iso_list_item">
                        <i class="bi bi-caret-right-fill"></i>ISO 9001:2015
                      </div>
                      <div className="iso_list_item">
                        <i class="bi bi-caret-right-fill"></i>ISO 13485
                      </div>
                      <div className="iso_list_item">
                        <i class="bi bi-caret-right-fill"></i>ISO 27001:2013
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Information Secruity */}

      <div className="information_security">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="information_content">
                <h2 className="information_title">
                  Information Security Management System Policy
                </h2>
                <p className="information_text ps-0">
                  We are committed to provide adequate protection and
                  confidentiality of all the information assets of the company
                  and our clients data both, whether we held on cloud, on local
                  storage media or remotely, to ensure the continued
                  availability of the information to all authorized members of
                  the staff and or vendors, and to ensure the integrity of all
                  the information and configuration controls.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="information_img">
                <img src={informationImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Governance */}

      <div className="corporate_governance">
        <div className="row gx-0">
          <div className="col-lg-6">
            <div className="corporate_img">
              <img src={corporateImg} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="corporate_content">
              <h1 className="corporate_title">Corporate Governance at VISTA</h1>
              <p className="corporate_text">
                The Board of Directors for VISTA is responsible for corporate
                policy and overall performance of the Company through oversight
                and stewardship of the Company to enhance the long-term value of
                the Company.
              </p>
              <div className="v-stack corporate_list" gap={3}>
                <p className="corporate_list_item">
                  <FontAwesomeIcon icon="fa-solid fa-gem" className="icon" />
                  Maintain compliance requirements.
                </p>
                <p className="corporate_list_item">
                  <FontAwesomeIcon icon="fa-solid fa-gem" className="icon" />
                  Apply code of conduct and business ethics.
                </p>
                <p className="corporate_list_item">
                  <FontAwesomeIcon icon="fa-solid fa-gem" className="icon" />
                  Maintain Supplier code of conduct.
                </p>
                <p className="corporate_list_item">
                  <FontAwesomeIcon icon="fa-solid fa-gem" className="icon" />
                  Providing input and perspective in evaluating alternative
                  strategies
                </p>
                <p className="corporate_list_item">
                  <FontAwesomeIcon icon="fa-solid fa-gem" className="icon" />
                  Reviewing and approving financial needs to meet the business
                  strategies.
                </p>
                <p className="corporate_list_item">
                  <FontAwesomeIcon icon="fa-solid fa-gem" className="icon" />
                  Ensuring processes are in place to maintain the integrity of
                  the Company.
                </p>
                <p className="corporate_list_item">
                  <FontAwesomeIcon icon="fa-solid fa-gem" className="icon" />
                  Evaluating and monitoring the culture and values of the
                  Company.
                </p>
                <p className="corporate_list_item">
                  <FontAwesomeIcon icon="fa-solid fa-gem" className="icon" />
                  Involve Corporate Social responsibility activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  footer */}

      <Footer />
    </div>
  );
};
