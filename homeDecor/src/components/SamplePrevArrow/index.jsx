import React from "react";
import styles from "../SamplePrevArrow/prevarr.module.css";

const SamplePrevArrow = ({ className, onClick }) => {
  return (
    <div className={`${className} ${styles.prevarr}`} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825L13.425 18.6L12 20Z"
          fill="#EEF0F2"
        />
      </svg>
    </div>
  );
};

export default SamplePrevArrow;
