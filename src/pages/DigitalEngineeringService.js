import React, { useEffect, useState, useRef } from "react";
import leftArrow from "../assets/images/left-arrow.svg";
import rightArrow from "../assets/images/right-arrow.svg";
import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/footer/Footer";
import whiteArrow from "../assets/images/white-arrow.svg";
import "../assets/css/style.css";

import digiImg1 from "../assets/images/digital_engineering-service/advanced-fea-cfd.webp";
import digiImg2 from "../assets/images/digital_engineering-service/manufacture-process-simulation.webp";
import digiImg3 from "../assets/images/digital_engineering-service/infused-cad-aml.webp";
import digiImg4 from "../assets/images/digital_engineering-service/structural-stamping.webp";
import digiImg5 from "../assets/images/digital_engineering-service/mechanical-stamping.webp";
import digiImg6 from "../assets/images/digital_engineering-service/sesmic-pe-stamping.webp";
import digiImg7 from "../assets/images/digital_engineering-service/product-design-engineering.webp";
import digiImg8 from "../assets/images/digital_engineering-service/product-lifecycle-management.webp";
import digiImg9 from "../assets/images/digital_engineering-service/system-design-engineering.webp";
import digiImg10 from "../assets/images/digital_engineering-service/cad-migration.webp";
import digiImg11 from "../assets/images/digital_engineering-service/manufacture-engineering.webp";
import digiImg12 from "../assets/images/digital_engineering-service/digital-transformation.webp";
import digiImg13 from "../assets/images/digital_engineering-service/robotic-proces-management.webp";
import digiImg14 from "../assets/images/digital_engineering-service/ar-virtual-reality.webp";
import digiImg15 from "../assets/images/digital_engineering-service/cyber-secruity.webp";
import { Link, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const sections = [
  { id: "section1", label: "Advanced FEA/CFD Simulation" },
  { id: "section2", label: "Manufacturing Process Simulation" },
  { id: "section3", label: "Infuse AI/ML into CAD/CAE Automation" },
  { id: "section4", label: "Structural Engineering PE Stamping" },
  { id: "section5", label: "Mechanical PE Stamping" },
  { id: "section6", label: "Seismic PE stamping" },
  { id: "section7", label: "Product Design Engineering" },
  { id: "section8", label: "Product Lifecyle Management" },
  { id: "section9", label: "System Design and Engineering" },
  { id: "section10", label: "CAD Migration Services" },
  { id: "section11", label: "Manufacturing Engineering" },
  { id: "section12", label: "Digital Transformation" },
  { id: "section13", label: "Robotic Process Automation (RPA)" },
  { id: "section14", label: "Augmented Reality and Virtual Reality" },
  { id: "section15", label: "Cybersecurity" },
];

const DigitalEngineeringService = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const menuRef = useRef(null);
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    document
      .getElementById(sectionId)
      .scrollIntoView({ behavior: "smooth", offset: -170 });
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

  return (
    <div>
      <Header />

      <div className="sub_banner">
        <div className="container">
          <div className="banner_content_desc">
            <h5 className="banner_subtitle">Services</h5>
            <h1 className="banner_title">Digital Engineering</h1>
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
            <div className="row gy-4 align-items-center">
              <div className="col-lg-5 order-1 order-lg-0">
                <div className="img_box">
                  <img src={digiImg1} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">
                    Advanced <span>FEA/CFD</span> Simulation
                  </h2>
                  <p className="sec_text">
                    VISTA offers complex Multiphysics Simulation services
                    including FEA and CFD. These services enable engineers and
                    designers to test and assess their products before they are
                    manufactured. We deploy computer simulations to forecast how
                    a product will function in real-world scenarios, saving time
                    and money throughout the design process. Engineers modify
                    and enhance their designs depending on the findings of these
                    simulations.
                  </p>
                  <p className="sec_text">
                    VISTA's FEA and CFD services are utilized across a wide
                    range of sectors, including Aerospace and Defense,
                    Automotive, Semiconductor, Electronics and PCB, Heavy
                    Equipment, Computer & Hardware, Medical Devices and Consumer
                    Products. These Advanced Simulation methods assist OEM’s to
                    ensure that goods products are safe, efficient, and
                    dependable. Organizations can capitalize on VISTA's services
                    to lower the chance of expensive mistakes while developing
                    greater quality products for the customers we serve.
                    Overall, our comprehensive simulation services help to
                    create and develop breakthrough products in a variety of
                    sectors.
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
                  <h2 className="sec_title">
                    Manufacturing Process Simulation
                  </h2>
                  <p className="sec_text">
                    To stay relevant in today's industrial environment,
                    companies must innovate and enhance their manufacturing
                    processes. VISTA offers unique manufacturing process
                    simulation services to help businesses enhance production
                    efficiency, reduce costs, and improve product quality. Our
                    digital manufacturing process simulation and analytical
                    skills enable us to identify bottlenecks, enhance processes,
                    and anticipate outcomes, affording our clients an edge in
                    the market.
                  </p>
                  <p className="sec_text">
                    Enhanced production Efficacy: Simulation identifies
                    bottlenecks and improves processes, resulting in increased
                    output and shorter lead times.
                  </p>
                  <p className="sec_text">
                    Cost-saving: Simulation enables firms to test and develop
                    processes online, removing the need for physical prototypes
                    and reducing waste.
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
                  <img src={digiImg2} alt="" />
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
                  <img src={digiImg3} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">
                    Infuse AI/ML into CAD/CAE Automation
                  </h2>
                  <p className="sec_text">
                    We infuse AI/ML into CAD/CAE automation that minimize
                    redundant tasks such as retrofit design, meshing, solving,
                    post processing, drafting, report generation and
                    documentation tasks and saves up to 95% of the time.
                  </p>
                  <p className="sec_text">
                    As a customer to VISTA, your design Professionals can focus
                    more time on problem-solving, innovation and other process
                    improvement ideas. In the design and engineering processes
                    CAD/CAE automation increases productivity, accuracy, and
                    precision, which saves money and expedites project
                    completion. By using AI and ML technologies and adopting
                    innovative strategies, VISTA stands out in the industry and
                    is able to provide clients with state-of-the-art solutions.
                    Through the use of our services, businesses can improve
                    project efficiency, accuracy, and cost-effectiveness,
                    leading to deliverables of higher quality and major time and
                    resource savings. In the end, working with VISTA guarantees
                    the successful and efficient accomplishment of engineering
                    and design objectives.
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
              <div className="col-lg-12">
                <div className="sec_content right">
                  <h2 className="sec_title">
                    Structural Engineering PE Stamping
                  </h2>
                  <p className="sec_text">
                    VISTA Structural Engineering team members are licensed to
                    all 50 states in the USA and have completed more than 500
                    turnkey projects from 20 countries worldwide. VISTA has
                    licensed Structural Engineers (SE) and Mechanical
                    Professional Engineers (PE) to certify the structural
                    calculations as per AISC / IBC /ASCE/CBC seismic building
                    codes, ASME Codes. With the advent of digital tools and
                    creative workflows are used by VISTA Structural PE’s, a
                    respected and trusted authority in the industry, to optimize
                    the PE stamping procedure and guarantee the highest
                    standards of precision, effectiveness, and compliance.
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <h6 className="sec_subtitle">Our strengths include.</h6>
                <ul className="sec_list">
                  <li>
                    Preliminary sizing of the frames. equipment, chassis,
                    connections, fastener joints, air systems, heating systems
                    based on operating conditions, with a Licensed PE stamp.
                  </li>
                  <li>
                    Design of equipment for ASCE and CBC Seismic Codes, ASME
                    boilers and pressure vessels standards, with a Licensed PE
                    stamp.
                  </li>
                  <li>
                    Structural substantiation of equipment and its parts using
                    FEA/CFD techniques and check the rigidity of the structure.
                  </li>
                  <li>
                    Fracture mechanics analysis of the casting parts, injection
                    molding parts, and predict its ability to meet the operating
                    conditions.
                  </li>
                  <li>
                    High Cycle Fatigue Analysis of rotors, rotating parts, high
                    speed spindles with the aid of Finite Element Analysis
                    approach.
                  </li>
                  <li>
                    Low Cycle Fatigue Analysis of process chambers, boilers,
                    pressure vessels with the aid of Finite Element Analysis
                    approach.
                  </li>
                  <li>
                    Damage Tolerance Analysis of parts subject to heavy
                    vibrations with the aid of Finite Element Analysis approach,
                    and to predict the life of the part after crack initiation.
                  </li>
                  <li>
                    Help clients in getting certification of products based on
                    different standards and country norms.
                  </li>
                </ul>
                <div className="mt-4">
                  <Link
                    to="/Contact"
                    className="btn main_btn"
                    onClick={() => window.scrollTo(0, 0)}>
                    Talk to our expert <img src={whiteArrow} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="img_box">
                  <img src={digiImg4} alt="" />
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
                  <img src={digiImg5} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Mechanical PE Stamping</h2>
                  <p className="sec_text">
                    VISTA Mechanical PE’s can check the hand calculations
                    against CAE tools and optimize the design without
                    compromising the minimum code requirement. VISTA core
                    engineering team has done more than 1 million hrs. projects
                    in ASME Sec VIII Div. 1 and 2 pressure vessel codes, design
                    of industrial round and rectangular ducts as per SMACNA
                    Standards, API Code for pipe and pump design, AWS code.
                    VISTA professionals review design calculations and
                    manufacturing drawings and add PE stamps to both documents
                    as per the regional and country specific code requirements.
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
              <div className="col-lg-5">
                <div className="sec_content right">
                  <h2 className="sec_title">Seismic PE stamping</h2>
                  <p className="sec_text">
                    VISTA helps clients every step of the way through the PE
                    stamping process, from initial document preparation to final
                    regulatory approval, with a team of highly skilled and
                    licensed SE professionals. Their streamlined workflows and
                    project management tools help to keep even the most complex
                    projects on schedule and within budget, and their
                    sophisticated modeling and analysis capabilities enable the
                    identification and mitigation of potential seismic risks.
                    VISTA has established itself as the go-to source for
                    equipment manufacturers, Design Engineers, architects, and
                    construction companies looking to ensure appropriate seismic
                    certification for their turn key engineering projects VISTA
                    offers seismic PE stamping services for any mechanical
                    equipment's, pharmaceutical equipment's, heavy machineries,
                    buildings, and industrial facilities.
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
              <div className="col-lg-7">
                <div className="img_box">
                  <img src={digiImg6} alt="" />
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
                  <img src={digiImg7} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Product Design Engineering</h2>
                  <p className="sec_text">
                    Using the most recent developments in CAD software, 3D
                    printing, and rapid prototyping technologies, our team of
                    extremely talented engineers, designers, and project
                    managers collaborate closely to take on even the most
                    difficult design challenges. Every stage of the product
                    development lifecycle is guided by VISTA, starting with
                    concept design and ending with final production. With
                    insightful advice, data-driven decision-making, and
                    attention to detail, VISTA makes sure the final product not
                    only satisfies but surpasses the demands and expectations of
                    the target market. VISTA is known for being a reliable
                    partner for businesses in a variety of industries, helping
                    them turn their ideas into real, ground-breaking products
                    that enthrall customers and push the envelope of what is
                    conceivable. This is achieved by combining state-of-the-art
                    technical capabilities with a sincere passion for
                    innovation. Redefining the benchmark for excellence in
                    product development, VISTA is dedicated to remaining at the
                    forefront of the most recent design engineering trends and
                    methodologies.
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
                  <h2 className="sec_title">Product Lifecyle Management</h2>
                  <p className="sec_text">
                    Product Lifecycle Management (PLM) technology services are
                    offered by VISTA, a prominent supplier. VISTA's
                    comprehensive suite of solutions is intended to simplify the
                    entire process of product development and management.
                    VISTA's offers unparalleled visibility, control, and
                    efficiency throughout the entire product lifecycle through
                    our deep expertise in implementing and customizing top-tier
                    PLM software platforms, and we became a reliable partner to
                    various Industries. In order to facilitate cross-functional
                    cooperation and data-driven decision making, VISTA's PLM
                    solutions seamlessly integrate all aspects of the business,
                    from concept design to manufacturing, distribution, and
                    post-sale support. Organizations looking to gain a
                    competitive edge through strategic PLM transformation now
                    turn to VISTA as your go-to partner because of our
                    reputation for delivering quantifiable business impact.
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
                  <img src={digiImg8} alt="" />
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
                  <img src={digiImg9} alt="" />
                </div>
              </div>
              <div className="col-lg-5 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">System Design and Engineering</h2>
                  <p className="sec_text">
                    In order to offer state-of-the-art technology services to a
                    wide range of clients, a system design that is painstakingly
                    engineered and capable of smoothly delivering solutions that
                    are robust, dependable, and scalable is necessary. VISTA is
                    a master at this, using a thorough approach to system design
                    that serves as the foundation for all of our products. A
                    thorough understanding of each client's particular
                    requirements and pain areas forms the basis of VISTA's
                    system design, guiding the creation of custom architectures
                    that can elegantly and efficiently handle challenging
                    problems. With VISTA's system design expertise, our
                    technology solutions—from cybersecurity to edge computing,
                    cloud infrastructure to data analytics not only cutting edge
                    but also future-proofed to ensure our clients' long-term
                    success. With the integration of state-of-the-art components
                    into seamless, high-functioning systems, VISTA enables its
                    clients to concentrate on their primary business goals,
                    knowing that our technological foundation is built to the
                    highest standards of innovation, scalability, and
                    dependability.
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
                  <h2 className="sec_title">CAD Migration Services</h2>
                  <p className="sec_text">
                    With the aid of VISTA's CAD Migration services, companies
                    can easily move CAD data between software platforms. This
                    service guarantees that complex details are transferred
                    accurately, preserving the quality of the design. With the
                    help of our experience, enterprises can safely transfer
                    their design data to new software, allowing for ongoing
                    innovation and productivity. Design file migration is made
                    simple by the streamlined procedure, which also protects
                    important data. With the help of CAD migration services,
                    companies can work with partners on various CAD platforms
                    and remain current with software systems. Businesses may
                    save expenses, improve efficiency, and guarantee continuous
                    workflow for design projects by utilizing our services.
                    Businesses can concentrate on design goals without
                    interruptions when they rely on our expertise in CAD
                    migration, which ensures a safe and effective transfer
                    process.
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
                  <img src={digiImg10} alt="" />
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
                  <img src={digiImg11} alt="" />
                </div>
              </div>
              <div className="col-lg-5 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Manufacturing Engineering</h2>
                  <p className="sec_text">
                    provides a full range of Manufacturing Engineering solutions
                    to help businesses improve operational effectiveness and
                    streamline their production processes. VISTA's team of
                    highly skilled engineers works closely with clients to
                    identify bottlenecks, develop customized strategies, and
                    execute flawless implementations. This includes conducting
                    in-depth assessments of current manufacturing systems as
                    well as designing and implementing state-of-the-art
                    production lines. Customers value VISTA's capacity to
                    smoothly incorporate new technologies into their current
                    infrastructure, reducing downtime and guaranteeing a
                    seamless changeover. Furthermore, businesses can maintain
                    optimal performance and adjust to changing market demands
                    with the help of VISTA's extensive suite of continuous
                    maintenance and support services. VISTA has established
                    itself as a reliable resource and trusted advisor for
                    manufacturers looking to future-proof their operations and
                    stay ahead of the competition by fusing engineering
                    excellence with a solutions-oriented mindset.
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
              <div className="col-lg-5">
                <div className="sec_content left">
                  <h2 className="sec_title">Digital Transformation</h2>
                  <p className="sec_text">
                    Whether a client wants to reinvent their customer
                    experience, modernize legacy systems, or take advantage of
                    emerging technologies, VISTA's approach is based on a
                    thorough understanding of the distinct opportunities and
                    challenges that each one faces. VISTA helps its clients stay
                    ahead of the curve, adjust to shifting market demands, and
                    accomplish their most ambitious business objectives by
                    seamlessly integrating the newest digital tools and best
                    practices. VISTA has cemented its standing as a reliable
                    advisor and creative leader in the digital transformation
                    industry with a track record of accomplishment and an
                    unwavering dedication to client satisfaction.
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
              <div className="col-lg-7">
                <div className="img_box">
                  <img src={digiImg12} alt="" />
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
                  <img src={digiImg13} alt="" />
                </div>
              </div>
              <div className="col-lg-5 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">
                    Robotic Process Automation (RPA)
                  </h2>
                  <p className="sec_text">
                    VISTA's cutting-edge RPA platform, uses intelligent software
                    bots to automate a variety of repetitive, rule-based tasks
                    throughout an organization. Due to our programming
                    experience, it mimics human behavior, these bots can easily
                    integrate with an organization's current infrastructure and
                    systems to increase productivity, decrease the possibility
                    of human error, and streamline the workflows.VISTA guarantee
                    that our clients can optimize the value and impact of the
                    technology, and support services.By leveraging VISTA's RPA
                    solutions, businesses can boost productivity, cut costs, and
                    maintain a competitive edge in the rapidly evolving digital
                    market, this will allow our clients engineers to concentrate
                    on more strategic, high-value tasks. VISTA, a reputable
                    partner in the RPA industry, keeps expanding the realm of
                    intelligent automation's potential.
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

        <section className="service_section service_section_2" id="section14">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-7">
                <div className="sec_content right">
                  <h2 className="sec_title">
                    Augmented Reality and Virtual Reality
                  </h2>
                  <p className="sec_text">
                    For training, simulation, and design visualization, we
                    specialize in producing immersive experiences. By combining
                    the real and virtual worlds, we can improve engagement and
                    interaction with our AR/VR solutions. Users of this
                    technology can engage in a variety of uses by experiencing
                    an interactive and realistic environment. An innovative
                    approach to merging the real and virtual worlds is provided
                    by VISTA's mixed reality applications. A more interactive
                    and realistic training, simulation, and design visualization
                    environment is provided to users by the combination of these
                    two domains. Offering users an incredibly immersive and
                    captivating experience, VISTA's AR/VR solutions are at the
                    forefront of cutting-edge technology.
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
                  <img src={digiImg14} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service_section service_section_4" id="section15">
          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-5 order-1 order-lg-0">
                <div className="img_box">
                  <img src={digiImg15} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Cybersecurity</h2>
                  <p className="sec_text">
                    VISTA assesses a system's security posture and creates a
                    strategy for putting robust security measures in place. This
                    entails identifying potential weak points and developing
                    countermeasures for online attacks. By putting systems in
                    place that can quickly detect and address security breaches,
                    VISTA also prioritizes threat detection and response. VISTA
                    contributes to ensuring the security and safety of their
                    clients' digital assets by being proactive and watchful. One
                    of the main services provided by VISTA is security planning
                    and assessment, in which they collaborate closely with
                    clients to recognize possible security threats and create
                    workable mitigation plans for them. VISTA assists clients in
                    understanding their current security posture and offers
                    suggestions for strengthening it through in-depth evaluation
                    and analysis. We also specialize in threat detection and
                    response, putting in place cutting-edge systems that have
                    real-time security threat detection and response
                    capabilities. Utilizing state-of-the-art technology and
                    knowledge, VISTA assists clients in preventing cyberattacks
                    and safeguarding their priceless information and assets.
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
      </div>

      <Footer />
    </div>
  );
};

export default DigitalEngineeringService;
