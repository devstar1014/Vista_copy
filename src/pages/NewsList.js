import React, { useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/footer/Footer";

import latestNews from "../assets/images/news-events/featured-news.png";
import { NewsListData } from "../components/data/NewsListData";
import { Link, useNavigate } from "react-router-dom";

export const NewsList = () => {
  const navigate = useNavigate();

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
            <h5 className="banner_subtitle">News</h5>
            <h1 className="banner_title">
              Stay Updated with VISTA's Latest News
            </h1>
            <div className="breadcrumb_detail">
              <div className="breadcrumb_box_grey">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      News
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="news_detail">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5">
              <h5 className="news_title">Featured news</h5>
              <div className="featured_news">
                <div className="news_box card">
                  <div className="card_img">
                    <img src={latestNews} alt="" />
                  </div>
                  <div className="card_body">
                    <div className="row gy-3">
                      <div className="col-lg-3">
                        <h5 className="news_box_month">April</h5>
                        <h3 className="news_box_date">12</h3>
                        <ul className="view_list">
                          <li>
                            0<i class="bi bi-chat-fill"></i>
                          </li>
                          <li>
                            154<i class="bi bi-heart-fill"></i>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-9">
                        <h2 className="card_title">
                          Texas Rangers Finish In Second Place
                        </h2>
                        <h5 className="card_subtitle">
                          By cmsmasters In <span>Match Report</span>
                        </h5>
                        <p className="card_text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum mollis nunc a molestie dictum. Mauris
                          venenatis,
                        </p>
                        <p className="card_link">
                          <Link
                            to="/NewsDetail"
                            onClick={() => window.scrollTo(0, 0)}
                            className="card_link">
                            Read More <i class="bi bi-chevron-right"></i>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <h5 className="news_title">Latest News</h5>
              <div className="latest_news_list">
                <div className="row gy-4">
                  {NewsListData.map((item) => {
                    return (
                      <div className="col-lg-12">
                        <div className="latest_news_box">
                          <div className="row">
                            <div className="col-lg-3">
                              <div className="card_img">
                                <img src={item.img} alt="" />
                              </div>
                            </div>
                            <div className="col-lg-9">
                              <div className="card_body">
                                <h2 className="card_title">{item.title}</h2>
                                <h5 className="card_subtitle">
                                  By cmsmasters In <span>Match Report</span>
                                </h5>
                                <p className="card_text">{item.text}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                  <p className="card_link">
                                    <p className="card_link">
                                      <Link
                                        to="/NewsDetail"
                                        onClick={() => window.scrollTo(0, 0)}
                                        className="card_link">
                                        Read More{" "}
                                        <i class="bi bi-chevron-right"></i>
                                      </Link>
                                    </p>
                                  </p>
                                  <p className="date_text">{item.date}</p>
                                </div>
                              </div>
                            </div>
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

      <Footer />
    </div>
  );
};
