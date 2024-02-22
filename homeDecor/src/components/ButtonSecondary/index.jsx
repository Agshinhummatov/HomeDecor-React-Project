import { Link } from "react-router-dom";
import React from "react";
import styles from "../ButtonSecondary/btnsecondary.module.css";

const ButtonSecondary = ({ children, href, disabled = false, onClick }) => {
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault(); // Prevent the default navigation behavior
    } else if (onClick) {
      e.preventDefault(); // Prevent the default navigation behavior
      onClick(); // Call the provided onClick callback
    }
  };

  if (disabled) {
    return (
      <button
        className={`btn ${styles.btn__secondary} ${styles.disabled}`}
        disabled
      >
        {children}
      </button>
    );
  } else {
    return (
      <Link
        to={href}
        onClick={handleClick}
        className={`btn ${styles.btn__secondary}`}
      >
        {children}
      </Link>
    );
  }
};

export default ButtonSecondary;
