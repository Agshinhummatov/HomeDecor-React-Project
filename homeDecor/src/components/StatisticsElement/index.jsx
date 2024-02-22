import React from "react";
import "../StatisticsElement/statisticsElement.css";

const StatisticsElement = ({
  count,
  description,
  descriptionAz,
  descriptionRu,
  lang,
}) => {
  return (
    <div className="statistics__item">
      <h2 className="statistics__item--count">{count}+</h2>
      <p className="statistics__item--desc">
        {lang === "Az"
          ? descriptionAz
          : lang === "Ru"
          ? descriptionRu
          : description}
      </p>
    </div>
  );
};

export default StatisticsElement;
