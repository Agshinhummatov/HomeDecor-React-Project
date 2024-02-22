import React from "react";
import styles from "../ProductCount/productCount.module.css";

const ProductCount = ({ productCount, setProductCount }) => {
  return (
    <div className={styles["counter"]}>
      <button
        className={`${styles["counter__item"]} ${styles.btn}`}
        onClick={() => setProductCount(productCount + 1)}
      >
        +
      </button>
      <div className={styles["counter__item"]}>{productCount}</div>
      <button
        className={`${styles["counter__item"]} ${styles.btn}`}
        onClick={() => setProductCount(productCount > 1 ? productCount - 1 : 1)}
      >
        -
      </button>
    </div>
  );
};

export default ProductCount;
