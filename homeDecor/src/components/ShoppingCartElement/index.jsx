import { Link } from "react-router-dom";
import ProductCount from "../ProductCount";
import PropTypes from "prop-types";
import React from "react";
import styles from "../ShoppingCartElement/shoppingCartElement.module.css";

const ShoppingCartElement = ({
  img,
  title,
  lang,
  titleAz,
  titleRu,
  count,
  price,
  colorName,
  onDelete,
  currency,
  productId,
  updateProductCount,
  id,
}) => {
  return (
    <div className={styles.item}>
      <div onClick={onDelete} className={styles.item__deleteBtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M16.8878 15.7376C16.9633 15.8131 17.0232 15.9027 17.064 16.0014C17.1049 16.1 17.1259 16.2057 17.1259 16.3125C17.1259 16.4192 17.1049 16.5249 17.064 16.6236C17.0232 16.7222 16.9633 16.8118 16.8878 16.8873C16.8123 16.9628 16.7227 17.0227 16.6241 17.0635C16.5254 17.1044 16.4197 17.1254 16.313 17.1254C16.2062 17.1254 16.1005 17.1044 16.0019 17.0635C15.9032 17.0227 15.8136 16.9628 15.7381 16.8873L9.00045 10.1486L2.2628 16.8873C2.11034 17.0398 1.90356 17.1254 1.68795 17.1254C1.47234 17.1254 1.26557 17.0398 1.11311 16.8873C0.96065 16.7349 0.875 16.5281 0.875 16.3125C0.875 16.0969 0.96065 15.8901 1.11311 15.7376L7.85178 8.99996L1.11311 2.26231C0.96065 2.10985 0.875 1.90307 0.875 1.68746C0.875 1.47186 0.96065 1.26508 1.11311 1.11262C1.26557 0.960162 1.47234 0.874512 1.68795 0.874512C1.90356 0.874512 2.11034 0.960162 2.2628 1.11262L9.00045 7.85129L15.7381 1.11262C15.8906 0.960162 16.0973 0.874512 16.313 0.874512C16.5286 0.874512 16.7353 0.960162 16.8878 1.11262C17.0403 1.26508 17.1259 1.47186 17.1259 1.68746C17.1259 1.90307 17.0403 2.10985 16.8878 2.26231L10.1491 8.99996L16.8878 15.7376Z"
            fill="#2D2D2B"
          />
        </svg>
      </div>
      <div className={styles["item__left"]}>
        <Link to={`/details/${id}/${title}`} className={styles.item__img}>
          <img src={img} alt="img" />
        </Link>
        <p className={styles.item__title}>
          {lang === "Az" ? titleAz : lang === "Ru" ? titleRu : title}
        </p>
      </div>
      <div className={styles["item__right"]}>
        <div
          style={{ background: `${colorName}` }}
          className={styles["item__color"]}
        ></div>
        <div className={styles["item__count"]}>
          <ProductCount
            price={price}
            productId={productId}
            productCount={count}
            updateProductCount={updateProductCount} // Pass the update function
          />
        </div>
        <h3 className={styles.item__price}>
          {price * count}
          <span className={styles.item__currency}>{currency}</span>
        </h3>
      </div>
    </div>
  );
};
ShoppingCartElement.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  colorName: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  productId: PropTypes.number.isRequired,
  updateProductCount: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default ShoppingCartElement;
