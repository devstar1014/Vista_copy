import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/footer/Footer";

import whiteArrow from "../assets/images/white-right-arrow.svg";
import career from "../assets/images/career/career.png";
import careerImg1 from "../assets/images/career/img-1.png";
import careerImg2 from "../assets/images/career/img-2.png";
import careerImg3 from "../assets/images/career/img-3.png";
import careerImg4 from "../assets/images/career/img-4.png";
import careerImg5 from "../assets/images/career/img-5.png";

import tabImg1 from "../assets/images/career/tab_1.svg";
import tabImg2 from "../assets/images/career/tab_2.svg";
import tabImg3 from "../assets/images/career/tab_3.svg";
import tabImg4 from "../assets/images/career/skills_tests.png";
import tabImg5 from "../assets/images/career/psychometric_testing.png";
import tabImg6 from "../assets/images/career/case_studies.png";
import tabImg7 from "../assets/images/career/reference_Checks.svg";
import tabImg8 from "../assets/images/career/background_checks.svg";
import tabImg9 from "../assets/images/career/selection_decision.svg";
import tabImg10 from "../assets/images/career/job_offer.svg";
import tabImg11 from "../assets/images/career/negotiation.svg";
import tabImg12 from "../assets/images/career/acceptance.svg";
import tabImg13 from "../assets/images/career/pre-boarding.svg";
import tabImg14 from "../assets/images/career/orientation.svg";
import tabImg15 from "../assets/images/career/training.svg";
import tabImg16 from "../assets/images/career/integration.svg";
import Modal from "../components/data/Modal";
import { Link, useNavigate } from "react-router-dom";

export const Careers = () => {
  const [toggle, settoggle] = useState(1);

  const navigate = useNavigate();

  function toggleTab(index) {
    settoggle(index);
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const options = {
    loop: true,
    margin: 20,
    autoplay: true,
    dots: false,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    nav: false,
    responsive: {
      0: {
        items: 1.5,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4.5,
      },
    },
  };

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Sub banner */}
      <div className="sub_banner">
        <div className="container">
          <div className="banner_content_desc">
            <h5 className="banner_subtitle">Careers</h5>
            <h1 className="banner_title">Join Our Team at VISTA</h1>
            <div className="breadcrumb_detail">
              <div className="breadcrumb_box">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Careers
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Detail */}

      <section className="career_detail">
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="career_img">
                <img src={career} alt="" />
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="career_content">
                <h2 className="career_title">Be a Part of Our Success Story</h2>
                <p className="career_text">
                  Join our team at Vista Solutions, where we combine creativity
                  with cutting-edge technology. Whether you're a seasoned
                  professional or a recent graduate, we offer growth
                  opportunities in a collaborative environment across various
                  industries. Discover how you can make an impact and advance
                  your career with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="career_slider">
        <div className="slider_top">
          <div className="container">
            <h2 className="slider_title">
              Build Your Future with Innovation and Excellence
            </h2>
            <p className="slider_text">
              Want to take the next step in ​​​​your career?
            </p>
          </div>
        </div>
        <div className="slider_bottom">
          <OwlCarousel
            className="owl-carousel career_carousel owl-theme"
            {...options}
          >
            <div class="item">
              <div className="img_box">
                <img src={careerImg1} alt="" />
              </div>
            </div>
            <div class="item">
              <div className="img_box">
                <img src={careerImg2} alt="" />
              </div>
            </div>
            <div class="item">
              <div className="img_box">
                <img src={careerImg3} alt="" />
              </div>
            </div>
            <div class="item">
              <div className="img_box">
                <img src={careerImg4} alt="" />
              </div>
            </div>
            <div class="item">
              <div className="img_box">
                <img src={careerImg5} alt="" />
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>

      <section className="career_job_desc">
        <div className="career_tab">
          <div className="container">
            <ul className="tab_list">
              <li>
                <a
                  href="javascript:void(0)"
                  class={toggle === 1 ? "nav-link active" : "nav-link"}
                  onClick={() => {
                    toggleTab(1);
                  }}
                >
                  Interview Process
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class={toggle === 2 ? "nav-link active" : "nav-link"}
                  onClick={() => {
                    toggleTab(2);
                  }}
                >
                  Assessment and Testing
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class={toggle === 3 ? "nav-link active" : "nav-link"}
                  onClick={() => {
                    toggleTab(3);
                  }}
                >
                  Reference and Background Checks
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class={toggle === 4 ? "nav-link active" : "nav-link"}
                  onClick={() => {
                    toggleTab(4);
                  }}
                >
                  Decision and Offer
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class={toggle === 5 ? "nav-link active" : "nav-link"}
                  onClick={() => {
                    toggleTab(5);
                  }}
                >
                  Onboarding
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="career_tab_content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11">
                <div
                  className={
                    toggle === 1 ? "tab_content active" : "tab_content"
                  }
                >
                  <div className="row gy-4 align-items-center">
                    <div className="col-lg-4 col-md-6">
                      <div className="content_box">
                        <div className="icon">
                          <img src={tabImg1} alt="" />
                        </div>
                        <h5 className="card_title">Scheduling Interviews</h5>
                        <p className="card_text">
                          Coordinating dates and times for interviews with
                          selected candidates.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="content_box">
                        <div className="icon">
                          <img src={tabImg2} alt="" />
                        </div>
                        <h5 className="card_title">Types of Interviews</h5>
                        <ul className="card_list">
                          <li>Initial/HR Interview</li>
                          <li>Panel Interview</li>
                          <li>Technical Interview</li>
                          <li>Initial/HR Interview</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="content_box">
                        <div className="icon">
                          <img src={tabImg3} alt="" />
                        </div>
                        <h5 className="card_title">Interview Feedback</h5>
                        <p className="card_text">
                          Collecting feedback from interviewers to make informed
                          decisions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    toggle === 2 ? "tab_content active" : "tab_content"
                  }
                >
                  <div className="row gy-4 align-items-center">
                    <div className="col-lg-4 col-md-6">
                      <div className="content_box">
                        <div className="icon">
                          <img src={tabImg4} alt="" />
                        </div>
                        <h5 className="card_title">Skills Tests</h5>
                        <p className="card_text">
                          Administering practical tests to evaluate candidates'
                          abilities.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="content_box">
                        <div className="icon">
                          <img src={tabImg5} alt="" />
                        </div>
                        <h5 className="card_title">Psychometric Testing</h5>
                        <p className="career_text">
                          Using standardized tests to assess personality traits,
                          cognitive abilities, and other attributes.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="content_box">
                        <div className="icon">
                          <img src={tabImg6} alt="" />
                        </div>
                        <h5 className="card_title">Case Studies</h5>
                        <p className="card_text">
                          Asking candidates to solve job-related problems to
                          demonstrate their analytical and problem-solving
                          skills.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    toggle === 3 ? "tab_content active" : "tab_content"
                  }
                >
                  <div className="row gy-4 justify-content-center align-items-center">
                    <div className="col-lg-4 col-md-6">
                      <div className="content_box">
                        <div className="icon">
                          <img src={tabImg7} alt="" />
                        </div>
                        <h5 className="card_title">Reference Checks</h5>
                        <p className="card_text">
                          Contacting previous employers, colleagues, or other
                          references to verify candidates' work history and
                          performance.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="content_box">
                        <div className="icon">
                          <img src={tabImg8} alt="" />
                        </div>
                        <h5 className="card_title">Background Checks</h5>
                        <p className="card_text">
                          Conducting criminal, credit, and other background
                          checks as necessary.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    toggle === 4 ? "tab_content active" : "tab_content"
                  }
                >
                  <div className="row gy-4 align-items-center">
                    <div className="col-lg-4 col-md-6">
                      <div className="content_box">
                        <div className="icon">
                          <img src={tabImg9} alt="" />
                        </div>
                        <h5 className="card_title">Selection Decision</h5>
                        <p className="card_text">
                          Reviewing all assessments, feedback, and checks to
                          make a final hiring decision.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="content_box">
                        <div className="icon">
                          <img src={tabImg10} alt="" />
                        </div>
                        <h5 className="card_title">Job Offer</h5>
                        <p className="career_text">
                          Extending a formal offer to the selected candidate,
                          including details on salary, benefits, and start date.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="content_box">
                        <div className="icon">
                          <img src={tabImg11} alt="" />
                        </div>
                        <h5 className="card_title">Negotiation</h5>
                        <p className="card_text">
                          Discussing and finalizing any terms of the offer, such
                          as salary negotiations or start date adjustments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    toggle === 5 ? "tab_content active" : "tab_content"
                  }
                >
                  <div className="row gy-4 justify-content-center align-items-center">
                    <div className="col-lg-4 col-md-6">
                      <div className="content_box">
                        <div className="icon">
                          <img src={tabImg12} alt="" />
                        </div>
                        <h5 className="card_title">Pre-boarding</h5>
                        <p className="card_text">
                          Receiving confirmation of acceptance from the
                          candidate.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="content_box">
                        <div className="icon">
                          <img src={tabImg13} alt="" />
                        </div>
                        <h5 className="card_title">Types of Interviews</h5>
                        <p className="card_text">
                          Providing necessary information and documents to the
                          new hire before their start date.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="content_box">
                        <div className="icon">
                          <img src={tabImg14} alt="" />
                        </div>
                        <h5 className="card_title">Orientation</h5>
                        <p className="card_text">
                          Introducing the new hire to the company, its culture,
                          and its policies.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="content_box">
                        <div className="icon">
                          <img src={tabImg15} alt="" />
                        </div>
                        <h5 className="card_title">Training</h5>
                        <p className="card_text">
                          Providing job-specific training and resources to help
                          the new hire succeed.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="content_box">
                        <div className="icon">
                          <img src={tabImg16} alt="" />
                        </div>
                        <h5 className="card_title">Integration</h5>
                        <p className="card_text">
                          Assisting the new hire in integrating with their team
                          and understanding their role within the organization.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-3 text-center">
              <a href="#" className="btn main_btn">
                Send your resume <img src={whiteArrow} alt="" />
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="career_opper_list">
        <div className="container">
          <div className="row gy-5 justify-content-center">
            <div className="col-lg-9">
              <h2 className="opper_subtitle">Join Us</h2>
              <p className="opper_title">Explore Our Career Opportunities</p>
              <p className="opper_text">
                Discover diverse roles at Our Solution and advance your career
                in a technology-driven environment. Join us to innovate and
                shape the future of engineering solutions.
              </p>
            </div>
            <div className="col-lg-10">
              <div className="over_auto">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">ROLE</th>
                      <th scope="col">LOCATION</th>
                      <th scope="col">TYPE</th>
                      <th scope="col">OTHER</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">UI/UX Designer</th>
                      <td>Coimbatore</td>
                      <td>Full Time</td>
                      <td>2-3 Year of experience</td>
                      <td>
                        <p className="text-end mb-0">
                          <a href="#" className="btn table_btn">
                            <span>Apply Now</span>
                          </a>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Frontend Developer</th>
                      <td>Coimbatore</td>
                      <td>Full Time</td>
                      <td>2-3 Year of experience</td>
                      <td>
                        <p className="text-end mb-0">
                          <a href="#" className="btn table_btn">
                            <span>Apply Now</span>
                          </a>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Full Stack Developer</th>
                      <td>Coimbatore</td>
                      <td>Full Time</td>
                      <td>2-3 Year of experience</td>
                      <td>
                        <p className="text-end mb-0">
                          <a href="#" className="btn table_btn">
                            <span>Apply Now</span>
                          </a>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Project Manger</th>
                      <td>Coimbatore</td>
                      <td>Full Time</td>
                      <td>2-3 Year of experience</td>
                      <td>
                        <p className="text-end mb-0">
                          <button
                            onClick={toggleModal}
                            className="btn table_btn"
                          >
                            <span>Apply Now</span>
                          </button>
                        </p>
                        <Modal isOpen={isOpen} toggleModal={toggleModal} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal />

      {/* Footer */}
      <Footer />
    </div>
  );
};
