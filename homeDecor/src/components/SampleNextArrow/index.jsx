import React from "react";
import styles from "../SampleNextArrow/nextarr.module.css";

const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} ${styles.nextarr}`} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 4L20 12L12 20L10.575 18.6L16.175 13H4V11H16.175L10.575 5.4L12 4Z"
          fill="#EEF0F2"
        />
      </svg>
    </div>
  );
};

export default SampleNextArrow;
