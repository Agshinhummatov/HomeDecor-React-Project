import { useField } from "formik";
import React from "react";
import styles from "../TextInputYup/textInputYup.module.css";

const TextInputYup = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={styles.input}>
      {meta.error && meta.touched && (
        <span className={styles.errorIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
              fill="#DC4F4F"
            />
          </svg>
        </span>
      )}
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInputYup;
