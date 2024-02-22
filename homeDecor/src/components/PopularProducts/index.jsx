import React from "react";
import Slider from "../SlickSlider";

import "../PopularProducts/popularProducts.css";
import SectionTop from "../SectionTop";
const options = {
  arrows: true,
  dots: true,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
  ],
};
const PopularProducts = ({ title, children }) => {
  return (
    <section className="popular">
      <div className="popular__items container">
        <SectionTop title={title} />
        <div className="popular__bottom">
          <Slider options={options}>{children}</Slider>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
