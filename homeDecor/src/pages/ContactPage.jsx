import { useSetPageTitle } from "../hooks/useSetPageTitle";
import Contact from "../components/Contact";
import React from "react";
import { useLang } from "../context/LangContext";

const ContactPage = () => {
  const { lang } = useLang();
  switch (lang) {
    case "Az":
      useSetPageTitle("Əlaqə");
      break;
    case "Ru":
      useSetPageTitle("Контакт");
      break;
    default:
      useSetPageTitle("Contact");
  }
  return (
    <main>
      <Contact lang={lang} />
    </main>
  );
};

export default ContactPage;
