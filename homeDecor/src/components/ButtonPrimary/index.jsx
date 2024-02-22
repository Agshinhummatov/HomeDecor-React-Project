import { Link } from "react-router-dom";
import React from "react";
import styles from "./button.module.css";

const ButtonPrimary = ({ children, href, disabled = false }) => {
  return href ? (
    <Link
      disabled={disabled}
      to={href}
      className={`btn ${styles.primary__btn}`}
    >
      {children}
    </Link>
  ) : (
    <Link disabled={disabled} className={`btn ${styles.primary__btn}`}>
      {children}
    </Link>
  );
};

export default ButtonPrimary;
