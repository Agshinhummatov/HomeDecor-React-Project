import { Link } from "react-router-dom";
import React from "react";
import styles from "../ShoppingCartContainer/shoppingCartContainer.module.css";

const ShoppingCartContainer = ({ children, lang }) => {
  return (
    <section className={styles["shopping"]}>
      <div className={styles["shopping__items"]}>{children}</div>
      <Link className={styles["backbtn"]} to="/products">
        {lang === "Az"
          ? "Məhsullara geri dön"
          : lang === "Ru"
          ? "Вернуться к товарам"
          : "Back to products"}
      </Link>
    </section>
  );
};

export default ShoppingCartContainer;
