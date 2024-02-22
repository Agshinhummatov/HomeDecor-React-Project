import "../HomeCollections/homeCollections.css";
import React from "react";
import SectionTop from "../SectionTop";
import SlickSlider from "../SlickSlider";

const options = {
  arrows: true,
  dots: true,
  infinite: false,
  slidesToShow: 3,
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
const HomeCollections = ({ title, children, lang }) => {
  return (
    <section className="collections">
      <div className="collections__content container">
        <SectionTop
          lang={lang}
          title={title}
          href="http://localhost:5173/collections"
        />
        <div className="collections__bottom ">
          <SlickSlider options={options}>{children}</SlickSlider>
        </div>
      </div>
    </section>
  );
};

export default HomeCollections;
