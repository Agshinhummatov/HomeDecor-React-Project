import CheckOutContainer from "../components/CheckOutContainer";
// import React from "react";
import SectionTop from "../components/SectionTop";
import { useSetPageTitle } from "../hooks/useSetPageTitle";
import { useLang } from "../context/LangContext";

const CheckOut = () => {
  const { lang } = useLang();
  switch (lang) {
    case "Az":
      useSetPageTitle("Ödəniş");
      break;
    case "Ru":
      useSetPageTitle("Проверить");
      break;
    default:
      useSetPageTitle("Checkout");
  }

  return (
    <main>
      <div className="container">
        <SectionTop
          title={
            lang === "Az" ? "Yoxla" : lang === "Ru" ? "Проверить" : "Checkout"
          }
        />
        <CheckOutContainer lang={lang} />
      </div>
    </main>
  );
};

export default CheckOut;
