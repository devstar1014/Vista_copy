import React, { useEffect, useState, useRef } from "react";
import leftArrow from "../assets/images/left-arrow.svg";
import rightArrow from "../assets/images/right-arrow.svg";
import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/footer/Footer";
import whiteArrow from "../assets/images/white-arrow.svg";
import "../assets/css/style.css";

import dataAnonymizationImg1 from "../assets/images/data-anonymization/driver-behavior-analysis.webp";
import dataAnonymizationImg2 from "../assets/images/data-anonymization/accident-and-incident-analysis.webp";
import dataAnonymizationImg3 from "../assets/images/data-anonymization/usage-pattern-analysis.webp";
import dataAnonymizationImg4 from "../assets/images/data-anonymization/fleet-management.webp";
import dataAnonymizationImg5 from "../assets/images/data-anonymization/regulatory-compliance-and-reporting.webp";
import dataAnonymizationImg6 from "../assets/images/data-anonymization/research-and-development.webp";
import dataAnonymizationImg7 from "../assets/images/data-anonymization/performance-benchmarking.webp";
import dataAnonymizationImg8 from "../assets/images/data-anonymization/customer-feedback-and-improvement.webp";
import dataAnonymizationImg9 from "../assets/images/data-anonymization/mapping-and-localization.webp";
import dataAnonymizationImg10 from "../assets/images/data-anonymization/simulation-and-testing.webp";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const sections = [
  { id: "section1", label: "Driver Behavior Analysis" },
  { id: "section2", label: "Accident and Incident Analysis" },
  { id: "section3", label: "Usage Pattern Analysis" },
  { id: "section4", label: "Fleet Management" },
  { id: "section5", label: "Regulatory Compliance and Reporting" },
  { id: "section6", label: "Research and Development" },
  { id: "section7", label: "Performance Benchmarking" },
  { id: "section8", label: "Customer Feedback and Improvement" },
  { id: "section9", label: "Mapping and Localization" },
  { id: "section10", label: "Simulation and Testing" },
];

const DataAnonymizationDetail = () => {
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

  const contactRedirect = () => {
    navigate("/Contact");
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Header />

      <div className="sub_banner">
        <div className="container">
          <div className="banner_content_desc">
            <h5 className="banner_subtitle">AI Data Services</h5>
            <h1 className="banner_title">Data Anonymization</h1>
            <div className="breadcrumb_detail">
              <div className="breadcrumb_box">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      AI Data Services
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
            <div className="row gy-4">
              <div className="col-lg-5 order-1 order-lg-0">
                <div className="img_box">
                  <img src={dataAnonymizationImg1} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Driver Behavior Analysis</h2>
                  <p className="sec_text">
                    In order to study driving habits without disclosing the
                    identities of specific drivers, driver behavior analysis
                    entails gathering data from sensors and in-car systems and
                    anonymizing it. To make driving safer for everyone on the
                    road, this data is essential for developing customized ADAS
                    features and improving safety algorithms. Researchers can
                    create creative ways to stop accidents and raise road safety
                    standards by studying how drivers act when operating a
                    vehicle. Experts in driver behavior analysis can spot
                    patterns and trends in driving behaviors that can be used to
                    create safer and more effective ADAS features and
                    precautions. Researchers can identify areas where drivers
                    might need extra help or direction to avoid accidents by
                    using the data gathered from different sensors. In order to
                    make driving safer and lower the number of collisions on the
                    road, this information is invaluable.
                  </p>

                  <div className="mt-3">
                    <a onClick={contactRedirect} className="btn main_btn">
                      Talk to our expert <img src={whiteArrow} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service_section service_section_2" id="section2">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-7">
                <div className="sec_content right">
                  <h2 className="sec_title">Accident and Incident Analysis</h2>
                  <p className="sec_text">
                    An essential step in determining the causes of mishaps and
                    near-miss incidents is accident and incident analysis.
                    Researchers can enhance ADAS features like autonomous
                    emergency braking and collision avoidance by gathering and
                    anonymizing data from these occurrences. This contributes to
                    everyone on the road being safer while driving a car.
                    Furthermore, a better understanding of the factors causing
                    accidents is made possible by sharing this data with
                    regulatory agencies and researchers without jeopardizing
                    individual privacy. Improving the safety features of
                    automobiles requires analyzing accidents and incidents. The
                    number of accidents on the road can be decreased by ADAS
                    functionalities being improved through the analysis of
                    gathered data. It is crucial to share this data with
                    regulatory agencies and researchers in order to make driving
                    safer for everyone. We can keep developing vehicle safety
                    technology if we collaborate to examine and draw lessons
                    from these incidents.
                  </p>
                  <div className="mt-3">
                    <a onClick={contactRedirect} className="btn main_btn">
                      Talk to our expert <img src={whiteArrow} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="img_box">
                  <img src={dataAnonymizationImg2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service_section service_section_3" id="section3">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 order-1 order-lg-0">
                <div className="img_box">
                  <img src={dataAnonymizationImg3} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Usage Pattern Analysis</h2>
                  <p className="sec_text">
                    The study of how various cars make use of advanced driver
                    assistance system (ADAS) features in varied environments and
                    driving conditions is known as usage pattern analysis.
                    Researchers can learn more about the practical applications
                    of these features by anonymizing usage data. With this
                    knowledge, future ADAS functions that are more efficient and
                    user-friendly can be developed, as well as existing ones
                    that can be improved. Usage pattern analysis can aid in the
                    creation of new ADAS features and provide insightful
                    information about how well-performing current ones are.
                    Scholars can pinpoint opportunities for advancement and
                    novelty by examining how drivers engage with these
                    technologies under various circumstances. ADAS features that
                    are more suited to the requirements and preferences of
                    drivers may be developed as a result of this data-driven
                    approach, ultimately improving driving enjoyment and road
                    safety.
                  </p>
                  <div className="mt-3">
                    <a onClick={contactRedirect} className="btn main_btn">
                      Talk to our expert <img src={whiteArrow} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service_section service_section_2" id="section4">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-7">
                <div className="sec_content right">
                  <h2 className="sec_title">Fleet Management</h2>
                  <p className="sec_text">
                    To monitor vehicle performance, driver behavior, and route
                    efficiency, commercial fleets need to have a fleet
                    management system. Fleet managers can track and examine
                    these elements without jeopardizing driver privacy by
                    anonymizing data. The information about specific drivers is
                    kept private while operations are optimized and safety
                    precautions are strengthened. An enhanced and more
                    productive monitoring system is also made possible by
                    anonymizing data in fleet management. Fleet managers can
                    concentrate on enhancing overall performance and making sure
                    that drivers follow safety procedures by eliminating
                    personal information from the system. This helps all of the
                    drivers involved work in a safer and more secure
                    environment, in addition to being advantageous to the
                    business in terms of productivity and cost-effectiveness.
                  </p>
                  <div className="mt-3">
                    <a onClick={contactRedirect} className="btn main_btn">
                      Talk to our expert <img src={whiteArrow} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="img_box">
                  <img src={dataAnonymizationImg4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service_section service_section_1" id="section5">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 order-1 order-lg-0">
                <div className="img_box">
                  <img src={dataAnonymizationImg5} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">
                    Regulatory Compliance and Reporting
                  </h2>
                  <p className="sec_text">
                    In order to make sure that businesses abide by privacy
                    regulations such as the CCPA and GDPR, regulatory compliance
                    and reporting are crucial. One important strategy for
                    maintaining individual privacy rights and fulfilling
                    reporting requirements is to anonymize data. Companies can
                    provide regulatory agencies with the data they need without
                    jeopardizing the privacy of individuals by stripping
                    personally identifiable information from datasets. Retaining
                    regulatory compliance also contributes to stakeholder and
                    customer trust. Businesses can build credibility and a
                    better reputation by showcasing their dedication to privacy
                    protection and regulatory compliance.
                  </p>
                  {/* <p className="sec_text">
                    Thus, putting policies like data anonymization into practice
                    is not only required by law but also a calculated step
                    toward maintaining privacy standards and building confidence
                    in the business community. For businesses that anonymize
                    data in order to comply with privacy regulations such as the
                    CCPA and GDPR, regulatory compliance and reporting are
                    crucial. This entails deleting private information from data
                    before providing it to authorities that oversee regulations.
                    Companies can preserve people's privacy while still meeting
                    their reporting obligations by doing this. Achieving a
                    balance between protecting sensitive data and providing
                    regulatory bodies with the necessary data is imperative.
                    Without jeopardizing personal privacy, anonymizing data also
                    makes it easier to share pertinent information with
                    regulatory agencies. Businesses are guaranteed to be
                    compliant by this procedure.
                  </p> */}
                  <div className="mt-3">
                    <a onClick={contactRedirect} className="btn main_btn">
                      Talk to our expert <img src={whiteArrow} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service_section service_section_2" id="section6">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5">
                <div className="sec_content right">
                  <h2 className="sec_title">Research and Development</h2>
                  <p className="sec_text">
                    VISTA's ability to anonymize data is essential to the
                    investigation and creation of new ADAS technologies. To
                    preserve people's privacy, personal information is thus
                    deleted from the data. In this way, sensitive data is
                    protected while researchers focus on creating cutting-edge
                    technologies. Collaboration with outside research institutes
                    and technology partners is another feature of VISTA. Through
                    this collaboration, the field of ADAS technology is advanced
                    by exchanging information and resources without running the
                    risk of disclosing personal information. In general, VISTA
                    provides an invaluable platform for the advancement of ADAS
                    technology research and development. Researchers can
                    collaborate to develop cutting-edge technologies while
                    safeguarding the privacy of individuals by anonymizing data
                    and permitting external partners. In addition to advancing
                    the field, this creative strategy guarantees the privacy of
                    sensitive personal data during the research and development
                    phase.
                  </p>
                  <div className="mt-3">
                    <a onClick={contactRedirect} className="btn main_btn">
                      Talk to our expert <img src={whiteArrow} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img_box">
                  <img src={dataAnonymizationImg6} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service_section service_section_4" id="section7">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 order-1 order-lg-0">
                <div className="img_box">
                  <img src={dataAnonymizationImg7} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Performance Benchmarking</h2>
                  <p className="sec_text">
                    Performance benchmarking, or contrasting the effectiveness
                    of various ADAS features in varied car and driving scenario
                    scenarios, is a feature provided by VISTA. Manufacturers and
                    developers are able to compare the performance of their
                    systems to those of others by using anonymized data. They
                    can ensure that their systems function better and are more
                    dependable by using this information to inform their
                    improvements. For manufacturers and developers looking to
                    improve the performance of ADAS features, VISTA's
                    Performance Benchmarking is a helpful tool. They can
                    pinpoint areas that need improvement and implement the
                    necessary changes by evaluating data from various car models
                    and driving scenarios. They can develop more dependable and
                    efficient systems as a result of this process, which
                    eventually benefits drivers and raises road safety
                    standards.
                  </p>
                  <div className="mt-3">
                    <a onClick={contactRedirect} className="btn main_btn">
                      Talk to our expert <img src={whiteArrow} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service_section service_section_2" id="section8">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-7">
                <div className="sec_content right">
                  <h2 className="sec_title">
                    Customer Feedback and Improvement
                  </h2>
                  <p className="sec_text">
                    VISTA facilitates the collection of customer feedback
                    regarding ADAS system experiences by businesses. Because the
                    input is gathered anonymously, specific customer identities
                    are hidden from view. Manufacturers are able to improve ADAS
                    features based on real-world usage by analyzing this data.
                    This lets businesses improve a product's functionality and
                    user experience without sacrificing the privacy of their
                    customers. Manufacturers can enhance their ADAS systems with
                    data-driven improvements thanks to VISTA, which is one of
                    its main advantages. Businesses can pinpoint areas for
                    development and implement adjustments that will improve the
                    user experience overall by examining customer feedback. By
                    continuously updating and improving their products based on
                    real-world usage data, manufacturers are able to remain
                    competitive in the market. In general, VISTA offers
                    businesses a useful tool for gathering input, making
                    adjustments, and eventually offering a better product for
                    their clients.
                  </p>
                  <div className="mt-3">
                    <a onClick={contactRedirect} className="btn main_btn">
                      Talk to our expert <img src={whiteArrow} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="img_box">
                  <img src={dataAnonymizationImg8} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service_section service_section_1" id="section9">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-7 order-1 order-lg-0">
                <div className="img_box">
                  <img src={dataAnonymizationImg9} alt="" />
                </div>
              </div>
              <div className="col-lg-5 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Mapping and Localization</h2>
                  <p className="sec_text">
                    Vehicle localization and mapping have been greatly enhanced
                    by VISTA. It improves mapping services and the localization
                    algorithms used by ADAS by anonymizing location data
                    gathered from automobiles. This ensures that private
                    location data is kept private and permits precise mapping
                    and navigation services to be offered. This ensures that
                    cars can still navigate safely while also helping to protect
                    people's privacy. Vehicle mapping and localization
                    performance is greatly improved with VISTA. The technology
                    makes sure that sensitive information is protected by
                    anonymizing location data that is gathered from vehicles.
                    This permits ADAS to use more precise localization
                    algorithms and mapping services. VISTA helps drivers have a
                    better overall navigation experience while protecting their
                    location data by striking a balance between privacy and
                    functionality.
                  </p>
                  <div className="mt-3">
                    <a onClick={contactRedirect} className="btn main_btn">
                      Talk to our expert <img src={whiteArrow} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service_section service_section_2" id="section10">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-7">
                <div className="sec_content right">
                  <h2 className="sec_title">Simulation and Testing</h2>
                  <p className="sec_text">
                    Through the use of anonymized real-world data, VISTA is able
                    to produce realistic simulations that closely mimic
                    real-world driving situations. Because of this,
                    manufacturers can thoroughly test their ADAS features in a
                    secure setting without jeopardizing the original data
                    sources' privacy. The effectiveness and dependability of
                    ADAS features in practical situations is increased through
                    the use of VISTA in testing and simulation. Before
                    integrating their systems into real cars, manufacturers can
                    confidently evaluate how well their systems work thanks to
                    realistic simulations built on anonymized data. This
                    creative method safeguards the privacy of people whose data
                    is used in the testing process in addition to improving the
                    functionality and safety of ADAS features.
                  </p>
                  <div className="mt-3">
                    <a onClick={contactRedirect} className="btn main_btn">
                      Talk to our expert <img src={whiteArrow} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="img_box">
                  <img src={dataAnonymizationImg10} alt="" />
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

export default DataAnonymizationDetail;
