import { Link } from "react-router-dom";
import React from "react";
import styles from "../FormBottomQuestion/formBottom.module.css";

const FormBottomQuestion = ({ question, pathname }) => {
  return (
    <div className={styles["form__bottom"]}>
      <p className={styles["form__bottom--txt"]}>
        {question}
        <Link className={styles["form__bottom--link"]} to={`/auth/${pathname}`}>
          {pathname}
        </Link>
      </p>
    </div>
  );
};

export default FormBottomQuestion;
