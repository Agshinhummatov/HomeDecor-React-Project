import AccountInfo from "../../components/Account/AccountInfo";
import React from "react";
import { useSetPageTitle } from "../../hooks/useSetPageTitle";
import { useLang } from "../../context/LangContext";

const Info = () => {
  const { lang } = useLang();
  switch (lang) {
    case "Az":
      useSetPageTitle("Hesab məlumatları");
      break;
    case "Ru":
      useSetPageTitle("Информация об аккаунте");
      break;
    default:
      useSetPageTitle("Account info");
  }

  return (
    <section style={{ flex: "2" }}>
      <AccountInfo />
    </section>
  );
};

export default Info;
