import React, { useEffect, useState, useRef } from "react";
import leftArrow from "../assets/images/left-arrow.svg";
import rightArrow from "../assets/images/right-arrow.svg";
import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/footer/Footer";
import whiteArrow from "../assets/images/white-arrow.svg";
import "../assets/css/style.css";

import dataAnnotationImg1 from "../assets/images/data-annotation/image-annotation.webp";
import dataAnnotationImg2 from "../assets/images/data-annotation/land-road-marking-annotation.webp";
import dataAnnotationImg3 from "../assets/images/data-annotation/object-training.webp";
import dataAnnotationImg4 from "../assets/images/data-annotation/3d-point-annotation.webp";
import dataAnnotationImg5 from "../assets/images/data-annotation/video-annotation.webp";
import dataAnnotationImg6 from "../assets/images/data-annotation/traffic-sign-annotation.webp";
import dataAnnotationImg7 from "../assets/images/data-annotation/pedrestian.webp";
import dataAnnotationImg8 from "../assets/images/data-annotation/driver-annotaion.webp";
import dataAnnotationImg9 from "../assets/images/data-annotation/environmental-content-annotation.webp";
import dataAnnotationImg10 from "../assets/images/data-annotation/quality-assurence-annotation.webp";
import { useLocation, useNavigate } from "react-router-dom";
import { Link, scroller } from "react-scroll";

const sections = [
  { id: "section1", label: "Image Annotation" },
  { id: "section2", label: "Lane and Road Marking Annotation" },
  { id: "section3", label: "Object Tracking" },
  { id: "section4", label: "3D Point Cloud Annotation" },
  { id: "section5", label: "Video Annotation" },
  { id: "section6", label: "Traffic Sign Annotation" },
  { id: "section7", label: "Pedestrian and Cyclist Annotation" },
  { id: "section8", label: "Driver Monitoring Annotation" },
  { id: "section9", label: "Environmental Context Annotation" },
  { id: "section10", label: "Quality Assurance and Validation" },
];

const DataAnnotationDetail = () => {
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
            <h1 className="banner_title">ADAS Data Annotation & Labeling</h1>
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
            <div className="row gy-4 align-items-center">
              <div className="col-lg-5 order-1 order-lg-0">
                <div className="img_box">
                  <img src={dataAnnotationImg1} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Image Annotation</h2>
                  <p className="sec_text">
                    VISTA offers multiple techniques for image annotation,
                    including line and spline annotation, bounding box
                    annotation, polygon annotation, semantic segmentation,
                    instance segmentation, and key point annotation. The process
                    of bounding box annotation entails putting boxes around
                    moving vehicles and pedestrians. To represent shapes more
                    accurately, objects are outlined with polygons using polygon
                    annotation. Semantic segmentation uses labels on each pixel
                    in an image to distinguish between various regions. In an
                    image, instance segmentation facilitates the distinction
                    between various instances of the same object class. An
                    image's key points, like facial landmarks, can be marked
                    with a key point annotation. To label objects like
                    boundaries and roads, line and spline annotation entails
                    drawing lines and curves.
                  </p>
                  <p className="sec_text">
                    These VISTA annotation techniques are essential for tasks
                    such as pose estimation, image segmentation, and object
                    detection. They support precise object recognition and
                    classification in photos. For complicated objects like cars
                    and pedestrians, polygon annotation is helpful. Labeling
                    various areas of an image, such as the sky, cars, sidewalks,
                    and roads, is made easier with the use of semantic
                    segmentation. Annotating key points is useful for tasks like
                    pose estimation and facial recognition. For precise object
                    labeling, such as for roads and boundaries, line and spline
                    annotation is necessary. Overall, VISTA's ability to
                    annotate images is essential for a number of computer vision
                    applications.
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
                  <h2 className="sec_title">
                    Lane and Road Marking Annotation
                  </h2>
                  <p className="sec_text">
                    VISTA provides services for annotating road markings and
                    lanes. Marking lane boundaries and markings is known as
                    "lane detection," and it helps with lane-keeping and
                    lane-departure warning systems. This aids in preventing cars
                    from straying from their lanes. Labeling road signs, arrows,
                    crosswalks, and other surface markings is known as road
                    marking annotation. In addition to ensuring pedestrian and
                    driver safety on the roads, this data is essential for
                    navigation systems. VISTA helps to increase road safety and
                    improve the driving experience by offering features like
                    Lane Detection and Road Marking Annotation. Road markings
                    and lane boundaries that are accurately annotated facilitate
                    safer and more efficient vehicle navigation. Traffic laws
                    and regulations are easily followed by drivers when they are
                    clearly labeled on road signs, arrows, and crosswalks. All
                    things considered, this annotation service is essential to
                    making the driving environment safer and more orderly for
                    all users.
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
                  <img src={dataAnnotationImg2} alt="" />
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
                  <img src={dataAnnotationImg3} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Object Tracking</h2>
                  <p className="sec_text">
                    Through a sequence of video frames, users can follow moving
                    objects such as cars, pedestrians, and cyclists. VISTA
                    assists users in comprehending the movement patterns of
                    these moving objects by providing annotations on their paths
                    and trajectories. This is a very helpful tool when tracking
                    the movement of specific objects is important, like in
                    surveillance and monitoring scenarios. When using Object
                    Tracking in VISTA, objects such as cars, pedestrians, and
                    cyclists are tracked frame-by-frame throughout a series of
                    video frames. The paths and trajectories of these moving
                    objects can be annotated to provide users with important
                    context for understanding how they move and interact with
                    the video. Tracking the movement of objects is crucial for
                    analysis and decision-making in many fields, such as
                    research studies, traffic management, and security
                    surveillance. This feature can be very helpful in these
                    situations.
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
                  <h2 className="sec_title">3D Point Cloud Annotation</h2>
                  <p className="sec_text">
                    For this, point cloud data from LiDAR sensors is used to
                    create 3D bounding boxes around objects. In order to
                    categorize points in the point cloud and aid in the
                    differentiation of various objects and surfaces,
                    segmentation is also carried out. LiDAR annotation is an
                    additional feature of this service that involves labeling
                    data obtained from LiDAR sensors in order to identify
                    objects and their spatial relationships in three dimensions.
                    To sum up, 3D bounding box annotation, segmentation, and
                    LiDAR annotation are all included in VISTA's 3D Point Cloud
                    Annotation service. These methods assist in distinguishing
                    between different objects and surfaces as well as precisely
                    identifying objects in point cloud data. A useful tool for
                    many applications, VISTA labels the data gathered by LiDAR
                    sensors to allow object identification and their spatial
                    relationships in three dimensions.
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
                  <img src={dataAnnotationImg4} alt="" />
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
                  <img src={dataAnnotationImg5} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">Video Annotation</h2>
                  <p className="sec_text">
                    Turning, stopping, merging, and other driving-related
                    actions and events can be labeled in driving videos with the
                    help of VISTA's Video Annotation service. This can help in
                    comprehending patterns and behaviors of driving while
                    operating a vehicle. Furthermore, intricate driving scenes
                    can be annotated with VISTA's Scene Understanding feature to
                    record interactions between various objects and dynamic
                    environments. Enhancing overall road safety and creating
                    more advanced autonomous driving systems can both benefit
                    from this. Researchers and developers can enhance road
                    safety measures by employing VISTA's Video Annotation
                    service to analyze driving videos more effectively.
                  </p>
                  <p className="sec_text">
                    Driving videos can be used to identify risky driving
                    behaviors and patterns by labeling actions and events.
                    Additionally, the Scene Understanding feature can offer more
                    in-depth understanding of the intricate relationships that
                    exist between various objects and dynamic road environments,
                    which could lead to improvements in autonomous driving
                    technology and general driving safety.
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
                  <h2 className="sec_title">Traffic Sign Annotation</h2>
                  <p className="sec_text">
                    Classifying and identifying various traffic sign kinds, such
                    as stop signs and speed limits, is part of this. Moreover,
                    text from traffic signs is extracted by VISTA using optical
                    character recognition (OCR). This makes it easier to
                    recognize and comprehend traffic signs on the road with more
                    accuracy and efficiency. VISTA contributes to increased road
                    safety by labeling and classifying different kinds of
                    traffic signs. Drivers can adhere to traffic laws and
                    regulations more easily since VISTA's OCR technology helps
                    to extract crucial information from traffic signs. In
                    summary, the Traffic Sign Annotation service provided by
                    VISTA is essential for promoting safer and more efficient
                    traffic flow on roadways.
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
                  <img src={dataAnnotationImg6} alt="" />
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
                  <img src={dataAnnotationImg7} alt="" />
                </div>
              </div>
              <div className="col-lg-7 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">
                    Pedestrian and Cyclist Annotation
                  </h2>
                  <p className="sec_text">
                    For precise person identification and labeling in photos or
                    videos, VISTA provides services for pedestrian and cyclist
                    annotation. This includes outlining cyclists and pedestrians
                    with bounding boxes or polygons for accurate detection. In
                    order to provide additional context for analysis, VISTA can
                    also annotate these people's actions, such as running,
                    walking, or crossing the street. With the help of Bounding
                    Box and Polygon Annotation, VISTA is able to identify
                    cyclists and pedestrians in a variety of situations. This
                    makes it possible to identify and follow people in photos or
                    videos more accurately. Moreover, Behavior Annotation aids
                    in the classification of pedestrian and cyclist movements
                    and actions, offering important data for future study and
                    advancement in the field of pedestrian and cyclist detection
                    technologies.
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
                  <h2 className="sec_title">Driver Monitoring Annotation</h2>
                  <p className="sec_text">
                    To assist in tracking and analyzing a driver's actions while
                    driving, VISTA provides Driver Monitoring Annotation
                    services. Facial Landmark Annotation is one such technique
                    that helps monitor a driver's attentiveness and spot
                    indicators of drowsiness by labeling significant facial
                    features. Pose Estimation is also used to annotate the head
                    and body position of the driver, offering insights into
                    their posture and actions when operating a vehicle. Through
                    the use of Pose Estimation and Facial Landmark Annotation,
                    VISTA can help improve driver performance and safety. These
                    annotations can serve as a warning system for any possible
                    hazards on the road and aid in understanding the driver's
                    behavior. This technology ultimately makes everyone's use of
                    the roads safer by making it simpler to recognize and
                    address any problems relating to fatigue or distraction.
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
                  <img src={dataAnnotationImg8} alt="" />
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
                  <img src={dataAnnotationImg9} alt="" />
                </div>
              </div>
              <div className="col-lg-5 order-0 order-lg-1">
                <div className="sec_content left">
                  <h2 className="sec_title">
                    Environmental Context Annotation
                  </h2>
                  <p className="sec_text">
                    This informs us about the weather, including whether it is
                    snowing or raining, foggy, or full of lightning. For your
                    own safety, especially when driving, this information is
                    crucial. VISTA also assists us in determining the state of
                    the roads, such as whether they are icy, uneven, wet, or
                    dry. In order to prevent accidents, this can assist us in
                    route planning and cautious driving. We can increase our
                    awareness of the surroundings by annotating environmental
                    context with VISTA. We can better prepare for the day ahead
                    by being aware of the weather, such as by packing an
                    umbrella for rain or wearing warm clothing for snow. Being
                    aware of the state of the road can help us drive more safely
                    and make wiser decisions. With VISTA's assistance, we can
                    more skillfully navigate our environment and maintain our
                    safety in a variety of weather and road situations.
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
                    Quality Assurance and Validation
                  </h2>
                  <p className="sec_text">
                    In order to guarantee the accuracy and consistency of the
                    annotated data, VISTA provides services for validation and
                    quality assurance. To manually verify that the annotated
                    data is accurate, manual reviews are carried out. This
                    guarantees the quality of the annotations and aids in error
                    detection. The data is also validated using automated tools
                    and algorithms, which improves the annotations' accuracy and
                    dependability even more. The quality and consistency of the
                    annotated data are guaranteed by VISTA through the
                    combination of automated validation procedures and manual
                    reviews. The manual reviews assist in identifying any
                    mistakes that might have gone unnoticed throughout the
                    annotation procedure. An additional layer of assurance is
                    added to the data by using automated tools and algorithms
                    that validate it further. All things considered, these
                    procedures for quality assurance and validation support the
                    upkeep of the dependability and correctness of the
                    annotations supplied by VISTA.
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
                  <img src={dataAnnotationImg10} alt="" />
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

export default DataAnnotationDetail;
