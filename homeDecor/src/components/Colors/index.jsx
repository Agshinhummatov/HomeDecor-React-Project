import { useEffect } from "react";
import React, { useState } from "react";
import styles from "../Colors/colors.module.css";

const Colors = ({ colors, title, setColorId, lang }) => {
  const [checked, setChecked] = useState(0);
  const [productColors, setProductColors] = useState([]);

  const getColors = async () => {
    const response = await fetch("http://localhost:3000/colors");
    const res = await response.json();
    const filteredColors = res.filter((c) =>
      colors?.some((pc) => pc.colorId === c.id)
    );
    setProductColors(filteredColors);
  };

  useEffect(() => {
    getColors();
  }, []);
  useEffect(() => {
    setColorId(productColors[0]?.id);
  }, [productColors]);
  return (
    <div className={styles["colors"]}>
      {title && (
        <p className={styles["colors__title"]}>
          <strong>
            {lang === "Az" ? "Rənglər" : lang === "Ru" ? "Цвета" : "Colors"}
          </strong>
        </p>
      )}

      <div className={styles.colors__items}>
        {productColors &&
          productColors.map((color, index) => (
            <div
              key={index}
              style={{
                borderColor:
                  checked === index ? `${color.title}` : "transparent",
              }}
              onClick={() => {
                setChecked(index);
                setColorId(color.id);
              }}
              className={`${styles["colors__item"]} ${
                checked === index ? styles.checked : ""
              }`}
            >
              <span
                style={{ background: `${color.title}` }}
                className={`${styles["colors__item--color"]} `}
              ></span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Colors;
