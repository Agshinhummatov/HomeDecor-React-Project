import React from "react";
import styles from "../ProductsContainer/products.module.css";

const ProductsContainer = ({ children }) => {
  return <section className={styles.product}>{children}</section>;
};

export default ProductsContainer;
