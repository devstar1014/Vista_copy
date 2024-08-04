import React, { useState } from "react";
import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/footer/Footer";
import whiteArrow from "../assets/images/white-arrow.svg";

import { ServiceData } from "../components/data/AIMLComputerVision";
import { DataAnnotation } from "../components/data/DataAnnotation";
import { HowWorks } from "../components/layout/HowWorks";
import { Link, Navigate } from "react-router-dom";
import videoBg from "../assets/images/banner/adas.mp4";
import { DataCollection } from "../components/data/DataCollection";
import { DataAnonymization } from "../components/data/DataAnonymization";

export const AIDataServicesList = () => {
  const [toggle, settoggle] = useState(1);

  function toggleTab(index) {
    settoggle(index);
  }

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
          <h2 className="inner_title">AI Data Services</h2>
          <p className="inner_text">
            Vista provides comprehensive services for ADAS systems, including
            expert data annotation, data collection, and data anonymization. Our
            team of annotators, with domain expertise in ADAS and autonomy,
            ensure high-quality data accuracy and reliability for machine
            learning models. Vista's rigorous quality control processes
            guarantee high accuracy, and their flexible data annotation tools
            and platforms enable scalable services. We support the development
            of safe and efficient ADAS systems, enabling innovation in
            autonomous driving technology. With a focus on privacy and security,
            our data anonymization services safeguard sensitive information. Our
            data collection services provide diverse and representative
            datasets. Our expertise and cutting-edge technology ensure
            high-quality outputs, making them a trusted partner in the ADAS
            industry. By leveraging our services, companies can improve their
            ADAS systems' performance and reliability. Our commitment to
            excellence empowers the development of autonomous driving
            technology.
          </p>
        </div>

        <div className="service_list_tab" id="section1">
          <div className="container">
            <ul className="tab_link">
              <li>
                <a
                  href="javascript:void(0)"
                  class={toggle === 1 ? "nav-link active" : "nav-link"}
                  onClick={() => {
                    toggleTab(1);
                  }}>
                  ADAS Data Annotation & Labeling
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class={toggle === 2 ? "nav-link active" : "nav-link"}
                  onClick={() => {
                    toggleTab(2);
                  }}>
                  Data Collection
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class={toggle === 3 ? "nav-link active" : "nav-link"}
                  onClick={() => {
                    toggleTab(3);
                  }}>
                  Data Anonymization
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="service_list_tabcontent">
          <div className="container">
            <div
              className={toggle === 1 ? "tab_content active" : "tab_content"}>
              <div className="service_list">
                <div className="row gy-4">
                  {DataAnnotation.map((item) => {
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
                                to="/DataAnnotationDetail"
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
            <div
              className={toggle === 2 ? "tab_content active" : "tab_content"}>
              <div className="service_list">
                <div className="row gy-4">
                  {DataCollection.map((item) => {
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
                                to="/DataCollectionDetail"
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
            <div
              className={toggle === 3 ? "tab_content active" : "tab_content"}>
              <div className="service_list">
                <div className="row gy-4">
                  {DataAnonymization.map((item) => {
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
                                to="/DataAnonymizationDetail"
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
          </div>
        </div>
      </section>

      <HowWorks />

      <Footer />
    </>
  );
};
