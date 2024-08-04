import React, { useState, useRef } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/footer/Footer";
import generativeImg from "../assets/images/insights/ai-iot.webp";
import insightVid from "../assets/images/insights/insight.mp4";
import { insightBlogs } from "../components/data/InsightBlogs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

export const Insights = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div>
      <Header />

      {/* Sub banner */}
      <div className="sub_banner">
        <div className="container">
          <div className="banner_content_desc">
            <h5 className="banner_subtitle">Insights</h5>
            <h1 className="banner_title">Unlocking Industry Insights</h1>
            <div className="breadcrumb_detail">
              <div className="breadcrumb_box_grey">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Insights
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="insights_inner_section">
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-5 col-md-6 order-1 order-md-0">
              <div className="insights_inner_img">
                <img src={generativeImg} alt="" />
              </div>
            </div>
            <div className="col-lg-7 col-md-6 order-0 order-md-1">
              <div className="insights_inner_content">
                <h2 className="insights_inner_title">
                  Immersive Digital Twin Technology with AR/VR, AI, and IoT
                </h2>
                <p className="insights_inner_text">
                  Digital twinning utilizes AR/VR, AI, and IoT to create
                  real-time digital replicas of physical assets. IoT sensors
                  collect data, which AI processes to simulate behaviors. AR/VR
                  visualizes these digital twins for enhanced analysis and
                  decision-making, improving maintenance, optimization, and
                  innovation across industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="insights_inner_section_video">
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="insights_inner_content">
                <h2 className="insights_inner_title">
                  Advanced Driver Assistance Systems (ADAS)
                </h2>
                <p className="insights_inner_text">
                  Advanced Driver Assistance Systems (ADAS) play a pivotal role
                  in enhancing vehicle safety and driving experience. These
                  systems encompass adaptive cruise control, lane-keeping
                  assist, automatic emergency braking, parking assistance, and
                  rearview cameras. Their primary objective is to mitigate human
                  error and elevate driving safety.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="video-banner">
                <video
                  ref={videoRef}
                  src={insightVid}
                  loop
                  muted
                  playsInline
                  className="video-banner__video"
                />
                <button onClick={togglePlayPause} className="play-pause-button">
                  <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="insights_blog_list">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h2 className="insights_blog_title">Insights</h2>
              <p className="insights_blog_text">
                As a global leader in engineering and technology solutions, we
                deliver cutting-edge advancements that drive success across
                industries, bridging the gap between technology and practical
                application.
              </p>
            </div>
          </div>
          <div className="insights_blog_card_list">
            <div className="row gy-4">
              {insightBlogs.map((item) => {
                return (
                  <div className="col-lg-4 col-md-6">
                    <div className="blog_box">
                      <div className="card_img">
                        <img src={item.img} alt={item.alt} />
                        <div className="author_detail">
                          <ul>
                            <li>{item.authorDetail.date}</li>
                            <li>{item.authorDetail.name}</li>
                          </ul>
                        </div>
                      </div>
                      <div className="card_body">
                        <h5 className="card_title">{item.title}</h5>
                        <p className="card_text">{item.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
