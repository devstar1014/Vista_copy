import React from "react";
import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/footer/Footer";
import whiteArrow from "../assets/images/white-arrow.svg";

import { AIMLComputerVision } from "../components/data/AIMLComputerVision";
import { HowWorks } from "../components/layout/HowWorks";
import { Link, Navigate } from "react-router-dom";
import aimlVideo from "../assets/images/banner/ai-ml-video.mp4";

export const AIMLComputerVisionList = () => {
  return (
    <>
      <Header />

      <div className="video-container">
        <video id="video" autoPlay muted loop playsInline>
          <source src={aimlVideo} type="video/mp4" />
        </video>
      </div>

      <section className="service_detail_inner">
        <div className="container">
          <h2 className="inner_title">AI/ML & Computer Vision</h2>
          <p className="inner_text">
            Artificial Intelligence (AI) and Machine Learning (ML) are two
            important technologies that are transforming the way we interact
            with computers. AI allows machines to perform tasks that typically
            require human intelligence, such as learning, reasoning, and
            problem-solving. ML is a subset of AI that focuses on developing
            algorithms and models that enable computers to learn from data and
            make predictions. Computer vision is a field of AI that enables
            computers to interpret and understand visual information from the
            world around them. By combining AI/ML with computer vision, we
            create powerful systems that can analyze images and videos,
            recognize objects and faces, and even drive autonomous vehicles.
            These technologies have the potential to revolutionize industries
            like healthcare, retail, and transportation, making our lives easier
            and more efficient.
          </p>
          <div className="service_list">
            <div className="row gy-4">
              {AIMLComputerVision.map((item) => {
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
                            to="/AIMLComputerVisionDetail"
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
