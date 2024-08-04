import React from "react";
import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/footer/Footer";
import whiteArrow from "../assets/images/white-arrow.svg";

import { SapService } from "../components/data/SapService";
import { HowWorks } from "../components/layout/HowWorks";
import { Link, Navigate } from "react-router-dom";
import videoBg from "../assets/images/banner/sap-video.mp4";

export const SapServiceList = () => {
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
          <h2 className="inner_title">SAP Services</h2>
          <p className="inner_text">
            SAP services provide businesses with a range of tools and solutions
            to help manage their operations efficiently. Our services include
            software for managing finances, human resources, customer relations,
            and more. By utilizing SAP services, companies can streamline their
            processes, increase productivity, and make better-informed
            decisions. With the help of SAP, organizations can improve their
            overall performance and stay competitive in today's market.
          </p>
          <div className="service_list">
            <div className="row gy-4">
              {SapService.map((item) => {
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
                            to="/SapServiceDetail"
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
