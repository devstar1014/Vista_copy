import React from "react";
import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/footer/Footer";
import whiteArrow from "../assets/images/white-arrow.svg";

import { ElectrincsEmbeded } from "../components/data/ElectrincsEmbeded";
import { HowWorks } from "../components/layout/HowWorks";
import { Link, Navigate } from "react-router-dom";
import videoBg from "../assets/images/banner/embeded-video.mp4";

export const ElectronicsEmbededList = () => {
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
          <h2 className="inner_title">Electronics & Embedded Design</h2>
          <p className="inner_text">
            Electronics and embedded design involve creating and building
            devices that use electronic components to perform specific
            functions. These components include sensors, microcontrollers, and
            other electronic parts. Designers use their knowledge of electrical
            engineering to develop circuits and systems that can carry out tasks
            such as controlling machines or collecting data. Embedded systems
            are often used in everyday objects like smartphones, cars, and home
            appliances. By understanding electronics and embedded design,
            engineers can create innovative solutions to real-world problems.
          </p>
          <div className="service_list">
            <div className="row gy-4">
              {ElectrincsEmbeded.map((item) => {
                return (
                  <div className="col-lg-4 col-md-6" key={item.id}>
                    <div className="card service_box">
                      <div className="card_img">
                        <img src={item.img} alt={item.alt} />
                      </div>
                      <div className="card_body">
                        <h5 className="card_title">{item.title}</h5>
                        <p className="card_text">{item.text}</p>
                        <p className="mt-3 text-center">
                          <Link
                            to="/ElectronicsEmbededDetail"
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
