import React, { useEffect, useState, useRef } from "react";
import leftArrow from "../assets/images/left-arrow.svg";
import rightArrow from "../assets/images/right-arrow.svg";
import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/footer/Footer";
import whiteArrow from "../assets/images/white-arrow.svg";
import "../assets/css/style.css";

import sapServiceImg1 from "../assets/images/sap-service/sap-4hana.webp";
import sapServiceImg2 from "../assets/images/sap-service/sap-business-technology.webp";
import sapServiceImg3 from "../assets/images/sap-service/sap-ariba.webp";
import sapServiceImg4 from "../assets/images/sap-service/sap-digital-supply-chain.webp";
import sapServiceImg5 from "../assets/images/sap-service/sap-financial-service.webp";
import sapServiceImg6 from "../assets/images/sap-service/sap-customer-service.webp";
import sapServiceImg7 from "../assets/images/sap-service/sap-cloud-program.webp";
import { useLocation, useNavigate } from "react-router-dom";
import { Link, scroller } from "react-scroll";

const sections = [
  { id: "section1", label: "SAP S/4HANA" },
  { id: "section2", label: "SAP Business Technology Platform" },
  { id: "section3", label: "SAP Ariba" },
  { id: "section4", label: "SAP Digital Supply Chain" },
  { id: "section5", label: "SAP Financial Services" },
  { id: "section6", label: "SAP Customer Experience (CX)" },
  { id: "section7", label: "SAP Cloud Platform" },
];

const SapServiceDetail = () => {
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
            <h5 className="banner_subtitle">Services</h5>
            <h1 className="banner_title">SAP Services</h1>
            <div className="breadcrumb_detail">
              <div className="breadcrumb_box">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Services
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
                  <img src={sapServiceImg1} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">SAP S/4HANA</h2>
                  <p className="sec_text">
                    VISTA offers comprehensive solutions to help businesses
                    optimize operations and streamline processes, whether it's
                    implementation, customization, or support. Trusted
                    worldwide, we set the standard for excellence in the SAP
                    ecosystem. SAP S/4HANA is a cutting-edge software solution
                    that empowers businesses to streamline operations and
                    optimize efficiency, enabling them to make informed
                    decisions and drive sustainable growth. By partnering with
                    us, businesses can optimize processes, enhance
                    decision-making, manage operations efficiently, and derive
                    insights from live data, leading to more informed and
                    strategic choices. VISTA's team of experienced professionals
                    offers tailored solutions for businesses looking to optimize
                    their use of SAP S/4HANA by customizing the platform to
                    align perfectly with their strategic goals and drive growth.
                    Overall, our range of services is designed to assist
                    businesses in harnessing the full potential of SAP S/4HANA
                    and achieving success by optimizing operations, enhancing
                    efficiency, and capitalizing on advanced capabilities.
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
                  <h2 className="sec_title">
                    SAP Business Technology Platform
                  </h2>
                  <p className="sec_text">
                    This innovative solution allows companies to harness
                    advanced technology to stay ahead of the competition and
                    adapt to the ever-changing business landscape. With us,
                    organizations can optimize their operations, improve
                    decision-making processes, and drive success by leveraging a
                    diverse array of tools and technologies aimed at enhancing
                    productivity. The service seamlessly integrates data from
                    various sources, providing a holistic perspective that
                    empowers organizations to make well-informed decisions and
                    optimize performance in today's fast-paced business
                    environment. We enable real-time analysis, allowing
                    companies to react promptly to changing market trends and
                    customer preferences, giving them a competitive edge and
                    paving the way for sustained success in the digital
                    marketplace.
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
                  <img src={sapServiceImg2} alt="" />
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
                  <img src={sapServiceImg3} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">SAP Ariba</h2>
                  <p className="sec_text">
                    SAP Ariba is a powerful software platform that streamlines
                    procurement processes for businesses of all sizes, enabling
                    efficient management of sourcing, procurement, and supplier
                    activities. We help enterprises optimize their procurement
                    processes by implementing and maximizing the benefits of SAP
                    Ariba, offering tailored solutions to drive productivity and
                    cost savings. Our services go beyond implementation,
                    providing training, consulting, and ongoing support to help
                    businesses maximize the potential of SAP Ariba and achieve
                    efficiency, cost savings, and growth. We excel in
                    customizing SAP Ariba solutions to align with businesses'
                    unique requirements and objectives, enabling them to fully
                    harness the platform's potential for enhanced outcomes and
                    efficiency in procurement processes.
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
                  <h2 className="sec_title">SAP Digital Supply Chain</h2>
                  <p className="sec_text">
                    This service helps businesses streamline their supply chain
                    processes by utilizing digital technologies. By leveraging
                    VISTA, enterprises can track their inventory, manage orders,
                    and optimize their logistics in a more efficient manner.
                    This ultimately leads to cost savings and improved overall
                    performance for the business.
                  </p>
                  <p className="sec_text">
                    One of the key benefits of choosing us is our ability to
                    provide real-time insights into the supply chain. This means
                    that businesses can make quicker and more informed decisions
                    based on up-to-date information. Additionally, we help
                    companies identify potential bottlenecks in their supply
                    chain and offer solutions to optimize operations.
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
                  <img src={sapServiceImg4} alt="" />
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
                  <img src={sapServiceImg5} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">SAP Financial Services</h2>
                  <p className="sec_text">
                    Our team of experts provides comprehensive services,
                    including budgeting assistance, investment planning, and
                    retirement savings. By offering personalized guidance and
                    strategic advice, we empower clients to achieve our
                    financial goals. Our dedicated team is committed to
                    providing unwavering support throughout the financial
                    journey, ensuring clients have the assistance they need to
                    succeed. With a wealth of knowledge and experience, they
                    offer personalized solutions to help clients take control of
                    their financial future and achieve long-term success. Trust
                    VISTA SAP Financial Services to guide you towards a
                    prosperous future.
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
            <div className="row gy-4">
              <div className="col-lg-5">
                <div className="sec_content right">
                  <h2 className="sec_title">SAP Customer Experience (CX)</h2>
                  <p className="sec_text">
                    VISTA is a cutting-edge SAP Customer Experience service
                    provider that helps clients enhance customer relations and
                    satisfaction. We provide tools and insights to understand
                    and cater to customer needs effectively, leading to
                    personalized experiences that drive loyalty and retention.
                    By monitoring customer engagements and tailoring products
                    and services, organizations can create personalized
                    experiences that foster loyalty and repeat business. We
                    streamline customer service processes, optimize operations,
                    and improve response times, ultimately enhancing the overall
                    customer experience. This commitment to customer
                    satisfaction sets businesses apart in today's competitive
                    market, paving the way for sustained growth and success.
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
                  <img src={sapServiceImg6} alt="" />
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
                  <img src={sapServiceImg7} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">SAP Cloud Platform</h2>
                  <p className="sec_text">
                    VISTA offers tools for businesses to efficiently manage and
                    utilize data, leading to increased productivity. With
                    features that simplify data management processes, we allow
                    companies to make informed decisions based on real-time and
                    accurate information. By securely storing and analyzing
                    large amounts of data, we enable quick decision-making and
                    valuable insights for strategic initiatives. Our seamless
                    connectivity with other SAP applications promotes
                    collaboration and streamlines processes, resulting in a more
                    integrated workflow. Our user-friendly interface and robust
                    features make it a crucial asset for companies looking to
                    enhance productivity and make informed decisions for
                    operational excellence and growth in today's competitive
                    market.
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

export default SapServiceDetail;
