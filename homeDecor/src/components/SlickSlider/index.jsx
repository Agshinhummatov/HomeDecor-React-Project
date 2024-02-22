import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./slider.css";
import React from "react";
import SampleNextArrow from "../SampleNextArrow";
import SamplePrevArrow from "../SamplePrevArrow";
import Slider from "react-slick";

const MainSlider = ({ options, children }) => {
  return (
    <Slider
      style={{ paddingBottom: "12rem" }}
      {...options}
      nextArrow={<SampleNextArrow />}
      prevArrow={<SamplePrevArrow />}
    >
      {children}
    </Slider>
  );
};

export default MainSlider;
