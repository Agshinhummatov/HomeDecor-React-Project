import { useCallback } from "react";
import React, { useEffect, useState } from "react";
import styles from "../ProductCount/productCount.module.css";
import toast from "react-hot-toast";

const ProductCount = ({
  productCount,
  productId,
  updateProductCount,
  price,
}) => {
  const [count, setCount] = useState(productCount);

  const increaseCount = useCallback(() => {
    const newCount = count + 1;
    updateProductCount(productId, newCount, price);
    toast.success("Product count increased");
    setCount(newCount);
  }, [count, productId, updateProductCount, price]);

  const decreaseCount = useCallback(() => {
    if (count > 1) {
      const newCount = count - 1;
      updateProductCount(productId, newCount, price);
      toast.success("Product count decreased");
      setCount(newCount);
    }
  }, [count, productId, updateProductCount, price]);

  useEffect(() => {
    setCount(productCount);
  }, [productCount]);

  return (
    <div className={styles["counter"]}>
      <button
        className={`${styles["counter__item"]} ${styles.btn}`}
        onClick={increaseCount}
      >
        +
      </button>
      <div className={styles["counter__item"]}>{count}</div>
      <button
        className={`${styles["counter__item"]} ${styles.btn}`}
        onClick={decreaseCount}
      >
        -
      </button>
    </div>
  );
};

export default ProductCount;
