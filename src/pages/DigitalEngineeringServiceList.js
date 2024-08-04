import React from "react";
import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/footer/Footer";
import whiteArrow from "../assets/images/white-right-arrow.svg";

import { DigitalEngineeringServiceData } from "../components/data/DigitalEngineeringServiceData";
import { HowWorks } from "../components/layout/HowWorks";
import { Link } from "react-router-dom";
import videoBg from "../assets/images/banner/digital-video.mp4";

export const DigitalEngineeringServiceList = () => {
  return (
    <>
      <Header />

      <div className="video-container">
        <video id="video" autoPlay muted loop playsInline>
          <source src={videoBg} type="video/mp4" />
        </video>
      </div>

      <section className="service_detail_inner">
        <div className="container">
          <h2 className="inner_title">Digital Engineering</h2>
          <p className="inner_text">
            Digital Engineering is a modern approach that leverages digital
            technologies and data-driven methodologies to design, simulate, and
            manage complex engineering projects efficiently. By integrating
            advanced software tools and collaborative platforms, digital
            engineering enhances precision, accelerates development timelines,
            and optimizes resource utilization across diverse industries such as
            aerospace, automotive, and manufacturing. This innovative approach
            fosters innovation, facilitates interdisciplinary collaboration, and
            ensures robustness in the lifecycle management of engineering
            projects from conception to completion.
          </p>
          <p className="inner_text">
            The key services VISTA can offer includes Computer-Aided Design
            (CAD), Computer-Aided Engineering (CAE), Advanced Multiphysics
            Simulation, Computer-Aided Manufacturing (CAM), Product Lifecycle
            Management (PLM), System Engineering, Embedded systems design, Data
            Analytics and Machine Learning, IOT, Robotic Process Automation,
            Industrial Automation and many more.
          </p>
          <div className="service_list">
            <div className="row gy-4">
              {DigitalEngineeringServiceData.map((item) => {
                return (
                  <div className="col-lg-4 col-md-6" key={item.id}>
                    <div className="card service_box">
                      <div className="card_img">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="card_body">
                        <h5 className="card_title">{item.title}</h5>
                        <p className="card_text">{item.text}</p>
                        <p className="mt-3 text-center">
                          <Link
                            to="/DigitalEngineeringService"
                            state={{ sectionId: item.id }}
                            className="btn main_btn">
                            Read More <img src={whiteArrow} alt="" />
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <HowWorks />

      <Footer />
    </>
  );
};
