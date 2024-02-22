import img from "../../../../public/login-bg.jpeg";
import React from "react";
import styles from "../Background/background.module.css";
const Backgorund = () => {
  return (
    <div className={styles["background"]}>
      <img src={img} alt="" />
    </div>
  );
};

export default Backgorund;
