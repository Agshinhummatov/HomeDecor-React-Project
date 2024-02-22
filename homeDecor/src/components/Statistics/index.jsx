import React from "react";
import "../Statistics/statistics.css";

const Statistics = ({ children }) => {
  return (
    <section className="statistics">
      <div className="statistics__items">{children}</div>
    </section>
  );
};

export default Statistics;
