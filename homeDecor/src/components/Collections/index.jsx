import "../Collections/collections.css";
import React from "react";

const Collections = ({ children }) => {
  return (
    <section className="collection">
      <div className="collection__items">{children}</div>
    </section>
  );
};

export default Collections;
