import { useSetPageTitle } from "../../hooks/useSetPageTitle";
import React from "react";
import Register from "../../components/Auth/Register";
import { useLang } from "../../context/LangContext";

const RegisterPage = () => {
  const { lang } = useLang();
  switch (lang) {
    case "Az":
      useSetPageTitle("Qeydiyyat");
      break;
    case "Ru":
      useSetPageTitle("Регистр");
      break;
    default:
      useSetPageTitle("Register");
  }
  return (
    <>
      <Register lang={lang} />
    </>
  );
};

export default RegisterPage;
