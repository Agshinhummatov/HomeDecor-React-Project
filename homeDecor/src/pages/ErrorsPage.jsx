import Error from "../components/Error";
import React from "react";
import { useSetPageTitle } from "../hooks/useSetPageTitle";
import { useLang } from "../context/LangContext";

const ErrorsPage = () => {
  const { lang } = useLang();
  switch (lang) {
    case "Az":
      useSetPageTitle("Səhifə tapılmadı");
      break;
    case "Ru":
      useSetPageTitle("Страница не найдена");
      break;
    default:
      useSetPageTitle("Page not found");
  }

  return (
    <main>
      <Error
        code="404"
        status={
          lang === "Az"
            ? "Səhifə tapılmadı"
            : lang === "Ru"
            ? "Страница не найдена"
            : "Page not found"
        }
      />
    </main>
  );
};

export default ErrorsPage;
