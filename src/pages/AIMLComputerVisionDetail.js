import React, { useEffect, useState, useRef } from "react";
import leftArrow from "../assets/images/left-arrow.svg";
import rightArrow from "../assets/images/right-arrow.svg";
import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/footer/Footer";
import whiteArrow from "../assets/images/white-arrow.svg";
import "../assets/css/style.css";

import serviceImg1 from "../assets/images/ai-ml-data-mission/facial_recognition.svg";
import serviceImg2 from "../assets/images/ai-ml-data-mission/image_classification.svg";
import serviceImg3 from "../assets/images/ai-ml-data-mission/object-detection.svg";
import serviceImg4 from "../assets/images/ai-ml-data-mission/image_segmentation.svg";

import aimlImg1 from "../assets/images/ai-ml-data-mission/data-analytics.webp";
import aimlImg2 from "../assets/images/ai-ml-data-mission/predictive-analytics.webp";
import aimlImg3 from "../assets/images/ai-ml-data-mission/big-data-solution.webp";
import aimlImg4 from "../assets/images/ai-ml-data-mission/data-prepration.webp";
import aimlImg5 from "../assets/images/ai-ml-data-mission/natural-languaging.webp";
import aimlImg6 from "../assets/images/ai-ml-data-mission/computer-vision.webp";
import aimlImg7 from "../assets/images/ai-ml-data-mission/automated-inspection.webp";
import aimlImg8 from "../assets/images/ai-ml-data-mission/machine-vision.webp";
import aimlImg9 from "../assets/images/ai-ml-data-mission/smart-camera.webp";
import aimlImg10 from "../assets/images/ai-ml-data-mission/pc-based-vision.webp";
import aimlImg11 from "../assets/images/ai-ml-data-mission/vision-SW.webp";
import aimlImg12 from "../assets/images/ai-ml-data-mission/lighting-optics.webp";
import { useLocation, useNavigate } from "react-router-dom";
import { Link, scroller } from "react-scroll";

const sections = [
  { id: "section1", label: "Data Analytics and Machine Learning" },
  { id: "section2", label: "Predictive Analytics" },
  { id: "section3", label: "Big Data Solutions" },
  { id: "section4", label: "Data Preparation and Management" },
  { id: "section5", label: "Natural language processing (NLP)" },
  { id: "section6", label: "Computer Vision" },
  { id: "section7", label: "Automated Inspection" },
  { id: "section8", label: "Machine Vision" },
  { id: "section9", label: "Smart Camera Vision System" },
  { id: "section10", label: "PC Based Vision System" },
  { id: "section11", label: "Vision S/w Development" },
  { id: "section12", label: "Lighting and Optics Design" },
];

const AIMLComputerVisionDetail = () => {
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
            <h1 className="banner_title">AI/ML & COMPUTER VISION</h1>
            <div className="breadcrumb_detail">
              <div className="breadcrumb_box">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link onClick={handleRedirect}>Home</Link>
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
            <div className="row gy-4 align-items-center">
              <div className="col-lg-5 order-1 order-lg-0">
                <div className="img_box">
                  <img src={aimlImg1} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">
                    Data Analytics and Machine Learning
                  </h2>
                  <p className="sec_text">
                    VISTA, offers cutting-edge solutions to help businesses make
                    informed decisions based on data analysis. By utilizing
                    advanced algorithms and predictive modeling, we identify
                    patterns and trends in large sets of data, allowing
                    companies to optimize their operations and improve
                    efficiency. With VISTA's expertise in data analytics,
                    businesses can gain valuable insights that drive growth and
                    competitiveness in today's fast-paced market.
                  </p>
                  <p className="sec_text">
                    Moreover, this enables businesses to automate processes and
                    make accurate predictions based on historical data. By
                    harnessing the power of artificial intelligence, we help
                    organizations streamline their operations and reduce human
                    error. Through continuous learning and adaptation, it
                    empowers businesses to stay ahead of the curve and adapt to
                    changing market conditions. With VISTA as a trusted partner,
                    companies can leverage data analytics and machine learning
                    to unlock new opportunities and drive success in the digital
                    age.
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
                  <h2 className="sec_title">Predictive Analytics</h2>
                  <p className="sec_text">
                    We provide cutting-edge solutions to help businesses make
                    informed decisions based on data analysis. By utilizing
                    advanced algorithms and machine learning techniques, VISTA
                    can accurately forecast trends and patterns in various
                    industries. With VISTA's predictive modeling tools,
                    companies can optimize their operations, reduce risks, and
                    increase profitability.
                  </p>
                  <p className="sec_text">
                    VISTA's predictive analytics services are designed to cater
                    to the specific needs of each client, providing customized
                    solutions that deliver actionable insights. By leveraging
                    data from various sources, we help businesses identify
                    opportunities for growth and streamline their processes.
                    With VISTA's expertise in predictive analytics, companies
                    can stay ahead of the competition and make strategic
                    decisions that drive success.
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
                  <img src={aimlImg2} alt="" />
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
                  <img src={aimlImg3} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Big Data Solutions</h2>
                  <p className="sec_text">
                    We help businesses manage and analyze large amounts of data
                    to make better decisions. Our services include data storage,
                    processing, and visualization tools to help companies make
                    sense of their data. VISTA's technology is cutting-edge and
                    can help businesses stay competitive in today's data-driven
                    world.
                  </p>
                  <p className="sec_text">
                    By using our Big Data Solutions, businesses can improve
                    their efficiency and effectiveness. With VISTA's tools,
                    companies can easily access and analyze their data, leading
                    to better insights and decision-making. VISTA's technology
                    can help businesses save time and money by streamlining
                    their data processes. Overall, VISTA's Big Data Solutions
                    can help businesses thrive in a data-rich environment.
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
                  <h2 className="sec_title">Data Preparation and Management</h2>
                  <p className="sec_text">
                    With a focus on ensuring data accuracy and efficiency VISTA
                    offers a wide range of solutions to help businesses
                    effectively organize and make sense of their data. From data
                    cleansing and enrichment to data integration and analysis
                    VISTA is dedicated to providing top-notch services that meet
                    the unique needs of each client. With our expertise in data
                    organization and optimization businesses can leverage their
                    information assets to drive growth and stay competitive in
                    today's data-driven marketplace.
                  </p>
                  <p className="sec_text">
                    By leveraging VISTA's cutting-edge technology solutions
                    businesses have the opportunity to revolutionize their data
                    management practices leading to a significant enhancement in
                    operational efficiency.
                  </p>
                  <p className="sec_text">
                    This seamless integration of technology not only boosts
                    efficiency but also ensures that businesses stay ahead in
                    the competitive landscape by making informed decisions based
                    on accurate and up-to-date information. VISTA's innovative
                    solutions empower businesses to harness the true power of
                    their data turning raw information into actionable
                    strategies that drive success and growth.
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
                  <img src={aimlImg4} alt="" />
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
                  <img src={aimlImg5} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">
                    Natural language processing (NLP)
                  </h2>
                  <p className="sec_text">
                    With a strong focus on NLP VISTA excels in providing
                    cutting-edge solutions and services that leverage the power
                    of language processing. Whether it's developing algorithms
                    for sentiment analysis or creating chatbots for customer
                    service Through our work businesses can optimize their
                    processes streamline their operations and stay ahead of the
                    competition in today's fast-paced and data-driven
                    marketplace. Through the utilization of NLP technology, we
                    have the capability to support organizations by extracting
                    crucial insights from textual data. This aids companies in
                    making well-informed decisions that can ultimately improve
                    their overall performance and productivity. By leveraging
                    this advanced technology businesses can gain a competitive
                    edge in today's data-driven marketplace.
                  </p>
                  <p className="sec_text">
                    By harnessing the power of natural language processing
                    businesses can drive efficiency enhance customer experiences
                    and unlock new opportunities for growth. This not only leads
                    to significant cost savings but also ensures that tasks are
                    carried out with precision and speed. Ultimately embracing
                    such advancements in automation enables organizations to
                    stay ahead of the competition and deliver top-notch services
                    to their customers.
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
                  <h2 className="sec_title">Computer Vision</h2>
                  <p className="sec_text">
                    To improve the efficacy and efficiency of business
                    operations, VISTA provides cutting-edge computer vision
                    services. We leverage technology to help businesses cut
                    expenses, improve efficiency, and maintain their competitive
                    edge. Our services automate processes, improve security, and
                    extract insights from visual data using cutting-edge
                    algorithms and machine learning. Deeply analyzing visual
                    data, our technology provides useful insights and practical
                    solutions. Our services enable businesses to automate
                    processes, provide individualized services, and make
                    data-driven decisions that improve customer satisfaction. In
                    general, companies can gain new insights, optimize
                    processes, and gain a competitive edge in their industries
                    by utilizing VISTA's state-of-the-art technology and
                    computer vision expertise.
                  </p>
                  {/* <p className="sec_text">
                    Image classification is a crucial component of computer
                    vision as it involves the process of categorizing images
                    into distinct classes or labels depending on the visual
                    content they contain. This task is fundamental in enabling
                    machines to understand and interpret visual data
                    effectively. By analyzing the features and patterns within
                    an image the system can accurately assign it to the
                    appropriate category or label. Object detection is a
                    fundamental aspect of computer vision that plays a vital
                    role in various applications. By utilizing advanced
                    algorithms and techniques computer vision systems can
                    accurately identify and pinpoint objects within images or
                    videos.
                  </p>
                  <p className="sec_text">
                    Image segmentation on the other hand involves dividing an
                    image into different segments to analyze each part
                    separately. This process is crucial in various fields such
                    as medical imaging autonomous driving and satellite imagery
                    analysis. By segmenting an image we can extract valuable
                    information from each segment enabling us to identify
                    objects patterns and structures within the image more
                    effectively.
                  </p> */}
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img_box">
                  <img src={aimlImg6} alt="" />
                </div>
              </div>
            </div>
            <div className="computer_vision_service">
              <div className="row gy-4 align-items-center">
                <div className="col-lg-3 col-md-6">
                  <div className="service_box">
                    <div className="icon">
                      <img src={serviceImg1} alt="Facial Recognitio" />
                    </div>
                    <h5 className="card_title">Facial Recognition</h5>
                    <p className="card_text">
                      Facial recognition is vast and diverse ranging from
                      enhancing security measures to simplifying patient
                      identification processes in healthcare facilities.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="service_box">
                    <div className="icon">
                      <img src={serviceImg2} alt="Image Classification" />
                    </div>
                    <h5 className="card_title">Image Classification</h5>
                    <p className="card_text">
                      Image classification is fundamental in enabling machines
                      to understand and interpret visual data effectively.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="service_box">
                    <div className="icon">
                      <img src={serviceImg3} alt="Object detection" />
                    </div>
                    <h5 className="card_title">Object detection</h5>
                    <p className="card_text">
                      By leveraging advanced technology, we can accurately
                      identify and locate various items within an image or
                      video. This is a crucial task in fields such as computer
                      vision and artificial intelligence.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="service_box">
                    <div className="icon">
                      <img src={serviceImg4} alt="Image Segmentation" />
                    </div>
                    <h5 className="card_title">Image Segmentation</h5>
                    <p className="card_text">
                      It helps break down complex images into smaller parts,
                      making it easier to understand and analyze the content
                      within the image
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <a href="#" className="btn main_btn">
                Talk to our expert <img src={whiteArrow} alt="" />
              </a>
            </div>
          </div>
        </section>

        <section className="service_section service_section_4" id="section7">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-5 order-1 order-lg-0">
                <div className="img_box">
                  <img src={aimlImg7} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Automated Inspection</h2>
                  <p className="sec_text">
                    By implementing automated systems VISTA streamlines the
                    inspection process providing accurate and reliable results
                    in a fraction of the time it would take through manual
                    inspection methods. By implementing this technology
                    businesses can rest assured that their products not only
                    meet the necessary standards but are also devoid of any
                    defects. Automated Inspection streamlines the quality
                    control process allowing for more efficient and accurate
                    assessments of products. This technology helps companies
                    save time and resources while maintaining high-quality
                    standards.
                  </p>
                  <p className="sec_text">
                    With a proven track record of delivering exceptional results
                    VISTA continues to be the go-to partner for businesses
                    looking to streamline their inspection processes and improve
                    overall efficiency. Their cutting-edge technology and
                    unparalleled expertise in this field position them as the
                    top choice for businesses seeking to enhance their quality
                    control procedures.
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
                  <h2 className="sec_title">Machine Vision</h2>
                  <p className="sec_text">
                    Machine Vision is a cutting-edge technology that enables
                    machines to process visual information in a manner similar
                    to that of human beings. This innovative concept equips
                    machines with the ability to not only perceive images but
                    also to comprehend and analyze them mimicking the complex
                    intricacies of the human visual system. With a focus on
                    innovation and technology VISTA service provider stands out
                    as a trusted partner for companies looking to optimize their
                    operations through the implementation of advanced vision
                    systems.
                  </p>
                  <p className="sec_text">
                    In conjunction with clients in manufacturing healthcare and
                    retail VISTA implements tailored solutions to address
                    specific challenges and drive continuous improvement. This
                    strategic approach enables organizations to optimize their
                    workflows and achieve heightened levels of productivity and
                    success. These advanced robots play a crucial role in
                    various industries by assisting companies in tasks such as
                    product inspection inventory management and security
                    enhancement using cutting-edge machine vision technology.
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
                  <img src={aimlImg8} alt="" />
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
                  <img src={aimlImg9} alt="" />
                </div>
              </div>
              <div className="col-lg-5 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Smart Camera Vision System</h2>
                  <p className="sec_text">
                    This system is used in a wide range of applications, from
                    security surveillance to industrial automation, to improve
                    efficiency and accuracy. By using artificial intelligence
                    algorithms, it can detect and track objects, recognize
                    patterns, and make decisions based on the data it collects.
                  </p>
                  <p className="sec_text">
                    One of the key benefits of the Smart Camera Vision System is
                    its ability to automate tasks that would otherwise require
                    human intervention. This not only saves time and reduces the
                    risk of errors, but also allows businesses to operate more
                    efficiently and cost-effectively. Additionally, we provide
                    valuable insights and data that can be used to improve
                    processes and make informed decisions. Overall, this
                    technology has the potential to revolutionize various
                    industries and improve the way we interact with the world
                    around us.
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
                  <h2 className="sec_title">PC Based Vision System</h2>
                  <p className="sec_text">
                    VISTA's PC Based Vision System service utilizes cutting-edge
                    technology to assist businesses in enhancing their
                    operational efficiency. By leveraging advanced vision
                    capabilities organizations can streamline processes increase
                    productivity and achieve greater accuracy in various tasks.
                    our solution empowers companies to stay ahead of the
                    competition by providing real-time insights and actionable
                    data that drive informed decision-making. With our
                    innovative approach businesses can optimize their
                    performance and unlock new opportunities for growth and
                    success.
                  </p>
                  <p className="sec_text">
                    By implementing this innovative system businesses can
                    streamline their operations and boost productivity. The
                    automation capabilities provided by this system enable
                    companies to eliminate manual tasks reduce errors and
                    optimize workflow processes.
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
                  <img src={aimlImg10} alt="" />
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
                  <img src={aimlImg11} alt="" />
                </div>
              </div>
              <div className="col-lg-5 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Vision S/w Development</h2>
                  <p className="sec_text">
                    Our team behind VISTA is dedicated to utilizing the latest
                    technologies and techniques to develop custom software that
                    meets the unique needs of each client. By understanding the
                    vision and goals of the client, we are able to tailor our
                    software development process to ensure that the final
                    product exceeds expectations
                  </p>
                  <p className="sec_text">
                    One of our key features is our commitment to ongoing support
                    and maintenance. The team at VISTA understands that software
                    development is an evolving process, and they are dedicated
                    to providing continuous support to ensure the longevity and
                    success of the software they create. Our clients can rest
                    assured that their software will be regularly updated and
                    maintained to keep up with changing industry standards and
                    requirements.
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
                  <h2 className="sec_title">Lighting and Optics Design</h2>
                  <p className="sec_text">
                    Lighting and optics design in VISTA involves creating
                    efficient and effective lighting systems for various spaces.
                    Designers carefully consider the placement and type of
                    lights to ensure optimal brightness and visibility. We also
                    take into account the color temperature of the lights to
                    create the desired ambiance in the space. By using advanced
                    optics technology, designers can control the direction and
                    intensity of light, enhancing the overall functionality and
                    aesthetics of the area.
                  </p>
                  <p className="sec_text">
                    By strategically placing lights and using innovative optics,
                    designers can create visually appealing environments that
                    are both practical and beautiful. The design process
                    involves a deep understanding of how light interacts with
                    different materials and surfaces, allowing designers to
                    create dynamic and engaging spaces. Through thoughtful
                    planning and execution, lighting and optics design can
                    greatly impact the way people perceive and interact with
                    their surroundings.
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
                  <img src={aimlImg12} alt="" />
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

export default AIMLComputerVisionDetail;
