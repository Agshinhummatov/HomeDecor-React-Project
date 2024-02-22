import React from "react";
import style from "../Error/error.module.css";

const Error = ({ code, status }) => {
  return (
    <section>
      <div className={style["error__container"]}>
        <h1 className={style["error__code"]}>{code}</h1>
        <p className={style["error__status"]}>{status}</p>
      </div>
    </section>
  );
};

export default Error;
