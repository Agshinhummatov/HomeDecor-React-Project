import "../DetailsSlider/detailsslider.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";

const DetailsSlider = ({ children }) => {
  const [bigImg, setBigImg] = useState(null);
  const [smallImg, setSmallImg] = useState(null);

  const big = useRef(null);
  const small = useRef(null);

  useEffect(() => {
    setBigImg(big.current);
    setSmallImg(small.current);
  }, []);

  return (
    <div className="sliders__container">
      <div className="bigSlider">
        <Slider arrows={false} asNavFor={smallImg} ref={big}>
          {children}
        </Slider>
      </div>
      <div className="smallSlider">
        <Slider
          asNavFor={bigImg}
          ref={small}
          arrows={false}
          slidesToShow={3}
          swipeToSlide={true}
        >
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default DetailsSlider;
