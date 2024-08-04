import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./banner.css";
import bannerImg1 from "../../../assets/images/banner/digital-engineering.jpg";
import bannerImg2 from "../../../assets/images/banner/AI-data-services.jpg";
import bannerImg3 from "../../../assets/images/banner/structural-PE-stamping.jpg";
import bannerImg4 from "../../../assets/images/banner/embedded-design.jpg";
import bannerImg5 from "../../../assets/images/banner/offshore-wind-energy.jpg";

const Banner = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setActiveSlide(0); // Ensure the first item is active on load
  }, []);

  const mainSliderSettings = {
    asNavFor: nav2,
    ref: (slider) => setNav1(slider),
    afterChange: (current) => setActiveSlide(current),
    initialSlide: 0, // Start from the first slide
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  const thumbSliderSettings = {
    asNavFor: nav1,
    ref: (slider) => setNav2(slider),
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    focusOnSelect: true,
    variableWidth: true,
    swipeToSlide: true,
    focusOnSelect: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ], // Start from the first slide
  };

  const handleNavClick = (index) => {
    if (index === 0) {
      nav1.slickGoTo(slides.length - 1);
    } else {
      nav1.slickGoTo(index);
    }
  };

  const slides = [
    { id: 1, content: "digital engineering" },
    { id: 2, content: "AI Data Services" },
    { id: 3, content: "Structural PE Stamping" },
    { id: 4, content: "Embedded Design" },
    { id: 5, content: "Offshore Wind Energy" },
    { id: 6, content: "Aerospace Defense Engineering" },
  ];

  // const settings = {
  //   dots: false,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   infinite: true,
  //   beforeChange: (current, next) => setActiveSlide(next),
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   pauseOnHover: false,
  // };

  // const settingsThumbs = {
  //   dots: false,
  //   arrows: false,
  //   speed: 500,
  //   slidesToShow: 6,
  //   slidesToScroll: 6,
  //   infinite: false,
  //   autoplay: true,
  //   autoplaySpeed: 1000,
  //   focusOnSelect: true,
  //   variableWidth: true,
  // };

  return (
    <div>
      <div className="banner_slider">
        <Slider {...mainSliderSettings}>
          <div className="sliderItemBig" id="1">
            <div className="banner_img">
              <img src={bannerImg1} alt="" />
              <div className="banner_content">
                <p className="banner_text">
                  <span>Digital Engineering</span>
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
                  <span>AI Data Services</span>
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
                  <span>Structural PE Stamping</span>
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
                  <span>Embedded Design</span>
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
                  <span>Offshore Wind Energy</span>
                  <br />
                  Engineering & Technology <br /> Solutions Company
                </p>
              </div>
            </div>
          </div>
          <div className="sliderItemBig" id="6">
            <div className="banner_img">
              <img src={bannerImg5} alt="" />
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

        <div className="thumnail_wrapper">
          <div className="container">
            <Slider {...thumbSliderSettings}>
              {slides.map((slide, index) => {
                return (
                  <div className="pe-5">
                    <div
                      key={slide.id}
                      className={
                        index === activeSlide
                          ? "slide_link active"
                          : "slide_link"
                      }
                      onClick={() => handleNavClick(index)}>
                      {slide.content}
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
