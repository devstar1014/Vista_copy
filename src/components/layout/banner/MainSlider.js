import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "./slider.css";
import bannerImg1 from "../../../assets/images/banner/aerospace.webp";
import bannerImg2 from "../../../assets/images/banner/embedded-design.webp";
import bannerImg3 from "../../../assets/images/banner/AI-data-services.webp";
import bannerImg4 from "../../../assets/images/banner/digital-engineering.webp";
import bannerImg5 from "../../../assets/images/banner/structural-PE-stamping.webp";
import bannerImg6 from "../../../assets/images/banner/offshore-wind-energy.webp";

const MainSlider = ({ setActiveIndex }) => {
  const mainSlider = useRef(null);
  const thumbnailSlider = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    pauseOnHover: false,
    afterChange: (index) => setActiveIndex(index),
  };

  return (
    <Slider {...settings} ref={mainSlider}>
      <div className="sliderItemBig" id="1">
        <div className="banner_img">
          <img src={bannerImg1} alt="" />
          <div className="banner_content">
            <p className="banner_text">
              <span>Aerospace and Defense Engineering</span>
              <br />
              Engineering & Technology <br /> Solutions Company
            </p>
          </div>
        </div>
      </div>
      <div className="sliderItemBig" id="2">
        <div className="banner_img">
          <img src={bannerImg2} alt="" />
          <div className="banner_content">
            <p className="banner_text">
              <span> Embedded Design</span>
              <br />
              Engineering & Technology <br /> Solutions Company
            </p>
          </div>
        </div>
      </div>
      <div className="sliderItemBig" id="3">
        <div className="banner_img">
          <img src={bannerImg3} alt="" />
          <div className="banner_content">
            <p className="banner_text">
              <span>AI Data Services</span>
              <br />
              Engineering & Technology <br /> Solutions Company
            </p>
          </div>
        </div>
      </div>
      <div className="sliderItemBig" id="4">
        <div className="banner_img">
          <img src={bannerImg4} alt="" />
          <div className="banner_content">
            <p className="banner_text">
              <span>Digital Engineering </span>
              <br />
              Engineering & Technology <br /> Solutions Company
            </p>
          </div>
        </div>
      </div>
      <div className="sliderItemBig" id="5">
        <div className="banner_img">
          <img src={bannerImg5} alt="" />
          <div className="banner_content">
            <p className="banner_text">
              <span>Structural PE Stamping</span>
              <br />
              Engineering & Technology <br /> Solutions Company
            </p>
          </div>
        </div>
      </div>
      <div className="sliderItemBig" id="6">
        <div className="banner_img">
          <img src={bannerImg6} alt="" />
          <div className="banner_content">
            <p className="banner_text">
              <span>Offshore Wind Energy</span>
              <br />
              Engineering & Technology <br /> Solutions Company
            </p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default MainSlider;
