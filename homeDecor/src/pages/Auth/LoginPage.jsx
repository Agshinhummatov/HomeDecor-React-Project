"use client";
import { useSetPageTitle } from "../../hooks/useSetPageTitle";
import Login from "../../components/Auth/Login";
import React from "react";
// import { useLang } from "../../context/LangContext";

const LoginPage = () => {
  // const { lang } = useLang();
  const lang = "Az";
  switch (lang) {
    case "Az":
      useSetPageTitle("Daxil ol");
      break;
    case "Ru":
      useSetPageTitle("Войти");
      break;
    default:
      useSetPageTitle("Login");
  }
  return (
    <>
      <Login lang={lang} />
    </>
  );
};

export default LoginPage;
