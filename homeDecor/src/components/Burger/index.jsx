import React from "react";
import styles from "../Burger/burger.module.css";

const Burger = ({ open, setOpen }) => {
  return (
    <button
      className={`${
        open ? styles.burger__btn + " " + "active" : styles.burger__btn
      }`}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div style={{ transform: open ? "rotate(45deg)" : "rotate(0)" }}></div>
      <div
        style={{
          opacity: open ? "0" : "1",
          transform: open ? "translateX(20px)" : "translateX(0)",
        }}
      ></div>
      <div style={{ transform: open ? "rotate(-45deg)" : "rotate(0)" }}></div>
    </button>
  );
};

export default Burger;
