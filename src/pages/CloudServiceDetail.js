import React, { useEffect, useState, useRef } from "react";
import leftArrow from "../assets/images/left-arrow.svg";
import rightArrow from "../assets/images/right-arrow.svg";
import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/footer/Footer";
import whiteArrow from "../assets/images/white-arrow.svg";
import "../assets/css/style.css";

import cloudServiceImg1 from "../assets/images/cloud-service/paas.webp";
import cloudServiceImg2 from "../assets/images/cloud-service/saas.webp";
import cloudServiceImg3 from "../assets/images/cloud-service/cloud-storage.webp";
import cloudServiceImg4 from "../assets/images/cloud-service/data-analytics.webp";
import cloudServiceImg5 from "../assets/images/cloud-service/secruity-identify-management.webp";
import cloudServiceImg6 from "../assets/images/cloud-service/cloud-migration.webp";
import cloudServiceImg7 from "../assets/images/cloud-service/cloud-contact-center.webp";
import cloudServiceImg8 from "../assets/images/cloud-service/ui-ux.webp";
import { useLocation, useNavigate } from "react-router-dom";
import { Link, scroller } from "react-scroll";

const sections = [
  { id: "section1", label: "Platform as a Service (PaaS)" },
  { id: "section2", label: "Software as a Service (SaaS)" },
  { id: "section3", label: "Cloud Storage and Content Delivery" },
  { id: "section4", label: "Data Analytics" },
  { id: "section5", label: "Security and Identity Management" },
  { id: "section6", label: "Cloud Migration and Management" },
  { id: "section7", label: "Cloud Contact Center" },
  { id: "section8", label: "UX/UI Design" },
];

const CloudServiceDetail = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const menuRef = useRef(null);
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
    });
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
            <h1 className="banner_title">Cloud Service</h1>
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
                  <img src={cloudServiceImg1} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Platform as a Service (PaaS)</h2>
                  <p className="sec_text">
                    VISTA is a Platform as a Service (PaaS) provider that offers
                    a variety of solutions for companies that want to improve
                    their operations. With us, companies can access a variety of
                    tools and resources to help them build and manage their
                    applications more efficiently. By using VISTA's PaaS
                    services, companies can save time and resources by
                    outsourcing their infrastructure needs to a trusted service
                    provider.One of the main benefits of using VISTA as a PaaS
                    provider is the ability to quickly scale up or down based on
                    business needs. This flexibility allows companies to adapt
                    to changing market conditions and customer demands without
                    having to invest in expensive infrastructure upgrades. In
                    addition, VISTA provides businesses with a secure and
                    reliable platform to build and deploy applications, giving
                    them peace of mind that their data is safe and secure.
                    Overall, VISTA is a valuable partner for companies that want
                    to optimize their operations and stay competitive in today's
                    fast-paced market of.
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
                  <h2 className="sec_title">Software as a Service (SaaS)</h2>
                  <p className="sec_text">
                    VISTA is also Software as a Service (SaaS) provider that
                    offers various services to businesses. The company helps
                    organizations by providing them with software solutions that
                    are accessible over the internet. This means that businesses
                    can use our services without having to install any software
                    on their own computers. VISTA's SaaS model allows companies
                    to save time and money by outsourcing their software needs
                    to a reliable provider.
                  </p>
                  <p className="sec_text">
                    One of the key benefits of using VISTA's SaaS services is
                    the flexibility it offers to businesses. Organizations can
                    easily scale their usage of VISTA's software up or down
                    based on their needs, without having to make any long-term
                    commitments. Additionally, VISTA takes care of software
                    updates and maintenance, ensuring that businesses always
                    have access to the latest features and security patches.
                    Overall, VISTA's SaaS model provides businesses with a
                    cost-effective and efficient solution for their software
                    needs.
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
                  <img src={cloudServiceImg2} alt="" />
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
                  <img src={cloudServiceImg3} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">
                    Cloud Storage and Content Delivery
                  </h2>
                  <p className="sec_text">
                    Cloud storage allows users to store their files and data on
                    remote servers accessed through the internet. This means
                    that users can access their files from anywhere, as long as
                    they have an internet connection. Content delivery services
                    help to distribute content, such as videos or websites,
                    quickly and efficiently to users around the world.
                  </p>
                  <p className="sec_text">
                    VISTA's cloud storage and content delivery services are
                    important because they make it easier for individuals and
                    businesses to access and share their files and content. By
                    using VISTA's services, users can save space on their
                    devices and ensure that their files are securely backed up.
                    Additionally, VISTA's content delivery services help to
                    improve the speed and performance of websites and videos,
                    making them more accessible to a wider audience. Overall,
                    VISTA plays a crucial role in helping individuals and
                    businesses manage their data and share their content
                    effectively.
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
                  <h2 className="sec_title">Data Analytics</h2>
                  <p className="sec_text">
                    VISTA's data analytics services offer the opportunity to
                    delve deep into their data and uncover valuable insights.
                    Through the utilization of VISTA's advanced tools and
                    technology businesses can pinpoint emerging trends intricate
                    patterns and intricate correlations within their datasets.
                    This invaluable information can help organizations make
                    informed decisions optimize strategies and drive overall
                    growth and success.
                  </p>
                  <p className="sec_text">
                    This data can serve as a crucial tool in guiding businesses
                    towards success by enabling them to identify opportunities
                    for growth mitigate risks and stay ahead of their
                    competitors. Ultimately utilizing this information
                    effectively can pave the way for improved performance and
                    sustainable growth in today's dynamic and competitive
                    business landscape.
                  </p>
                  <p className="sec_text">
                    Through VISTA's innovative solutions organizations can
                    unlock new opportunities optimize strategies and gain a
                    competitive edge in the market.
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
                  <img src={cloudServiceImg4} alt="" />
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
                  <img src={cloudServiceImg5} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">
                    Security and Identity Management
                  </h2>
                  <p className="sec_text">
                    VISTA provides services related to identity management and
                    security. In order to guarantee safe access to resources,
                    this includes Identity and Access Management (IAM), which is
                    the management of user identities and permissions. Moreover,
                    we offer encryption services to improve data security by
                    encrypting data while it's in transit and at rest.
                    Additionally, we provide security monitoring and compliance
                    tools to support companies in keeping an eye out for
                    possible security breaches and making sure that rules are
                    followed in order to safeguard confidential data. We assist
                    businesses in bolstering their security protocols and
                    protecting their information through these services. To
                    securely restrict access to resources, IAM entails managing
                    user identities and permissions. Data is kept secure by our
                    encryption services, which encrypt data while it's in
                    transit and at rest. Additionally, to assist businesses in
                    keeping an eye on security, identifying potential threats,
                    and guaranteeing regulatory compliance, Through the
                    utilization of these services, organizations can improve
                    their overall security posture and safeguard confidential
                    data from possible threats.
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
                  <h2 className="sec_title">Cloud Migration and Management</h2>
                  <p className="sec_text">
                    VISTA's cloud migration and management service is not just
                    beneficial but rather crucial for companies seeking to
                    update and streamline their business practices. This service
                    plays a vital role in helping businesses transition smoothly
                    into the digital age and stay competitive in today's
                    fast-paced market. It is clear that VISTA's cloud migration
                    and management service is indispensable for any organization
                    striving to stay ahead in this rapidly changing
                    technological environment.
                  </p>
                  <p className="sec_text">
                    By teaming up with us, businesses can guarantee a seamless
                    migration to the cloud without the worry of compromising
                    data integrity or falling victim to security breaches. This
                    partnership allows companies to confidently embrace the
                    benefits of cloud technology while mitigating any potential
                    risks that may arise during the transition process.
                  </p>
                  <p className="sec_text">
                    The comprehensive suite of services provided by us allow
                    companies to harness the full potential of cloud technology
                    enabling them to streamline operations increase efficiency
                    and drive innovation. In a world where staying relevant and
                    adaptable is key to success VISTA serves as a trusted
                    partner for businesses looking to embrace the future of
                    technology and maximize their growth potential.
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
                  <img src={cloudServiceImg6} alt="" />
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
                  <img src={cloudServiceImg7} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Cloud Contact Center</h2>
                  <p className="sec_text">
                    VISTA a cutting-edge cloud-based contact center solution
                    revolutionizes the way businesses handle customer
                    interactions. By leveraging the power of the cloud VISTA
                    enables organizations to streamline and optimize their
                    customer service processes ultimately leading to improved
                    efficiency and customer satisfaction. With VISTA businesses
                    can easily manage customer inquiries resolve issues promptly
                    and deliver exceptional service all while ensuring seamless
                    communication across various channels.
                  </p>
                  <p className="sec_text">
                    VISTA offers businesses the advantage of scalability
                    allowing them the flexibility to customize the number of
                    agents and features according to their specific
                    requirements. This means that companies can effortlessly
                    expand or reduce their operations as needed ensuring optimal
                    efficiency and cost-effectiveness. The scalability of VISTA
                    empowers businesses to adapt to changing market demands and
                    growth opportunities without being constrained by fixed
                    limitations.
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
                  <h2 className="sec_title">UX/UI Design</h2>

                  <p className="sec_text">
                    VISTA is a renowned company known for its expertise in
                    providing top-notch UX/UI design services. Whether it's
                    designing websites mobile applications or software
                    interfaces VISTA has a proven track record of delivering
                    innovative and creative solutions tailored to meet the
                    unique needs of each client. Their dedication to staying
                    updated with the latest design trends and technologies sets
                    them apart in the competitive design industry.
                  </p>
                  <p className="sec_text">
                    Trust us to transform your digital presence and make a
                    lasting impression on your target audience. These
                    professionals work hand in hand with businesses to develop
                    intuitive and easy-to-navigate interfaces for their online
                    platforms.
                  </p>
                  <p className="sec_text">
                    Through collaboration and innovative design strategies they
                    play a crucial role in enhancing the overall user experience
                    and driving success for businesses in the digital realm. By
                    honing in on the core requirements of the target audience
                    they ensure that every aspect of the design is tailored to
                    enhance user experience. Their dedication to user-centric
                    design shines through in their ability to craft interfaces
                    that are intuitive and user-friendly.
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
                  <img src={cloudServiceImg8} alt="" />
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

export default CloudServiceDetail;
