import React, { useEffect, useState, useRef } from "react";
import leftArrow from "../assets/images/left-arrow.svg";
import rightArrow from "../assets/images/right-arrow.svg";
import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/footer/Footer";
import whiteArrow from "../assets/images/white-arrow.svg";
import "../assets/css/style.css";

import dataCollectionImg1 from "../assets/images/data-collection/sensor-intergration.webp";
import dataCollectionImg2 from "../assets/images/data-collection/data-logging-storage.webp";
import dataCollectionImg3 from "../assets/images/data-collection/high-precision-mapping.webp";
import dataCollectionImg4 from "../assets/images/data-collection/test-veichle-managment.webp";
import dataCollectionImg5 from "../assets/images/data-collection/scenario-routing-planing.webp";
import dataCollectionImg6 from "../assets/images/data-collection/data-annotation-labeling.webp";
import dataCollectionImg7 from "../assets/images/data-collection/real-world-driving-collection.webp";
import dataCollectionImg8 from "../assets/images/data-collection/simulation-data-genration.webp";
import dataCollectionImg9 from "../assets/images/data-collection/data-quality-assurence.webp";
import dataCollectionImg10 from "../assets/images/data-collection/requlatring.webp";
import dataCollectionImg11 from "../assets/images/data-collection/data-analyses.webp";
import dataCollectionImg12 from "../assets/images/data-collection/collabration-intergration.webp";
import dataCollectionImg13 from "../assets/images/data-collection/machine-learning.webp";
import { useLocation, useNavigate } from "react-router-dom";
import { Link, scroller } from "react-scroll";

const sections = [
  { id: "section1", label: "Sensor Integration and Calibration" },
  { id: "section2", label: "Data Logging and Storage" },
  { id: "section3", label: "High-Precision Mapping" },
  { id: "section4", label: "Test Vehicle Fleet Management" },
  { id: "section5", label: "Scenario and Route Planning" },
  { id: "section6", label: "Data Annotation and Labeling" },
  { id: "section7", label: "Real-World Driving Data Collection" },
  { id: "section8", label: "Simulation Data Generation" },
  { id: "section9", label: "Data Quality Assurance" },
  { id: "section10", label: "Regulatory Compliance and Reporting" },
  { id: "section11", label: "Data Analysis and Insights" },
  { id: "section12", label: "Collaboration and Integration Support" },
  { id: "section13", label: "Machine Learning Model Training" },
];

const DataCollectionDetail = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const menuRef = useRef(null);
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (location.state?.sectionId) {
      scroller.scrollTo(location.state.sectionId, {
        duration: 100,
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

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
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
            <h1 className="banner_title">Data Collection</h1>
            <div className="breadcrumb_detail">
              <div className="breadcrumb_box">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link onClick={handleRedirect}>Home</Link>
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
            <div className="row gy-4 align-items-center">
              <div className="col-lg-5 order-1 order-lg-0">
                <div className="img_box">
                  <img src={dataCollectionImg1} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">
                    Sensor Integration and Calibration
                  </h2>
                  <p className="sec_text">
                    In order to improve data collection efficiency, VISTA is
                    necessary for the smooth integration and precise calibration
                    of sensors. When it comes to making decisions based on solid
                    information and streamlining procedures, we are essential.
                    Sensor synchronization is essential for efficient data
                    collection, enhancing accuracy and performance overall.
                    Ensuring precise and reliable data collection requires the
                    integration and calibration of sensors. VISTA increases
                    confidence in data accuracy by painstakingly aligning
                    sensors for accurate measurements. This painstaking
                    attention to detail is essential for improving outcomes and
                    data refinement, which improves decision-making. Accurate
                    outcomes and the success of data analysis depend on the
                    integration and calibration processes being dedicated. VISTA
                    devotes its attention to this procedure, which is essential
                    for improved decision-making and successful data analysis.
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
            <div className="row gy-4 align-items-center">
              <div className="col-lg-7">
                <div className="sec_content right">
                  <h2 className="sec_title">Data Logging and Storage</h2>
                  <p className="sec_text">
                    Reliability and efficiency in gathering and storing data
                    from multiple sources are hallmarks of VISTA's data logging
                    expertise. Researchers and analysts can more easily access
                    and use the information for decision-making when data is
                    organized in an organized way. Real-time logging of data is
                    possible with VISTA, guaranteeing accurate and current data.
                    In domains like scientific research, industrial processes,
                    and environmental monitoring, where data accuracy is
                    critical, this is indispensable. In order to safeguard the
                    data against loss or corruption, the software also provides
                    safe storage choices. In summary, VISTA presents a
                    dependable and effective solution for data logging and
                    storage, thereby guaranteeing the success of data collection
                    services.
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
                  <img src={dataCollectionImg2} alt="" />
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
                  <img src={dataCollectionImg3} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">High-Precision Mapping</h2>
                  <p className="sec_text">
                    VISTA simplifies intricate mapping projects and creates
                    opportunities for industries that depend on accurate data.
                    With the most sophisticated tools, users can navigate with
                    assurance and dependability. Areas are meticulously mapped
                    by this technology, improving data analysis and
                    comprehension. Unmatched accuracy and detail provide a
                    comprehensive understanding of the data. Better
                    decision-making and results can be achieved by using VISTA
                    to increase the efficiency and accuracy of data collection
                    processes. The high-precision mapping service expedites the
                    procedure and provides accurate and comprehensive data to
                    support better decision-making. It is a dependable option
                    for study, route planning, and geographic data analysis,
                    guaranteeing full and accurate information for better
                    results and well-informed decision-making. With the help of
                    the service, users can obtain information with greater
                    efficiency and accuracy, guaranteeing that they have access
                    to accurate and comprehensive data to make better decisions.
                    With VISTA, users can rely on a dependable platform for all
                    their mapping needs, enabling them to make confident
                    decisions and achieve superior results.
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
            <div className="row gy-4 align-items-center">
              <div className="col-lg-7">
                <div className="sec_content right">
                  <h2 className="sec_title">Test Vehicle Fleet Management</h2>
                  <p className="sec_text">
                    VISTA seeks to provide information about the dependability
                    and efficiency of vehicles through the use of technology and
                    sophisticated data gathering techniques. Researcher and
                    industry decisions about vehicle design, maintenance
                    schedules, and fuel efficiency are aided by this data, which
                    also helps in understanding consumer behavior and
                    maintenance trends. Companies can optimize their fleets of
                    vehicles, increase productivity, cut expenses, and develop a
                    competitive advantage in fleet management by taking part in
                    the VISTA program.
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
                  <img src={dataCollectionImg4} alt="" />
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
                  <img src={dataCollectionImg5} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Scenario and Route Planning</h2>
                  <p className="sec_text">
                    Ascendion and HFS Research have authored a first-of-its-kind
                    Researchers can simplify data collection with the help of
                    VISTA, a Visual Interactive Scenario and Route Planning
                    tool. Researchers are able to collect and analyze data more
                    effectively thanks to its user-friendly platform for
                    planning and organizing data collection procedures. By
                    outlining several scenarios and possible routes, the tool
                    facilitates the exploration of numerous options and routes
                    for the purpose of gathering necessary data. To meet
                    specific research goals, researchers can customize the
                    parameters of their data collection plan. By using VISTA,
                    researchers can ensure more accurate and dependable data
                    collection, optimize planning strategies, and save time and
                    money. In order to produce more significant research
                    findings, we support informed decision-making, accuracy as a
                    top priority, and reliability in data collection.
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

        <section className="service_section service_section_2" id="section6">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-5">
                <div className="sec_content right">
                  <h2 className="sec_title">Data Annotation and Labeling</h2>
                  <p className="sec_text">
                    Annotating and labeling data sets is made efficient with
                    VISTA. It improves accuracy and comprehensiveness by aiding
                    in the organization and classification of data. Researchers
                    and businesses can obtain and evaluate data more efficiently
                    and produce insightful findings and well-informed
                    decision-making by simplifying the process. Additionally,
                    VISTA makes managing complicated datasets easier by
                    streamlining the arrangement and classification of diverse
                    data kinds. Annotating and labeling data is critical to
                    bridging the gap between unprocessed data and insightful
                    conclusions. The features of VISTA guarantee accurate data
                    labeling, producing more consistent outcomes. In general,
                    VISTA improves organizational productivity by streamlining
                    the data collection process and saving time and resources.
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
                  <img src={dataCollectionImg6} alt="" />
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
                  <img src={dataCollectionImg7} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">
                    Real-World Driving Data Collection
                  </h2>
                  <p className="sec_text">
                    Our knowledge of driving behaviors and patterns in diverse
                    environments is improved by the innovative service VISTA,
                    which gathers real driving data. By examining this data,
                    important insights into how people make decisions when
                    driving are obtained, which helps to create transportation
                    systems that are safer and more effective. To make driving
                    safer and more effective, the service also attempts to
                    advance technological advancements, optimize driving
                    procedures, and enhance road safety measures. To further
                    improve road safety and lower accident rates, VISTA's data
                    collection service assists in identifying risky driving
                    behaviors. By employing cutting-edge technology and creative
                    solutions, VISTA is influencing urban mobility and
                    transportation in the future and fostering a more inclusive
                    and sustainable community.
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
            <div className="row gy-4 align-items-center">
              <div className="col-lg-7">
                <div className="sec_content right">
                  <h2 className="sec_title">Simulation Data Generation</h2>
                  <p className="sec_text">
                    With its immersive and interactive, needs-specific
                    simulations, VISTA is a state-of-the-art technology that is
                    revolutionizing training. In order to generate realistic
                    scenarios for skill development in a safe setting, it
                    employs sophisticated algorithms. To improve their skills in
                    a variety of areas, users have access to a wide range of
                    carefully crafted scenarios. Professionals can confidently
                    hone their skills and practice, from pilots to surgeons.
                    VISTA is a useful tool for people who want to successfully
                    handle challenging and complicated situations.
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
                  <img src={dataCollectionImg8} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service_section service_section_1" id="section9">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-7 order-1 order-lg-0">
                <div className="img_box">
                  <img src={dataCollectionImg9} alt="" />
                </div>
              </div>
              <div className="col-lg-5 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Data Quality Assurance</h2>
                  <p className="sec_text">
                    To ensure accurate and trustworthy data for well-informed
                    decision-making, data quality assurance is essential for
                    organizations utilizing platforms such as VISTA. Credibility
                    is increased, mistakes are detected, and valuable insights
                    are made possible by upholding high standards. The integrity
                    of data is ensured by adhering to standard operating
                    procedures, which permits precise comparison and analysis.
                    To improve data accuracy and reliability, VISTA's quality
                    assurance procedures identify and fix errors. Integrity and
                    precision in data gathering and processing are guaranteed by
                    VISTA's standardized procedures, which also reduce mistakes
                    and increase openness. Research findings are more dependable
                    and of higher quality when these protocols are used as a
                    framework for data management. VISTA offers high-quality
                    information for decision-making by utilizing automated tools
                    to increase data precision and reliability.
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
            <div className="row gy-4 align-items-center">
              <div className="col-lg-7">
                <div className="sec_content right">
                  <h2 className="sec_title">
                    Regulatory Compliance and Reporting
                  </h2>
                  <p className="sec_text">
                    By helping businesses comply with laws and regulations,
                    VISTA's Regulatory Compliance and Reporting services ensure
                    compliance and lower the risk of penalties. Businesses
                    preserve their reputation and stakeholders' trust by being
                    proactive and knowledgeable. Businesses can concentrate on
                    expansion and success as VISTA's team of experts handles the
                    complicated regulatory environment. VISTA makes sure clients
                    are always ahead of the curve and acting morally by
                    providing comprehensive audits and customized reports.
                    Businesses achieve maximum efficiency, simplify processes,
                    and prosper in their sectors with the help of VISTA's
                    experience.
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
                  <img src={dataCollectionImg10} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service_section service_section_3" id="section11">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-7 order-1 order-lg-0">
                <div className="img_box">
                  <img src={dataCollectionImg11} alt="" />
                </div>
              </div>
              <div className="col-lg-5 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Data Analysis and Insights</h2>
                  <p className="sec_text">
                    Businesses are equipped with useful information to make
                    strategic decisions thanks to VISTA's Data Analysis and
                    Insights services. To evaluate data, draw conclusions, and
                    spur growth, our team employs state-of-the-art technologies.
                    Businesses can achieve a competitive advantage, comfortably
                    handle obstacles, and fully utilize their data by
                    collaborating with VISTA. Strategic planning can be guided
                    by the insightful information that VISTA offers about
                    trends, patterns, and correlations. With the aid of data,
                    organizations can forecast results, improve decision-making,
                    and react to market shifts in a proactive manner. By
                    utilizing VISTA's services, businesses can precisely target
                    their expansion efforts, adjust their strategies, and
                    outperform rivals in a market that is changing quickly.
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

        <section className="service_section service_section_2" id="section12">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-5">
                <div className="sec_content left">
                  <h2 className="sec_title">
                    Collaboration and Integration Support
                  </h2>
                  <p className="sec_text">
                    By working together with neighborhood organizations,
                    volunteers close gaps and bring about positive change in
                    neglected areas by addressing concerns like housing,
                    healthcare, education, and poverty. VISTA members work
                    together to combine resources and make a significant
                    difference for underprivileged people and communities. Their
                    emphasis on long-term, sustainable solutions places a strong
                    emphasis on community empowerment and development,
                    strengthening resilience and well-being by addressing the
                    root causes of social issues. VISTA empowers communities to
                    flourish and thrive for years to come by bringing positive
                    change through commitment and experience.
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
                  <img src={dataCollectionImg12} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service_section service_section_1" id="section13">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-7 order-1 order-lg-0">
                <div className="img_box">
                  <img src={dataCollectionImg13} alt="" />
                </div>
              </div>
              <div className="col-lg-5 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Machine Learning Model Training</h2>
                  <p className="sec_text">
                    Organizations can streamline operations, make data-driven
                    decisions, and effectively accomplish strategic goals with
                    the aid of VISTA's machine learning model training services.
                    Companies can stay ahead of the curve, seize new growth
                    opportunities, and improve decision-making by utilizing
                    critical insights with customized solutions. With the
                    ability to make well-informed decisions based on a thorough
                    grasp of data, VISTA gives users the ability to improve
                    product quality, optimize marketing strategies, and increase
                    productivity. With the help of these services, companies can
                    stay ahead of the competition, predict market trends, and
                    react quickly to customer preferences for long-term success
                    in the quickly changing market environment.
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
      </div>

      <Footer />
    </div>
  );
};

export default DataCollectionDetail;
