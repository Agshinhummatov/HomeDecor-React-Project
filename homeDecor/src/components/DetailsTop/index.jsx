import "../DetailsTop/detailsTop.css";
import React from "react";

const DetailsTop = ({ children }) => {
  return (
    <section className="details">
      <div className="details__item container">{children}</div>
    </section>
  );
};

export default DetailsTop;
