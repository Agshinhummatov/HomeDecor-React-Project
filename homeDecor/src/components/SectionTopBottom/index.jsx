import "../SectionTopBottom/sectionTopBottom.css";
import React from "react";

const SectionTopBottom = ({ children }) => {
  return (
    <section className="sectionTopBottom">
      <div className="sectionTopBottom__items">{children}</div>
    </section>
  );
};

export default SectionTopBottom;
