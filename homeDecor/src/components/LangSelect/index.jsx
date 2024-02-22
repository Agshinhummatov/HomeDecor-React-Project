import i18n from "../../utils/i18n";
import React, { useEffect, useState } from "react";
import styles from "../LangSelect/langselect.module.css";

const LangSelect = ({ open, setLang, lang }) => {
  const [opened, setOpened] = useState(false);
  const languages = [{ title: "Az" }, { title: "Ru" }, { title: "En" }];
  const handleClick = () => {
    setOpened(!opened);
  };
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLang(lang);
    localStorage.setItem("lang", JSON.stringify(lang));
  };

  useEffect(() => {
    const chosenLang = JSON.parse(localStorage.getItem("lang"));
    chosenLang
      ? handleLanguageChange(chosenLang)
      : localStorage.setItem("lang", JSON.stringify("En"));
  }, [lang]);
  return (
    <div
      onClick={handleClick}
      className={`${styles.languages} ${open && styles.mobile}`}
    >
      <div className={styles.languages__list}>
        <div
          className={`${styles.selected__lang} ${open ? "d-none" : "d-block"}`}
        >
          {lang}
        </div>

        <div
          className={`${styles.options} ${open ? styles.mobile : ""} ${
            opened ? "d-block" : "d-none"
          }`}
        >
          {languages?.map((language) => (
            <div
              key={language.title}
              style={{
                display:
                  lang?.toUpperCase() !== language?.title?.toUpperCase()
                    ? "block"
                    : "none",
              }}
              onClick={() => handleLanguageChange(language?.title)}
              className={`${styles["languages__list--item"]}`}
            >
              {language?.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LangSelect;
