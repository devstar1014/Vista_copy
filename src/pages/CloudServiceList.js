import React from "react";
import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/footer/Footer";
import whiteArrow from "../assets/images/white-arrow.svg";

import { CloudService } from "../components/data/CloudService";
import { HowWorks } from "../components/layout/HowWorks";
import { Link, Navigate } from "react-router-dom";
import videoBg from "../assets/images/banner/cloud-video.mp4";

export const CloudServiceList = () => {
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
          <h2 className="inner_title">Cloud Services</h2>
          <p className="inner_text">
            Cloud services are a type of technology that allows users to access
            and store data over the internet instead of on a physical device.
            Users can access their data from any device with an internet
            connection, making it convenient for people who need to work
            remotely or collaborate with others. Cloud services also offer
            benefits like scalability, cost-effectiveness, and automatic
            updates, making a popular choice for businesses and individuals
            looking to streamline their digital operations.
          </p>
          <div className="service_list">
            <div className="row gy-4">
              {CloudService.map((item) => {
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
                            to="/CloudServiceDetail"
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
