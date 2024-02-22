import { Link } from "react-router-dom";
import React from "react";
import styles from "./item.module.css";

const WishListElement = ({
  img,
  title,
  titleAz,
  titleRu,
  price,
  currency,
  id,
  onDelete,
  lang,
}) => {
  return (
    <article className={styles.item}>
      <Link to={`/details/${id}/${title}`} className={styles["item__left"]}>
        <img src={img} alt={title} />
      </Link>
      <div className={styles["item__right"]}>
        <div className={styles["item__right--top"]}>
          <p className={styles["item__title"]}>
            {lang === "Az" ? titleAz : lang === "Ru" ? titleRu : title}
          </p>
          <span className={styles["wish__btn"]} onClick={() => onDelete()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                fill="#B8926A"
              />
            </svg>
          </span>
        </div>

        <div className={styles["item__right--bottom"]}>
          <h3 className={styles["item__price"]}>
            {price} <span>{currency}</span>
          </h3>
        </div>
      </div>
    </article>
  );
};

export default WishListElement;
