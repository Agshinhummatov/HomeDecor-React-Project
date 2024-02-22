import ButtonPrimary from "../ButtonPrimary";
import React from "react";
import styles from "../Summary/summary.module.css";
import { useBasketCount } from "../../context/BasketCountContext";

const Summary = ({totalPriceForSummary, lang }) => {
  const { basketCount } = useBasketCount();
  return (
    <div className={styles["summary"]}>
      <h2 className={styles["summary__title"]}>
        {lang === "Az" ? "Summativ" : lang === "Ru" ? "Итог" : "Summary"}
      </h2>
      <div className={styles["summary__count"]}>
        <p className={styles["summary__count--title"]}>
          {lang === "Az"
            ? "Məhsul sayı"
            : lang === "Ru"
            ? "Количество товаров"
            : "item count"}
          <span>{basketCount}</span>
        </p>
      </div>
      <div className={styles["summary__total"]}>
        <p className={styles["summary__total--title"]}>
          {lang === "Az"
            ? "Ümumi məbləğ"
            : lang === "Ru"
            ? "Общая сумма"
            : "Total"}
          <span>{totalPriceForSummary}$</span>
        </p>
      </div>
      <ButtonPrimary href="/checkout">
        {lang === "Az"
          ? "Ödənişə keçin"
          : lang === "Ru"
          ? "Перейти к оплате"
          : "Proceed to checkout"}
      </ButtonPrimary>
    </div>
  );
};

export default Summary;
