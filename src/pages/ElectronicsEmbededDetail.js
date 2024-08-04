import React, { useEffect, useState, useRef } from "react";
import leftArrow from "../assets/images/left-arrow.svg";
import rightArrow from "../assets/images/right-arrow.svg";
import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/footer/Footer";
import whiteArrow from "../assets/images/white-arrow.svg";
import "../assets/css/style.css";

import electronicsEmbededImg1 from "../assets/images/electronics-embeded/firmware-design.webp";
import electronicsEmbededImg2 from "../assets/images/electronics-embeded/embeded-software.webp";
import electronicsEmbededImg3 from "../assets/images/electronics-embeded/system-intergration.webp";
import electronicsEmbededImg4 from "../assets/images/electronics-embeded/hmi-design.webp";
import electronicsEmbededImg5 from "../assets/images/electronics-embeded/pcb-design.webp";
import electronicsEmbededImg6 from "../assets/images/electronics-embeded/antenna-design.webp";
import electronicsEmbededImg7 from "../assets/images/electronics-embeded/rf-wireless-design.webp";
import electronicsEmbededImg8 from "../assets/images/electronics-embeded/system-molding.webp";
import electronicsEmbededImg9 from "../assets/images/electronics-embeded/system-integration.webp";
import electronicsEmbededImg10 from "../assets/images/electronics-embeded/cable-harness.webp";
import { useLocation, useNavigate } from "react-router-dom";
import { Link, scroller } from "react-scroll";

const sections = [
  { id: "section1", label: "Firmware Design" },
  { id: "section2", label: "Embedded Software Development" },
  { id: "section3", label: "System Integration and Testing" },
  { id: "section4", label: "HMI design" },
  { id: "section5", label: "PCB Design" },
  { id: "section6", label: "Antena Design" },
  { id: "section7", label: "RF/Wireless Design" },
  { id: "section8", label: "System Modeling" },
  { id: "section9", label: "System Integration" },
  { id: "section10", label: "Cable Harness" },
];

const ElectronicsEmbededDetail = () => {
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
            <h1 className="banner_title">Electronics & Embedded Design</h1>
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
                  <img src={electronicsEmbededImg1} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Firmware Design</h2>
                  <p className="sec_text">
                    Our expertise lies in delivering exceptional firmware design
                    services tailored to meet the unique needs of our clients.
                    With a focus on innovation and quality, we strive to exceed
                    expectations and deliver top-notch results that drive
                    success for our clients. We place a strong emphasis on the
                    significance of firmware in guaranteeing the seamless
                    functionality of electronic devices. Our dedicated team
                    works diligently to produce top-notch designs that not only
                    meet but exceed industry standards for reliability and
                    efficiency.
                  </p>
                  <p className="sec_text">
                    Whether you are a start-up company seeking to create
                    firmware for a cutting-edge product or an established firm
                    wanting to enhance the performance of your existing
                    firmware, VISTA is your ideal partner. Let us assist you in
                    bringing your ideas to life and taking your products to the
                    next level. Our track record speaks for itself when it comes
                    to providing cutting-edge solutions that consistently
                    surpass our clients' expectations.
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
                  <h2 className="sec_title">Embedded Software Development</h2>
                  <p className="sec_text">
                    We help businesses create software that is embedded into
                    devices like smartphones, cars, and medical equipment. Our
                    services are essential for organizations looking to enhance
                    the functionality and performance of their products.
                  </p>
                  <p className="sec_text">
                    By partnering with us, organizations can save time and
                    resources while improving the overall quality of their
                    products. VISTA's commitment to excellence and innovation
                    makes them a trusted partner for businesses looking to stay
                    ahead in today's competitive market.
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
                  <img src={electronicsEmbededImg2} alt="" />
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
                  <img src={electronicsEmbededImg3} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">System Integration and Testing</h2>
                  <p className="sec_text">
                    It involves integrating various subsystems into one system
                    and thoroughly testing it to ensure functionality and
                    reliability. This process helps identify and resolve any
                    issues before software deployment, contributing to the
                    overall quality of the final product. Integration requires
                    coordination of different elements to ensure they work
                    harmoniously. Thorough testing and debugging are essential
                    to detect and resolve potential issues before public
                    release, ensuring smooth operation and user experience.
                    Continuous testing throughout the development process helps
                    identify and address issues early, leading to a more robust
                    and reliable end product. Quality control measures ensure
                    the end product meets high standards, enhancing customer
                    satisfaction and building trust in the brand.
                  </p>
                  <p className="sec_text">
                    Ultimately, investing in quality control procedures gives a
                    competitive edge in the market and solidifies the company's
                    reputation for excellence.
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
                  <h2 className="sec_title">HMI design</h2>
                  <p className="sec_text">
                    We put in relentless effort to ensure that the interfaces
                    are user-friendly, intuitive, and easy to comprehend. By
                    focusing on creating visually appealing designs that strike
                    a balance between form and function, they aim to provide
                    users with an engaging and efficient experience. Our
                    dedication to improving user satisfaction and engagement
                    through seamless interaction processes sets them apart in
                    the industry. Our commitment to creating visually appealing
                    and user-friendly interfaces helps businesses attract and
                    retain customers by providing exceptional user experiences.
                    Through innovative design strategies and attention to
                    detail, we ensure that our clients' products and services
                    are not only functional but also visually striking, leaving
                    a lasting impression on their target audience.
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
                  <img src={electronicsEmbededImg4} alt="" />
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
                  <img src={electronicsEmbededImg5} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">PCB Design</h2>
                  <p className="sec_text">
                    We specialize in providing high-quality solutions for all
                    PCB design needs, from simple circuit boards to complex
                    projects. Our expertise and precision are crucial in
                    ensuring flawless design and manufacturing of circuit
                    boards, meeting industry standards and exceeding efficiency
                    and reliability requirements for electronic devices. VISTA's
                    PCB design service plays a pivotal role in ensuring the
                    smooth operation of electronic devices, from concept to
                    completion, bringing innovative ideas to life and enabling
                    seamless connectivity within devices. Our proficiency in
                    designing and fabricating circuit boards ensures flawless
                    functionality and performance, assisting clients in
                    manufacturing reliable and cutting-edge electronic products
                    across various industries.
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
                  <h2 className="sec_title">Antena Design</h2>
                  <p className="sec_text">
                    We are known for our expertise in designing advanced
                    antennas for various purposes, focusing on innovation and
                    precision. Antennas play a crucial role in modern
                    communication systems by receiving and transmitting signals
                    essential for TV broadcasts, radio transmissions, and mobile
                    phone communications. VISTA's team collaborates seamlessly
                    to create antennas that excel in performance and
                    reliability. Our approach involves evaluating key factors
                    like signal frequency and transmission distance to ensure
                    peak performance. Through meticulous attention to detail and
                    rigorous testing, we deliver cutting-edge antenna solutions
                    tailored to meet the unique needs of each client. Our
                    commitment to excellence and innovative technology positions
                    them as leaders in the field of antenna design services.
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
                  <img src={electronicsEmbededImg6} alt="" />
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
                  <img src={electronicsEmbededImg7} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">RF/Wireless Design</h2>
                  <p className="sec_text">
                    VISTA's RF/Wireless Design services are tailored to assist
                    businesses in developing cutting-edge communication systems
                    that are not only efficient but also highly reliable.
                    Whether you are looking to enhance your current
                    communication infrastructure or build a brand-new system
                    from the ground up VISTA is here to partner with you every
                    step of the way. With a focus on tailoring our services to
                    suit the individual requirements of every client our team of
                    professionals excels in creating personalized solutions.
                  </p>
                  <p className="sec_text">
                    By taking the time to understand the specific needs and
                    goals of each client we are able to deliver custom solutions
                    that not only meet but exceed expectations. Our dedication
                    to providing personalized client-centric services sets us
                    apart in the industry making us the go-to choice for those
                    seeking unique and effective solutions.
                  </p>
                  <p className="sec_text">
                    Trust us to fine-tune your RF systems and ensure that your
                    network operates at its best.
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
                  <h2 className="sec_title">System Modeling</h2>
                  <p className="sec_text">
                    With VISTA, engineers and designers can simulate different
                    scenarios and test out potential changes before implementing
                    them in real life. By creating virtual models of systems,
                    designers can identify potential issues and make
                    improvements early on, saving time and resources in the long
                    run. Additionally, VISTA helps to improve communication and
                    collaboration among team members by providing a visual
                    representation of the system that everyone can easily
                    understand.
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
                  <img src={electronicsEmbededImg8} alt="" />
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
                  <img src={electronicsEmbededImg9} alt="" />
                </div>
              </div>
              <div className="col-lg-5 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">System Integration</h2>
                  <p className="sec_text">
                    VISTA System Integration is a process where different
                    computer systems and software applications are combined to
                    work together seamlessly. This integration allows for better
                    communication and data sharing between various systems
                    within an organization. It helps streamline processes and
                    improve efficiency by ensuring that all systems are
                    interconnected and can easily exchange information. Overall,
                    VISTA System Integration service plays a crucial role in
                    helping businesses operate more effectively and make better
                    decisions based on accurate and up-to-date data.
                  </p>
                  <p className="sec_text">
                    This is essential for modern businesses looking to stay
                    competitive and efficient in today's fast-paced digital
                    world.
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
                  <h2 className="sec_title">Cable Harness</h2>
                  <p className="sec_text">
                    VISTA known for its excellence and innovation in design,
                    manufacturing, installation, and maintenance. With a team of
                    skilled professionals and advanced technology, VISTA focuses
                    on creating custom cable solutions tailored to various
                    industries. They ensure precision, efficiency, and
                    reliability in every project, exceeding customer
                    expectations. VISTA's commitment to quality and attention to
                    detail guarantees flawless performance in each cable
                    harness. Clients trust us for dependable and efficient
                    wiring solutions that meet high standards of durability and
                    reliability. We excel in customizing cable harnesses to
                    specific needs, delivering superior quality products across
                    a range of industries with a focus on precision and
                    reliability.
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
                  <img src={electronicsEmbededImg10} alt="" />
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

export default ElectronicsEmbededDetail;
