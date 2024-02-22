import React from "react";
import { Link } from "react-router-dom";
import "./categoryel.css";

const CategoryElement = ({ img, title, titleRu, titleAz, id, type, lang }) => {
  return (
    <article className="category__item">
      <Link
        to={`/products?${
          type === "category" ? `categoryIds=${id}` : `collectionIds=${id}`
        }`}
        className="category__item--top"
      >
        <img className="category__item--img" src={img} alt={title} />
      </Link>
      <div className="category__item--bottom">
        <span className="category__item--title">
          {lang === "Ru" ? titleRu : lang === "Az" ? titleAz : title}
        </span>
      </div>
    </article>
  );
};

export default CategoryElement;
