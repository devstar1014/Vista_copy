import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "./slider.css";

const ThumbnailSlider = ({ contentItem, activeIndex }) => {
  const mainSlider = useRef(null);
  const thumbnailSlider = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    asNavFor: mainSlider.current,
    focusOnSelect: true,
    pauseOnHover: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="thumbnail_wrapper">
      <div className="container">
        <ul>
          <Slider {...settings} ref={thumbnailSlider}>
            {contentItem.map((content, index) => (
              <li
                key={index}
                className={`thumbnail-item ${
                  index === activeIndex ? "active" : ""
                }`}>
                <span>{content}</span>
              </li>
            ))}
          </Slider>
        </ul>
      </div>
    </div>
  );
};

export default ThumbnailSlider;
