import React from "react";
import styles from "../FormTitle/formTitle.module.css";

const FormTitle = ({ title }) => {
  return (
    <div className={styles["formtitle"]}>
      <h2 className={styles["formtitle__header"]}>{title}</h2>
    </div>
  );
};

export default FormTitle;
